import React, { useEffect } from 'react';
import '../styles/Modal.css';

export function Modal({ isOpen, onClose, children, maxWidth = '512px' }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "auto";
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-backdrop" onClick={onClose}></div>

            <div className="modal-content" style={{ '--max-width': maxWidth }}>
                {children}
            </div>
        </div>
    );
} 