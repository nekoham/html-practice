const textColor = ["aqua", "pink", "yellow", "blue", "red", "violet"];
const bgColor = ["red", "green", "blue", "pink", "aqua", "chartreuse"];
var colorSelector = 0;
var timer = null;

function sendmessage() {

    var bgResult = bgColor[colorSelector];
    var textResult = textColor[colorSelector];
    var dateResult = Date();

    if (colorSelector >= 5) {
        colorSelector = 0;
    }
    else {
        colorSelector += 1;
    }

    postMessage([dateResult, bgResult, textResult]);
}

onmessage = function(e) {
    if (e.data == "start") {
        sendmessage();
        timer = setInterval(sendmessage, 1000);
    }
    else if (e.data == "stop") {
        clearInterval(timer);
    }
}
