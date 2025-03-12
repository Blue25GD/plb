import {BackgroundHeader, fetchEndpoint} from "./Index.jsx";
import macaronCertif from "../../public/macaron-certif.svg";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import interwind from "../assets/interwind.gif";

export function Results() {
    const {assessmentId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState(null);

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
                <BackgroundHeader height="170px" info={<>Préparer le BIA</>}>
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
                                    <button>Aperçu</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </BackgroundHeader>
            </div>
        )
    )
}