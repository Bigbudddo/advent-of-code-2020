import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <a href="https://adventofcode.com/" target="_blank">Advent of Code</a> is a yearly puzzle challenge by <a href="http://was.tl/" target="_blank">Eric Wastl.</a>
                </p>
                <p>
                    Made with <a className="has-text-danger" href="https://bulma.io/" target="_blank"><FontAwesomeIcon icon={faHeart} /></a> by <a href="https://www.stuart-harrison.com/" target="_blank">Stuart Harrison</a>
                </p>
            </div>
        </footer>
    )
};

export default Footer;