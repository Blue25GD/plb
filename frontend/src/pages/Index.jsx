import '../App.css'
import {config} from "../config.js";
import {useNavigate} from "react-router";

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

    return await response.json();
}

async function login() {
    const json = await fetchEndpoint("/sessions", "POST", {});
    const token = json.token

    localStorage.setItem("token", token)

    return token
}


function App() {
    let navigate = useNavigate();

    async function createAssessmentAndStart() {
        const json = await fetchEndpoint("/assessments", "POST", {});

        navigate(`/assessments/${json.id}`)
    }

    async function startAssessment() {
        await login()

        await createAssessmentAndStart();
    }

    return (
        <>
            <BackgroundHeader height={"170px"} info={<>Préparer le BIA</>}>
                <div style={{
                    padding: "24px"
                }}>
                    <h2 style={{
                        margin: "0",
                    }}>Bienvenue!</h2>
                    <p>Selectionnez un mode pour commencer:</p>
                    <button onClick={startAssessment}>
                        Commencer une nouvelle épreuve blanche
                    </button>
                </div>
            </BackgroundHeader>
        </>
    )
}

export default App
