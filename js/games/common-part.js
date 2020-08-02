$(function () {

    $("input").mouseenter(function (e) {
        let input = $(e.target);
       // console.log(input.prop("tagName"));
        input.css("box-shadow", "0 0 5px rgba(0, 0, 0, 0.5)");
    });


    $("input").mouseleave(function (e) {
        let input = $(e.target);
        input.css("box-shadow", "0 0 5px rgba(0, 0, 0, 0)");
    });

    // $(".game-block").hover(function (e) {
    //     let div = $(e.target);
    //     div.css("background-color", "yellow");
    // });

    // $(".game-block").mouseenter(function (e) {
    //     let div = $(e.target);
    //     div.css("background-color", "yellow");
    // });
    //
    // $(".game-block").mouseleave(function (e) {
    //     let div = $(e.target);
    //     div.css("background-color", "transparent");
    // });

    $(".game-block").mouseenter(function (e) {
        $(".game-block").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0)");
        let div = $(e.target);
        if (div.hasClass("game-block")){
            console.log(div.attr("class"));
            div.css("box-shadow", "0 0 10px rgba(0, 0, 150, 0.5)");
        }
    });

    $(".game-block").mouseleave(function (e) {
        $(".game-block").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0)");
        let div = $(e.target);
        if (div.hasClass("game-block")){
            console.log(div.attr("class"));
            div.css("box-shadow", "0 0 10px rgba(0, 0, 0, 0)");
        }
    });



    $(".submit").focus(function (e) {
        let submit = $(e.target);
        submit.css("background-color", "bisque");
    });
    $(".submit").blur(function (e) {
        let submit = $(e.target);
        submit.css("background-color", "transparent");
    });





    $(".click-submit").click(onSubmit);
    // $("#sending-game-submit").unbind();
    //
    // $("#guess-game-submit").click(onSubmit);
    //
    // $("#krestik-nolik-game-submit").click(onSubmit);

    $(".click-exit").click(onExit);


});


function onSubmit(e){
    let $button = $(e.target);
    //     alert($button.parent(".game-block").data("name"));
    // let id = $button.attr("id");
    // let gameName = id.slice(0,-12); 1234
    let gameName = $button.parents(".game-block").data("name");
    $("#" + gameName + "-game-submit").hide();
    $("#" + gameName + "-game-restart-exit-div").show();
    $("#" + gameName + "-game-main-part").show();
    return false;
}

function onExit(e){
    let $button = $(e.target);
    let gameName = $button.parents(".game-block").data("name");
    $("#" + gameName + "-game-submit").show();
    $("#" + gameName + "-game-restart-exit-div").hide();
    $("#" + gameName + "-game-main-part").hide();
    return false;
}

let field = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
];