const cor =  [
  "black", "white", "red", "green", "blue",
  "yellow", "orange", "purple", "pink", "brown",
  "gray", "cyan", "magenta", "lime", "maroon",
  "navy", "olive", "teal", "silver", "aqua",
  "fuchsia"
];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
 const randomColor = getRandomColor();
document.body.style.backgroundColor = cor[randomColor]
color.textContent = cor[randomColor]
})

function getRandomColor() {
return Math.floor(Math.random()* cor.length)
}

