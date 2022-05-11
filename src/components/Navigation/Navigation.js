import React from 'react'
import { Breadcrumbs } from '@material-ui/core';
import {
    Link
} from "react-router-dom";

const Navigation = () => {
    return (
        <Breadcrumbs separator="-" aria-label="breadcrumb">
            <Link to="/home" className="text-link">Home</Link>
            &nbsp;
            <Link to="/portfolio" className="text-link">Portfolio</Link>
            &nbsp;
            <Link to="/about" className="text-link">About</Link>
            &nbsp;
            <Link to="/contact" className="text-link">Contact</Link>
        </Breadcrumbs>
    )
}


export default Navigation;
