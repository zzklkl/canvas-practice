var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
function requestAnimFrame() {
  // 兼容定义 requestAnimFrame
  window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 30);
  }
};

// 绘制的圆的对象
var circle = {
  x: 250,
  y: 250,
  radius: 50,
  direction: 'right',
  // 移动圆形
  move: function() {
    if (this.direction === 'right') {
      if (this.x <= 430) {
        this.x += 5;
      } else {
        this.direction = 'left';
      }
    } else {
      if (this.x >= 60) {
        this.x -= 5;
      } else {
        this.direction = 'right';
      }
    }
  },
  draw: function() {
    // 绘制圆形
    context.beginPath();
    // 设置开始角度为0，结束角度为 2π 弧度
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#00c09b';
    context.fill();
  }
}
// 动画执行函数
function animate() {
  // 随机更新圆形位置
  circle.move();
  // 清除画布
  context.clearRect(0, 0, canvas.width, canvas.height);
  // 绘画圆
  circle.draw();
  // 使用requestAnimationFrame实现动画循环
  requestAnimationFrame(animate);
}

// 先画第一帧的圆，即初始化的圆
circle.draw();
// 执行animate
animate();        