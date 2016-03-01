# background_sprite
This proto-library has the maths to be able to use sprites as flexible background images.

The function of this library is to allow an image sprite to behave as a background image with the property "background-size" set to "cover".

1. First we collect all the values values need to work(in this examples values are declared within the function but ideally should be pulled from a css archive): 

  a)  The size values of the container: cw (container width) and ch (container height). If a container is empty and no height       has been set, a ladder step in this function will take care of that.

  b)  The size values of the complete sprite: iw (image width) ih (image height).

  c)  The size values of the fragment of the sprite that will be visible: sw (sprite width) sh (sprite height).

  d)  Background position for the sprite: bpx (background position in the x axis), bpy (background positon in the y axis).

2. Ratio calculator. Image sprites normally are displayed within a fixed width and height of space, as we want to stretch them we need to define by how much. To do this will need to calculate two ratios:
  a) ratioW: Is the ratio beween the width of our container (cw) and the width of our fragment (sw).
  b) ratioH: Is the ratio beween the height of our container (cw) and the height of our fragment (sw).

3. Automatic height calculator: The height of a division can come from two parts: a specifically defined hight (in html or css); and from the space that it's content occupies. If we want tou use our function to create an element that would behave like an <img /> we need to give it a height value, this if retreives the fragment's height (sh) and feeds it as a css height value.

4. Size and value calculator. The formula to calculate these values is a bit tricky.  
