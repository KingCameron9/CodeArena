export type Question = {
	ready: boolean;
	default: string;
	tests: Test[];
	docs: string;
	funcName: string;
};

export type Test = {
	args: any[];
	output: any;
};
