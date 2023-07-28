//import G6 from '@antv/g6';
const colors = ['#aa7065', '#aa935c', '#808a87', '#5f8aaa','#aa90a8','#9aaa6c','#aa988b'];
const imgs = {
  '爱情': {
    src: './images/seg5/爱情总.png',
    width: 150,
    height: 150,
  },
  '边塞': {
    src: './images/seg5/边塞总.png',
    width: 150,
    height: 150,
  },
  '景物': {
    src: './images/seg5/景物总.png',
    width: 150,
    height: 150,
  },
  '山水': {
    src: './images/seg5/山水总.png',
    width: 150,
    height: 150,
  },
  '思乡': {
    src: './images/seg5/思乡总.png',
    width: 150,
    height: 150,
  },
  '送别': {
    src: './images/seg5/送别总.png',
    width: 150,
    height: 150,
  },
  '历史': {
    src: './images/seg5/历史总.png',
    width: 150,
    height: 150,
  },
  '桥&诗': {
    src: './images/seg5/诗核.png',
    width: 150,
    height: 150,
    c:"#000",
  },
  '桥&词': {
    src: './images/seg5/词核.png',
    width: 150,
    height: 150,
    c:"#000",
  },
}

G6.registerEdge(
  'line-growth',
  {
    afterDraw(cfg, group) {
      const shape = group.get('children')[0];
      const length = shape.getTotalLength();
      shape.animate(
        (ratio) => {
          // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
          const startLen = ratio * length;
          // Calculate the lineDash
          const cfg = {
            lineDash: [startLen, length - startLen],
          };
          return cfg;
        },
        {
          repeat: false, // Whether executes the animation repeatly
          duration: 2000, // the duration for executing once
        },
      );
    },
  },
  'cubic-horizontal', 
);

// 放大、变小动画
G6.registerNode(
  'circle-animate',
  {
    afterDraw(cfg, group) {
      // 获取该节点上的第一个图形
      const shape = group.get('children')[0];
      // 该图形的动画
      shape.animate(
        (ratio) => {
          // 每一帧的操作，入参 ratio：这一帧的比例值（Number）。返回值：这一帧需要变化的参数集（Object）。
          // 先变大、再变小
          const diff = ratio <= 0.5 ? ratio * 10 : (1 - ratio) * 10;
          let radius = cfg.size;
          if (isNaN(radius)) radius = radius[0];
          // 返回这一帧需要变化的参数集，这里只包含了半径
          return {
            r: radius / 2 + diff,
          };
        },
        {
          // 动画重复
          repeat: true,
          duration: 3000,
          easing: 'easeCubic',
        },
      ); // 一次动画持续的时长为 3000，动画效果为 'easeCubic'
    },
  },
  'circle',
); // 该自定义节点继承了内置节点 'circle'，除了被复写的 afterDraw 方法外，其他按照 'circle' 里的函数执行。


const mapImgScale = 0.5;
let minPop = Infinity;
let maxPop = -Infinity;
let minBrightness = Infinity;
let maxBrightness = -Infinity;
const leafSizeRange = [10, 100];


G6.registerNode(
  'circle-bar',
  {
    drawShape(cfg, group) {
      const dist2Ori = Math.sqrt(cfg.x * cfg.x + cfg.y * cfg.y);
      const vecToOrin = [cfg.x / dist2Ori, cfg.y / dist2Ori]; //sin与cos值
      const startPoint = [(vecToOrin[0] * cfg.size) / 2, (vecToOrin[1] * cfg.size) / 2];
      const scale = cfg.frequency;
      const path = [
        ['M', startPoint[0], startPoint[1]],
        ['L', vecToOrin[0] * scale + startPoint[0], vecToOrin[1] * scale + startPoint[1]],
      ];

      // let count = 0;
      var t=parseInt(cfg.id/20);
      const keyShape = group.addShape('circle', {
        attrs: {
          x: 0,
          y: 0,
          r: cfg.size / 2,
          fill: colors[t],
          shadowColor: "#fff",
          shadowBlur: 40,
          opacity:0.5,
        },
      });
      const bar = group.addShape('path', {
        attrs: {
          path,
          lineWidth: 4,
          fill: colors[t],
          stroke: colors[t],
          shadowColor: "#fff",
          shadowBlur: 20,
          opacity:0.5,
        },

      });

      return keyShape;

    },
  },
  'circle',
);


