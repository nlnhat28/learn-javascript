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

function expandTitleJavascript() {
    var bigTitleContainer = document.getElementById("big-title-container");
    if (bigTitleContainer.lastChild.id != "what-is-js") {
        var linknode = document.createElement('a');
        linknode.id = "what-is-js"
        linknode.href = 'https://xuanthulab.net/javascript/';
        linknode.target = "blank";
        linknode.innerText = "What's Javascript?";
        linknode.style.display = "flex";
        linknode.style.justifyContent = "center";
        linknode.style.alignItems = "center";
        linknode.style.fontFamily = 'Consolas';
        linknode.style.fontWeight = 600;
        linknode.style.fontSize = "18px";
        linknode.style.color = "white";
        linknode.style.padding = "10px";
        bigTitleContainer.appendChild(linknode);
    }
    else {
        bigTitleContainer.removeChild(bigTitleContainer.lastChild);
    }
}
