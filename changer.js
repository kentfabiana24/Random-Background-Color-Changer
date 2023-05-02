const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

const colorBtn = document.getElementById("colorBtn");

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
}

colorBtn.addEventListener("click", changeColor);
