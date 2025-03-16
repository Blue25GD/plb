import {BackgroundHeader, fetchEndpoint} from "./Index.jsx";
import macaronCertif from "../../public/macaron-certif.svg";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import interwind from "../assets/interwind.gif";

export function QuestionPreviewPopup(props) {
    const {challenge} = props;

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "40px",
            paddingBottom: "40px",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(37, 56, 88, .5)",
            transition: "all .3s ease-in-out",
            zIndex: "100",
            overflowY: "scroll",
        }}>
            <div style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "100",
            }} onClick={() => {
                props.setPreviewChallenge(null);
            }}></div>

            <div style={{
                backgroundColor: "#F4F5F7",
                width: "80%",
                maxWidth: "988px",
                overflowY: "auto",
                borderRadius: "6px",
                boxShadow: "0 6px 12px rgba(7, 20, 46, .08)",
                zIndex: "101",
            }}>
                <div style={{
                    padding: "24px",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <h3 style={{
                        margin: "0",
                    }}>Vous avez la mauvaise réponse !</h3>
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
                        props.setPreviewChallenge(null);
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
                    display: "flex",
                    gap: "24px",
                    flexDirection: "column",
                }}>
                    <div style={{
                        padding: "16px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 2px 5px 0 rgba(0,0,0,.05)",
                    }}>
                        {challenge.question}
                    </div>
                    {challenge.image_url && (
                        <div style={{
                            padding: "16px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            boxShadow: "0 2px 5px 0 rgba(0,0,0,.05)",
                        }}>
                            <img src={`/images/${challenge.image_url}`} alt="Question" style={{
                                maxWidth: "100%",
                            }}/>
                        </div>
                    )}

                    <div style={{
                        padding: "16px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 2px 5px 0 rgba(0,0,0,.05)",
                        fontSize: "16px",
                    }}>
                        {challenge.proposals.split("\n").map((proposal, index) => (
                            <div key={index} style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: index === challenge.proposals.split("\n").length - 1 ? 0 : "4px",
                            }}>
                                <input type="radio" id={index} name="proposal" style={{
                                    width: "16px",
                                    height: "16px",
                                    margin: 0,
                                }} disabled checked={parseInt(challenge.solution) === index + 1}/>
                                <label style={{
                                    marginLeft: "8px",
                                }} htmlFor={index}>{proposal}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Results() {
    const {assessmentId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState(null);

    const [previewChallenge, setPreviewChallenge] = useState(null);

    const navigate = useNavigate();

    async function setup() {
        const results = await fetchEndpoint(`/assessments/${assessmentId}/results`, "GET");
        setResults(results.results);
        setIsLoading(false);
    }

    useEffect(() => {
        setup().then();
    }, []);

    return (
        (isLoading || !results) ? (
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
            <div>
                {previewChallenge &&
                    <QuestionPreviewPopup challenge={previewChallenge} setPreviewChallenge={setPreviewChallenge}/>}
                <BackgroundHeader height="170px" info={
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                    }}>
                        <span>Préparer le BIA</span>
                        <button className="btn" style={{
                            fontSize: "18px",
                            appearance: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            color: "white",
                            cursor: "pointer",
                            fontFamily: "roboto",
                            display: "flex",
                            gap: "8px",
                            alignItems: "center"
                        }} onClick={async () => {
                            navigate("/");
                        }}>
                            <span>Retour au menu principal</span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="logout" viewBox="0 0 24 25" style={{
                                width: "24px",
                                height: "24px",
                                fill: "white"
                            }}>
                                <path
                                    d="M5.072 21.73a2.2 2.2 0 0 1-1.61-.665 2.2 2.2 0 0 1-.665-1.61V5.6q0-.944.665-1.61.665-.665 1.61-.665h5.838q.48 0 .809.33t.329.808-.33.808q-.328.33-.808.33H5.072v13.856h5.838q.48 0 .809.329.329.33.329.808 0 .48-.33.808-.328.33-.808.33H5.072Zm11.792-8.065H10.09q-.48 0-.809-.33a1.1 1.1 0 0 1-.329-.808q0-.478.33-.808.328-.33.808-.329h6.774l-1.737-1.738a1.06 1.06 0 0 1-.317-.776q0-.46.317-.796.316-.342.792-.351.476-.01.818.332l3.67 3.67a1.1 1.1 0 0 1 .337.796 1.1 1.1 0 0 1-.337.796l-3.67 3.67a1.06 1.06 0 0 1-.805.333 1.12 1.12 0 0 1-.805-.351 1.1 1.1 0 0 1-.308-.806 1.1 1.1 0 0 1 .327-.786z"/>
                            </svg>
                        </button>
                    </div>
                }>
                    <div style={{padding: "40px"}}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "45px",
                            marginBottom: "40px",
                        }}>
                            <div style={{
                                backgroundImage: `url('/macaron-certif.svg')`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                width: "180px",
                                height: "180px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}>
                                <h1 style={{
                                    margin: "0",
                                }}>{results.correctChallenges}</h1>
                                <span style={{
                                    borderTop: "1px solid gray",
                                }}>{results.totalChallenges}</span>
                            </div>
                            <h1 style={{
                                margin: "0",
                            }}>Test terminé!</h1>
                        </div>
                        <hr style={{
                            margin: "0",
                            border: "0",
                            borderTop: "2px solid #e9ecef",
                        }}/>
                        <h2>Résultats:</h2>
                        <h3>Questions fausses</h3>
                        <ul style={{
                            listStyleType: "none",
                            padding: "0",
                        }}>
                            {results.incorrectChallenges.map(challenge => (
                                <li key={challenge.id} style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "12px",
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    marginBottom: "8px",
                                }}>
                                    <span>{challenge.question}</span>
                                    <button onClick={() => {
                                        setPreviewChallenge(challenge);
                                    }}>Aperçu
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </BackgroundHeader>
            </div>
        )
    )
}