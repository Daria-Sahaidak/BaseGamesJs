$(function () {
    $("#alone-game-restart").click(aloneGameSubmit);

    $("#alone-game-submit").click(aloneGameSubmit); 


});

function aloneGameSubmit() {
    $("#alone-game-main-part").show();
    $("#alone-game-submit").hide();
    let x = Math.floor(Math.random()*100);
    let left = 0;
    let right = 100;
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