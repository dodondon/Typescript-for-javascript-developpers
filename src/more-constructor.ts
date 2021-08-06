export {};

class Person {
  constructor(public name: string, protected age: number){
  }
}

const me = new Person('Untiman', 3000);
console.log(me);
