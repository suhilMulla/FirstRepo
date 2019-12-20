var Student = /** @class */ (function () {
    function Student(fname, middlename, lname) {
        this.fname = fname;
        this.middlename = middlename;
        this.lname = lname;
        this.fullname = fname + " " + middlename + " " + lname;
    }
    return Student;
}());
function greeter(per) {
    return "Hello, " + per.fname + " " + per.lname;
}
var user = new Student("Jane", "X.", "User");
console.log(greeter(user));
