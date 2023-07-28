	// JavaScript Document
	var isRender0=false;
	var isRender1=false;
	var isRender2=false;
	$(window).scroll(function(){
		var divHeight = $(window).height()*1;	
		var divIndex = $(window).scrollTop() / divHeight;
		//$("#intro").fadeOut(3000);
		console.log(divIndex);
		//console.log(divHeight);
		
		p = $(window).scrollTop();//获取到页面滚动的距离
		console.log(p);
		// var size = 1400;//设置一个背景图片的初始大小
		// var speed = p ;//设置背景图片滚动的速度如果不设置数值，那就是随页面滚动，80（随意设置值的大小数值越大滚动速度越慢）
		// size += speed //动态设置背景图片的大小
		// if (400 < p) {
		// $("#scene1").css("background-size",size);//向上滚
		// }
		// else {
		// $("#scene1").css("background-size",size);//向下滚
		// }
		
		//漫画窗口放大缩小
		// var m = p /2;
		// var motion1=350;
		// motion1+=m;
		// $(".m1").css("left",motion1);
		// var motion2=500;
		// motion2-=m;
		// $(".m2").css("left",motion2);
		// if(p>200&&p<400){
		// 	$(".m2Say").css("opacity",(p-200)/200);
			
		// };

		// if(p==600){
		// 	$(".m3 #pic1").delay(1000).fadeOut(3000);
		// 	$(".front-snake img").fadeOut(3000);
		// 	$(".front-stretch img").fadeOut(3000);

		// }
		setTimeout(function() {
		t = p;//页面当前的位置
		}, 0)
		// if(p>1000){

		// 		console.log('hei!')
		// 		var style = document.styleSheets[0];

		// 		console.log(style);

		// 		style.insertRule("@-webkit-keyframes right-spin {from {  -webkit-transform: rotate(0deg);}to {  -webkit-transform: rotate(180deg);  }}");//写入样式
		// 		style.insertRule("@-webkit-keyframes left-spin {from {  -webkit-transform: rotate(0deg);}to {  -webkit-transform: rotate(360deg);}}");//写入样式
		// 		style.insertRule("@-webkit-keyframes close-wrapper {to {  clip: rect(auto, auto, auto, auto);}}");//写入样式
		// };

		if(p>1400&&isRender0==false){
				bar_aiqing.render();
				bar_biansai.render();
				bar_jingwu.render();
				bar_shanshui.render();
				bar_sixiang.render();
				bar_songbie.render();
				bar_yongshi.render();
				isRender0=true;
		}

		if(p>1600&&isRender1==false){
				yang.render();
				lu.render();
				isRender1=true;
		}
		if(p>2600&&isRender2==false){
				chart1.render();
				isRender2=true;
		}
			console.log("idx",divIndex);
			if (divIndex < 0.6) {
				$("#n0 img").attr("src",'images/nav/桥-off.png');
				$("#n1 img").attr("src",'images/nav/象-off.png');
				$("#n2 img").attr("src",'images/nav/情-off.png');
				$("#n3 img").attr("src",'images/nav/史-off.png');
				$("#n4 img").attr("src",'images/nav/送-off.png');	
			}
			// 对于模块元素添加鼠标中键响应事件
			$("#n0").append(function() {
			            
	            if (divIndex >= 0.6 && divIndex < 1.35) {
					$("#n0 img").attr("src",'images/nav/桥-selected.png');
				}
				else {				
					$("#n0 img").attr("src",'images/nav/桥-off.png');	
				}	
						
			});
					
			
			$("#n1").append(function() {
	            if (divIndex >= 1.35 && divIndex < 2.6) {
					$("#n1 img").attr("src",'images/nav/象-selected.png');
				}
				else {				
					$("#n1 img").attr("src",'images/nav/象-off.png');	
				}			
				
			});
			
			$("#n2").append(function() {
	            
				if (divIndex >= 2.6 && divIndex < 3.6) {
					$("#n2 img").attr("src",'images/nav/情-selected.png');
			}
				else {				
					$("#n2 img").attr("src",'images/nav/情-off.png');	
				}	
			});
			
			$("#n3").append(function() {
	           
				if (divIndex >= 3.6 && divIndex < 5) {
					$("#n3 img").attr("src",'images/nav/史-selected.png');
			}
				else {				
					$("#n3 img").attr("src",'images/nav/史-off.png');	
				}		
			});

			$("#n4").append(function() {
	           
				if (divIndex >= 5) {
					$("#n4 img").attr("src",'images/nav/送-selected.png');
				}
				else {				
					$("#n4 img").attr("src",'images/nav/送-off.png');	
				}		
			});

		

		});
			
