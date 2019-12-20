class Student{
	fullname: string;
	constructor(public fname: string, public middlename: string, public lname: string)
	{
		this.fullname=fname+" "+middlename+" "+lname;
	}
}
interface Person{
	fname:string;
	lname:string;
}

function greeter(per: Person){
	return "Hello, "+per.fname+" "+per.lname;
}

let user = new Student("Jane","X.","User")
console.log(greeter(user));