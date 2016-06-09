/*(function() {
  'use strict';*/
  
  /*=========Change Image ===================================*/
  
 var myImage = document.querySelector('flower');

myImage.onclick = function(myImage) {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_0420.JPG') {
      myImage.setAttribute ('src','images/IMG_0982.JPG');
    } else {
      myImage.setAttribute ('src','images/IMG_0420.JPG');
    }
} 
/*})();*/

/*==================testing=============*/


document.querySelector('html').onclick = function() {
    alert('Is the Javascript working?');
}