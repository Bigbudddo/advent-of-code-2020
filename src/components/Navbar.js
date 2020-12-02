import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        Advent of Code 2020
                    </Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;