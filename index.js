// 1 - masala

// let a = 73 / 10 - (73 % 10) / 10;
// let b = 45 / 10 - (45 % 10) / 10;
// let res;
// if (a > b) {
//     res = a;
// } else {
//     res = b;
// }
// console.log(res);
//3-masala
// var son = 453;

// var onlarXonasi = Math.floor((son % 100) / 10);


// if (onlarXonasi === 3) {
//     console.log("Rost qiymat: " + onlarXonasi);
// } else {
//     console.log("Yolgon qiymat: " + onlarXonasi);
// }
//2-masala
// var son = 759;

// var birlikXonasi = son % 10;


// console.log("Eng kichik raqam: " + birlikXonasi);
//4-masala
// var son = 54;
// var son2 = 29;
// var son3 = 93;
// var onlarXonasi = Math.floor((son % 100) / 10);
// if (onlarXonasi === 3) {
//     console.log("Rost qiymat: " + onlarXonasi);
// } else {
//     console.log("Yolgon qiymat: " + onlarXonasi);
// }
//5-masala
// var son1 = 7;
// var son2 = 12;
// var son3 = 5;
// var son4 = 9;
// var engKattaSon = Math.max(son1, son2, son3, son4);
// console.log("Eng katta son: " + engKattaSon);
// 6-masala
// var son1 = 8;
// var son2 = 15;
// var son3 = 4;
// var ortachaSon = (son1 + son2 + son3) / 3;
// console.log("O'rtacha son: " + ortachaSon);
//7-masala
// var son1 = 10;
// var son2 = 5;
// var son3 = 7;
// var sonlar = [son1, son2, son3];
// sonlar.sort(function(a, b) {
//     return b - a;
// });
// var karraliSonlarSoni = karraliSonlar.length;
// console.log("3 ga karralilar soni: " + karraliSonlarSoni);
//8-masala
// var son1 = 15;
// var son2 = 8;
// var son3 = 23;
// var son4 = 9;
// var son5 = 14;
// var sonlar = [son1, son2, son3, son4, son5];
// var karraliSonlar = sonlar.filter(function(son) {
//     return son % 3 === 0;
// });
// var karraliSonlarSoni = karraliSonlar.length;
// console.log("3 ga karralilar soni: " + karraliSonlarSoni);
//9-masala
// var son1 = 12;
// var son2 = 8;
// var son3 = 5;
// var son4 = 9;
// var sonlar = [son1, son2, son3, son4];

// var karraliSonlar = sonlar.filter(function(son) {
//     return son % 3 === 0 || son % 5 === 0;
// });

// var karraliSonlarSoni = karraliSonlar.length;

// console.log("3 ga yoki 5 ga karralilar soni: " + karraliSonlarSoni);
//10-masala
// var son1 = 7;
// var son2 = 12;
// var son3 = 7;

// var yigindi = son1 + son2 + son3;


// console.log("Barcha noldan farqlilarining yig'indisi: " + yigindi);
// 11-masala
// var son = 356;
// var juftRaqamlarKopaytmasi = 1;
// while (son > 0) {
//     var raqam = son % 10;
//     if (raqam % 2 === 0) {
//         juftRaqamlarKopaytmasi *= raqam;
//     }
//     son = Math.floor(son / 10);
// }


// console.log("Juft raqamlari kopaytmasi: " + juftRaqamlarKopaytmasi);
// 12-masala
// var son1 = 8;
// var son2 = -5;
// var son3 = 12;
// var musbatSonlar = [son1, son2, son3].filter(function(son) {
//     return son > 0;
// });
// var ortaArifmetik = 0;
// if (musbatSonlar.length > 0) {
//     ortaArifmetik = musbatSonlar.reduce(function(sum, son) {
//         return sum + son;
//     }, 0) / musbatSonlar.length;
// }
// console.log("Musbat sonlarning orta arifmetigi: " + ortaArifmetik);