import {fetchEndpoint} from "./Index.jsx";
import {useNavigate} from "react-router";
import {useState, useEffect} from "react";
import {BackgroundHeader} from "../components/BackgroundHeader.jsx";

export function NewAssessment() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [useNewProgram, setUseNewProgram] = useState(true);

    useEffect(() => {
        // Add tooltip hover functionality
        const tooltip = document.querySelector('.tooltip');
        const tooltipContainer = tooltip?.parentElement;
        
        if (tooltipContainer) {
            tooltipContainer.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
            });
            
            tooltipContainer.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        }
    }, []);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetchEndpoint("/competences", "GET");
                if (response.success) {
                    setCategories(response.data);
                } else {
                    console.error("Failed to fetch categories:", response.error);
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchCategories();
    }, []);

    async function startAssessment() {
        setIsLoading(true);
        const json = await fetchEndpoint("/assessments", "POST", {
            categories: selectedCategories,
            numberOfQuestions,
            useNewProgram
        });
        navigate(`/assessments/${json.id}`);
    }

    function toggleCategory(categoryId) {
        setSelectedCategories(prev => {
            if (prev.includes(categoryId)) {
                return prev.filter(id => id !== categoryId);
            } else {
                return [...prev, categoryId];
            }
        });
    }

    return (
        <BackgroundHeader height="170px" info={<>Préparer le BIA</>}>
            <style>
                {`
                    .tooltip {
                        position: absolute;
                        bottom: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: rgba(0, 0, 0, 0.8);
                        color: white;
                        padding: 8px 12px;
                        border-radius: 4px;
                        font-size: 14px;
                        max-width: 300px;
                        width: max-content;
                        z-index: 1000;
                        display: none;
                        margin-bottom: 8px;
                        white-space: normal;
                        text-align: left;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    }

                    @media (max-width: 768px) {
                        .tooltip {
                            position: fixed;
                            bottom: auto;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 90%;
                            max-width: 320px;
                            margin: 0;
                            text-align: center;
                            padding: 16px;
                        }
                    }
                `}
            </style>
            <div style={{
                padding: "24px"
            }}>
                <h1 style={{
                    marginBottom: "32px",
                    fontSize: "2rem"
                }}>Nouvelle épreuve</h1>

                <div style={{
                    backgroundColor: "rgb(244, 245, 247)",
                    padding: "32px",
                    borderRadius: "8px",
                    marginBottom: "24px"
                }}>
                    <h2 style={{
                        fontSize: "1.5rem",
                        marginBottom: "24px",
                        fontWeight: "600"
                    }}>Configuration</h2>

                    <div style={{
                        marginBottom: "32px"
                    }}>
                        <label style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "rgb(94, 108, 132)",
                            fontWeight: "500"
                        }}>
                            Nombre de questions
                        </label>
                        <div style={{
                            display: "flex",
                            gap: "16px",
                            alignItems: "center"
                        }}>
                            <input
                                type="range"
                                min="5"
                                max="100"
                                value={numberOfQuestions}
                                onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                                style={{
                                    flex: 1,
                                    height: "4px",
                                    borderRadius: "2px",
                                    background: "#CDD1D9",
                                    outline: "none",
                                    WebkitAppearance: "none"
                                }}
                            />
                            <span style={{
                                minWidth: "40px",
                                textAlign: "center",
                                color: "rgb(94, 108, 132)",
                                fontWeight: "500"
                            }}>
                                {numberOfQuestions}
                            </span>
                        </div>
                    </div>

                    <div style={{
                        marginBottom: "32px"
                    }}>
                        <label style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "rgb(94, 108, 132)",
                            fontWeight: "500"
                        }}>
                            Catégories
                        </label>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                            gap: "12px"
                        }}>
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => toggleCategory(category.id)}
                                    style={{
                                        background: selectedCategories.includes(category.id)
                                            ? "var(--primary)"
                                            : "white",
                                        color: selectedCategories.includes(category.id)
                                            ? "white"
                                            : "rgb(94, 108, 132)",
                                        border: "1px solid #CDD1D9",
                                        padding: "12px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        transition: "all 0.2s ease",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            fill: selectedCategories.includes(category.id)
                                                ? "white"
                                                : "rgb(94, 108, 132)",
                                            opacity: selectedCategories.includes(category.id) ? 1 : 0.5
                                        }}
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                    </svg>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                        {formSubmitted && selectedCategories.length === 0 && (
                            <div style={{
                                color: "#DE350B",
                                marginTop: "12px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "14px"
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
                                    width: "16px",
                                    height: "16px",
                                    fill: "currentColor"
                                }}>
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                </svg>
                                Veuillez sélectionner au moins une catégorie
                            </div>
                        )}
                    </div>

                    <div style={{
                        marginBottom: "32px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        position: "relative"
                    }}>
                        <label style={{
                            color: "rgb(94, 108, 132)",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            cursor: "pointer",
                            fontSize: "14px",
                            userSelect: "none"
                        }}>
                            <div style={{
                                position: "relative",
                                width: "20px",
                                height: "20px",
                                border: "2px solid #CDD1D9",
                                borderRadius: "4px",
                                backgroundColor: useNewProgram ? "var(--primary)" : "white",
                                transition: "all 0.2s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <input
                                    type="checkbox"
                                    checked={useNewProgram}
                                    onChange={(e) => setUseNewProgram(e.target.checked)}
                                    style={{
                                        position: "absolute",
                                        opacity: 0,
                                        cursor: "pointer",
                                        height: 0,
                                        width: 0
                                    }}
                                />
                                {useNewProgram && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: "14px",
                                            height: "14px",
                                            fill: "white"
                                        }}
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                    </svg>
                                )}
                            </div>
                            Utiliser uniquement des questions du nouveau programme
                        </label>
                        <div style={{
                            position: "relative",
                            display: "inline-block",
                            marginTop: "2px"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
                                width: "16px",
                                height: "16px",
                                fill: "rgb(94, 108, 132)",
                                cursor: "help"
                            }}>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                            <div className="tooltip">
                                Depuis la réforme de 2015, le programme du BIA a été mis à jour avec de nouvelles thématiques et un référentiel clarifié. Seules les questions issues des examens depuis 2015 sont utilisées, garantissant leur conformité avec le programme actuel.
                            </div>
                        </div>
                    </div>

                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "flex-end"
                    }}>
                        <button
                            style={{
                                background: "rgb(244, 245, 247)",
                                borderColor: "#442D9D",
                                color: "#442D9D",
                            }}
                            onClick={() => navigate("/")}
                        >
                            Annuler
                        </button>
                        <button
                            onClick={() => {
                                setFormSubmitted(true);
                                if (selectedCategories.length > 0) {
                                    startAssessment();
                                }
                            }}
                            disabled={isLoading}
                            style={{
                                opacity: selectedCategories.length === 0 ? 0.5 : 1,
                                cursor: selectedCategories.length === 0 ? "not-allowed" : "pointer"
                            }}
                        >
                            {isLoading ? "Chargement..." : "Commencer l'épreuve"}
                        </button>
                    </div>
                </div>

                <div style={{
                    backgroundColor: "rgb(244, 245, 247)",
                    padding: "32px",
                    borderRadius: "8px"
                }}>
                    <h2 style={{
                        fontSize: "1.5rem",
                        marginBottom: "24px",
                        fontWeight: "600"
                    }}>Informations importantes</h2>

                    <ul style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                        color: "rgb(94, 108, 132)",
                        lineHeight: "1.6"
                    }}>
                        <li style={{
                            display: "flex",
                            gap: "12px",
                            marginBottom: "16px"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
                                width: "24px",
                                height: "24px",
                                fill: "var(--primary)",
                                flexShrink: 0
                            }}>
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <span>L'épreuve dure environ {(() => {
                                const totalMinutes = Math.ceil(numberOfQuestions * 1.5);
                                const hours = Math.floor(totalMinutes / 60);
                                const minutes = totalMinutes % 60;
                                if (hours === 0) {
                                    return `${minutes} minutes`;
                                }
                                return `${hours} heure${hours > 1 ? 's' : ''} ${minutes > 0 ? `${minutes} minutes` : ''}`;
                            })()}</span>
                        </li>
                        <li style={{
                            display: "flex",
                            gap: "12px",
                            marginBottom: "16px"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
                                width: "24px",
                                height: "24px",
                                fill: "var(--primary)",
                                flexShrink: 0
                            }}>
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <span>Votre progression est sauvegardée automatiquement</span>
                        </li>
                        <li style={{
                            display: "flex",
                            gap: "12px",
                            marginBottom: "16px"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
                                width: "24px",
                                height: "24px",
                                fill: "var(--primary)",
                                flexShrink: 0
                            }}>
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <span>Vous pouvez quitter et reprendre l'épreuve à tout moment</span>
                        </li>
                    </ul>
                </div>
            </div>
        </BackgroundHeader>
    );
}