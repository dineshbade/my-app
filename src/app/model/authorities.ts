

export class Authority{
	id:number;
	authorityName:string;

	Role(id?:number,authorityName?:string){
			this.id = id;
			this.authorityName = authorityName;

	}

	set Id(id:number){
		this.id = id;
	}

	set AuthorityName(authorityName:string){
		this.authorityName = authorityName;
	}
	get Id():number{
		return this.id;
	}
	get AuthorityName():string{
		return this.authorityName;
	}
}