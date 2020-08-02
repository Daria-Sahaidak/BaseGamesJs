$(function () {

    $("#guess-game-restart").click(function () {
        left9 = 0;
        right9 = 100;
        num = Math.floor(Math.random()*100);
        request(num);
    });

    //  9: Я загадываю, компьютер отгадывает
    let num = Math.floor(Math.random()*100);
    let right9 = 100;
    let left9 = 0;

    request(num);

    function random(left, right) {
        return Math.floor(Math.random()*(right - 1 - left) + left + 1);
    }
    $("#superButtonLess").click( function () {
        right9 = num;
        num = random(left9, right9);
        request(num);
        return false;
    });
    $("#superButtonMore").click( function (e) {
        left9 = num;
        num = random(left9, right9);
        request(num);
        return false;
    });
    $("#superButtonSame").click( function () {
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