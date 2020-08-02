let a = 10;
let b = 7;

console.log("a+b=" + (a + b));
// alert("world");
if (a > b) {
    console.log("min = " + b);
} else {
    console.log("min = " + a);
}

console.log("min = " + ((a > b) ? b : a));

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

switch (a) {
    case 7: console.log("seven");
        break;
    case 10: console.log("ten");
        break;
    case 20: console.log("twenty");
        break;
}
b = 3;
switch (b) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log("odd");
        break;
    case 2:
    case 4:
    case 6:
    case 8:
        console.log("even");
        break;
}
function hello() {
    alert("Hello world!");
    return false;
}
//hello();
//  1
let c = 7;
b = 7;
a = 5;
if (a >= b && a >= c) {
    console.log("max = " + a);
} else if (b >= a && b >= c) {
    console.log("max = " + b);
} else if (c >= a && c >= b) {
    console.log("max = " + c);
}

//  2
a = 4;
b = 3;
c = 1;
if (a <= b && a <= c) {
    console.log(a);
    if (b < c) {
        console.log(b);
        console.log(c);
    } else {
        console.log(c);
        console.log(b);
    }
} else if (b <= a && b <= c) {
    console.log(b);
    if (a < c) {
        console.log(a);
        console.log(c);
    } else {
        console.log(c);
        console.log(a);
    }
} else if (c <= a && c <= b) {
    console.log(c);
    if (a < b) {
        console.log(a);
        console.log(b);
    } else {
        console.log(b);
        console.log(a);
    }
}

//  3.1
b = 7;
//let d = b % 2;
switch (b % 2) {
    case 0:
        console.log("number b is even");
        break;
    case 1:
        console.log("number b is odd");
        break;
}

//  3.2
b = 8;
if (b % 2 === 0) {
    console.log("number b is even");
} else {
    console.log("number b is odd");
}

//  4
for (let i = 10; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//  5
i = 31;
while (i >= 21) {

    console.log(i);
    i -= 2;
}

//  6
i = 1;
do {
    i += 3;
    console.log(i);
} while (i < 10);