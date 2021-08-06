export {};

let bmi = (height:number, weight:number, printable?: boolean) :number => {
  const bmi: number = weight / (height * height);
  if(printable === true){
  console.log({bmi});
  }
  return bmi;
}
// bmi(身長, 体重, console.logで出力するかどうか)
// bmi(身長, 体重, true);  だすよ
// bmi(身長, 体重, false);　ださないよ
// bmi(身長, 体重);　ださないよ
bmi(1.78, 200, true)

