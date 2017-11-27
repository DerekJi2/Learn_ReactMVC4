/// <reference path="../node_modules/@types/jquery/index.d.ts" />


function sayHello() {
    const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
    const compiler_jquery = $('#compiler').val();
    const framework = (document.getElementById("framework") as HTMLInputElement).value;
    return `Hello Derek Ji! This is from ${compiler} and ${framework}!`;
}

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

let greeter_string = greeter(user);


//(document.getElementById("greeter") as HTMLInputElement).value(greeter(user));