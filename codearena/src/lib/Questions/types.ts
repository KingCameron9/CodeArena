export type Question = {
	ready: boolean;
	solutionFun: Function;
	default: string;
	tests: Test[];
	docs: string;
	funcName: string;
};

export type Test = {
	args: any[];
	output: any;
};
