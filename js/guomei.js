$(document).ready(function(){
	//头部导航旋转三角
	$(".hk_nav_top b").each(function(index){
			$(".hk_nav_top b").eq(index).hover(function(){
				$(".hk_nav_top b i").eq(index).css({transform:"rotate(180deg)",transition:"all 0.2s"})
				$(".hk_nav_top b").eq(index).next("div").css({"display":"block"})
			},function(){
				$(".hk_nav_top b i").eq(index).css({transform:"rotate(0deg)",transition:"all 0.2s"})
				$(".hk_nav_top b").eq(index).next("div").css({display:"none"})
			})
	})
	
	//头部导航下拉框
	$(".hk_nav_top b").next("div").each(function(index){
		$(".hk_nav_top b").next("div").eq(index).hover(function(){
				$(".hk_nav_top b i").eq(index).css({transform:"rotate(180deg)",transition:"all 0.2s"})
				$(".hk_nav_top b").eq(index).next("div").css({"display":"block"})
				$(".hk_nav_top b").eq(index).css({"border-color":"#e6e6e6","background":"#fff","color": "#c00","cursor": "default","z-index": "10"})	
			},function(){
				$(".hk_nav_top b i").eq(index).css({transform:"rotate(0deg)",transition:"all 0.2s"})
				$(".hk_nav_top b").eq(index).next("div").css({display:"none"})
				$(".hk_nav_top b").eq(index).css({"border-color":"","background":"","color": "","z-index": ""})	
			})
	})
	
	
	//头部导航国美会员下拉框   我的特权点击移动
	var zhang=0;
		$("#user_icon_left").click(function(){
			zhang-=240;
			if(zhang<=-720){
				zhang=-480
				return
			}
			$("#user_icon div ul").css({left:zhang})
		})
		$("#user_icon_right").click(function(){
			zhang+=240;
			if(zhang>=240){
				zhang=0
				return
			}
			$("#user_icon div ul").css({left:zhang})
		})
	
	
	//头部导航下广告位点击消失
	$(".hk_topad_a2").click(function(){
		$(".hk_topad").remove()
	})
	
	
	//头部购物车划入划出下拉效果
	$(".cartlinkbox").hover(function(){
		$(".cartlinkbox").css({"background":"#fff"})
		$("#hdrcarttext").css({color:"#d7000f"})
		$(".menuhide").css({display:"block"})
	},function(){
		$(".menuhide").css({display:"none"})
		$(".cartlinkbox").css({"background":""})	
		$("#hdrcarttext").css({color:""})		
	})
	$(".menuhide").hover(function(){
		$(".cartlinkbox").css({"background":"#fff"})
		$(".menuhide").css({display:"block"})
	},function(){
		$(".menuhide").css({display:"none"})
		$(".cartlinkbox").css({"background":""})			
	})
	
	//大导航移入变字体颜色and显现子导航
	$(".sidecategory .lisnav li").each(function(index){
		$(".sidecategory .lisnav li").eq(index).hover(function(){
			$(".sidecategory .subnav").css({display:"block"})
			$(".sidecategory .lisnav li h3").eq(index).children().css({color:"#333"})
			$(".fullcategory").eq(index).css({display:"block"})
		},function(){
			$(".sidecategory .lisnav li h3").eq(index).children().css({color:""})
			$(".fullcategory").eq(index).css({display:"none"})
			$(".sidecategory .subnav").css({display:"none"})
			
		})
	})
	$(".fullcategory").each(function(index){
		$(".fullcategory").eq(index).hover(function(){
			$(".sidecategory .subnav").css({display:"block"})
			$(".sidecategory .lisnav li h3").eq(index).children().css({color:"#333"})
			$(".sidecategory .lisnav li").eq(index).css({"background":"#fff","position":"relative","z-index": 1003})
			$(".fullcategory").eq(index).css({display:"block"})
		},function(){
			$(".sidecategory .lisnav li h3").eq(index).children().css({color:""})
			$(".sidecategory .lisnav li").eq(index).css({"background":""})
			$(".sidecategory .subnav").css({display:"none"})
			$(".fullcategory").eq(index).css({display:"none"})
			
		})
	})
	$(".sidecategory .lisnav h3 a").each(function(n){
		$(".sidecategory .lisnav h3 a").eq(n).hover(function(){
			$(".sidecategory .lisnav h3 a").eq(n).css({color:"#E60000"})
		},function(){
			$(".sidecategory .lisnav h3 a").eq(n).css({color:"#333"})
		})
	})
	
	//导航右上角滚动轮播
function daohangDD(){
	var next=0;
	function move(){
			next++
			if(next>=3){
				next=0
			}
			$(".hdrsideRoll ul").animate({top:-next*38})
	}
	setInterval(move,4000)
	$(".j-hdrbtn-up").click(function(){
		next++
		if(next>=3){
			next=0
		}
		$(".hdrsideRoll ul").animate({top:-next*38})
	})
	$(".j-hdrbtn-down").click(function(){
		next--
		if(next<0){
			next=2
		}
		$(".hdrsideRoll ul").animate({top:next*-38})
	})
	
	
} daohangDD();
	
	
	
	//banner轮播效果
function LunBO(){
	$(".gm_main .focus_box li").first().css({opacity:1})
	$(".gm_main .cur a").first().css({background: "#e3101e",opacity: 1})
	
	var now=0;
	var next=0;
	var t=setInterval(move,2500)
	function move(type){
		type=type||"right"
		if(type=="right"){
			next++;
			if(next>=$(".gm_main .focus_box li").length){
				next=0;
			}
			$(".gm_main .focus_box li").eq(now).animate({opacity:0},500)
			$(".gm_main .focus_box li").eq(next).animate({opacity:1},500)
			$(".gm_main .cur a").css({background: "",opacity: ""})
			$(".gm_main .cur a").eq(next).css({background: "#e3101e",opacity: 1})
		}
		if(type=="left"){
			next--;
			if(next<0){
				next=$(".gm_main .focus_box li").length-1;
			}
			$(".gm_main .focus_box li").eq(now).animate({opacity:0},500)
			$(".gm_main .focus_box li").eq(next).animate({opacity:1},500)
			$(".gm_main .cur a").css({background: "",opacity: ""})
			$(".gm_main .cur a").eq(next).css({background: "#e3101e",opacity: 1})
		}
		
		now=next
	}
	$(".focus").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,2500);
	})
	$(".focus .pre").click(function(){
		move("left")
	})
	$(".focus .nex").click(function(){
		move("right")
	})
	$(".gm_main .cur a").each(function(index){
		$(".gm_main .cur ").eq(index).mousemove(function(){
			$(".gm_main .cur a").css({background: "",opacity: ""})
			$(".gm_main .cur a").eq(index).css({background: "#e3101e",opacity: 1})
			$(".gm_main .focus_box li").css({opacity:0})
			$(".gm_main .focus_box li").eq(index).css({"opacity": 1})
			next=index;
			now=index;
		})
	})
} LunBO();
	
	//猜你喜欢点击换
