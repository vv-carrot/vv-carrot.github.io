
let map1 = [{"name":"扁舟","value":133},{"name":"神仙","value":110},{"name":"阑干","value":101},{"name":"楼台","value":94},{"name":"雕梁","value":89},{"name":"车马","value":85},{"name":"灯火","value":84},{"name":"渔樵","value":75},{"name":"笙歌","value":56},{"name":"丹青","value":55},{"name":"白玉","value":54},{"name":"楼阁","value":52},{"name":"茅屋","value":52},{"name":"道路","value":47},{"name":"蛟龙","value":47},{"name":"凭栏","value":44},{"name":"古寺","value":42},{"name":"园林","value":41},{"name":"画船","value":41},{"name":"高楼","value":40},{"name":"酒旗","value":39},{"name":"图画","value":38},{"name":"野店","value":38},{"name":"旌旗","value":37},{"name":"琵琶","value":35},{"name":"城郭","value":33},{"name":"柴门","value":33},{"name":"故国","value":33},{"name":"赤城","value":26},{"name":"龙门","value":26},{"name":"城东","value":23},{"name":"野寺","value":19},{"name":"维舟","value":18},{"name":"片帆","value":14},{"name":"新亭","value":13}];
let array1 = []

for(let key in map1) {
  let obj = map1[key];
  let name =obj['name'];
  let value =obj['value'];
  array11 = [name,value]
  array1.push(array11);
}
// console.log(array);
var wordCloud = new B2wordcloud(document.getElementById("wordcloud_humanities"), {
    list: array1.splice(0,37),
    // fontFamily:,
    // fontWeight:,
    // minSize:,

    tooltip: {
        show: true,
        backgroundColor: 'rgba(0,0,0,0.3)',
        formatter: function(item) {
            return "<div style='color:#ffffff;'>" + item[0] + "</div>"+ "<div style='textAlign:center;'>" + item[1] + "</div>"
        }
    },
    //maskImage:'',
    shadowColor: 'rgba(0,0,0,0.3)',
    // shadowOffsetX: 1,
    shadowOffsetY: 1,
    shadowBlur: 1,
    color: function (word, weight) {
        if(weight>120)
          valueColor = "#111111"
        else if(weight >100 &&weight<120)
          valueColor="#222222";
        else if(weight >80 &&weight<100)
          valueColor= [ "#444444","#666666"];
        else if(weight >50 &&weight<80)
          valueColor= "#777777";
        else if(weight >0 &&weight<50)
          valueColor= "#999999";
        else valueColor='#BBBBBB'
        // console.log(valueColor);
        return valueColor;
        // return (weight > 12) ? '#f02222' : '#c09292';
      },
    // [[ "#131824","#5E6E6D"],"#C0C4C3" ,['#F2F2F2','#DBDBDB'],'#dbdbdb'],

    gridSize: 12, // 密集程度 数字越小越密集
    weightFactor: 3, // 字体大小=原始大小*weightFactor
    maxFontSize: 20, //最大字号
    minFontSize: 8, //最小字号
    fontWeight: 'bolder', //字体粗细
    fontFamily: "Times New Roman,Georgia,Serif", // 字体
    shape:'pentagon',
    drawOutOfBound:false,
    // color: 'random-light', // 字体颜色 'random-dark' 或者 'random-light'
    backgroundColor: '#FFFFFF00', // 背景颜色,加00透明化
    rotateRatio: 0,// 字体倾斜(旋转)概率，1代表总是倾斜(旋转)
    cursorWhenHover: 'pointer',
    click:function(params){
          console.log('myChart----click---:',params,'------',params[0]);
      }


})

// wordCloud.on('click',function(params){
//     console.log('myChart----click---:',params,'------',params.data);
// })
