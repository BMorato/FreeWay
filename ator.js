//variaveis ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, 25, 25 );
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor +=3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for (let i = 0 ; i < imagemCarros.length; i++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 60, xAtor, yAtor, 10);
    
    if (colisao){
      voltaAtorParaPontoInicial(); 
      somColisao.play();
      if (meusPontos > 0){ 
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPontoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/5, 27) ;
}

function marcaPonto(){
  if (yAtor < 15 ){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPontoInicial();
  }
  
}