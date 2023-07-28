var timeData=[{'num': 0, 'time': -300, 'dynasty': '先秦'}, {'num': 4, 'time': -221, 'dynasty': '秦'}, {'num': 4, 'time': -201, 'dynasty': '汉'}, {'num': 13, 'time': 266, 'dynasty': '魏晋末南北朝'}, {'num': 232, 'time': 581, 'dynasty': '隋'}, {'num': 262, 'time': 618, 'dynasty': '唐'}, {'num': 1735, 'time': 960, 'dynasty': '宋'}, {'num': 11637, 'time': 1115, 'dynasty': '金'}, {'num': 11750, 'time': 1206, 'dynasty': '元'}, {'num': 14135, 'time': 1234, 'dynasty': '金末元初'}, {'num': 14262, 'time': 1276, 'dynasty': '宋末元初'}, {'num': 14757, 'time': 1368, 'dynasty': '明'}, {'num': 25524, 'time': 1616, 'dynasty': '明末清初'}, {'num': 26467, 'time': 1644, 'dynasty': '清'}, {'num': 32413, 'time': 1800, 'dynasty': '清末近现代初'}, {'num': 33073, 'time': 1840, 'dynasty': '近现代'}, {'num': 34602, 'time': 1912, 'dynasty': '民国'}, {'num': 35618, 'time': 1949, 'dynasty': '当代'}, {'num': 37038, 'time': 2000, 'dynasty': '-'}];

  // $(function () {

  //   });
const area = new G2Plot.Area('area-chart', {
data:timeData,
xField: 'time',
yField: 'num',
smooth:true,
autoFit:false,
height:300,
width:1120,

  line:{
    color:'#777777',
    appear: {
    animation: 'wave-in', // 动画效果
    delay:1000,
    duration: 5000,  // 动画执行时间
    },
  },
    tooltip:{
        showTitle: true,
        showMarkers: false,
        domStyles: {
          'g2-tooltip': {
                width:'140px',
                height:'50px',
          },
        },
            customContent: (title, items) => {
              const data = items[0]?.data || {};
              const titleDom = `<div class ="custom-tooltip-title" >${data.time}年  ·  ${data.dynasty}</div>`;
              const temDom = `<div style="textAlign:center;">————————<br>累计诗词数:${data.num}首</div>`;
              return `<div style="text-align:center;margin:5%;">${titleDom} ${temDom}</div>`;
        },
    },


  areaStyle: () => {
    return {
        fill: 'l(270) 0:#E8E4E1 0.5:#777777 1:#000000',
        fillOpacity:0.8,
    };
  },
});
area.render();