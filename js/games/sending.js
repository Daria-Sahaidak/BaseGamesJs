$(function () {

    $("#sending-game-restart").click(function () {
        alert("Компьютер загадал новое число, пробуйте!")
        y = Math.floor(Math.random() * generateMaxNumberCommon("sending-game"));
        $.ajax({url:"win-result.html"}).done(function () {
            $(".win-result").html();
        });
    });


    //  8: Компьютер загадывает, я отгадываю
    let y;
    $("#sending-game-launch-submit").click(function () {
        y = Math.floor(Math.random()*generateMaxNumberCommon("sending-game"));
    });
    $("#sending-game-submit-for-your-try").click( function () {
        let h = parseInt($("#sending-game-input-for-your-try").val());
        if (y === h) {
            // alert("Ура! Вы нашли правильное число");
            $.ajax({url:"win-result.html"}).done(function (phrase) {
                $(".win-result").html(phrase);
            });
        } else if (y < h) {
            alert("Нужное число меньше. Попробуйте еще раз:)");
        } else if (y > h) {
            alert("Нужное число больше. Попробуйте еще раз:)");
        }
        return false;
    });


});