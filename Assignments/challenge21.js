'use scrict';
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win the cup ${avgDolhins} VS. ${avgKoalas}`);
    }
    else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win the cup ${avgKoalas} VS. ${avgDolhins}`);
    }
    else { console.log(`No team Wins`); }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);