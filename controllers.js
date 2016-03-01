$(window).load(function(){
  setSpriteSize();
});
function setSpriteSize(){
  // container width
  var cw = $('#sprite-test').width();
  var ch = $('#sprite-test').height();
  // image width
  var iw = 450;
  // image height
  var ih = 450;
  // sprite width
  var sw = 225;
  // sprite height
  var sh = 224;
  // sprite background-position
  var bpx = -225;
  var bpy = -224;
  // Ratios
  ratioW = cw/sw;
  ratioH = ch/sh;
  // Calculador de altura para imágenes
  if(ch==0){
    $('#sprite-test').css('height', sh * ratioW);
  }

  if(ratioH*sh<ratioW*sh){
    $('#sprite-test').css('background-size', iw * ratioW);
    var height_positioner = ((sh * ratioW) - $('#sprite-test').height())/2;
    var height_position = bpy * ratioW - height_positioner;
    $('#sprite-test').css('background-position', bpx * ratioW + " " + height_position);
  } else{
    $('#sprite-test').css('background-size', iw * ratioH);
    var width_positioner = ((sh * ratioH) - $('#sprite-test').width())/2;
    var width_position = bpx * ratioH - width_positioner;
    $('#sprite-test').css('background-position', width_position + " " + bpy * ratioH);
  }
}
