import '../app.css'
import {config} from "../config.js";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import scorecardCongrats from "../assets/scorecard-congrats.svg";
import {Modal} from '../components/Modal';
import {LoadingSpinner} from '../components/LoadingSpinner';
import {BackgroundHeader} from "../components/BackgroundHeader.jsx";

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

function QuitPopup(props) {
    const navigate = useNavigate();
    return (
        <Modal isOpen={props.isOpen} onClose={() => props.setIsOpen(false)}>
            <div style={{
                padding: "24px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <h2 style={{margin: 0}}>Quitter l'épreuve</h2>
                <button onClick={() => props.setIsOpen(false)} style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
                        width: "24px",
                        height: "24px",
                        fill: "#5E6C84"
                    }}>
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </button>
            </div>
            <div style={{padding: "0 24px 24px 24px"}}>
                <p>Votre code d'épreuve est : <strong>{props.savedCode}</strong></p>
                <div style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "flex-end",
                    marginTop: "24px"
                }}>
                    <button onClick={() => props.setIsOpen(false)} style={{
                        padding: "8px 12px",
                        border: "none",
                        borderRadius: "3px",
                        backgroundColor: "#EBECF0",
                        cursor: "pointer"
                    }}>Annuler
                    </button>
                    <button onClick={() => navigate("/")} style={{
                        padding: "8px 12px",
                        border: "none",
                        borderRadius: "3px",
                        backgroundColor: "#0052CC",
                        color: "white",
                        cursor: "pointer"
                    }}>Quitter
                    </button>
                </div>
            </div>
        </Modal>
    );
}

function DeletePopup(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={() => props.setIsOpen(false)}>
            <div style={{
                padding: "24px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <h3 style={{
                    margin: "0",
                }}>Supprimer l'épreuve</h3>
                <button style={{
                    border: "none",
                    cursor: "pointer",
                    fontSize: "24px",
                    padding: "0",
                    backgroundColor: "#F4F5F7",
                    aspectRatio: "1 / 1",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }} onClick={() => {
                    props.setIsOpen(false);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 24 24" style={{
                        width: "18px",
                        height: "18px",
                        fill: "#253859",
                    }}>
                        <path
                            d="m12 13.591-4.804 4.805a1.08 1.08 0 0 1-.796.316A1.08 1.08 0 0 1 5.287 17.6q0-.479.317-.796L10.41 12 5.604 7.196a1.08 1.08 0 0 1-.317-.796A1.08 1.08 0 0 1 6.4 5.288q.479 0 .796.316L12 10.41l4.804-4.805a1.08 1.08 0 0 1 .796-.316A1.08 1.08 0 0 1 18.712 6.4q0 .479-.316.796L13.59 12l4.805 4.804q.316.318.316.796a1.08 1.08 0 0 1-1.112 1.112 1.08 1.08 0 0 1-.796-.316z"/>
                    </svg>
                </button>
            </div>
            <div style={{
                padding: "24px",
                color: "#253859",
            }}>
                Êtes-vous sûr de vouloir supprimer cette épreuve ? Cette action est irréversible.
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 24px 24px 24px",
                gap: "16px",
            }}>
                <button style={{
                    backgroundColor: "#F4F5F7",
                    borderColor: "rgb(69, 45, 157)",
                    color: "rgb(69, 45, 157)",
                }} onClick={() => {
                    props.setIsOpen(false);
                }}>
                    Annuler
                </button>
                <button style={{
                    backgroundColor: "#FF4D4F",
                    borderColor: "#FF4D4F",
                    color: "white",
                }} onClick={() => {
                    props.onConfirm();
                    props.setIsOpen(false);
                }}>
                    Supprimer
                </button>
            </div>
        </Modal>
    );
}

function App() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [assessments, setAssessments] = useState([]);
    const [deletePopupOpen, setDeletePopupOpen] = useState(false);
    const [assessmentToDelete, setAssessmentToDelete] = useState(null);

    useEffect(() => {
        async function fetchAssessments() {
            setIsLoading(true);
            await login()

            const json = await fetchEndpoint("/assessments", "GET", {});
            setAssessments(json.results.reverse());
        }

        fetchAssessments().then(() => setIsLoading(false));
    }, []);

    async function deleteAssessment(assessmentId) {
        setIsLoading(true);
        await fetchEndpoint(`/assessments/${assessmentId}`, "DELETE", {});
        setAssessments(assessments.filter(a => a.id !== assessmentId));
        setIsLoading(false);
    }

    function handleDeleteClick(assessmentId) {
        setAssessmentToDelete(assessmentId);
        setDeletePopupOpen(true);
    }

    async function createAssessmentAndStart() {
        const json = await fetchEndpoint("/assessments", "POST", {});

        navigate(`/assessments/${json.id}`)
    }


    async function startAssessment() {
        setIsLoading(true);
        await login();
        navigate("/new");
    }

    return (
        <>
            {(isLoading) ? (
                <LoadingSpinner/>
            ) : (
                <>
                    <DeletePopup
                        isOpen={deletePopupOpen}
                        setIsOpen={setDeletePopupOpen}
                        onConfirm={() => assessmentToDelete && deleteAssessment(assessmentToDelete)}
                    />
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
                                        }} style={{
                                            position: "relative",
                                        }} onMouseEnter={(e) => {
                                            const deleteButton = e.currentTarget.querySelector('button[title="Supprimer l\'épreuve"]');
                                            if (deleteButton) {
                                                deleteButton.style.opacity = "1";
                                            }
                                        }} onMouseLeave={(e) => {
                                            const deleteButton = e.currentTarget.querySelector('button[title="Supprimer l\'épreuve"]');
                                            if (deleteButton) {
                                                deleteButton.style.opacity = "0";
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
                                                                {assessment.progress.answeredChallenges + 1}
                                                            </h1>
                                                            <span style={{
                                                                color: "#5E6C84",
                                                                fontSize: "0.9rem",
                                                            }}>
                                                            {assessment.progress.totalChallenges}
                                                        </span>
                                                        </div>
                                                        <div style={{
                                                            background: `conic-gradient(var(--primary-2) ${((assessment.progress.answeredChallenges + 1) / assessment.progress.totalChallenges) * 100}%, 0, #CDD1D9 ${(assessment.progress.answeredChallenges / assessment.progress.totalChallenges) * 100}%)`,
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
                                                <button
                                                    style={{
                                                        position: "absolute",
                                                        top: "10px",
                                                        right: "10px",
                                                        width: "36px",
                                                        height: "36px",
                                                        padding: "0",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        background: "#FF4D4F",
                                                        border: "none",
                                                        borderRadius: "50%",
                                                        cursor: "pointer",
                                                        transition: "all 0.2s cubic-bezier(0.265, 0.075, 0.025, 0.99)",
                                                        opacity: "0",
                                                        transform: "scale(0.8)",
                                                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = "scale(1.1)";
                                                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = "scale(0.8)";
                                                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";
                                                    }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteClick(assessment.id);
                                                    }}
                                                    title="Supprimer l'épreuve"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        fill: "#fff"
                                                    }}>
                                                        <path
                                                            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                                    </svg>
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
                </>
            )}
        </>
    )
}

export default App
