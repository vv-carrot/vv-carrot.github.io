const { Chart, Animate, Util } = G2;
Animate.registerAnimation('appear', 'delayScaleInY', function(shape, animateCfg) {
  const box = shape.getBBox(); // 获取柱子包围盒
  const origin = shape.get('origin'); // 获取柱子原始数据
  const points = origin.points; // 获取柱子顶点
  // 计算柱子的变换中点
  const centerX = (box.minX + box.maxX) / 2;
  let centerY;
  if (points[0].y - points[1].y <= 0) { // 当顶点在零点之下
    centerY = box.maxY;
  } else {
    centerY = box.minY;
  }
  // 设置初始态
  shape.attr('transform', [
    [ 't', -centerX, -centerY ],
    [ 's', 1, 0.1 ],
    [ 't', centerX, centerY ]
  ]);
  const index = shape.get('index');
  let delay = animateCfg.delay;
  if (Util.isFunction(delay)) {
    delay = animateCfg.delay(index);
  }
  let easing = animateCfg.easing;
  if (Util.isFunction(easing)) {
    easing = animateCfg.easing(index);
  }
  // 设置动画目标态
  shape.animate({
    transform: [
      [ 't', -centerX, -centerY ],
      [ 's', 1, 10 ],
      [ 't', centerX, centerY ]
    ]
  }, animateCfg.duration, easing, animateCfg.callback, delay);
});

const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    x: i,
    y: (Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5
  });
}
const chart = new Chart({
  container: 'c1',
  forceFit: true,
  height: 400
});
chart.axis('x', false);
chart.legend(false);
chart.source(data);
chart.interval()
  .position('x*y')
  .color('y', '#4a657a-#308e92-#b1cfa5-#f5d69f-#f5898b-#ef5055')
  .animate({
    appear: {
      animation: 'delayScaleInY',
      easing: 'easeElasticOut',
      delay(index) {
        return index * 10;
      }
    }
  });
chart.render();