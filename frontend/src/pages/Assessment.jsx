import {BackgroundHeader} from "./Index.jsx";
import {useParams} from "react-router";

function HeaderInfo({assessmentId}) {
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
            <div><span>Preparer le BIA</span></div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                height: "100%",
            }}>
                {renderInfo("ÉPREUVE N°", assessmentId, "24px")}
                {renderInfo("QUESTION", "1/100", "32px")}
            </div>
        </div>
    );
}


export function Assessment() {
    const {assessmentId} = useParams();

    const options = [
        {value: 1, label: "iOS"},
        {value: 2, label: "BlackBerry OS"},
        {value: 3, label: "Windows Phone"},
        {value: 4, label: "Android"}
    ];

    return (
        <BackgroundHeader height="270px" info={<HeaderInfo assessmentId={assessmentId}/>}>
            <div style={{padding: "8px"}}>
                <div style={{
                    width: "100%",
                    padding: "16px",
                    whiteSpace: "pre-line",
                    wordWrap: "break-word"
                }}>
                    De quel système d'exploitation sont équipés majoritairement les smartphones ?
                </div>

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
                        {options.map(option => (
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
                    }}>
                        Je passe
                    </button>
                    <button>Je valide</button>
                </div>
            </div>
        </BackgroundHeader>
    );
}
