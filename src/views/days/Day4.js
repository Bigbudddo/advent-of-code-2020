import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import TextAreaPuzzleInput from '../../components/TextAreaPuzzleInput';

const Day4 = () => {
    const [puzzleInput, setPuzzleInput] = useState('');
    const [puzzleResult, setPuzzleResult] = useState(null);

    const compilePassportData = () => {
        // get our puzzle input & split on every newline
        var aPuzzleInput = puzzleInput.split(/\r?\n/);
        
        // now we need to grab the string data into a single line
        // the puzzle input has blank/empty string between each new instance of a 'passport'
        var lineReader = "";
        var linePassports = [];
        for (var i = 0; i < aPuzzleInput.length; i++) {
            // here we check for the blank line and insert our data
            if (aPuzzleInput[i].length === 0) {
                linePassports.push(lineReader.trim());
                lineReader = "";
            }
            else{
                // otherwise we keep appending the string data together
                lineReader += `${aPuzzleInput[i]} `;
            }
        }

        // important! we need this to add the last passport details to our array of string data!
        linePassports.push(lineReader.trim());

        // we now want to split & map the data into objects
        var passports = [];
        for (var i = 0; i < linePassports.length; i++) {
            var obj = { };
            // each key:value pair is split by a whitespace in the string data
            linePassports[i].split(' ').map(el => {
                // this gets us the key:pair combo from the string
                var aEl = el.split(':'); 

                // assign a new property to our object result
                obj[aEl[0]] = aEl[1];
            });

            // push the new passport object into our array
            passports.push(obj);
        }

        // return the results!
        return passports;
    };

    const validatePassport = (passport, requiredFields, optionalFields, fieldValidators) => {
        var valid = true;

        for (var i = 0; i < requiredFields.length; i++) {
            // check we have the required field and that it's not optional
            // we should just be able to break out of the loop the second we identify an invalid passport
            if (!passport.hasOwnProperty(requiredFields[i]) && !optionalFields.includes(requiredFields[i])) {
                valid = false;
                break;
            }

            // if we have specified some kind of field validators
            // todo; could add additional check that field validator property is a function, but I don't think it's required!
            if (fieldValidators && fieldValidators.hasOwnProperty(requiredFields[i])) {
                valid = fieldValidators[requiredFields[i]](passport[requiredFields[i]]);
                if (valid === false) {
                    break;
                }
            }
        }

        return valid;
    };

    const executePartA = () => {
        if (!puzzleInput || puzzleInput.length === 0) {
            return;
        }

        // fetch the passport data from the puzzle input
        var passports = compilePassportData();
        var requiredFields = [ 'ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'cid', 'hgt' ];
        var optionalFields = [ 'cid' ];

        // count the number of valid passports
        var validPassports = 0;
        for (var i = 0; i < passports.length; i++) {
            var check = validatePassport(passports[i], requiredFields, optionalFields, null);
            if (check === true) {
                validPassports++;
            }
        }

        // set our output result state
        setPuzzleResult(validPassports);
    };

    const executePartB = () => {
        if (!puzzleInput || puzzleInput.length === 0) {
            return;
        }

        // fetch the passport data from the puzzle input
        var passports = compilePassportData();
        var requiredFields = [ 'ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'cid', 'hgt' ];
        var optionalFields = [ 'cid' ];
        var validatorOperations = {
            'byr': (value) => {
                var birthYear = parseInt(value);
                return (!isNaN(birthYear) && value >= 1920 && value <= 2002); 
            },
            'iyr': (value) => {
                var issueYear = parseInt(value);
                return (!isNaN(issueYear) && value >= 2010 && value <= 2020); 
            },
            'eyr': (value) => {
                var expiryYear = parseInt(value);
                return (!isNaN(expiryYear) && value >= 2020 && value <= 2030); 
            },
            'hgt': (value) => {
                var measurement = value.substr(value.length - 2);
                var validMeasurements = [ 'cm', 'in' ];
                if (!validMeasurements.includes(measurement)) {
                    return false;
                }

                var height = parseInt(value.substr(0, value.length - 2));
                if (isNaN(height)) {
                    return false;
                }
                else if (measurement === 'cm' && (height < 150 || height > 193)) {
                    return false;
                }
                else if (measurement === 'in' && (height < 59 || height > 76)) {
                    return false;
                }
                else{
                    return true;
                }
            },
            'hcl': (value) => {
                var aValue = value.split('');
                var validCharacters = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
                if (aValue[0] !== '#' || aValue.length !== 7) {
                    return false;
                }

                // note; set start to 1 because we don't want to validate the starting '#'!
                for (var i = 1; i < aValue.length; i++) {
                    if (!validCharacters.includes(aValue[i])) {
                        return false;
                    }
                }

                return true;
            },
            'ecl': (value) => {
                return (value === 'amb' || value === 'blu' || value === 'brn' || value === 'gry' || value === 'grn' || value === 'hzl' || value === 'oth');
            },
            'pid': (value) => {
                var aValue = value.split('');
                var validCharacters = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
                if (aValue.length !== 9) {
                    return false;
                }

                for (var i = 0; i < aValue.length; i++) {
                    if (!validCharacters.includes(aValue[i])) {
                        return false;
                    }
                }

                return true;
            }
        };

        // count the number of valid passports
        var validPassports = 0;
        for (var i = 0; i < passports.length; i++) {
            var check = validatePassport(passports[i], requiredFields, optionalFields, validatorOperations);
            if (check === true) {
                validPassports++;
            }
        }

        // set our output result state
        setPuzzleResult(validPassports);
    };

    return (
        <TextAreaPuzzleInput
            day="3"
            title="Passport Processing"
            input={puzzleInput}
            setInput={setPuzzleInput}
            result={puzzleResult}
            setResult={setPuzzleResult}
            executePartA={executePartA}
            executePartB={executePartB}
        />
    );
};

export default Day4;