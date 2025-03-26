import {fetchEndpoint} from "./Index.jsx";
import macaronCertif from "../../public/macaron-certif.svg";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {Modal} from '../components/Modal';
import {LoadingSpinner} from '../components/LoadingSpinner';
import interwind from "../assets/interwind.gif";
import {BackgroundHeader} from "../components/BackgroundHeader.jsx";

export function QuestionPreviewPopup(props) {
    const {challenge} = props;

    return (
        <Modal isOpen={true} onClose={() => props.setPreviewChallenge(null)} maxWidth="988px">
            <div style={{
                padding: "24px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <h2 style={{margin: 0}}>Corrigé</h2>
                <button onClick={() => props.setPreviewChallenge(null)} style={{
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
            <div style={{padding: "24px", display: "flex", flexDirection: "column", gap: "24px"}}>
                <div style={{
                    padding: "16px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px 0 rgba(0,0,0,.05)",
                }} dangerouslySetInnerHTML={{__html: challenge.question}}>
                </div>
                {challenge.image_url && (
                    <div style={{
                        padding: "16px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 2px 5px 0 rgba(0,0,0,.05)",
                        textAlign: "center",
                    }}>
                        {challenge.image_url.startsWith("<img") ? (
                            <div dangerouslySetInnerHTML={{__html: challenge.image_url}}/>
                        ) : (
                            <img src={`/images/${challenge.image_url}`} alt="" style={{
                                maxWidth: "100%",
                                borderRadius: "8px",
                                marginBottom: "8px"
                            }}/>
                        )}
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
                                textDecoration: parseInt(challenge.answerGiven) === index + 1 ? "line-through" : "none",
                                fontWeight: parseInt(challenge.solution) === index + 1 ? "bold" : "normal",
                                color: parseInt(challenge.solution) === index + 1 ? "green" : "black",
                            }} htmlFor={index} dangerouslySetInnerHTML={{__html: proposal}}></label>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
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
            <LoadingSpinner/>
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
                        <h3>Réponses fausses</h3>
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