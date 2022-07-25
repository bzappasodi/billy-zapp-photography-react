import React from 'react'
import {
    Link
} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div>
                <Link to="/home" className="text-link">Home</Link>
            </div>
            <div>
                <Link to="/portfolio" className="text-link">Portfolio</Link>
            </div>
            <div>
                <Link to="/about" className="text-link">About</Link>
            </div>
            <div>
                <Link to="/contact" className="text-link">Contact</Link>

            </div>
        </>
    )
}


export default Navigation;
