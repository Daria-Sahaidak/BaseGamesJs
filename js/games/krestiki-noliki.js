
let field = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
];

$(function () {
    $("#krestik-nolik-game-exit").click(function (e) {
        $("#krestik-nolik-game-restart").click();
        return onExit(e);
    });

    $("#krestik-nolik-game-restart").click(function () {
        for (let j = 0; j < 3; j++){
            for (let i = 0; i < 3; i++){
                field[j][i] = " ";
                $("#input-" + (j + 1) + "-" + (i + 1)).val(" ");
            }
        }
    });

    $("#krestik-nolik-game-launch-submit").click(function (e) {

        $("#krestik-nolik-game-launch-submit").hide();
        $("#krestik-nolik-game-mode").show();
        // $("#krestik-nolik-game-restart-exit-div").hide();
        // $("#krestik-nolik-game-main-part").hide();

        //
        // onLaunch(e);
    });

    $("#krestik-nolik-game-mode-one-player").click(function (e) {
        krestikNolikQuotesStart();
        gameMode = 1;
        clickRandom();
        $("#krestik-nolik-game-whose-turn").hide();
    });
    $("#krestik-nolik-game-mode-two-players").click(function (e) {
        krestikNolikQuotesStart();
        gameMode = 2;
        twoPlayersModeTimer = setTimeout(turnCountdown,5000);
        showWhoseTurn();
        krestikiNolikiGameInterval(5);
        $("#krestik-nolik-game-whose-turn").hide();
    });

    function krestikNolikQuotesStart(){
        $.ajax({url:"js/games/games-config.json"}).done(function (data) {
            let x = data["krestik-nolik-game"]["quotes"];
            let y;
            setInterval(function () {
                y = Math.floor(Math.random() * x.length);
                $("#krestik-nolik-game-quotes").html(x[y]);
            }, 5000)

        });
    }


    let s = "";
    for (let j = 0; j < 3; j++){
        s += "<div>";
        for (let i = 0; i < 3; i++){
            s += "<input type='button' id='input-" + (j + 1) + "-" + (i + 1) +  "' class='krestik-nolik-input' value=' '>";
        }
        s += "</div>";
    }

    $("#krestik-nolik-game-field").html(s);

    $(".krestik-nolik-input").click(krestikNolikFieldClick);

    function krestikNolikFieldClick(e) {
        if (gameMode === 1) {
            onePlayerMode(e);
        } else if (gameMode === 2) {
            twoPlayersMode(e);
        } else {
            alert("Что-то явно пошло не так :(");
        }
    }
    
    
    $(".krestik-nolik-game-mode-touch").click(function () {
        $("#krestik-nolik-game-mode").hide();
        $(".krestik-nolik-game-quotes").show();
        $(".krestik-nolik-game-whose-turn").show();
        $(".krestik-nolik-game-field").show();
        $("#krestik-nolik-game-restart").show();
        $("#krestik-nolik-game-exit").show();
    });


    
    $("#krestik-nolik-game-restart").click(function () {
        $("#krestik-nolik-game-mode").show();
        $(".krestik-nolik-game-quotes").hide();
        $(".krestik-nolik-game-whose-turn").hide();
        $(".krestik-nolik-game-field").hide();
        $("#krestik-nolik-game-restart").hide();
        $("#krestik-nolik-game-exit").hide();
    });
    
    // $.ajax({url:"data/field-change.json"}).done(function (data) {
    //     let x = data["field"] ;
    //
    //     for (let j = 0; j < 3; j++){
    //         for (let i = 0; i < 3; i++) {
    //             field[j][i] = x[j][i];
    //             $("#input-" + (j + 1) + "-" + (i + 1)).val(x[j][i]);
    //         }
    //     }
    // });



});

let gameMode;

function turnCountdown(){
    count++;
    showWhoseTurn();
    twoPlayersModeTimer = setTimeout(turnCountdown,5000);
    clearInterval(krestikiNolikiInterval);
    krestikiNolikiGameInterval(5);
}

let twoPlayersModeTimer;
let count = 0;
function twoPlayersMode(e) {

    let value = (count % 2 !== 0) ? "x" : "o";
    let $input = $(e.target);
    if ($input.val() === " ") {
        clearTimeout(twoPlayersModeTimer);
        twoPlayersModeTimer = setTimeout(turnCountdown,5000);
        count++;
        showWhoseTurn();
        $input.val(value);
        let id = $input.attr("id");
        let j = parseInt(id[6]) - 1;
        let i = parseInt(id[8]) - 1;
        field[j][i] = value;
        comparison(field[j][i], $input.val());
        clearInterval(krestikiNolikiInterval);
        krestikiNolikiGameInterval(5);
    }
    fullArrayComparison(field);
    checkWin();
}

