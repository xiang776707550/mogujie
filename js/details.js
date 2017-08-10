$(function(){
	
//	购物车
	$(".cart-info-wrap").hover(function(){
		$(".shop-cart-info").slideDown(30);
	},function(){
		$(".shop-cart-info").slideUp(30);
	})
	//客房服务
	$(".custom-item").hover(function(){
		$(".ext-mode").slideDown(30);
	},function(){
		$(".ext-mode").slideUp(30);
	})
	//我的小店
	$(".myxiaodian").hover(function(){
		$(".ext-mode1").slideDown(30);
	},function(){
		$(".ext-mode1").slideUp(30);
	})
	
	//固定导航栏
	$("#fixedbar .car").hover(function(){
		$(this).css("background","#f07");
		$(".car a").css("border","none");
	},function(){
		$(this).css("background","");
		$(".car a").css("border","");
	})
	$("#fixedbar .juan").hover(function(){
		$(this).css("background","#f07");
		$(".juan a").css("border","none");
	},function(){
		$(this).css("background","");
		$(".juan a").css("border","");
	})
	$("#fixedbar .money").hover(function(){
		$(this).css("background","#f07");
		$(".money a").css("border","none");
	},function(){
		$(this).css("background","");
		$(".money a").css("border","");
	})
	$("#fixedbar .footer").hover(function(){
		$(this).css("background","#f07");
		$(".footer a").css("border","none");
	},function(){
		$(this).css("background","");
		$(".footer a").css("border","");
	})
	
	//商品
	$(".selected").hover(function(){
		$(".wo").slideDown(30);
	},function(){
		$(".wo").slideUp(30);
	})
	
	//search
	$("#ts_txt").focus(function(){
		$("#ts_txt")[0].value = "";
		$("#list").css("display","block");
//		alert("aa");
	});
	$("#ts_txt").blur(function(){
		$("#ts_txt")[0].value = "宽松显瘦纯色短裤";
		$("#list").css("display","none");
	});
	
	//搜索库
//	var val = $("#ts_txt")[0].value;
//	$.getJSON('http://list.mogujie.com/module/mget?code=tips&keyWord='+val+'&callback=?',function(data){
//		console.log(data);
//		
//		console.log(val);
//		var html = "";
//		for(var i in data){
//			html +="<li><a href='http://list.mogujie.com/module/mget?code=tips&keyWord=s&callback="+data[i]+"'>"+data[i]+"</a></li>"
//		}
//		$("#list").innerHTML = html;
//	})

	var oInput = document.getElementById("ts_txt");
	var oList = document.getElementById("list");
	var oHead = document.getElementsByTagName("head")[0];
	
	oInput.oninput=function(){
		var val = this.value;
		$.getJSON("http://list.mogujie.com/module/mget?code=tips&keyWord="+val+"&callback=?",function(data){
		console.log(data.data.tips.data);
		data = data.data.tips.data;
		var html = "";
//		console.log(data[0].query);
		for(var i in data){
			html += "<li><a href=''>"+data[i].query+"</a></li>";
		}
		oList.innerHTML = html;
	})
			
	}
	
	
	
	//清除历史记录
	$(".del").click(function(){
		$("#list").innerHTML = "";
//		alert("aaa");
	})
	
	
	$(".nav_list_row").hover(function(){
		$(".sub_catagory").css("display","block");
		$(".coat").css("display","block");
	},function(){
		$(".sub_catagory").css("display","none");
	});
	
	//划入显示
	$(".coat").hover(function(){
		$(".coat").css("display","block");
		$(".nav_more_guess").css("display","block");
	},function(){
//		$(".coat").css("display","none");
	});
	
	$(".nav_more_guess").hover(function(){
		$(".nav_more_guess").css("display","block");
	},function(){
		$(".nav_more_guess").css("display","none");
		$(".coat").css("display","none");
	})


	$("#mov").hover(function(){
		$(".allcol").show();
	},function(){
		$(".allcol").hide();
	});
	$(".allcol").hover(function(){
		$(".allcol").show();
	},function(){
		$(".allcol").hide();
	});
	
	
	//移入切换图片
	var $pic = $("#pic");
	var $aLi = $("#pic li");
	var len = $aLi.length;
//	console.log(len);
	var i =0;
	function move(){
		i++;
		if(i == len){
			i=1;
		}
		$aLi.eq(i).fadeIn().siblings().fadeOut();	
	}
	//鼠标划入小圆点
	$("#ent li").hover(function(){
		i = $(this).index()-1;
		move();	
	},function(){

	})
	$("#ent li").click(function(){
		$(this).find("p").show();
	})
	
	$("#net li").hover(function(){
		i = $(this).index()-1;
		move();	
		$(this).css("border-color","#666");
	},function(){
		$(this).css("border-color","");
	})
	
	$("#net li").click(function(){
		$(this).css("border-color","#666");
		$(this).find("i").show();
		$(this).siblings().find("i").hide();
		$(this).siblings().css("border-color","");
	})
	
	$(".siz").find("span").click(function(){
		$(this).css("border-color","#666");
		$(this).siblings().css("border-color","");
	})
	
	//数量加减
	var i =1;
	$("#cut").click(function(){
		i--;
		if(i<1){
			i =1;
			$("#cut").css("color","#999");
		}
		$("#txt")[0].value = i;
	})
	$("#add").click(function(){
		i++;
		if(i>1){
			$("#cut").css("color","#333");	
		}
		$("#txt")[0].value = i;
	})
	
	
	//购物车添加商品
	















})


