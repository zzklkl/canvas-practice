/*
* 题目:
* 1、先擦除画布中的矩形
* 2、擦除后，在画布上绘制一个左上角坐标为 (60, 180)，且宽度为 200 像素，高度为 100 像素的填充矩形
*/

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// kevin 绘制矩形填充区域 (请保留 kevin 好不容易画的矩形)
context.fillRect(20, 120, 120, 60);
context.clearRect(20, 120, 120, 60);
// 拯救的代码
context.fillRect(60, 180, 200, 100);