$(function () {
    //$("input").hide();
    // $("input").change(function () {
    //     console.log($("input").val());
    // });
    // $("input[type=submit]").click(hello);
    // $("input[type=submit]").click(hello())
    // $("input[type=submit]").click(false)
    // $("input[type=submit]").click( function () {
    //     alert($("input").val());
    // });
    // $("#sending-game-submit-for-your-try").click( function () {
    //     let num = parseInt($("#sending-game-input-for-your-try").val());
    //     alert(num + 1);
    //     return false;
    // });

    // $("input").keypress(function (e) {
    //     console.log("keypress " + e.which);
    // });
    // $("input").keydown(function (e) {
    //     console.log("keydown " + e.which);
    //     // return false;
    // });
    // $("input").keyup(function (e) {
    //     console.log("keyup " + e.which);
    // });

    //$("input, button").parent(".game-block").css("border", "red 1px solid");
    // // $("input").parent().css("border-color", "red").css("border-width", "1px");

    //$("input").focus();

    // $("p").live(function (e) {
    //     let p = $(e.target);
    //     p.css("border-color", "yellow");
    //     return false;
    // });

    // $("input").select(function (e) {
    //     let input = $(e.target);
    //     input.css("color", "green");
    // });

    //$(".guess-game").find(".submit").click();


    $.ajax({url:"ads/ad2.html"}).done(function (result) {
        $(".ad2").html(result);
    });

    $.ajax({url:"data/example.json"}).done(function (data) {
        console.log(data);
        console.log(data["name"]);
    });



});