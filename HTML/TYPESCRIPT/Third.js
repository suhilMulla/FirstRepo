function display(value) {
    if (typeof (value) === "number") {
        console.log("Given value is a number");
    }
    else if (typeof (value) === "string") {
        console.log("Given value is a String");
    }
}
display(123);
display("ABC");
