// JavaScript Document
		/*点击自我介绍*/
  		function introClick(){
	  		var introduction = document.getElementById("introduction");
	  		if(introduction.style.display == "none"){
		  	introduction.style.display = "block";
	 		}else{
		 	introduction.style.display = "none";
			}
  		}
	    /*教育背景的点击事件*/
		function educationClick(){
			var edcucation = document.getElementById("education");
			var technologyDiv = document.getElementById("technologyDiv");
			technologyDiv.style.display = "none";
			education.style.display = "block";
		}
		/*用于绘制教育背景的时间轴*/
		window.onload = function(){
			
			var canvas = document.getElementById("canvas");
			var content = canvas.getContext("2d");
			//判断浏览器是否支持canvas
		    if(canvas.getContext("2d")){
			//使用context检测
			content.beginPath();
			content.moveTo(150,5);//设置绘图的状态
			content.lineTo(150,400);//设置绘图的状态
			content.closePath();
			content.lineWidth = 3;
			content.strokeStyle = "#FFCC33";
			content.stroke();//用于绘制线条
			}else{
				alert("当前浏览器不支持canvas,请更换浏览器后再试！");
			}
		}
		/*点击技术鉴定*/
		function technologyClick(){
			var edcucation = document.getElementById("education");
			edcucation.style.display = "none";
			
			var technologyDiv = document.getElementById("technologyDiv");
			if(technologyDiv.offsetLeft <= 0)
				{
					startMove();
				}
			else
				{
					startMove1();
				}
		}
		var timer = null;
		function startMove()
		{
			clearInterval(timer);
		    var technologyDiv = document.getElementById("technologyDiv");
		    timer = setInterval(function(){
				if(technologyDiv.offsetLeft == 0)
				{
					clearInterval(timer);
				}
				else
				{
					technologyDiv.style.left = technologyDiv.offsetLeft + 10 + "px";
				}
			},30);
			}
		 function startMove1()
		{
			 clearInterval(timer);
			 var technologyDiv = document.getElementById("technologyDiv");
			 timer = setInterval(function(){
			 if(technologyDiv.offsetLeft == 700)
			 {
				clearInterval(timer);
			 }
			else
			{
				technologyDiv.style.left = technologyDiv.offsetLeft - 10 + "px";
			}
		},30);
	}