var container = document.getElementById('container');
var start = 1;
function loadmore() {
    console.log("hello")
    for (var i = start; i < start + 25; i++) {
        var h4 = document.createElement('h4');
        h4.textContent = 'Masai School' + ' ' + i;
        container.append(h4);
    }
    start = start + 25;
}
var throttleFunction = function(func, delay) {
    if (timerId) {
        return;
    }
    var timerId = setTimeout(function() {
        func();
        timerId = undefined;
    }, delay);
};

container.addEventListener('scroll', function() {
    if (Math.ceil(container.scrollTop) + container.clientHeight >= container.scrollHeight) {
        throttleFunction(loadmore, 1000);
    }
});

window.addEventListener('load', function() {
    loadmore();
});
