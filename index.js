var i = 0;
var title = 'We don\'t learn from success but from failure!';
var speed = 100;

async function typeWriter() {
    if (i < title.length) {
        if (title.charAt(i) === "\n") {
            document.getElementById("welcome-title").innerHTML += "<br>";
        }
        else {
            document.getElementById("welcome-title").innerHTML += title.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// 
