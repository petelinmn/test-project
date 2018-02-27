
var dt0 = new Date();

function main() {
    if(++i > 10)
        clearInterval(interval);
    else
        console.log(i);
}

setTimeout(
    main,
    1500
);

var i = 0;
var interval = setInterval(main, 1000);

main();
