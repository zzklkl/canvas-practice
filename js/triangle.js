/*
* 题目:
* 在画布上绘制一个三角形轮廓，三角形三个点分别是 (20, 50)、(150, 200)、(20, 200)
* 在画布上绘制一个三角形填充图形，三角形三个点分别是 (180, 140)、(230, 200)、 (180, 200)
*/

// 绘制三角形轮廓
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(20, 50);
context.lineTo(150, 200);
context.lineTo(20, 200);
context.closePath();
// 调用stroke()时不会自动闭合,所以需要调用 closePath() 函数
context.stroke();// 绘制轮廓使用 stroke

// 绘制三角形填充图形
context.beginPath();
context.moveTo(180, 140);
context.lineTo(230, 200);
context.lineTo(180, 200);
// 调用fill()函数时，所有没有闭合的形状都会自动闭合，所以不需要调用 closePath() 函数。
context.fill();//绘制填充区域使用 fill

