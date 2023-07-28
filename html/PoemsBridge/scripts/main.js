	// JavaScript Document

	var isStart=0; //引子开始播放
	var isOver=false;  //引子播放完毕

	$(function () { //前景流云运动
	   function runCloud() {
	      $('#front-cloud1 img').animate({"opacity":"0","left":"+=800px"},8000);
	      $('#front-cloud2 img').animate({"opacity":"0","left":"-800px"},8000);
	   }
	   runCloud();
		});

    function add_div() {
        var e = document.getElementById("svg-player");
        var div = document.createElement("div");
        div.id = "svg-player";
        div.innerHTML = e.innerHTML;
        document.getElementById("intro").appendChild(div);
    }


	$(document).ready(function()

 	 {

 	 	$("#n0").click(function(){
			$("#n0 img").attr("src",'images/nav/桥-selected.png');
			$("#n1 img").attr("src",'images/nav/象-off.png');
			$("#n2 img").attr("src",'images/nav/情-off.png');
			$("#n3 img").attr("src",'images/nav/史-off.png');
			$("#n4 img").attr("src",'images/nav/送-off.png');
		});
		$("#n0").mouseover(function(){
		    $("#n0 img").attr("src",'images/nav/桥-on.png');
		})
		$("#n0").mouseout(function(){
		    $("#n0 img").attr("src",'images/nav/桥-off.png');
		})

		 $("#n1").click(function(){
			$("#n1 img").attr("src",'images/nav/象-selected.png');
			$("#n0 img").attr("src",'images/nav/桥-off.png');
			$("#n2 img").attr("src",'images/nav/情-off.png');
			$("#n3 img").attr("src",'images/nav/史-off.png');
			$("#n4 img").attr("src",'images/nav/送-off.png');
		});
		
		$("#n1").mouseover(function(){
		    $("#n1 img").attr("src",'images/nav/象-on.png');
		})
		$("#n1").mouseout(function(){
		    $("#n1 img").attr("src",'images/nav/象-off.png');
		})

		$("#n2").click(function(){
			$("#n2 img").attr("src",'images/nav/情-selected.png');
			$("#n0 img").attr("src",'images/nav/桥-off.png');
			$("#n3 img").attr("src",'images/nav/象-off.png');
			$("#n3 img").attr("src",'images/nav/史-off.png');
			$("#n4 img").attr("src",'images/nav/送-off.png');
		});

		$("#n2").mouseover(function(){
		    $("#n2 img").attr("src",'images/nav/情-on.png');
		})
		$("#n2").mouseout(function(){
		    $("#n2 img").attr("src",'images/nav/情-off.png');
		})
		$("#n3").click(function(){
			$("#n3 img").attr("src",'images/nav/史-selected.png');
			$("#n0 img").attr("src",'images/nav/桥-off.png');
			$("#n1 img").attr("src",'images/nav/象-off.png');
			$("#n2 img").attr("src",'images/nav/情-off.png');
			$("#n4 img").attr("src",'images/nav/送-off.png');
		});
		$("#n3").mouseover(function(){
		    $("#n3 img").attr("src",'images/nav/史-on.png');
		})
		$("#n3").mouseout(function(){
		    $("#n3 img").attr("src",'images/nav/史-off.png');
		})

		$("#n4").click(function(){
			$("#n4 img").attr("src",'images/nav/送-selected.png');
			$("#n0 img").attr("src",'images/nav/桥-off.png');
			$("#n1 img").attr("src",'images/nav/象-off.png');
			$("#n2 img").attr("src",'images/nav/情-off.png');
			$("#n3 img").attr("src",'images/nav/史-off.png');
		});
		$("#n4").mouseover(function(){
		    $("#n4 img").attr("src",'images/nav/送-on.png');
		})
		$("#n4").mouseout(function(){
		    $("#n4 img").attr("src",'images/nav/送-off.png');
		})



 	 	// if(isOver==false){
 	 	// 	//引子未结束以前禁止滚动
 	 	// 	$('body,html').addClass('add');
 	 	// }

 	//  	$(".intro").click(function(){
 	//  		if(isStart==0){
 	//  			isStart=1;
		// 		console.log($(".intro").css('background-size'));
		// 		if( $(".intro").css('background-size') <= "2000"){
		// 		//scene1：用户点击，界面放大，前景消失	
		// 			$(".intro").animate({
  //     					backgroundSize: '+=1200px',
  //    	 				backgroundPosition:'center'
  //   					},4000);
  // 					$(".front-snake").animate({"opacity":"0"},4000);
  // 					$(".front-stretch").animate({"opacity":"0"},4000);
 	//  			}
		// 	}else if(isStart==1){
		// 		isStart=2;
		// 		$("#svg-player").fadeIn(2500).fadeOut(1500);
		// 		//$("#svg-player").classList.add("active");
		// 		//$(".intro").animate({"opacity":"1"},2500);
		// 		//$(".intro").css({"background":"#url(images/background/background2.PNG) no-repeat 0 center;"});
		// 		$("#comic").delay(2000).fadeIn(3000);
		// 		//$("#comic").animate({"opacity":"0.5"},1000);
		// 		// $(".front-snake").animate({"opacity":"1"},1000);
  // 		// 		$(".front-stretch").animate({"opacity":"1"},1000);

  // 				//$("comic-box").fadeIn();
  // 				$('body,html').removeClass('add');
		// 		//$("#许仙").style.animationPlayState="running";
		// 		console.log("step 2!");
		// 	}

		// 	$(".intro").scroll(function(){
		// 		console.log("comic!");
		// 	});

		// });



		// $(".intro").scroll(function(){
		// 	p = $(window).scrollTop();//获取到页面滚动的距离

		// 	var size = 1600;//设置一个背景图片的初始大小
		// 	var speed = p ;//设置背景图片滚动的速度如果不设置数值，那就是随页面滚动，80（随意设置值的大小数值越大滚动速度越慢）
		// 	size += speed //动态设置背景图片的大小
		// 	if (400 < p) {
		// 	$(".intro").css("background-size",size);//向上滚
		// 	}
		// 	else {
		// 	$(".intro").css("background-size",size);//向下滚
		// 	}
		// });


		// $("#time-line").click(function(){
		// 	console.log('area!');
		// 	chart1.render();
		// })

		// $("#container").click(function(){
		// 	console.log('container!')
		// 	//yang.update({ animation: { appear: { easing:'easeElasticInOut',duration: 5000 } } });
		// 	yang.render();
		// 	lu.render();
		// })

		// $(".img2").click(function(){
		// 	var style = document.styleSheets[0];

		// 	console.log(style);

		// 	style.insertRule("@-webkit-keyframes right-spin {from {  -webkit-transform: rotate(0deg);}to {  -webkit-transform: rotate(180deg);  }}");//写入样式
		// 	style.insertRule("@-webkit-keyframes left-spin {from {  -webkit-transform: rotate(0deg);}to {  -webkit-transform: rotate(360deg);}}");//写入样式
		// 	style.insertRule("@-webkit-keyframes close-wrapper {to {  clip: rect(auto, auto, auto, auto);}}");//写入样式
		//  });



	});



	//runCloud();

	