# background_sprite
This proto-library has the maths to be able to use sprites as flexible background images.

The function of this library is to allow an image sprite to behave as a background image with the property "background-size" set to "cover".

1. First we collect all the values values need to work(in this examples values are declared within the function but ideally should be pulled from a css archive): 

  a) The size values of the background-image (complete sprite): imgW (image width) imgH (image height). 

  b)  The size values of the sprite that will be visible: sprW (sprite width) sprH (sprite height).

  c)  The background position values for the sprite: posX (background position in the x axis), posY (background positon in the y axis).

  d)  The size values of the container: conW (container width) and conH (container height). (it's possible for the container to have a values of zero, thats dealt with on step 3).

2. Ratio calculator. Image sprites normally are displayed within a fixed width and height of space. Since we want to stretch them, we need to define by how much. To do this will need to calculate the ratio between the width of our sprite (sprW) image and the width of our container (conW). (Width is chosen arbitrarily). 

3. Automatic dimension calculator: If either dimension of the container is not specified, this will set it to the same size of the original sprite.

4. Background size calculator. Defines a new background size (imgW) for the background image of the div.
5. This function calculates the new position values for the background image. The behavoir is similar to the css atribute: background-size: cover;

Next Steps:
This function needs to be modified to be able to be called from a react environment and all it's values to be fed as variables.
