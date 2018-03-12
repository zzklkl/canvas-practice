/*
* 题目:
* 1、加载图片 （https://ke.qq.com/classroom/assets/lib/img/canvas-logo.png）到画布上
* 2、加载的图片的坐标为（50， 50），图片宽度为 100， 高度为 100
*/

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


// 加载图像
var image = new Image();
// 设置图片加载 onload 事件
image.onload = function () {
    context.drawImage(image, 50, 50, 100, 100);
}
// 设置图片加载地址
image.src = 'https://ke.qq.com/classroom/assets/lib/img/canvas-logo.png';