G6.registerNode(
  'circle-bar0',
  {
    drawShape(cfg, group) {
      const dist2Ori = Math.sqrt(cfg.x * cfg.x + cfg.y * cfg.y);
      const vecToOrin = [cfg.x / dist2Ori, cfg.y / dist2Ori]; //sin与cos值
      const startPoint = [(vecToOrin[0] * cfg.size) / 2, (vecToOrin[1] * cfg.size) / 2];
      const scale = cfg.frequency;
      const path = [
        ['M', startPoint[0], startPoint[1]],
        ['L', vecToOrin[0] * scale + startPoint[0], vecToOrin[1] * scale + startPoint[1]],
      ];

      // let count = 0;
      var t=parseInt(cfg.id/12);
      const keyShape = group.addShape('circle', {
        attrs: {
          x: 0,
          y: 0,
          r: cfg.size / 2,
          fill: colors[t],
          shadowColor: "#fff",
          shadowBlur: 40,
          opacity:0.5,
        },
      });
      const bar = group.addShape('path', {
        attrs: {
          path,
          lineWidth: 4,
          fill: colors[t],
          stroke: colors[t],
          shadowColor: "#fff",
          shadowBlur: 20,
          opacity:0.5,
        },

      });

      return keyShape;

    },
  },
  'circle',
);


fetch('./主题诗人统计.json',
      {
        method:'GET',
        mode:'cors',// 允许发送跨域请求
        credentials: 'include'
      })
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById('container-shi');
    const graph = new G6.TreeGraph({
      container: 'container-shi',
      width:400,
      height:400,
      linkCenter: true,
      modes: {
        default: [
          {
        type: 'tooltip', // 提示框
        formatText(model) {
          // 提示框文本内容
          const text =  model.value + '<br/>————<br/> 总计: ' + model.frequency;
          return text;
          },
        },
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.get('model');
              data.collapsed = collapsed;
              return true;
            },
          },

          'drag-canvas',
          'zoom-canvas',
          'drag-node',

        ],
      },
      defaultNode: {
        type: 'circle',
        size: 100,
      },
      defaultEdge: {
        type:'line-growth',
        style: {
        stroke : "#888888",
        lineWidth:1,
        },
        autoRotate: true,


      },
      nodeStateStyles: {
        hover: {
          stroke: '#fff',
          lineWidth: 6,
        },
      },
      layout: {
        type: 'dendrogram',
        direction: 'LR',
        nodeSep: 50,  //结点间距
        rankSep: 270, //层间距
        radial: true,
      },
    });

    graph.node(function (node) {
      let l=node.id;
      let s=node.size;
      let type = 'circle';
      if (!isNaN(Number(node.id))) type='circle-bar';
      if (node.img) type = 'image';
        switch (l) {
        case '爱情':
          l = '爱情类';
          break;
        case '边塞':
          l = '边塞类';
          break;
        case '景物':
          l = '景物类';
          break;
        case '山水':
          l = '山水类';
          break;
        case '思乡':
          l = '思乡类';
          break;
        case '送别':
          l = '送别类';
          break;
        case '历史':
          l = '历史类';
          break;
        default:
          l=node.value;
          break;
      }
      return {
        type,
        //label: l,
        size: node.size,
        labelCfg: {
          position: 'center',
          style: {
            fill: '#000',
            fontSize: 10,
          },
        },
      };
    });


    const sizeScale = leafSizeRange[1] - leafSizeRange[0];
    G6.Util.traverseTree(data, (item) => {
      if (isNaN(Number(item.id))) { //非叶子结点
        if (imgs[item.id]) {
          item.img = imgs[item.id].src;
          item.size = item.size*2; //类别节点
        } else { 
          item.size = item.size;
        }
        item.style = {
          shadowColor: '#fff',
          shadowBlur: 200,
        };
      } else {//叶子结点
        item.size = item.size*0.8;
      }
      if (item.id === '桥&诗'||item.id === '桥&词') {
        item.size = 200;//[559 * mapImgScale, 464 * mapImgScale];
        item.style.shadowBlur = 100;
        item.img = imgs[item.id].src;
      }
    });

    graph.data(data);
    graph.render();
    graph.fitView();


    graph.on('node:mouseenter', (e) => {
      graph.setItemState(e.item, 'hover', true);
    });
    graph.on('node:mouseleave', () => {
      graph.getNodes().forEach((node) => {
        graph.setItemState(node, 'hover', false);
      });
    });

    if (typeof window !== 'undefined')
      window.onresize = () => {
        if (!graph || graph.get('destroyed')) return;
        if (!container || !container.scrollWidth || !container.scrollHeight) return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };
   });

