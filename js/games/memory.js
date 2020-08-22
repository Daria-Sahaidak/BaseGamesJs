$(function () {
    let m = "";
    m += "<div>";
    console.log(m);
    for (let j = 0; j < 8; j++){
        m += "<input type='button' id='memoryInput-" + (j + 1) + "' class='memory-input' value=' '>";
    }
    m += "</div>";
    console.log(m);
    $("#memory-game-cards").html(m);

    transfer();

    $("#memory-game-launch-submit").click(function () {
        memoryGameInterval(15);
    });

    // $.ajax({url:"data/games-config.json"}).done(function (data) {
    //     let x = data["memory-game"]["cards"];
    //
    //     for (let j = 0; j < 8; j++){
    //         $("#memoryInput-" + (j + 1)).val(x[j]);
    //     }
    // });

    $(".memory-input").click(step);

    $("#memory-game-restart").click(memoryGameRestart);

    function memoryGameRestart(){
        $("#memory-game-request").html(" ");
        for (let j = 0; j < 8; j++){
            $("#memoryInput-" + (j + 1)).css("background-color", "white").css("color", "transparent");
        }

        memoryGameInterval(15);
    }

    $("#memory-game-exit").click(function (e) {
        memoryGameRestart();
        onExit(e);
    });

    $(document).keydown(function (e) {
        if (e.which === 27) {
            // memoryGameClearTimer(k);
            // memoryGameClearTimer(m)
            clearTimeout(timer);
            //clearInterval(b);
        }
    });

    // let b = setInterval(function () {
    //     console.log("interval")
    // }, 1000);
    // let b = setInterval(() => {
    //     console.log("interval")
    // }, 1000);
    // let f = setInterval(() => console.log("interval"), 1000);

});


let interval, timeLeft;
function memoryGameInterval(timeTotal){
    clearInterval(interval);
    timeLeft = timeTotal;
    memoryGameShowTimeLeft();
    interval = setInterval(function () {
        timeLeft--;
        memoryGameShowTimeLeft();
    },1000);


}
function memoryGameShowTimeLeft(){
    if (timeLeft !== 0) {
        $("#memory-game-interval").html("У Вас осталось <b>" + timeLeft + "</b> секунд");
    }
    if (timeLeft === 0){
        clearInterval(interval);
        $("#memory-game-interval").html("Время вышло");
    }
}

let cards = ["a", "b", "d", "b", "c", "c", "d", "a"];

function transfer() {
    for (let j = 0; j < 8; j++){
        $("#memoryInput-" + (j + 1)).val(cards[j]);
    }
}

let countMemory = 0;
let k;
let m;
let timer;
function step(e) {
    $("#memory-game-request").html(" ");
    countMemory++;
    let $input = $(e.target);
    let id = $input.attr("id");
    let j = parseInt(id[12]) - 1;
    $input.css("color", "black");
    if (countMemory % 2 === 1) {
        k = $("#memoryInput-" + (j + 1) + "");
    }
    if (countMemory % 2 === 0){
        m = $("#memoryInput-" + (j + 1) + "");
        if (k.val() === m.val()){
            k.css("background-color", "yellow");
            m.css("background-color", "yellow");
            countMemory = 0;
        } else{
            memoryGameTimer(k, m, 1000);
        }
    }
    console.log(countMemory)
    cheer(function () {
        $("#memory-game-request").html("Нужно собраться!");
        countMemory = 0;
    });
}

function memoryGameTimer(element1, element2, time){
    timer = setTimeout(function(){
        element1.css("color", "transparent");
        element2.css("color", "transparent");
    },time);

}


function cheer(callback) {
    if (countMemory === 8){
        callback();
    }
}