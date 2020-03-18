function greet() {
    window.alert("Welcome to this page");
}

function init() {
    document.getElementById("first").src = "https://www.sciencealert.com/images/2019-06/processed/hmm-solar_1024.jpg";
    let images = document.getElementById("container").getElementsByTagName("img");
    images[1].src = "flower2.png";
    images[3].src = "flower2.png";
    document.getElementById("second").innerHTML = "<p> Good Job </p>"

    let image = document.createElement("img");
    image.src = "flower2.png";
    document.getElementById("new_element").appendChild(image);

    let spans = document.getElementById("rainbow").children;
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.color = colors[i];
    }

    var changeSrc = function(event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '')
            console.log(event.target.src);
            if (filename == "flower1.png") {
                event.target.src = "flower2.png";
            } else {
                event.target.src = "flower1.png";
            }
        }
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);


}
function addItem(){
  var value = document.getElementById("shopItem").value;
  var ul = document.getElementById("inter1ul");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  if(document.getElementById("impo").checked){
	  li.style.color="red";
  }
  if(document.getElementById("groc").checked){
	  li.style.textDecoration = "underline";
  }
  ul.appendChild(li);
}
function remove(){
  var value = document.getElementById("itemRemove").value;
  var list = document.getElementById("inter1ul");
  list.removeChild(list.childNodes[value]);
}
  
 