fetch('./主题词人统计.json',
      {
        method:'GET',
        mode:'cors',// 允许发送跨域请求
        credentials: 'include'
      })
  .then((res) => res.json())
  .then((data) => {
    const graph = new G6.TreeGraph({
      container: 'container-ci',
      width:400,
      height:400,
      linkCenter: true,
      modes: {
        default: [
          {
        type: 'tooltip', // 提示框
        backgroundColor: 'rgba(0,0,0,0.3)',
        formatText(model) {
          // 提示框文本内容
          const text =  model.value + '<br/>————<br/> 总计: ' + model.frequency;
          return text;
          },
        },
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.get('model');
              data.collapsed = collapsed;
              return true;
            },
          },

          'drag-canvas',
          'zoom-canvas',
          'drag-node',

        ],
      },
      defaultNode: {
        type: 'circle',
        size: 100,
      },
      defaultEdge: {
        style: {
        stroke : "#444",
        lineWidth:1,
        },
        autoRotate: true,
        type:'cubic-horizontal',
      },
      nodeStateStyles: {
        hover: {
          stroke: '#fff',
          lineWidth: 6,
        },
      },
      layout: {
        type: 'dendrogram',
        direction: 'LR',
        nodeSep: 50,  //结点间距
        rankSep: 270, //层间距
        radial: true,
      },
    });

    graph.node(function (node) {
      let l=node.id;
      let s=node.size;
      let type = 'circle';
      if (!isNaN(Number(node.id))) type='circle-bar0';
      if (node.img) type = 'image';
        switch (l) {
        case '爱情':
          l = '爱情类';
          break;
        case '边塞':
          l = '边塞类';
          break;
        case '景物':
          l = '景物类';
          break;
        case '山水':
          l = '山水类';
          break;
        case '思乡':
          l = '思乡类';
          break;
        case '送别':
          l = '送别类';
          break;
        case '历史':
          l = '历史类';
          break;
        default:
          l=node.value;
          break;
      }
      return {
        type,
        //label: l,
        size: node.size,
        labelCfg: {
          position: 'center',
          style: {
            fill: '#000',
            fontSize: 10,
          },
        },
      };
    });


    const sizeScale = leafSizeRange[1] - leafSizeRange[0];
    G6.Util.traverseTree(data, (item) => {
      if (isNaN(Number(item.id))) { //非叶子结点
        if (imgs[item.id]) {
          item.img = imgs[item.id].src;
          item.size = item.size*2; //类别节点
        } else { 
          item.size = item.size;
        }
        item.style = {
          shadowColor: '#fff',
          shadowBlur: 200,
        };
      } else {//叶子结点
        item.size = item.size*1.2;
      }
      if (item.id === '桥&诗'||item.id === '桥&词') {
        item.size = 200;//[559 * mapImgScale, 464 * mapImgScale];
        item.style.shadowBlur = 100;
        item.img = imgs[item.id].src;
      }
    });

    graph.data(data);
    graph.render();
    graph.fitView();

    graph.on('node:mouseenter', (e) => {
      graph.setItemState(e.item, 'hover', true);
    });
    graph.on('node:mouseleave', () => {
      graph.getNodes().forEach((node) => {
        graph.setItemState(node, 'hover', false);
      });
    });

    // if (typeof window !== 'undefined')
    //   window.onresize = () => {
    //     if (!graph || graph.get('destroyed')) return;
    //     if (!container || !container.scrollWidth || !container.scrollHeight) return;
    //     graph.changeSize(container.scrollWidth, container.scrollHeight);
    //   };
   });


$(function () {
  //$("#container-shi").slideDown();
  //$("#container-ci").slideUp();
  $("#container-ci").hide();
  $(".topic-shi input").click(function(){
  console.log("切换到诗!");
      // $("#container-ci").hide();
      // $("#container-shi").show();
      $("#container-ci").slideUp();
      $("#container-shi").slideDown();
});

$(".topic-ci input").click(function(){
  console.log("切换到词!");
      // $("#container-shi").hide();
      // $("#container-ci").show();
      $("#container-shi").slideUp();
      $("#container-ci").slideDown();
});
});

