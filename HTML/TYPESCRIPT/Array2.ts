let years1: Array<number>=[2013,2014,2015,2016,2017];
for(let i of years1)
{
	console.log(i)
}
console.log("*************");

let years2: Array<number>=[2013,2014,2015,2016,2017];
for(let i in years2)
{
	console.log(years2[i])
}
console.log("*************")

let years3: Array<number>=[2013,2014,2015,2016,2017];
years3.forEach(function(yrs,i)
{
	console.log(yrs);
});