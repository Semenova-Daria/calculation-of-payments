//1. ввести показание счетчиков горячей воды
//2. ввести показание счетчиков холодной воды
//3. ввести показание счетчиков света
//4. ввести месяц
//  вычеслить количество кубов или ватт
//5. ф-ция подсчета показаний
//   а)цена за горячую воду
//   б)цена за холодную воду
//   в)цена за свет 
//   г)общая сумма
//6. сохранить показания до следующего месяца

// class Calculation {
//     hotWater;        //горячая вода
//     coldWater;       //холодная вода
//     light;           //свет
//     month;           //месяц
//     amountHotWater;  // количество
//     amountColdWater;
//     amountLight;
//     sumHotWater;
//     sumColdWater;
//     sumLight;
//     sumTotal;      //сумма
//     payOfRent;     // общая сумма оплаты аренды

//     constructor(hotWater){
//         this.hotWater = hotWater;
//         // this.amountHotWater = amountHotWater;
//         // this.sumHotWater = sumHotWater;
//     }

//     get hotW() {
//         return hotWater;
//     }
//     set hotW(newHotWater) {
//         this.hotWater = prompt('Введите показания счетчиков горячей воды:', hotWater);
//         return this.hotWater;
//     }
// }
// let amount = new Calculation(160);
// console.log(amount)

// let a = 120;
//         let amt = b - a;

// let rent = 3800;
// payOfRent = rent + sumTotal;

function hotWater(hotW) {
    let oldHotW=10;
    hotW = prompt('Введите показания счетчиков горячей воды:', hotW);
    let amountHotWater = hotW - oldHotW; //amount
    let sumHotWater = amountHotWater * 87;
    return sumHotWater;
    oldHotW = oldHotW + amountHotWater;
}
console.log(hotWater());

function coldWater(coldW) {
    let oldColdW=8;
    coldW = prompt('Введите показания счетчиков холодной воды:', coldW);
    let amountColdWater = coldW - oldColdW; //amount
    let sumColdWater = amountColdWater * 16;
    return sumColdWater;
    oldColdW = oldColdW + amountColdWater;
}
console.log(coldWater());
