import React, { useState } from 'react';

const Day1 = () => {
    const [puzzleInput, setPuzzleInput] = useState('');
    const [puzzleResult, setPuzzleResult] = useState(0);

    const executePartA = () => {
        // reset the puzzle result
        setPuzzleResult(0);

        // split the puzzle input into array of ints
        var aPuzzleInput = puzzleInput.split(/\r?\n/).map(el => parseInt(el));

        // start the looping!
        for (var i = 0; i < aPuzzleInput.length; i++) {
            for (var j = 0; j < aPuzzleInput.length; j++) {
                if (i === j) continue;
                var addition = aPuzzleInput[i] + aPuzzleInput[j];
                if (addition === 2020) {
                    setPuzzleResult(aPuzzleInput[i] * aPuzzleInput[j]);
                }

                if (puzzleResult > 0) {
                    break;
                }
            }

            if (puzzleResult > 0) {
                break;
            }
        }
    };

    const executePartB = () => {
        // reset the puzzle result
        setPuzzleResult(0);

        // split the puzzle input into array of ints
        var aPuzzleInput = puzzleInput.split(/\r?\n/).map(el => parseInt(el));

        // start the looping!
        for (var i = 0; i < aPuzzleInput.length; i++) {
            for (var j = 0; j < aPuzzleInput.length; j++) {
                if (i === j) continue;
                
                for (var k = 0; k < aPuzzleInput.length; k++) {
                    if (i === k || j === k) continue;

                    var addition = aPuzzleInput[i] + aPuzzleInput[j] + aPuzzleInput[k];
                    if (addition === 2020) {
                        setPuzzleResult(aPuzzleInput[i] * aPuzzleInput[j] * aPuzzleInput[k]);
                    }

                    if (puzzleResult > 0) {
                        break;
                    }
                }

                if (puzzleResult > 0) {
                    break;
                }
            }

            if (puzzleResult > 0) {
                break;
            }
        }
    };

    return (
        <section className="section">
            <div className="container">
                <textarea className="textarea"
                    placeholder="Enter your Puzzle Input.."
                    value={puzzleInput}
                    onChange={(e) => setPuzzleInput(e.target.value)}>
                </textarea>
                <p className="button is-small" onClick={executePartA}>Execute Puzzle A</p>
                <p className="button is-small" onClick={executePartB}>Execute Puzzle B</p>
                <pre>{puzzleResult}</pre>
            </div>
        </section>
    )
};

export default Day1;