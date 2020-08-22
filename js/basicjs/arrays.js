$(function () {
    let array = [1, "e", 34, false, [2, 'd']];

    array.forEach(function (value) {
        console.log(value);
    });

    array.forEach(function (value, index) {
        console.log(value, index);
    });

    let obj = {
        abc: 123,
        "xyz": "hello",
        myArray: [4, 3, 2]
    };

    $.each(obj, function (index, value) {    // на jQuery
        console.log(value, index);
    });

    for (let index in obj){
        console.log(obj[index], index)
    }

    Object.keys(obj).map(function (key) {
        console.log(obj[key], key);
    });
    Object.keys(obj).forEach(function (key) {
        console.log(obj[key], key);
    });

    let numbers = [3, 6, 8, 7];
    let squares = numbers.map(function (value) {
        return (value * value);
    });
    console.log(squares);

    let evenNumbers = numbers.filter(function (value) {
        return value % 2 === 0;

    });
    console.log(evenNumbers);
});