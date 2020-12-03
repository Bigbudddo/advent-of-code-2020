import React, { useState } from 'react';
import TextAreaPuzzleInput from '../../components/TextAreaPuzzleInput';

const Day3 = () => {
    const [puzzleInput, setPuzzleInput] = useState('');
    const [puzzleResult, setPuzzleResult] = useState(null);

    const calculateTreesEncountered = (xSpeed, ySpeed) => {
        var currentPosition = { x: 0, y: 0, treesEncountered: 0 };
        var aPuzzleInput = puzzleInput.split(/\r?\n/).map(e => {
            return e.split('');
        });

        do {
            // increase our position to the right
            var newTrees = currentPosition.treesEncountered;
            var newXPosition = currentPosition.x + xSpeed;
            var newYPosition = currentPosition.y + ySpeed;

            // check if we need to perform a wrap
            // this is because the X could push out of bounds as we try go to the bottom of the hill
            if (newXPosition >= aPuzzleInput[0].length) {
                for (var i = 0; i < aPuzzleInput.length; i++) {
                    var curr = aPuzzleInput[i].slice();
                    aPuzzleInput[i] = aPuzzleInput[i].concat(curr);
                }
            }

            // fetch the current row (the position going down the hill)
            // we can then check the position to the right and check if we have hit a tree
            var currentRow = aPuzzleInput[newYPosition];
            var charOnCurrentRow = currentRow[newXPosition];
            if (charOnCurrentRow === '#') {
                newTrees++;
            }

            currentPosition = {
                ...currentPosition,
                x: newXPosition,
                y: newYPosition,
                treesEncountered: newTrees
            };
        } while (currentPosition.y < aPuzzleInput.length - 1);

        return currentPosition.treesEncountered;
    };

    const executePartA = () => {
        if (!puzzleInput || puzzleInput.length === 0) {
            return;
        }

        setPuzzleResult(calculateTreesEncountered(3, 1));
    };

    const executePartB = () => {
        if (!puzzleInput || puzzleInput.length === 0) {
            return;
        }

        var slopeTrees = 0;
        var slopeSpeeds = [
            { xSpeed: 1, ySpeed: 1 },
            { xSpeed: 3, ySpeed: 1 },
            { xSpeed: 5, ySpeed: 1 },
            { xSpeed: 7, ySpeed: 1 },
            { xSpeed: 1, ySpeed: 2 },
        ];

        // work out foreach slope trajectory how many trees we would hit
        for (var i = 0; i < slopeSpeeds.length; i++) {
            var slope = slopeSpeeds[i];
            var treesEncountered = calculateTreesEncountered(slope.xSpeed, slope.ySpeed);

            if (slopeTrees === 0) {
                slopeTrees = treesEncountered;
            }
            else{
                slopeTrees *= treesEncountered;
            }
        }

        setPuzzleResult(slopeTrees);
    };

    return (
        <TextAreaPuzzleInput
            day="3"
            title="Toboggan Trajectory"
            input={puzzleInput}
            setInput={setPuzzleInput}
            result={puzzleResult}
            setResult={setPuzzleResult}
            executePartA={executePartA}
            executePartB={executePartB}
        />
    );
};

export default Day3;