$(function () {

    $("#sending-game-restart").click(function () {
        alert("Компьютер загадал новое число, пробуйте!")
        y = Math.floor(Math.random() * 100);
    });


    //  8: Компьютер загадывает, я отгадываю
    let y = Math.floor(Math.random()*100);
    $("#superSubmit").click( function () {
        let h = parseInt($("#superInput").val());
        if (y === h) {
            alert("Ура! Вы нашли правильное число");
        } else if (y < h) {
            alert("Нужное число меньше. Попробуйте еще раз:)");
        } else if (y > h) {
            alert("Нужное число больше. Попробуйте еще раз:)");
        }
        return false;
    });


});