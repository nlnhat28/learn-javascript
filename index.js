var i = 0;
var title = 'We don\'t learn from success but from failure!';
var speed = 100;

function windowLoad(){
    typeWriter();
    initComponents();
}
async function typeWriter() {
    if (i < title.length) {
        if (title.charAt(i) === "\n") {
            document.getElementById("welcome-title").innerHTML += "<br>";
        }
        else {
            document.getElementById("welcome-title").innerHTML += title.charAt(i);
        }
        i++;
        await setTimeout(typeWriter, speed);
    }
}
function initComponents() {
    var linkPrevent = document.getElementById('prevent-default-item');
        linkPrevent.addEventListener("click", function(event) {
            event.preventDefault();
            alert('Item preventDefault is clicked but link is not redirected');
    });

    var navbar = document.getElementById('navbar');
    navbar.addEventListener("click", function() {
        alert('navbar is clicked');
    });
    var linkStopPropa = document.getElementById('stop-propagation-item');
    linkStopPropa.addEventListener("click", function(event) {
        event.stopPropagation();
        alert('Item stopPropagation is clicked, not navbar');
    });
    navbar.childNodes.forEach((element) => {
        element.addEventListener("click", function(event){
        event.stopPropagation();
        });
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function changeIconJs1() {
    var img = document.getElementById('icon-js');
    img.src = 'images/icon-js-1.png';
}
function changeIconJs2() {
    var img = document.getElementById('icon-js');
    img.src = 'images/icon-js-2.png';
}
function expandTitleJavascript() {
    var bigTitleContainer = document.getElementById("big-title-container");
    if (bigTitleContainer.lastChild.id != "what-is-js") {
        var linknode = document.createElement('a');
        linknode.id = "what-is-js"
        linknode.href = 'https://en.wikipedia.org/wiki/JavaScript';
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
function openFeedbackForm(){
    document.getElementById('dialog-feedback').showModal();
}
function closeFeedbackForm(){
    document.getElementById('dialog-feedback').close();
}