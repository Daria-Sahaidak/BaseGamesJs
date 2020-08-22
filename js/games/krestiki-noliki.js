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


    let s = "";
    for (let j = 0; j < 3; j++){
        s += "<div>";
        for (let i = 0; i < 3; i++){
            s += "<input type='button' id='input-" + (j + 1) + "-" + (i + 1) +  "' class='krestik-nolik-input' value=' '>";
        }
        s += "</div>";
    };

    $("#krestik-nolik-game-main-part").html(s);

    $(".krestik-nolik-input").click(krestikClick);

    let count = 0;  // let k = false;
    function krestikClick(e) {
        // alert(e);
        // alert(e.target);
        // alert($(e.target));
        //$(e.target).css("display", "none");
        //$(e.target).css("visibility", "hidden");

        count++;  // k = !k;
        let value = (count % 2 !== 0) ? "x" : "o";
        // if (k % 2 !== 0){    // if (k == true)  то же самое, что и if (k)
        //     value = "x";
        // } else {
        //     value = "o";
        // }
        let $input = $(e.target);
        if ($input.val() === " ") {
            $input.val(value);
            let id = $input.attr("id");
            let j = parseInt(id[6]) - 1;
            let i = parseInt(id[8]) - 1;
            field[j][i] = value;
            comparison(field[j][i], $input.val());

        } else {
            count--;
        }


        fullArrayComparison(field);
        checkWin();
    }

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


let field = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
];

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