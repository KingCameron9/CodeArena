export type Question = {
	ready: boolean;
	solutionFun: Function;
	default: string;
	tests: Test[];
	docs: string;
};

export type ReturnMessage = {
	success: boolean;
	caseNumber: number;
	expectedOutput: string;
	output: string;
	input: string;
	errored: boolean;
	error: string;
};

export type Test = {
	args: any[];
	output: any;
};
