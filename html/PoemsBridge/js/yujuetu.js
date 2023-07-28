const data_aiqing = [{"name":"银河","star":13},{"name":"西风","star":7},{"name":"蛛丝","star":7},{"name":"梧桐","star":6},{"name":"河汉","star":5},{"name":"双星","star":5}];
const data_biansai =[{"name":"苍龙","star":37},{"name":"天地","star":24},{"name":"草木","star":16},{"name":"四海","star":16},{"name":"春风","star":15},{"name":"风雨","star":14}];
const data_jingwu =[{"name":"东风","star":109},{"name":"梅花","star":95},{"name":"春风","star":93},{"name":"苍龙","star":81},{"name":"流水","star":73},{"name":"西湖","star":54}];
const data_shanshui =[{"name":"苍龙","star":71},{"name":"流水","star":51},{"name":"白云","star":50},{"name":"春风","star":45},{"name":"青山","star":44},{"name":"夕阳","star":42}];
const data_sixiang =[{"name":"春风","star":90},{"name":"东风","star":87},{"name":"流水","star":71},{"name":"秋风","star":60},{"name":"梅花","star":58},{"name":"苍龙","star":53}];
const data_songbie =[{"name":"苍龙","star":140},{"name":"春风","star":76},{"name":"杨柳","star":60},{"name":"流水","star":51},{"name":"风雨","star":41},{"name":"青山","star":41}];
const data_yongshi =[{"name":"春风","star":25},{"name":"苍龙","star":24},{"name":"风雨","star":22},{"name":"秋风","star":17},{"name":"江湖","star":16},{"name":"青田","star":16}];



var option = {
  data:data_aiqing,
  xField: 'name',
  yField: 'star',

  // textAlign: {
  //   fontSize: 8, // 文本大小
  //   fontWeight: 'bold', // 文本粗细
  // },
  // fontSize:8,


  maxAngle: 300, //最大旋转角度,
  radius: 0.8,
  innerRadius: 0.2,
  tooltip: {
    formatter: (datum) => {
      return { name: '频率', value: datum.star };
    },

  //shared: true,
  itemTpl: `
    <div style="text-align: center; position:relative;margin-bottom: 10px;list-style:none;width:80px;">
      <img width="40" height="40" style="margin: 0 auto;" alt="" src="huahua.png">
      <p>
      <span style="background-color:{color};"  class="g2-tooltip-marker" ></span>
     { name: '频率', value: datum.star }</p>

    </div>
    `,
    // formatter: (datum) => {
    //   return `<div style="transform:translate(-50%,-46%)">
    //     <img width="${
    //       (50 / 203) * 231
    //     }" height="${50}" alt="" src="huahua.png">
    //
    //   </div>`;
    // },

  },

  xAxis:
    {
        label: {
          style: {
            fill: '#000000',
            opacity: 0.6,
            fontSize: 7,
          //  fontWeight:80,
          },
          // rotate: true,
        }
      },
  type: 'line',
  startAngle:Math.PI * 0.5 ,
  endAngle:Math.PI * 2.5,
  smooth:true,
  label: {
    style:{
      fontSize: 8,
      fontWeight: 35,
      fill: '#000000',
      textAlign: 'center',
      textBaseline: 'middle',
      shadowColor: 'white',
      shadowBlur: 10,
    }
  },
  animation: true,
  animation: {
  appear: {
      animation: 'wave-in', // Effects of the first animation
      duration: 5000, // Duration of the first animation
    },
  },
  colorField: 'star',
  color: ({ star }) => {
    if (star > 50) {
      return '#5E6E6D';
    } else if (star > 20) {
      return '#5E6E6D';
    }
    return '#C0C4C3';
  },
  barBackground: {
      fillOpacity: 0.25,
  },

  barStyle: { lineCap: 'round' },
  annotations: [
    {
      type: 'text',
      position: ['50%', '50%'],
      content: 'Music',
      style: {
        textAlign: 'center',
        fontSize: 24,
      },
     // //这里或许可以放我们的主题图片
      // type: 'html',
      // position: ['50%', '50%'],

      // html: (container, view) => {
      //   const coord = view.getCoordinate();
      //   const w = coord.polarRadius * coord.innerRadius * 1.15;
        // return `<div style="transform:translate(-50%,-46%)">
        //   <img width="${
        //     (w / 203) * 231
        //   }" height="${w}" alt="" src="https://gw.alipayobjects.com/zos/antfincdn/zrh%24J08soH/AntV%252520LOGO%2525202.png">
        // </div>`;
      //} ,
    },
  ],
};

function change_option(data,img_url,fontSize){

  var new_option = option;
  // var img_url=center;
  new_option.data = data;
  new_option.xAxis.fontSize=fontSize;
  new_option.label.fontSize=fontSize;
  new_option.tooltip.itemTpl= `
    <div style="text-align: center; position:relative;margin-bottom: 10px;list-style:none;width:80px;">
      <img width="60" height="60" style="margin: 0 auto;" alt="" src="${img_url}">
      <p>
      <span style="background-color:{color};"  class="g2-tooltip-marker" ></span>
      频率: {value}</p>

    </div>
    `,
  new_annotations = [
    // {
    //   type: 'text',
    //   position: ['50%', '50%'],
    //   content: center,
    //   style: {
    //     textAlign: 'center',
    //     fontSize: 12,
    //   }
    // },


     // 这里或许可以放我们的主题图片
    {
      type: 'html',
      position: ['50%', '50%'],

      html: (container, view) => {
        const coord = view.getCoordinate();
        const w = coord.polarRadius * coord.innerRadius *2;

        return `<div style="transform:translate(-50%,-46%)">
          <img width="${
            w
          }" height="${w}" alt="" src="${img_url}">
        </div>`;
      }
    },
  ];

  new_option.annotations = new_annotations;

  return new_option;
};


const bar_aiqing= new G2Plot.RadialBar('chart_aiqing', change_option(data_aiqing.reverse(),'photos/yixiang_icon/爱情1.png',10));
const bar_biansai= new G2Plot.RadialBar('chart_biansai',change_option(data_biansai.reverse(),'photos/yixiang_icon/边塞1.png',7));
const bar_jingwu= new G2Plot.RadialBar('chart_jingwu', change_option(data_jingwu.reverse(),'photos/yixiang_icon/景物1.png',7));
const bar_shanshui= new G2Plot.RadialBar('chart_shanshui', change_option(data_shanshui.reverse(),'photos/yixiang_icon/山水1.png',7));
const bar_sixiang= new G2Plot.RadialBar('chart_sixiang', change_option(data_sixiang.reverse(),'photos/yixiang_icon/思乡1.png',7));
const bar_songbie= new G2Plot.RadialBar('chart_songbie', change_option(data_songbie.reverse(),'photos/yixiang_icon/送别1.png',7));
const bar_yongshi= new G2Plot.RadialBar('chart_yongshi', change_option(data_yongshi.reverse(),'photos/yixiang_icon/历史1.png',7));

bar_aiqing.render();
bar_biansai.render();
bar_jingwu.render();
bar_shanshui.render();
bar_sixiang.render();
bar_songbie.render();
bar_yongshi.render();
