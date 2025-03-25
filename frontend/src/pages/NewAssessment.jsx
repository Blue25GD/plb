import {BackgroundHeader, fetchEndpoint} from "./Index.jsx";
import {useNavigate} from "react-router";
import {useState, useEffect} from "react";

export function NewAssessment() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [formSubmitted, setFormSubmitted] = useState(false);

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
            numberOfQuestions
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
                                            ? "rgb(28, 130, 93)"
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
                                fill: "rgb(28, 130, 93)",
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
                                fill: "rgb(28, 130, 93)",
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
                                fill: "rgb(28, 130, 93)",
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