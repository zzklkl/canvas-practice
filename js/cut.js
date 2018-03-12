var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = new Image();
image.src = 'http://coding.imweb.io/img/p3/retina-pixel.jpg';
image.onload = function () {
    context.drawImage(image, 260, 260, 480, 480, 0, 0, 240, 240);
}