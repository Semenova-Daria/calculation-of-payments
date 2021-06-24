class Calculation {
    a;  //исходные данные
    hotWater;  //вводные данные
    amt;  // количество
    sum;      //сумма

    constructor(hotWater){
        this.a = 100;
        this.hotWater = hotWater;
        this.amt = amt;
        // this.sum = sum;
    }

    get hotW(){
        return this.a;
    }
    set hotW(hotWater){
        return this.amt = this.hotWater - this.a;
    }
}
let amount = new Calculation(160);
console.log(amount)

// let a = 120;
//         let amt = b - a;