var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var x = 120; // 圆角矩形左上角横坐标
var y = 120; // 圆角矩形左上角纵坐标
var width = 250; // 圆角矩形的宽度
var height = 250; // 圆角矩形的高度
var radius = 50; // 圆角的半径

// 开始创建新路径
context.beginPath();
// 绘制左上角圆角
context.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
// 绘制顶边路径
context.lineTo(width - radius + x, y);
// 绘制右上角圆角
context.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
// 绘制右边路径
context.lineTo(width + x, height + y - radius);
// 绘制右下角圆角
context.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
// 绘制底边路径
context.lineTo(radius + x, height +y);
// 绘制左下角圆角
context.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
// 闭合路径 也可使用 context.lineTo(x, y + radius);
context.closePath();
// 设置绘制的颜色
context.strokeStyle = '#188eee';
context.stroke();