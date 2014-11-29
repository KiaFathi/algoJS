/* For simplicity, an image here will be presented as a matrix of pixels.
The image integral function converts an image into its image integral.
In an image integral, each pixel in the new image is the sum of all the 
pixels in the previous image to the left and top of it.

For example:

[[1,2],
 [3,4]]

 after integral:

[[1,3],
 [4,10]]

*/


var imageIntegral = function(image){
  for(var y = 0; y < image.length; y++){
    for(var x = 0; x < image[y].length; x++){
      var isTop = image[y-1] !== undefined;
      var isLeft = image[y][x-1] !== undefined;
      var left = 0,
          top = 0,
          diag = 0;
      if(isTop){
        top = image[y-1][x];
      }
      if(isLeft){
        left = image[y][x-1];
      }
      if(isLeft && isTop){
        diag = image[y-1][x-1];
      }
      image[y][x] = image[y][x] + left + top - diag;
    }
  }
  return image;
};

console.log(imageIntegral([[1,2],[3,4]]));