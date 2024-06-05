import React from "react";
import { Link } from "react-router-dom";
import { useStore,actions } from "../store";
const Navbar = () => {
    const [state, dispatch] = useStore();
    const handleClick = () => {
        const newMode = state.mode === "light"? "dark" : "light";
        dispatch(actions.setMode(newMode));
    };
    return (
        <nav className="navbar bg-success">
            <h1>
                <i className="fab fa-github" /> GitHub Finder
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <button 
                        onClick={handleClick}
                        className={`btn ${state.mode === "light" ? 'btn-dark' : 'btn-light'}`}
                    >
                    {state.mode === "light"? "Dark" : "Light"}
                    </button>
                </li>   
            </ul>
        </nav>
    );
};
export default Navbar;