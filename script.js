let btn = document.querySelector('button');
btn.addEventListener('click',function(){
  // dice 1 ko lagi
  let randomNumber1 = Math.floor(Math.random()*6)+1;
  let randomDiceImage1 = "Dice"+randomNumber1+".svg";
  let randomImageSource1 = "images/"+randomImageSource1; 
  let image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);

  // dice2 ko lagi
  let randomNumber2 = Math.floor(Math.random()*6)+1;
  let randomDiceImage2 = "Dice"+randomNumber2+".svg";
  let randomImageSource2 = "images/"+randomImageSource2; 
  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  // conditional
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🚩 Player 1 wins!';
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 wins! 🚩';
  } else {
    document.querySelector('h1').innerHTML = 'Draw';
  }
});

