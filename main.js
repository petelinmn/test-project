
var dt0 = new Date();

function main() {

    console.log(new Date() - dt0);

    var dt = new Date();

    var strHello = "Hello";

    var strWorld = "world!!";

    console.log(strHello + " " + strWorld + "! " + dt.getMilliseconds().toString());

    if(++i > 20)
        clearInterval(interval);
    else
        console.log(i);
}

console.log('bp1!');

setTimeout(
    main,
    1500
);

var i = 0;
var interval = setInterval(main, 1000);

main();

console.log('bp2');