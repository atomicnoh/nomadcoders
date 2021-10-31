
const button = document.querySelector("button");

function clickBtn() {
  const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const shuffle = [];
  while (colors.length > 0) {
    const random = Math.floor(Math.random() * colors.length);
    console.log(random);
    const spliceArray = colors.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
  }

  const chosenColorFirst = shuffle[0];
  const chosenColorSecond = shuffle[1];

  document.body.style.background = `linear-gradient(${chosenColorFirst}, ${chosenColorSecond})`;


  console.log(chosenColorFirst, chosenColorSecond);
}

// function clickBtn() {
//   const chosenColorFirst = colors[Math.floor(Math.random() * colors.length)];
//   const chosenColorSecond = colors[Math.floor(Math.random() * colors.length)];

//   document.body.style.background = `linear-gradient(${chosenColorFirst}, ${chosenColorSecond})`;

//   console.log(chosenColorFirst, chosenColorSecond);
// }

button.addEventListener("click", clickBtn);







