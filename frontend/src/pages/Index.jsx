import '../app.css'
import {config} from "../config.js";
import {useNavigate} from "react-router";
import interwind from "../assets/interwind.gif";
import {useState, useEffect} from "react";
import scorecardCongrats from "../assets/scorecard-congrats.svg";

export function BackgroundHeader(props) {
    const {height} = props;

    return <div className="background-header">
        <div className="background-header-background" style={{
            height: height
        }}>
            <div className="background-header-info" style={{
                minHeight: `calc(${height} - 50px)`
            }}>
                {props.info}
            </div>
            <div className="background-header-content">
                {props.children}
            </div>
        </div>
    </div>;
}

export async function fetchEndpoint(endpoint, method, body = {}) {
    const response = await fetch(config.api_url + endpoint, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },
        body: method === "GET" ? null : JSON.stringify(body)
    })

    if (response.status === 401) {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return await response.json();
}

async function login() {
    if (localStorage.getItem("token")) {
        return true
    }

    const json = await fetchEndpoint("/sessions", "POST", {});
    const token = json.token

    localStorage.setItem("token", token)

    return false
}


function App() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [assessments, setAssessments] = useState([]);

    useEffect(() => {
        async function fetchAssessments() {
            setIsLoading(true);
            await login()

            const json = await fetchEndpoint("/assessments", "GET", {});
            setAssessments(json.results.reverse());
        }

        fetchAssessments().then(() => setIsLoading(false));
    }, []);

    async function createAssessmentAndStart() {
        const json = await fetchEndpoint("/assessments", "POST", {});

        navigate(`/assessments/${json.id}`)
    }


    async function startAssessment() {
        setIsLoading(true);
        await login()

        await createAssessmentAndStart();
    }

    return (
        <>
            {(isLoading) ? (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100%",
                }}>
                    <img src={interwind} alt="En cours de chargement..."/>
                </div>
            ) : (
                <BackgroundHeader height={"170px"} info={<>Préparer le BIA</>}>
                    <div style={{
                        padding: "24px"
                    }}>
                        <h1 style={{}}>Bienvenue!</h1>
                        <h2 style={{
                            fontWeight: "400",
                            marginBottom: "48px",
                        }}>Selectionnez une épreuve pour commencer:</h2>
                        <ul style={{
                            listStyle: "none",
                            padding: "0",
                            margin: "0",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(min(13.5rem, 100%), 1fr))",
                            gap: "24px"
                        }}>
                            {assessments.map((assessment) => (
                                <li key={assessment.id}>
                                    <article className="article-card" onClick={() => {
                                        if (assessment.progress.answeredChallenges === assessment.progress.totalChallenges) {
                                            navigate(`/results/${assessment.id}`)
                                        } else {
                                            navigate(`/assessments/${assessment.id}`)
                                        }
                                    }}>
                                        <div style={{
                                            zIndex: "2",
                                            position: "relative",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            paddingTop: "10px",
                                            height: "100%",
                                            width: "100%",
                                        }}>
                                            <span style={{
                                                fontSize: "0.9rem",
                                                color: "#fff",
                                                fontWeight: "500",
                                                opacity: "0.8",
                                                textTransform: "uppercase",
                                            }}>
                                                N°{assessment.id} - {new Date(assessment.date).toLocaleDateString()}
                                            </span>
                                            <h2 style={{
                                                margin: "0",
                                                color: "#fff",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                                marginTop: "10px",
                                            }}>
                                                {assessment.progress.answeredChallenges === assessment.progress.totalChallenges ? "Terminé" : "En cours"}
                                            </h2>

                                            {assessment.progress.answeredChallenges === assessment.progress.totalChallenges ? (
                                                <div className="progress-ring" style={{
                                                    background: `url(${scorecardCongrats})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    // borderRadius: "50%",
                                                    width: "140px",
                                                    height: "140px",
                                                    marginTop: "50px",
                                                    transition: "all 0.2s cubic-bezier(0.265, 0.075, 0.025, 0.99)",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    flexDirection: "column",
                                                }}>
                                                    <h1 style={{
                                                        color: "#fff",
                                                        borderBottom: "2px solid #fff",
                                                        margin: 0,
                                                    }}>{assessment.progress.correctChallenges}</h1>
                                                    <span style={{
                                                        color: "#fff",
                                                        fontWeight: "500",
                                                    }}>{assessment.progress.totalChallenges}</span>
                                                </div>
                                            ) : (
                                                <div className="progress-ring" style={{
                                                    background: "#fff",
                                                    borderRadius: "50%",
                                                    width: "120px",
                                                    height: "120px",
                                                    marginTop: "60px",
                                                    transition: "all 0.2s cubic-bezier(0.265, 0.075, 0.025, 0.99)",
                                                }}>
                                                    <div style={{
                                                        background: "#fff",
                                                        borderRadius: "50%",
                                                        width: "108px",
                                                        height: "108px",
                                                        zIndex: "3",
                                                        position: "absolute",
                                                        marginTop: "6px",
                                                        marginLeft: "6px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        flexDirection: "column",
                                                    }}>
                                                        <h1 style={{
                                                            fontSize: "2.25rem",
                                                            fontWeight: "700",
                                                            marginTop: "0",
                                                            borderBottom: "1px solid #CDD1D9",
                                                            marginBottom: "4px",
                                                        }}>
                                                            {assessment.progress.answeredChallenges}
                                                        </h1>
                                                        <span style={{
                                                            color: "#5E6C84",
                                                            fontSize: "0.9rem",
                                                        }}>
                                                        {assessment.progress.totalChallenges}
                                                    </span>
                                                    </div>
                                                    <div style={{
                                                        background: `conic-gradient(#51D987 ${(assessment.progress.answeredChallenges / assessment.progress.totalChallenges) * 100}%, 0, #CDD1D9 ${(assessment.progress.answeredChallenges / assessment.progress.totalChallenges) * 100}%)`,
                                                        width: "120px",
                                                        height: "120px",
                                                        zIndex: "2",
                                                        position: "absolute",
                                                        borderRadius: "50%",
                                                    }}></div>
                                                </div>
                                            )}


                                            <button style={{
                                                position: "absolute",
                                                bottom: "-46px",
                                                transition: "all 0.2s cubic-bezier(0.265, 0.075, 0.025, 0.99)",
                                            }}>
                                                {assessment.progress.answeredChallenges === assessment.progress.totalChallenges ? "Voir les résultats" : "Continuer"}
                                            </button>
                                        </div>
                                    </article>
                                </li>
                            ))}
                            <li key="new">
                                <article className="article-card article-card-simple" onClick={startAssessment}>
                                    <div className="progress-ring" style={{
                                        background: "#fff",
                                        borderRadius: "50%",
                                        width: "120px",
                                        height: "120px",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        transition: "all 0.2s cubic-bezier(0.265, 0.075, 0.025, 0.99)",
                                        zIndex: "2",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "1px solid #CDD1D9",
                                    }}>
                                        <h1 style={{
                                            fontSize: "4rem",
                                            fontWeight: "700",
                                        }}>+</h1>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </BackgroundHeader>
            )}
        </>
    )
}

export default App
