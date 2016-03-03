$(window).load(function(){
  setSpriteSize();
});
function setSpriteSize(){
  // image dimensions.
  var imgW = 450;
  var imgH = 446;
  // sprite dimensions.
  var sprW = 225;
  var sprH = 224;
  // sprite background-position.
  var posX = -225;
  var posY = -224;
  // Container dimensions.
  var conW = $('#sprite-test').width();
  var conH = $('#sprite-test').height();
  // Ratio between the width of the container and the width of the sprite.
  var ratio = conW/sprW;
  // sets container dimensions if they have not been specified.
  if(conW == 0){
    conW= sprW * ratio;
    $('#sprite-test').css('height', conW);
  }
  if(conH == 0){
    conH= sprH * ratio;
    $('#sprite-test').css('height', conH);
  }
  // Calculates background-size based on the ratio.
  $('#sprite-test').css('background-size', imgW * ratio);
  //Adjust background position to comply with the new background size. This process depends on whether the height of the container is bigger than the new calculated height of the sprite.
  if(conH < sprH * ratio){
    var yDisplacement = (sprH * ratio - conH)/2;
    posY = posY * ratio - yDisplacement;
    $('#sprite-test').css('background-position', posX * ratio + ' ' + posY);
  } else if(conH >= sprH * ratio){
    var ratio2 = conH/sprH;
    var xDisplacement = (sprW * ratio2 - conW)/2;
    var posX = posX * ratio2 - xDisplacement;
    $('#sprite-test').css('background-size', imgW * ratio2);
    $('#sprite-test').css('background-position', posX + ' ' + posY * ratio2);
  }
}
