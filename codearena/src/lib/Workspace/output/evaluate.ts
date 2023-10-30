import { playerState } from '$lib/Firebase/play/playerState';
import type { Question, ReturnMessage, Test } from '$lib/Questions/types';
import { editor } from '../monaco/monaco';
import * as ivm from 'isolated-vm';

export function evaluate(question: Question) {
	//limits memory
	const isolate = new ivm.Isolate({ memoryLimit: 128 });
	const context = isolate.createContextSync();
	const jail = context.global;

	const res = isolate.compileModuleSync(`console.log('hello')`);
	console.log('res:' + res.evaluate());
	console.log('res:');

	//
	// 	const code = editor.getValue();
	//
	// 	let func = () => {};
	// 	eval(code + ';;;; func = answer');
	//
	// 	let returnMessage: ReturnMessage = {
	// 		success: true,
	// 		caseNumber: 0,
	// 		expectedOutput: '',
	// 		output: '',
	// 		input: '',
	// 		errored: false
	// 	};
	//
	// 	question.tests.forEach((test) => {
	// 		let args = test.args;
	// 		let result;
	// 		try {
	// 			result = func(...args);
	// 		} catch (e: any) {
	// 			returnMessage = {
	// 				success: false,
	// 				caseNumber: question.tests.indexOf(test),
	// 				expectedOutput: test.output,
	// 				output: result,
	// 				input: args.toString(),
	// 				errored: true,
	// 				error: e.toString()
	// 			};
	// 			return;
	// 		}
	//
	// 		if (result != test.output) {
	// 			returnMessage = {
	// 				success: false,
	// 				caseNumber: question.tests.indexOf(test),
	// 				expectedOutput: test.output,
	// 				output: result,
	// 				input: args.toString(),
	// 				errored: false
	// 			};
	// 			return;
	// 		}
	// 	});
	//
	// 	playerState.update((current) => {
	// 		current.score += 50;
	// 		return current;
	// 	});
	//
	// 	return returnMessage;
	//
	// 	// let message = runCode();
	// 	// const code = editor.getValue();
	// 	// const functionName = 'answer';
	// 	// console.log(code);
	// 	// eval(code);
	//
	// 	// console.log(answer);
	// 	// / Define a function using eval
	// 	// let output: any;
	// 	// eval(code+"; output = " + functionName + "()");
	// 	// console.log(output)
}
