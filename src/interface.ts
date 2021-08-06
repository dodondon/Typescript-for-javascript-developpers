export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void{
    console.log('untiionazun!!!!!');
  };

  kougeki(): void{
    console.log('untikougeki!!!!!');
  };

}

let jiro = new Jiro();

jiro.ionazun();

jiro.kougeki();
