import React, { useState } from 'react';
import TextAreaPuzzleInput from '../../components/TextAreaPuzzleInput';

const Day2 = () => {
    const [puzzleInput, setPuzzleInput] = useState('');
    const [puzzleResult, setPuzzleResult] = useState(null);

    const executePartA = () => {
        if (!puzzleInput || puzzleInput.length === 0) {
            return;
        }

        var validInputs = 0;
        var aInputs = puzzleInput.split(/\r?\n/).map(el => {
            var aEL = el.split(' ');
            var aRange = aEL[0].split('-').map(a => parseInt(a));
            
            return {
                minCount: aRange[0],
                maxCount: aRange[1],
                character: aEL[1].substring(0, aEL[1].length - 1),
                password: aEL[2]
            };
        });

        for (var i = 0; i < aInputs.length; i++) {
            var input = aInputs[i];
            
            // count how many time the character appears in the password
            var characterCount = 0;
            for (var j = 0; j < input.password.length; j++) {
                var character = input.password.charAt(j);
                if (character === input.character) {
                    characterCount++;
                }
            }

            // check if the count is between the max & min parameters
            if (characterCount >= input.minCount && characterCount <= input.maxCount) {
                validInputs++;
            }
        }

        setPuzzleResult(validInputs);
    };

    const executePartB = () => {
        if (!puzzleInput || puzzleInput.length === 0) {
            return;
        }

        var validInputs = 0;
        var aInputs = puzzleInput.split(/\r?\n/).map(el => {
            var aEL = el.split(' ');
            var aRange = aEL[0].split('-').map(a => parseInt(a));
            
            return {
                positionA: aRange[0],
                positionB: aRange[1],
                character: aEL[1].substring(0, aEL[1].length - 1),
                password: aEL[2]
            };
        });

        for (var i = 0; i < aInputs.length; i++) {
            var input = aInputs[i];

            // because Toboggan Corporate have no concept of index zero...
            var posA = input.positionA - 1;
            var charA = input.password.charAt(posA);

            var posB = input.positionB - 1;
            var charB = input.password.charAt(posB);

            // check that the position contains the character
            if ((charA === input.character && charB !== input.character) || (charA !== input.character && charB === input.character)) {
                validInputs++;
            }
        }

        setPuzzleResult(validInputs);
    };

    return (
        <TextAreaPuzzleInput
            day="2"
            title="Password Philosophy"
            input={puzzleInput}
            setInput={setPuzzleInput}
            result={puzzleResult}
            setResult={setPuzzleResult}
            executePartA={executePartA}
            executePartB={executePartB}
        />
    );
};

export default Day2;