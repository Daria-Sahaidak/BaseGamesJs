$(function () {

    let obj = {
        num: 123,
        "phrase": "hello",
        myArray: [4, 3, 2],
        method: function () {
            console.log(this);
            console.log(this.num);
            console.log("Метод вызван");
        }
    };

    console.log(obj.num, obj.phrase);
    console.log(obj["num"], obj["phrase"]);

    obj.method();
    obj["method"]();

    f(1, 2);
    f.call(obj, 1, 2);
    f.apply(obj, [1, 2]);
});




var num = 10;

function f(x, y) {
    console.log("just function");
    console.log(this);
    console.log(this.num);
    alert(x + y);
}
