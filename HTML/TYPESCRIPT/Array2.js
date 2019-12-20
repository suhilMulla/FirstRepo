var years1 = [2013, 2014, 2015, 2016, 2017];
for (var _i = 0, years1_1 = years1; _i < years1_1.length; _i++) {
    var i = years1_1[_i];
    console.log(i);
}
console.log("*************");
var years2 = [2013, 2014, 2015, 2016, 2017];
for (var i in years2) {
    console.log(years2[i]);
}
console.log("*************");
var years3 = [2013, 2014, 2015, 2016, 2017];
years3.forEach(function (yrs, i) {
    console.log(yrs);
});
