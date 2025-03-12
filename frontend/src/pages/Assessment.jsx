import {BackgroundHeader, fetchEndpoint} from "./Index.jsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import interwind from "../assets/interwind.gif";
import {useNavigate} from "react-router";

async function getCurrentAssessment(id) {
    return await fetchEndpoint(`/assessments/${id}`, "GET");
}

function HeaderInfo({assessmentId, progress}) {
    const renderInfo = (label, value, valueStyle) => (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", fontSize: "18px"}}>
            <span style={{fontWeight: "400", opacity: label === "ÉPREUVE N°" ? "0.5" : "1"}}>{label}</span>
            <span style={{fontWeight: "bold", fontSize: valueStyle}}>{value}</span>
        </div>
    );

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            height: "100%",
            width: "100%",
            paddingTop: "24px",
            paddingBottom: "12px",
        }}>
            <div><span>Préparer le BIA</span></div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                height: "100%",
            }}>
                {renderInfo("ÉPREUVE N°", assessmentId, "24px")}
                {renderInfo("QUESTION", `${progress.answeredChallenges}/${progress.totalChallenges}`, "32px")}
            </div>
        </div>
    );
}


export function Assessment() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const {assessmentId} = useParams();

    const [currentAssessment, setCurrentAssessment] = useState(null);
    const [options, setOptions] = useState(null);
    const [question, setQuestion] = useState(null);
    const [isBadAnswerError, setIsBadAnswerError] = useState(false);
    const [imageUrl, setImageUrl] = useState(true);

    const [progress, setProgress] = useState({
        answeredChallenges: 0,
        totalChallenges: 0
    });

    async function setup() {
        document.querySelectorAll('input[name="answer"]').forEach(radio => radio.checked = false);

        const currentAssessment = await getCurrentAssessment(assessmentId)

        setCurrentAssessment(currentAssessment);

        const optionsSplit = currentAssessment.currentChallenge.proposals.split("\n").map((proposal, index) => ({
            value: index + 1,
            label: proposal
        }))

        setOptions(optionsSplit)

        setQuestion(currentAssessment.currentChallenge.question)

        setProgress(currentAssessment.progress)

        const image_url = currentAssessment.currentChallenge.image_url;
        if (image_url) {
            setImageUrl(image_url);
        } else {
            setImageUrl(null);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        setup().then()
    }, [])

    function submitAnswer() {
        let answer = document.querySelector('input[name="answer"]:checked')?.value;
        if (!answer) return setIsBadAnswerError(true);
        setIsLoading(true);
        setIsBadAnswerError(false);

        fetchEndpoint(`/assessments/${assessmentId}`, "POST", {answer})
            .then((r) => {
                if (r.is_done) {
                    navigate(`/results/${assessmentId}`)
                } else {
                    setup().then()
                }
            });
    }

    function skipChallenge() {
        setIsLoading(true);
        setIsBadAnswerError(false);
        fetchEndpoint(`/assessments/${assessmentId}`, "POST", {answer: "#ABAND#"})
            .then((r) => {
                if (r.is_done) {
                    navigate(`/results/${assessmentId}`)
                } else {
                    setup().then()
                }
            });
    }


    return (
        (isLoading || !currentAssessment) ? (
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
            <BackgroundHeader height="270px" info={<HeaderInfo assessmentId={assessmentId} progress={progress}/>}>
                <div style={{padding: "8px"}}>
                    <div style={{
                        width: "100%",
                        padding: "16px",
                        whiteSpace: "pre-line",
                        wordWrap: "break-word"
                    }}>
                        {question}
                    </div>

                    {imageUrl && (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginBottom: "16px"
                        }}>
                            <img src={`/images/${imageUrl}`} alt="" style={{
                                maxWidth: "100%",
                                borderRadius: "8px",
                                marginBottom: "8px"
                            }}/>
                        </div>
                    )}

                    <div style={{
                        backgroundColor: "rgb(244, 245, 247)",
                        width: "100%",
                        padding: "16px",
                        borderRadius: "8px",
                        marginBottom: "8px"
                    }}>
                        <legend style={{
                            color: "rgb(94, 108, 132)",
                            fontSize: "14px",
                            marginBottom: "16px"
                        }}>Sélectionnez une seule réponse.
                        </legend>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}>
                            {options && options.map(option => (
                                <label key={option.value} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    cursor: "pointer"
                                }}>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={option.value}
                                        style={{width: "16px", height: "16px", margin: "0"}}
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {isBadAnswerError && (
                        <div style={{
                            backgroundColor: "rgb(251, 236, 236)",
                            width: "100%",
                            padding: "12px 16px",
                            borderRadius: "4px",
                            border: "1px solid rgb(149, 46, 46)",
                            marginBottom: "8px",
                            display: "flex",
                            gap: "8px",
                            alignItems: "center"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="errorCircle_plain" viewBox="0 0 24 24" style={{
                                width: "24px",
                                height: "24px",
                                fill: "rgb(149, 46, 46)"
                            }}>
                                <path
                                    d="M11.999 17.203q.497 0 .836-.337t.338-.835a1.15 1.15 0 0 0-.337-.84 1.13 1.13 0 0 0-.835-.34q-.497 0-.836.34a1.15 1.15 0 0 0-.338.84q0 .498.337.835.336.337.835.337M12 13.012q.48 0 .808-.33.33-.328.33-.808V8.012a1.1 1.1 0 0 0-.33-.808 1.1 1.1 0 0 0-.808-.33 1.1 1.1 0 0 0-.808.33 1.1 1.1 0 0 0-.33.808v3.862q0 .48.33.808.33.33.808.33m0 9.191a9.95 9.95 0 0 1-3.983-.803 10.3 10.3 0 0 1-3.238-2.179 10.3 10.3 0 0 1-2.18-3.238A9.95 9.95 0 0 1 1.798 12a9.9 9.9 0 0 1 .803-3.983A10.3 10.3 0 0 1 4.78 4.779a10.3 10.3 0 0 1 3.238-2.18A9.95 9.95 0 0 1 12 1.798a9.9 9.9 0 0 1 3.983.803 10.3 10.3 0 0 1 3.238 2.179 10.3 10.3 0 0 1 2.18 3.238A9.95 9.95 0 0 1 22.202 12a9.95 9.95 0 0 1-.803 3.983 10.3 10.3 0 0 1-2.179 3.238 10.3 10.3 0 0 1-3.238 2.18 9.95 9.95 0 0 1-3.983.802Z"/>
                            </svg>
                            <span style={{
                                color: "rgb(149, 46, 46)",
                                fontSize: "14px",
                            }}>Pour valider, sélectionnez une réponse. Sinon, passez.</span>
                        </div>
                    )}

                    <div style={{
                        backgroundColor: "rgb(244, 245, 247)",
                        width: "100%",
                        padding: "16px",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "16px"
                    }}>
                        <button style={{
                            background: "rgb(244, 245, 247)",
                            borderColor: "#442D9D",
                            color: "#442D9D",
                        }} onClick={skipChallenge}>
                            Je passe
                        </button>
                        <button onClick={submitAnswer}>Je valide</button>
                    </div>
                </div>
            </BackgroundHeader>
        )
    );
}
