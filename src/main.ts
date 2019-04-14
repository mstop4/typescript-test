class Student {
  fullName: string;

  constructor(public firstName: string,
    public middleInitial: string,
    public lastName: string) {

    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Person) => `Hello, ${person.firstName} ${person.lastName}`;

let user = new Student('Boaty', 'B.', 'McBoatface');

document.body.innerHTML = greeter(user);