/*
* 题目:
* 在画布上绘制一个左上角坐标为 (40, 20)，且宽高为 80 像素的正方形轮廓
* 在画布上绘制一个左上角坐标为 (20, 120)，且宽度为 120 像素，高度为 60 像素的填充矩形
*/

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.strokeRect(40, 20, 80, 80);
context.fillRect(20, 120, 120, 60);