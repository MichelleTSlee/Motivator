var number = Math.floor(Math.random() * 3) + 1;
console.log(number);

document
  .querySelector("img")
  .setAttribute("src", "images/motivation" + number + ".jpg");
