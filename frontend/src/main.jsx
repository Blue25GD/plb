import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router";
import Index from "./pages/Index";
import {Assessment} from "./pages/Assessment.jsx";
import {Results} from "./pages/Results.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/assessments/:assessmentId" element={<Assessment/>}/>
                <Route path="/results/:assessmentId" element={<Results/>}/>
                <Route path="*" element={<div>Not found!</div>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
