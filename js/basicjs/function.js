$(function () {

    function print(a, b, c, d, e) {
        if (a !== undefined){
            console.log(a);
        }
        if (b !== undefined){
            console.log(b);
        }
        console.log(c);


        console.log("print ok");
    }
    print("asd", "tji","3f5");
    print("9ou", "tp5");
    print("6vbtg");
    print();
    print(1, 2, 3, 4, 5, 6, 7, 8)
    // function printCongrats() {
    //     console.log("Поздравляем, чётное число сгенерировалось")
    // }
    //
    // function doIfEvenRandom(callback) {
    //     let num = Math.floor(Math.random()*100);
    //     if (num % 2 === 0){
    //         callback();
    //     }
    // }
    //
    // doIfEvenRandom(function () {
    //     console.log("Ура, нашли чётное число");
    // });
    //
    // doIfEvenRandom(printCongrats);

    function printCongrats() {
        console.log("Поздравляем, чётное число сгенерировалось")
    }

    function doIfEvenRandom(callback) {
        let num = Math.floor(Math.random()*100);
        if (num % 2 === 0){
            callback(num);
        }
    }

    doIfEvenRandom(function (number) {
        console.log("Ура, нашли чётное число: " + number);
    });

    doIfEvenRandom(function () {
        console.log("Even number");
    });

    doIfEvenRandom(printCongrats);

});