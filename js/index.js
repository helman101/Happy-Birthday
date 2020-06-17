let words = "FELICE CUMPLEANNO!!"; 
let wordsTwo = "Alla donna più bella, avventurosa e intelligente del mondo!!";
let paragraph = document.getElementById('head-ini');
let paragraphTwo = document.getElementById('head-ini-two');
let paragraphContent = paragraph.innerHTML;
let paragraphContentTwo = paragraphTwo.innerHTML;
let counterTwo = 0;
let counter = 0;
let buttons = document.querySelectorAll('#btn');
let body = document.getElementById('photo');
let mark = false;

buttons.forEach((button) =>  {
  button.addEventListener('click', (e) => {
    if (mark == false){
      let div = document.createElement('div');
      let title = document.createElement('h2');
      let para = document.createElement('p');
      let exit = document.createElement('button');
      div.classList.add('float');
      exit.classList.add('exit');
      title.classList.add('title-float');
      para.classList.add('para-float');
      
      switch (button.value) {
        case "btn-one":
            title.innerHTML = 'Cariñosa'
          break;
      
        default:
          break;
      }

      div.appendChild(exit);
      div.appendChild(title);
      div.appendChild(para);
      body.appendChild(div);

      exit.addEventListener('click', (e) => {
        body.removeChild(div);
      })
    }
  })
})


setInterval(function() {
  if (paragraphContent.length < words.length){
    if (counterTwo < words.length){
      paragraph.innerHTML += words.slice(counterTwo, counterTwo+1);   
      paragraphContent = paragraph.innerHTML; 
    } 
    counterTwo++; 
  }   
}, 150);

setInterval(function() {
  if (paragraphContent.length == words.length){
    if (paragraphContentTwo.length < wordsTwo.length){
      if (counter < wordsTwo.length){
        paragraphTwo.innerHTML += wordsTwo.slice(counter, counter+1);   
        paragraphContentTwo = paragraphTwo.innerHTML; 
      } 
      counter++; 
    } 
  }  
}, 150);




