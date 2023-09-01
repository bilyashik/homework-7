import React, { useState } from "react";

function Dashboard() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseOver = () => {
        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 40; 

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        setPosition({ x: newX, y: newY });
    };

    const buttonStyle = {
        position: "absolute",
        top: position.y + "px",
        left: position.x + "px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
    };

    return (
        <div>
            <button
                id="runaway-button"
                onMouseOver={handleMouseOver}
                style={buttonStyle}
            >
                Нажми меня!
            </button>
        </div>
    );
}

export default Dashboard;
