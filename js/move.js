var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var rect = {
  x: 100, // 矩形的 x 坐标
  y: 400, // 矩形的 y 坐标
  width: 100, // 矩形的宽度
  height: 100, // 矩形的高度
  step: 30 // 矩形移动的步伐
}
 // 全局监听键盘操作的 keydown 事件 
document.onkeydown = function(e) {  
  // 获取被按下的键值 (兼容写法)
  var key = e.keyCode || e.which || e.charCode;
  switch(key) {
    // 点击左方向键
    case 37:
      rect.x -= 20;
      drawRect();
      break;
    // 点击上方向键
    case 38: 
      rect.y -= 20;
      drawRect();
      break;
    // 点击右方向键
    case 39: 
      rect.x += 20;
      drawRect();
      break;
    // 点击下方向键
    case 40: 
      rect.y += 20;
      drawRect();
      break;
  } 
};

function drawRect() {
  // 清除画布
  context.clearRect(0, 0, canvas.width, canvas.height);
  // 绘制矩形
  context.fillRect(rect.x, rect.y, rect.width, rect.height)
}

// 第一次绘制
drawRect();


