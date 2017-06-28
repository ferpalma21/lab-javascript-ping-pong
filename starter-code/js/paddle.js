function Paddle(x,y) {
  this.x=x;
  this.y=y;
}
Paddle.prototype.restart = function(){

};

Paddle.prototype.hitBall = function(ball_y){

};


//Moving user paddle and border movements
$(document).keydown(function(event) {
  var paddleSpeed = 30;
  var y = $('#paddle-user').position().top;

  if(event.keyCode === 40){
    if(y < 350 ){
    $('#paddle-user').css({top: y += paddleSpeed});//Mover pa'bajo
  }
  }else if (event.keyCode === 38) {
    if (y > 0){
    $('#paddle-user').css({top: y -= paddleSpeed});//Mover pa'arriba
  }
  }
});
