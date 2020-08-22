$(function () {
    $("#alone-game-restart").click(aloneGameLaunch);

    $("#alone-game-launch-submit").click(aloneGameLaunch);


});

function aloneGameLaunch() {
    $("#alone-game-main-part").show();
    $("#alone-game-launch-submit").hide();
    let x = Math.floor(Math.random()*generateMaxNumberCommon("alone-game"));
    let left = 0;
    let right = generateMaxNumberCommon("alone-game");
    let middle;
    let j = 0;
    while (middle !== x){
        j++;
        middle = Math.round((right + left) / 2);
        if (x > middle) {
            left = middle;
        } else if (x < middle) {
            right = middle;
        }
    }

    $("#alone-game-main-part").html("Компьютер нашел нужное число <b>" + x + "</b> за <b>" + j + "</b> попыток");
    $("#alone-game-restart-exit-div").show();
    return false;
}