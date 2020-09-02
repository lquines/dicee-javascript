function shakeDice(){

  let randomNumber1 = getRandomNumber();
  let randomNumber2 = getRandomNumber();
  let headingElement = document.getElementsByTagName("h1")[0];

  // document.getElementsByClassName("img1")[0].setAttribute("src","images/dice" + randomNumber1 + ".png");
  // document.getElementsByClassName("img2")[0].setAttribute("src","images/dice" + randomNumber2 + ".png");

  setImageAttribute("img1", randomNumber1);
  setImageAttribute("img2", randomNumber2);

  if(randomNumber1 > randomNumber2){
    headingElement.innerHTML = "🏅 Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    headingElement.innerHTML = "🏅 Player 2 Wins!";
  }
  else {
    headingElement.innerHTML = "It's A Draw!";
  }
}

function getRandomNumber(){
  return Math.floor(Math.random() * 6) + 1;
}

function setImageAttribute(imgClassName, randomNumber){
  document.getElementsByClassName(imgClassName)[0].setAttribute("src","images/dice" + randomNumber + ".png");
}
