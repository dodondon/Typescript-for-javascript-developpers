export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tigar extends Animal {
  cry() {
    return 'unti!'
  }
}

let tigar = new Tigar();
let lion = new Lion();

console.log(tigar.cry());
console.log(lion.cry());