function CNXH(){
	var next=0;
	$(".change_btn .pre").click(function(){
		next++
		if(next>=3){
			next=0
		}
		$("#j-imgload-recomm ul").css({display:"none"}).eq(next).css({display:"block"})
	})
	$(".change_btn .nex").click(function(){
		next--
		if(next<0){
			next=2
		}
		$("#j-imgload-recomm ul").css({display:"none"}).eq(next).css({display:"block"})
	})
} CNXH();


//楼层选项卡
	$(".floor").each(function(index){
		$(".tab").eq(index).children().each(function(index2){
			$(".tab").eq(index).children().eq(index2).mousemove(function(){
				$(".tab").eq(index).children().removeClass()
				$(".tab").eq(index).children().eq(index2).addClass("cur")
				$(".main_warp").eq(index).children().css({display:"none"})
				$(".main_warp").eq(index).children().eq(index2).css({display:"block"})
			})
		})
	})

//楼层轮播
	
	$(".slider_up").each(function(index){
		var next=0;
		$(".slider_up").eq(index).click(function(){
			next++
			if(next>=3){
				next=0
			}
			$(".slider").eq(index).children().css({display:"none"})
			$(".slider").eq(index).children().eq(next).css({display:"block"})
			$(".lazy_fn_wrap .nav").eq(index).children().removeClass()
			$(".lazy_fn_wrap .nav").eq(index).children().eq(next).addClass("cur")
			$(".brand_slider").eq(index).children().toggle()
		})
		$(".slider_down").eq(index).click(function(){
			next--
			if(next<0){
				next=2
			}
			$(".slider").eq(index).children().css({display:"none"})
			$(".slider").eq(index).children().eq(next).css({display:"block"})
			$(".lazy_fn_wrap .nav").eq(index).children().removeClass()
			$(".lazy_fn_wrap .nav").eq(index).children().eq(next).addClass("cur")
			$(".brand_slider").eq(index).children().toggle()
		})
	})
	
