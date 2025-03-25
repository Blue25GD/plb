import React, { useEffect } from 'react';

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
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "40px",
            paddingBottom: "40px",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(37, 56, 88, .5)",
            transition: "all .3s ease-in-out",
            zIndex: "100",
            overflowY: "scroll",
        }}>
            <div style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "100",
            }} onClick={onClose}></div>

            <div style={{
                backgroundColor: "#F4F5F7",
                width: "80%",
                maxWidth: maxWidth,
                overflowY: "auto",
                borderRadius: "6px",
                boxShadow: "0 6px 12px rgba(7, 20, 46, .08)",
                zIndex: "101",
                position: "relative",
            }}>
                {children}
            </div>
        </div>
    );
} 