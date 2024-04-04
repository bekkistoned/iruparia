class People {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const john = new People("John");
console.log(john.greet()); // Output: Hello, my name is John
