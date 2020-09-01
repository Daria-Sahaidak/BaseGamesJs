    let config;

$(function () {

    $.ajax({url:"js/games/games-config.json"}).done(function (data) {
        console.log("config4654763484379");
        config = data;
    });


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
            // console.log(div.attr("class"));
            div.css("box-shadow", "0 0 10px rgba(0, 0, 150, 0.5)");
        }
    });

    $(".game-block").mouseleave(function (e) {
        $(".game-block").css("box-shadow", "0 0 10px rgba(0, 0, 0, 0)");
        let div = $(e.target);
        if (div.hasClass("game-block")){
            // console.log(div.attr("class"));
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





    $(".launch-submit").click(onLaunch);
    // $("#sending-game-launch-submit").unbind();
    //
    // $("#guess-game-launch-submit").click(onLaunch);
    //
    // $("#krestik-nolik-game-launch-submit").click(onLaunch);

    $(".exit-button").click(onExit);

    // $.ajax({url:"js/games/game-blocks-visibility.json"}).done(function (data) {
    //     // Не забыть поставить класс hidden всем .game-block
    //
    //     if(data[".alone-game"])
    //         $(".alone-game").show();
    //     if(data[".sending-game"])
    //         $(".sending-game").show();
    //     if(data[".guess-game"])
    //         $(".guess-game").show();
    //     if(data[".krestik-nolik-game"])
    //         $(".krestik-nolik-game").show();
    //
    // });


    $.ajax({url:"js/games/games-config.json"}).done(function (data) {
        Object.keys(data["visibility"]).forEach(function (key) {
            if (data["visibility"][key]){
                $(key).show();
            }
        })
    });


});


function onLaunch(e){
    let $button = $(e.target);
    //     alert($button.parent(".game-block").data("name"));
    // let id = $button.attr("id");
    // let gameName = id.slice(0,-12); 1234
    let gameName = $button.parents(".game-block");
    gameName.find($(".launch-submit")).hide();
    gameName.find($(".restart-exit-div")).show();
    gameName.find($(".main-part")).show();
    gameName.find($(".mode")).show();

    // $("#" + gameName + "-game-launch-submit").hide();
    // $("#" + gameName + "-game-restart-exit-div").show();
    // $("#" + gameName + "-game-main-part").show();
    return false;
}

function onExit(e){
    let $button = $(e.target);
    let gameName = $button.parents(".game-block");
    gameName.find($(".launch-submit")).show();
    gameName.find($(".restart-exit-div")).hide();
    gameName.find($(".main-part")).hide();
    gameName.find($(".mode")).hide();
    return false;
}


function generateMaxNumberCommon(gameName){
    return config[gameName]["max-number"];
}