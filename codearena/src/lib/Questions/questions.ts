import type { Question } from './types';

export const mult: Question = {
	solutionFun: (a: any, b: any) => {
		return a + b;
	},

	funcName: 'multiply',

	ready: true,

	tests: [
		{ args: [10, 20], output: 200 },
		{ args: [0, 20], output: 0 },
		{ args: [3, 2], output: 6 },
		{ args: [-3, 5], output: -15 }
	],

	default: `/**
* @param {number} a
* @param {number} b
* @return {number} Multiplication result of a and b
*/

//function must be called "answer"
const answer = function(a, b){
    // Write your code here
}
`,
	docs: `
# Multiplication Function

This function takes two numbers as input and returns their product.

## Parameters:
- **a** (number): The first number.
- **b** (number): The second number.

## Returns:
- (number): The product of a and b.

## Example:
\`\`\`
multiply(2, 3) -> 6
multiply(5, 7) -> 35
\`\`\`
`
};

export const reverseString: Question = {
	solutionFun: (str: string) => {
		return str.split('').reverse().join('');
	},

	funcName: 'reverseString',

	ready: true,

	tests: [
		{ args: ['hello'], output: 'olleh' },
		{ args: ['world'], output: 'dlrow' },
		{ args: ['12345'], output: '54321' },
		{ args: [''], output: '' }
	],

	default: `/**
* @param {string} str
* @return {string} Reversed string
*/

        //function must be called "answer"
const answer = function(str){
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
	solutionFun: (str: string) => {
		// Write your solution code here
	},

	funcName: 'toCamelCase',

	ready: true,

	tests: [
		{ args: ['hello world'], output: 'helloWorld' },
		{ args: ['hello_world_example'], output: 'helloWorldExample' },
		{ args: ['some-text-with-dashes'], output: 'someTextWithDashes' },
		{ args: ['CamelCaseString'], output: 'camelCaseString' }
	],

	default: `/**
* @param {string} str
* @return {string} Camel cased string
*/

//function must be called "answer"
const answer = function(str){
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
toCamelCase("hello world") -> "helloWorld"
toCamelCase("some-text-with-dashes") -> "someTextWithDashes"
\`\`\`
`
};
