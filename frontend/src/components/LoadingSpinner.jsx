import React from 'react';
import interwind from "../assets/interwind.gif";

export function LoadingSpinner() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
        }}>
            <img src={interwind} alt="En cours de chargement..."/>
        </div>
    );
} 