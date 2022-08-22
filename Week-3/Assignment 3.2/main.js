function Student(firstName, lastName, subject){
    this.firstName= firstName;
    this.lastName= lastName;
    this.subject= subject;
}
const greet = function (prefix, suffix){
    console.log(`${prefix} ${this.firstName} ${this.lastName} ${suffix}`);
}

let student1 = new Student("John", "Doe","CS");

greet.call(student1, "Hi!", "- How are you?");

greet.apply(student1, ["Hi!","- How are you?"]);

let fn = greet.bind(student1);

fn("Hi!","- How are you?");