////楼层小图片移入背景变白
	$(".brand_slider li").each(function(index){
		$(".brand_slider li").eq(index).hover(function(){
			$(".brand_slider li").eq(index).css({opacity:1})
		},function(){
			$(".brand_slider li").eq(index).css({opacity:"0.9"})
		})
	})
	
//楼层跳转
function loucengJP(){
	var flag=true;
	$(".handler").each(function(index){
		$(window).scroll(function(){
			if($(this).scrollTop()>$(".lazy_fn_wrap").offset().top-500&&$(this).scrollTop()<$(".hotlist").offset().top){
				$(".elevator").css({display:"block"})
			}else{
				$(".elevator").css({display:"none"})
			}
//			if($(this).scrollTop()>=$(".floor").eq(index).offset().top){
//				if(flag==true){
//					$(".handler b").css({opacity:0}).eq(index).css({opacity:1})
//					$(".handler span").css({color:""}).eq(index).css({color:"#E60000"})
//					$(".handler p").css({color:""}).eq(index).css({color:"#E60000"})
//				}
//			}
		})
		$(".handler").eq(index).click(function(){
			flag=false;
			$("html,body").animate({scrollTop:$(".floor").eq(index).offset().top},function(){
				$(".handler b").css({opacity:0}).eq(index).css({opacity:1})
				$(".handler span").css({color:""}).eq(index).css({color:"#E60000"})
				$(".handler p").css({color:""}).eq(index).css({color:"#E60000"})
				flag=true;
			})
		})
		
	})
	$(".flTop").click(function(){
		$("html,body").animate({scrollTop:0})
	})
	$(".fl_bottom").click(function(){
		$("html,body").animate({scrollTop:$("#gome-foot").offset().top})
	})
} loucengJP();

//幽灵搜索栏
	$(window).scroll(function(){
		if($(this).scrollTop()>$(".lazy_fn_wrap").offset().top-500){
			$(".stick-nav").css({display:"block"})
			$(".sidecategory").css({position:"fixed",left:84,top:5})
			$(".sidecategory .lisnav").css({display:"none"})
			$(".sidecategory").mouseover(function(){
				$(".sidecategory .lisnav").css({display:"block"})
			})
			$(".sidecategory").mouseout(function(){
				if($(window).scrollTop()>$(".lazy_fn_wrap").offset().top-500){
					$(".sidecategory .lisnav").css({display:"none"})
				}
			})
		}else{
			$(".stick-nav").css({display:"none"})
			$(".sidecategory").css({position:"",left:"",top:""})
			$(".sidecategory .lisnav").css({display:"block"})
		}
	})
	


//底部移入显示二维码
	$(".code-sm").each(function(index){
		$(".code-sm").eq(index).hover(function(){
			$(this).children("div").css({display:"block"})
		},function(){
			$(this).children("div").css({display:"none"})
		})
	})

})
