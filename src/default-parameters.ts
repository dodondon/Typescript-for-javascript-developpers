export {};

const nextYearSalary = (currentSalary: number, rate: number = 1000): number => {
  return currentSalary * rate;
}

console.log(nextYearSalary(1000));