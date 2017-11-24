function sayHello() {
    const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
    const framework = (document.getElementById("framework") as HTMLInputElement).value;
    return `Hello Derek Ji! This is from ${compiler} and ${framework}!`;
}

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

let greeter_string = greeter(user);


//(document.getElementById("greeter") as HTMLInputElement).value(greeter(user));