/*
* 题目:
* 在画布的 (50, 50)上绘制一个描边字体，字体内容为 "描边字体"， 设置字体格式为 '30px arial'
* 在画布的 (50, 100)上绘制一个填充字体，字体内容为 "填充字体"， 设置字体格式为 'italic 60px serif'
*/

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.font = '30px arial';
context.strokeText('描边字体', 50, 50);
context.font = 'italic 60px serif';
context.fillText('填充字体', 50, 100);