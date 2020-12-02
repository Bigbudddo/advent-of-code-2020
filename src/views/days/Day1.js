import React, { useState } from 'react';
import TextAreaPuzzleInput from '../../components/TextAreaPuzzleInput';

const Day1 = () => {
    const [puzzleInput, setPuzzleInput] = useState('');
    const [puzzleResult, setPuzzleResult] = useState(null);

    const executePartA = () => {
        // reset the puzzle result
        setPuzzleResult(null);

        if (!puzzleInput || puzzleInput.length === 0) {
            return;
        }

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

        if (!puzzleInput || puzzleInput.length === 0) {
            return;
        }

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
        <TextAreaPuzzleInput
            day="1"
            title="Report Repair"
            input={puzzleInput}
            setInput={setPuzzleInput}
            result={puzzleResult}
            setResult={setPuzzleResult}
            executePartA={executePartA}
            executePartB={executePartB}
        />
    )
};

export default Day1;