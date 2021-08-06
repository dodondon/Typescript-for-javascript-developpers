export {};

// * owner
//   * 所有者、初期化時に設定できる、途中でへんこうできない、参照できる
// * secretNumber
//   * 個人番号、初期化時に設定できる、途中でへんこうできる、参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }

}

let card = new MyNumberCard('エロさん', 454507211919);
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 199999999;
console.log(card.debugPrint());
console.log(card.secretNumber);
