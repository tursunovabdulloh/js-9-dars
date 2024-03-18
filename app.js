// 100-masala
let hamma = "div";
let string = prompt("tag kiriting");
function Tagqosh(soz, hisob) {
  let result1 = "<" + soz + ">";
  let result2 = "<" + "/" + soz + ">";
  if (hisob == "div * 2") {
    console.log('"' + result1 + result2 + result1 + result2 + '"');
  } else if (hisob !== "div * 2") {
    console.log(false);
  }
  return '"' + result1 + result2 + result1 + result2 + '"';
}
console.log(Tagqosh(hamma, string));
// 102-masala
// function testNum(a = +prompt("son kiriting")) {
// let result;
// if (a > 0 && a <= 5) {
//   result = "true";
// } else {
//   result = "false";
// }
// return result;
// console.log(testNum());

// 103 - masala;
// function testkvadrat(son = prompt("son kiriting")) {
//   let raqam1 = son ** 2;
//   let olchov = raqam1.;
//   let result;
//   if (son == olchov) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// console.log(testkvadrat());
// 104-masala
// let arr = [0, 0, 0, 0, 0, 0];
// console.log(arr);
// 105-masala
// let arr = ["fanta", "cola", "water"];
// let suv = cola,
//   fanta;
// function tekshir(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (i == suv || i == suv) {
//     } else {
//       newArr.push();
//       return newArr;
//     }
//   }
// }
// console.log(tekshir(arr));
// let arr = ["fanta", "cola", "water"];
// let suv = cola,
//   fanta;
// function tekshir(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (i == suv || i == suv) {
//     } else {
//       newArr.push();
//       return newArr;
//     }
//   }
// }
// console.log(tekshir(arr));
// 106-masala
// let son = prompt("son kiriting");
// console.log(son.length);
// 107-masala

// function hisobla(son = +prompt) {
//   let son = 123;
//   let birinchi_son = son % 100;
//   let ikkinchi_son = son % 10;
//   let uchinchi_son = son / 100;
// }
// // 108-masala
// function getRandomInt(son) {
//   return Math.ceil(Math.random() * son);
// }
// console.log(getRandomInt(5));
// console.log(getRandomInt(9));
// 109-masala
// function rostmi(son) {
//   return (birinchi_son = son % 100);
// }
// console.log(rostmi(123));
// console.log(rostmi(birinchi_son));
// 110-masala
// let ism = prompt("ismingizni yozing");
// let boshharif = ism.charAt(0).toUpperCase();
// let qolganharf = ism.slice(1).toLowerCase();
// alert(`Salom ${boshharif}${qolganharf}`);
// function updateBrand(obj) {
//   obj.brand = "Toyota";
// }
// const car = {
//   brand: "Honda",
//   model: "Accord",
//   year: 1998,
// };
// console.log(car.brand);
// updateBrand(car);
// console.log(car.year);
