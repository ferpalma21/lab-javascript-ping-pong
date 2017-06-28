function Ball(x,y, paddle1, paddle2) {
  this.direction = 'downRight';
}

Ball.prototype.randomDirection = function() {

};

Ball.prototype.move = function(){
  var that = this;
  var ballSpeed = 7;
  var userVerticalPosition = $('#paddle-user').position().top;
  var userHorizontalPosition = $('#paddle-user').position().right;
  var compVerticalPosition = $('#paddle-computer').position().top;
  var compHorizontalPosition = $('#paddle-computer').position().left;
  var minHeight = 2;
  var maxHeight = 385;
  var minHorizontal = 2;
  var maxHorizontal = 885;
  var intervalId = setInterval(function(){
  var ballHorizontalPosition = $('#ball').position().left;
  var ballVerticalPosition = $('#ball').position().top;



   switch (that.direction) {
     case 'upRight':
     //if to check that ball bounces on paddle

     if ((userVerticalPosition < ballVerticalPosition) &&
     (ballVerticalPosition < userVerticalPosition + 50) &&
     (ballHorizontalPosition < userVerticalPosition) &&
     (ballHorizontalPosition > userVerticalPosition - 10)) {
       console.log("hola");
       that.direction = 'upLeft';
     }
     //if to limit the board and the ball bounces on the wall

     if (ballVerticalPosition > minHeight &&
       ballHorizontalPosition < maxHorizontal) {
      $('#ball').css({top:ballVerticalPosition-=ballSpeed, left:ballHorizontalPosition+=ballSpeed});
    }else if (ballHorizontalPosition > maxHorizontal){
      that.direction = 'upLeft';
    }else {
      that.direction = 'downRight';
    }
       break;

     case 'downRight':
     if ((ballVerticalPosition > userVerticalPosition) &&
     (ballVerticalPosition < userVerticalPosition + 50) &&

     (ballHorizontalPosition > userHorizontalPosition - 20)){
       console.log("adios");
       that.direction = 'downLeft';
     }

     if (ballVerticalPosition < maxHeight && ballHorizontalPosition < maxHorizontal ) {
       $('#ball').css({top:ballVerticalPosition+=ballSpeed, left:ballHorizontalPosition+=ballSpeed});
     }else if (ballHorizontalPosition > maxHorizontal) {
       that.direction = 'downLeft';
     }else{
       that.direction = 'upRight';
     }
       break;

     case 'downLeft':
     if (ballVerticalPosition < maxHeight && ballHorizontalPosition > minHorizontal){
       $('#ball').css({top:ballVerticalPosition+=ballSpeed, left:ballHorizontalPosition-=ballSpeed});
     }else if (ballHorizontalPosition < minHorizontal) {
       that.direction = 'downRight';
     }else{
       that.direction = 'upLeft';
     }
       break;

     case 'upLeft':
     if (ballVerticalPosition > minHeight && ballHorizontalPosition > minHorizontal) {
       $('#ball').css({top:ballVerticalPosition-=ballSpeed, left:ballHorizontalPosition-=ballSpeed});
     }else if(ballHorizontalPosition < minHorizontal){
       that.direction = 'upRight';
     }else {
       that.direction = 'downLeft';
     }
        break;
     default:
   }
 },30);
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
