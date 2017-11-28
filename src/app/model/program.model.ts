
export class Program{

	private programId:number;
	private programName:string;


	constructor(programId?:number,programName?:string){
		this.programId=programId;
		this.programName = programName;
	}


	set ProgramId(programId:number){
		this.programId=programId;
	}

	set ProgramName(programName:string){
		this.programName=programName;
	}

	get ProgramId():number{
		return this.programId;
	}

	get ProgramName():string{
		return this.programName;
	}
}
