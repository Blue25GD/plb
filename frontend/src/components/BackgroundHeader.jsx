import '../styles/BackgroundHeader.css'
import {useState} from "react";
import {fetchEndpoint} from "../pages/Index.jsx";

export function BackgroundHeader(props) {
    const {height} = props;

    const {showReportButton = false} = props;

    const [isShowingReportForm, setIsShowingReportForm] = useState(false);
    const [isShowingReportSuccess, setIsShowingReportSuccess] = useState(false);

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
            {showReportButton && (
                <div className="report-button-container">
                    <button className="btn flag-btn" onClick={() => {
                        setIsShowingReportForm(!isShowingReportForm);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="flag_plain" viewBox="0 0 24 24" style={{
                            width: "16px",
                            height: "16px",
                            fill: "rgb(37, 56, 88)"
                        }}>
                            <path
                                d="M7.072 14.203v5.863q0 .478-.33.808a1.1 1.1 0 0 1-.808.33 1.1 1.1 0 0 1-.808-.33 1.1 1.1 0 0 1-.33-.808V4.934q0-.478.33-.808t.808-.33h7.295q.403 0 .715.259.311.257.397.655l.227 1.087h4.498q.478 0 .808.329.33.33.33.808v8.132q0 .478-.33.808a1.1 1.1 0 0 1-.808.33H13.77a1.1 1.1 0 0 1-.715-.259 1.15 1.15 0 0 1-.397-.655l-.227-1.087h-5.36Z"/>
                        </svg>
                        <span style={{
                            textDecoration: "underline",
                        }}>Signaler un problème avec la question</span>
                    </button>
                    {isShowingReportForm && (
                        <div className="report-form">
                            {isShowingReportSuccess ? (
                                <div>
                                    <h3>Votre signalement a bien été pris en compte</h3>
                                    <p>Merci pour votre contribution à l'amélioration de notre service.</p>
                                </div>
                            ) : (
                                <>
                            <textarea className="report-textarea" placeholder={
                                "Décrivez votre problème ou votre suggestion (facultatif)"
                            }>
                            </textarea>

                                    <button className="report-form-submit" onClick={async () => {
                                        const response = await fetchEndpoint("/reports", "POST", {
                                            challengeId: props.challengeId,
                                            note: document.querySelector(".report-textarea").value
                                        })
                                        setIsShowingReportSuccess(true);
                                    }}>Envoyer
                                    </button>

                                    <span className="report-form-notice">Soyez attentif à ce que vous écrivez dans cette zone : restez clair, précis et factuel.<br/>
                                Ne saisissez aucune information personnelle sensible, telle que des données de santé, opinions politiques, croyances religieuses, affiliations syndicales, origines ethniques, ou toute information relative à des condamnations ou sanctions.<br/>
                                <br/>
                                Les informations recueillies sont traitées uniquement pour analyser et traiter votre signalement. Conformément au RGPD, vous disposez de droits sur vos données (accès, rectification, suppression), que vous pouvez exercer en nous contactant à : <a
                                            href="mailto:alexandru@popescu.is">alexandru@popescu.is</a>.<br/>
                                    Tout abus de ce formulaire pourra être sanctionné par une exclusion définitive de notre service.
                                    </span>
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}
            <div style={{
                width: '100%',
                height: '50px',
                minHeight: '50px',
                display: 'block',
            }}>

            </div>
        </div>
    </div>;
}