function init() {
	/* Task 4 */
let image = document.createElement("img");
    image.src = "flower2.png";
    document.getElementById("new_element").appendChild(image);
	/* Task 5 */
	let spans = document.getElementById("rainbow").children;
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.color = colors[i];
    }
	/* Task 6 */
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