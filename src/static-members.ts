export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Unko';
  static lastName: string = 'Yamada';

  static work() {
    //return "45450721 Typescript";
    return `45450721 This is ${this.firstName} ${this.lastName}  Typescript`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());

//let me = new Me();
//console.log(me.isProgrammer);