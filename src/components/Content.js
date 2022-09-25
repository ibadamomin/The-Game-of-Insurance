import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Content() {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        
        navigate('/Gender');
      };
    return(
        <div className="contain">
            <h1>Welcome to Game of Insurance</h1>
            <h5>Click the Button to Start Game</h5>
            <Button variant="danger" onClick={navigateHome}>Start</Button>
        </div>

    )
}