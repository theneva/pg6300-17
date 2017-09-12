class Person {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `This person is called ${ this.name }!`;
  }
}

const martin = new Person("Martin");
console.log(martin);
