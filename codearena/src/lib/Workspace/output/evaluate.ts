import { playerState } from '$lib/Firebase/play/playerState';
import type { Question, Test } from '$lib/Questions/types';
import { editor } from '../monaco/monaco';
import * as vm from 'vm-browserify';

export type FuncResult = {
	sucess: boolean;
	errored?: boolean;
	errorMessage?: string;
	expectedOutput?: string;
	output?: string;
	input?: string;
};

//run function in safe context
function runFunc(code: string, funcName: string, expectedResult: any, input: any[]): FuncResult {
	let res;

	try {
		//kinda sketchy but does work
		res = vm.runInNewContext(code + ';\n' + funcName);
		res = res(...input);
		console.log(res);
	} catch (e: any) {
		return {
			sucess: false,
			errored: true,
			errorMessage: e.toString()
		};
	}

	if (res != expectedResult) {
		return {
			sucess: false,
			expectedOutput: expectedResult.toString(),
			output: res.toString(),
			input: input.toString()
		};
	}

	return {
		sucess: true
	};
}

export function evaluate(question: Question): { res?: FuncResult; success: boolean } {
	const code = editor.getValue();

	let res = { success: true };

	question.tests.forEach((test) => {
		const result = runFunc(code, question.funcName, test.output, test.args);

		if (!result.sucess) {
			res = { success: false, res: result };
			return;
		}
	});
	console.log('succ');
	return res;
}
