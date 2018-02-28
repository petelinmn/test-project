
function main(msg) {
    if(++i > 10)
        clearInterval(interval);
    else
        console.log(msg);
}

setTimeout(
    function() { main('timeout') },
    3500
);

var i = 0;
var interval = setInterval(function() { main('interval') }, 1000);

main('global');

