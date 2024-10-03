import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Header.css'; 

const Header = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate(`/`);
    }

    const handleDashboard = () => {
        navigate(`/dashboard`);
    }

    return (
        <header className="header">
            <div className="logo" onClick={handleHome}>
                <img src="/images/logo.jpeg" alt="logo"/>
            </div>
            <nav className="nav-buttons">
                <button onClick={handleHome}>Home</button>
                <button onClick={handleDashboard}>Dashboard</button>
            </nav>
        </header>
    );
};

export default Header;
