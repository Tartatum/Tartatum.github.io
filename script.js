function greet() {
    window.alert("Welcome to this page");
}

function init() {
    document.getElementById("first").src = "https://www.sciencealert.com/images/2019-06/processed/hmm-solar_1024.jpg";

    let spans = document.getElementById("rainbow").children;
    let colors = ["#343e3d", "#607466", "#aedcc0", "#7bd389", "#38e4ae", "#d0fef5", "#fab2ea"];
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.color = colors[i];
    }
}

function addItem() {
    var value = document.getElementById("shopItem").value;
    var ul = document.getElementById("inter1ul");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    if (document.getElementById("impo").checked) {
        li.style.color = "red";
    }
    if (document.getElementById("groc").checked) {
        li.style.textDecoration = "underline";
    }
    ul.appendChild(li);
}

function remove() {
    var value = document.getElementById("itemRemove").value;
    var list = document.getElementById("inter1ul");
    list.removeChild(list.childNodes[value]);
}