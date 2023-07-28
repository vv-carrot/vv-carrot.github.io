// addScript('audio.js');
let map = [{"name":"苍龙","value":406},{"name":"春风","value":346},{"name":"东风","value":260},{"name":"流水","value":259},{"name":"梅花","value":184},{"name":"杨柳","value":162},{"name":"白云","value":158},{"name":"青山","value":149},{"name":"西风","value":145},{"name":"秋风","value":140},{"name":"落日","value":137},{"name":"西湖","value":135},{"name":"夕阳","value":132},{"name":"风月","value":130},{"name":"清风","value":128},{"name":"芳草","value":127},{"name":"斜阳","value":122},{"name":"天台","value":108},{"name":"天地","value":106},{"name":"天涯","value":105},{"name":"春色","value":105},{"name":"桃花","value":104},{"name":"桃李","value":95},{"name":"垂杨","value":94},{"name":"芙蓉","value":87},{"name":"银河","value":83},{"name":"草木","value":82},{"name":"山川","value":80},{"name":"玉虹","value":79},{"name":"烟霞","value":74},{"name":"春水","value":73},{"name":"垂虹","value":72},{"name":"落花","value":71},{"name":"青云","value":64},{"name":"浮云","value":62},{"name":"沧海","value":62},{"name":"洞庭","value":61},{"name":"鸳鸯","value":61},{"name":"烟雨","value":60},{"name":"马蹄","value":60},{"name":"梨花","value":57},{"name":"尘土","value":55},{"name":"风烟","value":55},{"name":"北斗","value":55},{"name":"烟波","value":53},{"name":"细雨","value":51},{"name":"河汉","value":51},{"name":"风雪","value":50},{"name":"燕子","value":49},{"name":"烟水","value":48},{"name":"秋水","value":48},{"name":"溪水","value":47},{"name":"山腰","value":45},{"name":"空山","value":45},{"name":"清溪","value":45},{"name":"远山","value":45},{"name":"绿水","value":44},{"name":"池塘","value":44},{"name":"长江","value":44},{"name":"云烟","value":43},{"name":"山路","value":43},{"name":"百花","value":43},{"name":"三峡","value":43},{"name":"江水","value":43},{"name":"溪山","value":43},{"name":"孤山","value":42},{"name":"杜鹃","value":42},{"name":"春雨","value":41},{"name":"柳色","value":41},{"name":"桃源","value":41},{"name":"荷花","value":41},{"name":"碧云","value":41},{"name":"云间","value":40},{"name":"溪流","value":40},{"name":"暮云","value":39},{"name":"松江","value":39},{"name":"白马","value":39},{"name":"山头","value":38},{"name":"春草","value":38},{"name":"柳条","value":38},{"name":"瀑布","value":38},{"name":"白鹤","value":38},{"name":"水流","value":37},{"name":"九霄","value":37},{"name":"波涛","value":37},{"name":"碧玉","value":37},{"name":"银汉","value":37},{"name":"鱼龙","value":37},{"name":"柳阴","value":37},{"name":"婵娟","value":36},{"name":"乔木","value":36},{"name":"山河","value":36},{"name":"湖山","value":36},{"name":"杏花","value":35},{"name":"梧桐","value":35},{"name":"水面","value":35},{"name":"风云","value":35},{"name":"金石","value":35},{"name":"鲈鱼","value":34},{"name":"鹦鹉","value":34},{"name":"云山","value":34},{"name":"千山","value":34},{"name":"日落","value":33},{"name":"星斗","value":33}];
let array = []

for(let key in map) {
  let obj = map[key];
  let name =obj['name'];
  let value =obj['value'];
  array1 = [name,value]
  array.push(array1);
}
// console.log(array.splice(0,12));

var wordCloud1 = new B2wordcloud(document.getElementById("wordcloud_nature"), {
    list: array.splice(0,37),
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
    drawOutOfBound:false,
    // #283048 #859398

    color: function (word, weight) {
        if(weight>300)
          valueColor = "#111111"
        else if(weight >250 &&weight<=300)
          valueColor="#222222";
        else if(weight >200 &&weight<=250)
          valueColor= [ "#333333","#555555"];
        else if(weight >120 &&weight<=200)
          valueColor= "#666666";
        else if(weight >0 &&weight<120)
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
    // color: 'random-light', // 字体颜色 'random-dark' 或者 'random-light'
    backgroundColor: '#FFFFFF00', // 背景颜色,加00透明化
    rotateRatio: 0,// 字体倾斜(旋转)概率，1代表总是倾斜(旋转)
    cursorWhenHover: 'pointer',
    click:function(params){
          console.log('myChart----click---:',params,'------',params[0]);
          if(params[0].indexOf("水") !== -1){
          }
      }


});
function addScript(url){
    document.write("<script language=javascript src="+url+"></script>");
};
// wordCloud.on('click',function(params){
//     console.log('myChart----click---:',params,'------',params.data);
// })
