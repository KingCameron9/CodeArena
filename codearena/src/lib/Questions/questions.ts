import type { Question } from './types';

export const pythagorean: Question = {
	funcName: 'pythagorean',

	ready: true,

	tests: [
		{ args: [3, 4], output: 5 },
		{ args: [0, 3], output: 3 },
		{ args: [5, 0], output: 5 },
		{ args: [5, 12], output: 13 },
		{ args: [7, 24], output: 25 }
	],

	default: `/**
* @param {number} a
* @param {number} b
* @return {number} returns c given the pythagorean theorem sqrt(a^2 + b^2) = c
*/

//function must be called "pythagorean"
function pythagorean(a, b) {
    // Write your code here
}
`,
	docs: `
# pythagorean Function

This function takes two numbers as input and returns them using the pythagorean theorem.

## Parameters:
- **a** (number): The first number.
- **b** (number): The second number.

## Returns:
- (number): c

## Example:
\`\`\`
pythagorean(3, 4) -> 5
pythagorean(0, 3) -> 3
pythagorean(5, 0) -> 5
\`\`\`
`
};

export const reverseString: Question = {
	funcName: 'reverseString',

	ready: true,

	tests: [
		{ args: ['hello'], output: 'olleh' },
		{ args: ['world'], output: 'dlrow' },
		{ args: ['12345'], output: '54321' },
		{ args: ['drew'], output: 'werd' },
		{ args: ['sammy'], output: 'ymmas' }
	],

	default: `/**
* @param {string} str
* @return {string} Reversed string
*/

        //function must be called "answer"
const reverseString = function(str){
    // Write your code here
}
`,
	docs: `
# Reverse String Function

This function takes a string as input and returns the reversed string.

## Parameters:
- **str** (string): The input string to be reversed.

## Returns:
- (string): The reversed version of the input string.

## Example:
\`\`\`
reverseString("hello") -> "olleh"
reverseString("world") -> "dlrow"
\`\`\`
`
};

export const camelCaseConversion: Question = {
	funcName: 'toCamelCase',

	ready: true,

	tests: [
		{ args: ['hello_world'], output: 'helloWorld' },
		{ args: ['hello_world_example'], output: 'helloWorldExample' },
		{ args: ['some_text'], output: 'someText' },
		{ args: ['camel_caseString'], output: 'camelCaseString' }
	],

	default: `/**
* @param {string} str
* @return {string} Camel cased string
*/

//function must be called "answer"
const toCamelCase = function(str){
    // Write your code here
}
`,
	docs: `
# Camel Case Conversion Function

This function takes a string as input and converts it into camel case.

## Parameters:
- **str** (string): The input string to be converted to camel case.

## Returns:
- (string): The input string converted to camel case.

## Example:
\`\`\`
toCamelCase("hello_world") -> "helloWorld"
toCamelCase("some_text") -> "someText"
toCamelCase("some_text") -> "someText"
toCamelCase("snake_case_is_cool") -> "snakeCaseIsCool"
\`\`\`
`
};
