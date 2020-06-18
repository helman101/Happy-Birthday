let words = "BUON CUMPLEANNO!!"; 
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
            title.innerHTML = 'Cariñosa';
            para.innerHTML = 'Tu eres una persona muy calida por dentro, eres un ser de pura ternura que me llena de amor, se que jamas voy a amar a nadie como te amo a ti. un beso, un abrazo o tan solo un roce con tu suave piel, vale mas que cualquier cosa en el mundo';
          break;

        case "btn-two":
            title.innerHTML = 'Linda';
            para.innerHTML = 'Eres la mujer mas hermosa que he visto y voy a ver en mi vida, la linea de tus labios, el contorno de tu rostro, la pureza de tu mirada o la encantadora rebeldia de tu cabello son algunas de las cosas que me enloquecen todos los dias al despertar';
          break;

        case "btn-three":
            title.innerHTML = 'Aventurera';
            para.innerHTML = 'Tienes un espiritu para la aventura increible, cada vez que escucho de los viajes que haz hecho o de las cosas que haz visto o veo tus fotos, de mi surge una "lava" encandecente que no se va a calmar hasta que pueda tomarte de la mano y llevarte de la mano para descubrir nuevos lugares juntos y que me maravilles con lo que tu ya viste';
          break;

        case "btn-four":
            title.innerHTML = 'Unica';
            para.innerHTML = 'Nadie mas en este mundo es como tu, te lo puedo asegurar, ademas nadie es mejor que tu, cada detalle que voy describiendo a lo largo de estas targetitas, hacen de ti una persona especial, el conjunto de tu personalidad te hace una mujer perfecta, una mujer de ensueño y una mujer con la que seria un placer pasar el resto de mi vida';
          break;

        case "btn-five":
            title.innerHTML = 'Divertida';
            para.innerHTML = 'Siempre que estoy a tu lado la paso bien, si entras a algun lugar voy a tener por seguro que seras el alma de la fiesta, porque la energia positiva que se derrama cuando esta tu no tiene comparacion';
          break;

        case "btn-six":
            title.innerHTML = 'Inspiradora';
            para.innerHTML = 'Eres una mujer muy fuerte, yo se que aveces la vida puede golpear muy fuerte, pero tu te sigues levantando y superando las barreras, le pones la cara a todas las situaciones que tienes que enfrentar con seguridad y valentia';
          break;

        case "btn-seven":
            title.innerHTML = 'Animalosa';
            para.innerHTML = 'Tu amor por las criaturas de este mundo me fascina, tu gran corazon, tu amabilidad y tu amor, se ven reflejados en como tratas a los animales y como piensas en ellos, siempre preocupada por los animales aun cuando no son tuyos, ese es el mas grande reflejo de tu pureza';
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




