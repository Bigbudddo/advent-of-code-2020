import React from 'react';
import { Link } from "react-router-dom";

const TextAreaPuzzleInput = ({ day, title, input, setInput, executePartA, executePartB, result, setResult }) => {
    return (
        <section className="section">
            <div className="container">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to={'/'}>Calendar</Link></li>
                        <li className="is-active"><Link to={`/day${day}`}>Day {day}</Link></li>
                    </ul>
                </nav>
                {day && (
                    <h1 className="title">Day {day}</h1>
                )}
                {title && (
                    <h2 className="subtitle">{title}</h2>
                )}
                <div className="columns">
                    <div className="column">
                        <textarea className="textarea"
                            placeholder="Enter your Puzzle Input.."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}>
                        </textarea>
                        <div className="mt-3 buttons">
                            <button className="button is-primary" onClick={executePartA} disabled={result}>Run Part A</button>
                            <button className="button is-primary" onClick={executePartB} disabled={result}>Run Part B</button>
                        </div>
                    </div>
                    {result && (
                        <div className="column is-half">
                            <div className="custom-results">
                                <p className="has-text-weight-bold">Results:</p>
                                <pre className="mt-2">{result}</pre>
                                <div className="mt-3 buttons">
                                    <button className="button is-fullwidth is-success" onClick={() => setResult(null)}>Clear Result</button>
                                </div>
                            </div>
                        </div>  
                    )}
                </div>                
            </div>
        </section>
    );
};

export default TextAreaPuzzleInput;