function showWhoseTurn() {
    if (count % 2 !== 0) {
        $("#krestik-nolik-game-whose-turn").html("Ходят крестики");
    } else {
        $("#krestik-nolik-game-whose-turn").html("Ходят нолики");
    }
}




function comparison(fieldElement, inputElement){
    if (fieldElement !== inputElement){
        alert("Символы не совпадают");
    } else {
        return;
    }
}

function fullArrayComparison(arrayField){
    for (let j = 0; j < 3; j++){
        for (let i = 0; i < 3; i++){
            if (arrayField[j][i] !== $("#input-" + (j + 1) + "-" + (i + 1)).val()){
                alert("Символы не совпадают");
            } else {
                return;
            }
            //checkWin(arrayField);
        }
    }
}




function showWinPhrase(winnerSymbol){
    $.ajax({url:"win-result.html"}).done(function (phrase) {
        $(".win-result").html(phrase);
        if (winnerSymbol === "x"){
            $("#win-result-symbol").html("крестики")
        }
        if (winnerSymbol === "o"){
            $("#win-result-symbol").html("нолики")
        }
    });
}


function checkWin(){
    for (let i = 0; i < 3; i++){
        if ((field[i][0] !== " ") && (field[i][0] === field[i][1]) && (field[i][0] === field[i][2])){
            showWinPhrase(field[i][0]);
        }
        if ((field[0][i] !== " ") && (field[0][i] === field[1][i]) && (field[0][i] === field[2][i])){
            showWinPhrase(field[0][i]);
        }
    }
    if ((field[0][0] !== " ") && (field[0][0] === field[1][1]) && (field[1][1] === field[2][2])){
        showWinPhrase(field[0][0]);
    }
    if ((field[0][2] !== " ") && (field[0][2] === field[1][1]) && (field[1][1] === field[2][0])){
        showWinPhrase(field[0][2]);
    }
}

function onePlayerMode(e){
    let $input = $(e.target);
    if ($input.val() === " ") {
        $input.val("o");
        let id = $input.attr("id");
        let j = parseInt(id[6]) - 1;
        let i = parseInt(id[8]) - 1;
        field[j][i] = "o";
        comparison(field[j][i], $input.val());
        clickRandom();
        checkWin();
    }
}

function clickRandomRecurs(){
    let x = Math.floor(Math.random()*9);
    let j = Math.ceil(x / 3);
    let i = Math.ceil(x % 3);
    if ($("#input-" + (j + 1) + "-" + (i + 1)).val(" ")) {
        $("#input-" + (j + 1) + "-" + (i + 1)).val("x");
        field[j][i] = "x";
    } else {
        clickRandomRecurs();
    }
}

function clickRandom(){
    while (true) {
        let x = Math.floor(Math.random()*9);
        let j = Math.floor(x / 3);
        let i = x % 3;
        if (field[j][i] === " ") {
            $("#input-" + (j + 1) + "-" + (i + 1)).val("x");
            field[j][i] = "x";
            break;
        }
        // clickRandomSetCoordinates(j, i);
    }
}

function  clickRandomSetCoordinates(a, b){
    if (field[a][b] === " ") {
        $("#input-" + (a + 1) + "-" + (b + 1)).val("x");
        field[a][b] = "x";
    }
}








let krestikiNolikiInterval, krestikiNolikiTimeLeft;
function krestikiNolikiGameInterval(timeTotal){
    clearInterval(krestikiNolikiInterval);
    krestikiNolikiTimeLeft = timeTotal;
    krestikiNolikiGameShowTimeLeft();
    krestikiNolikiInterval = setInterval(function () {
        krestikiNolikiTimeLeft--;
        krestikiNolikiGameShowTimeLeft();
    },1000);


}
function krestikiNolikiGameShowTimeLeft(){
    if (krestikiNolikiTimeLeft !== 0) {
        $("#krestiki-noliki-game-time-left").html("У Вас осталось <b>" + krestikiNolikiTimeLeft + "</b> секунд");
    }
    if (timeLeft === 0){
        clearInterval(interval);

    }
}