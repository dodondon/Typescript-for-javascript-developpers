export {};

type Unti = string;

const unti: Unti = 'Han';

const example1 = {
  name: 'Ham',
  age: 43
}

type Profile = {
  name: string,
  age: number
}

const example2: Profile = {
  name: 'untio',
  age: 32
}

type Profile2 = typeof example1;

const example3: Profile2 = {
  name: 'tinko',
  age: 12
}
