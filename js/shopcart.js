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



	//
	$("#shop_h li").hover(function(){
//		alert("11");
		$(this).addClass("colo").siblings().removeClass("colo");
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
		
//		var j = $("#txt")[0].value;
	})
	$("#add").click(function(){
		i++;
		if(i>1){
			$("#cut").css("color","#333");	
		}
		$("#txt")[0].value = i;
//		var k = $("#txt")[0].value;
	})
	
	
	//
	$("#resolution").hover(function(){
		$(this).css("opacity",".8");
	},function(){
		$(this).css("opacity","1");
		
	})
	
	
	//删除商品
	$("#dele").click(function(){
		$(".shop_pri").slideToggle();
		$(".details").hide();
		$("#deleg").show();
		
	})
	
	//撤销删除
	$("#deleg").click(function(){
		$(".shop_pri").slideToggle(100);
		$(".details").show();
		$("#deleg").hide();
	})
	
	//显示大图
	$("#girl").hover(function(){
		$("#bigme").fadeToggle();
	})
	
	//全选
	$("#selectAll").click(function () {
		if($("#list1,#list2,#list3,#list4").checked){   
        	$("#list1").prop("checked", false); 
	  		 $("#list2").prop("checked", false);
	  		 $("#list3").prop("checked", false);
	  		 $("#list4").prop("checked", false); 
	    }else{   
			$("#list1").prop("checked", true); 
	  		$("#list2").prop("checked",true);
	  		$("#list3").prop("checked", true);
	  		$("#list4").prop("checked", true);
	  		 
	  		$("#numss")[0].innerHTML = val;
	  		var allprice = val*price;
	  		console.log(allprice);
	  		$("#allprice")[0].innerHTML = "￥"+allprice;
  		 	$("#resolution").css("background","#f07");
	  		 
	    }   
  		 
  		 
	});
	
	
	//选中获取总金额
//	console.log($("#txt")[0].value);
	var val = i;
	console.log(val);
	var price = $("#pricesingle")[0].innerHTML;
	console.log(price);
	$("#selectAll2").click(function () {
  		 $("#list1").prop("checked", true); 
  		 $("#list2").prop("checked", true);
  		 $("#list3").prop("checked", true);
  		 $("#list4").prop("checked", true);
  		 
  		 $("#numss")[0].innerHTML = val;
  		 var allprice = val*price;
  		 console.log(allprice);
  		 $("#allprice")[0].innerHTML = "￥"+allprice;
  		 $("#resolution").css("background","#f07");
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})