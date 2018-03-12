/*
* 题目:
* 根据题目要求设置图案的颜色和线宽
*/

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// 绘制轮廓颜色为 'rgba(255, 122, 33, 0.5)' 且线宽为 10 的矩形轮廓
context.strokeStyle = 'rgba(255, 122, 33, 0.5)';
context.lineWidth = 10;
context.strokeRect(40, 20, 80, 80);

// 绘制填充颜色为 'green' 的矩形图形
context.fillStyle = 'green';
context.fillRect(20, 120, 120, 60);