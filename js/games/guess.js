$(function () {


    let num, right9, left9;
    let maxNumber;

    //  9: Я загадываю, компьютер отгадывает
    function generateNumberGuess(){
        maxNumber = config["guess-game"]["max-number"];
        num = Math.floor(Math.random()*maxNumber);
        right9 = maxNumber;
        left9 = 0;
        request(num);
    }

    $("#guess-game-restart").click(function () {
        generateNumberGuess();
    });

    $("#guess-game-launch-submit").click(generateNumberGuess);


    function random(left, right) {
        return Math.floor(Math.random()*(right - 1 - left) + left + 1);
    }
    $("#guess-game-button-less").click( function () {
        right9 = num;
        num = random(left9, right9);
        request(num);
        return false;
    });
    $("#guess-game-button-more").click( function (e) {
        left9 = num;
        num = random(left9, right9);
        request(num);
        return false;
    });
    $("#guess-game-button-same").click( function () {
        request("Фух, наконец-то! Думал, что уже не угадаю");
        return false;
    });


});

function request(value) {
    if (typeof value === "string") {
        $("#guess-game-request").html(value);
    } else {
        $("#guess-game-request").html("Ваше число <b>" + value + "</b>?");
    }
}