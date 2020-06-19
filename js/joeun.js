			$(function(){
				$("#slideOne li").each(function(aa){
					$(this).css("left",aa*1920);
					});
				});
				
				setInterval(function(){
					$("#slideOne li").each(function(){
						var nowLeft = parseInt($(this).css("left"));
							console.log($(this).css("left"));
						var movePos = nowLeft -1920;
					$(this).animate({left:movePos}, 3000, function(){
						if(movePos == -5760){
							$(this).css("left", 1920);
						}
						});
					});
					}, 6000);
					
/* 슬라이드 2 */
$(function(){
				$("#stImg1 img").click(function(){
					var n=$(this).parent().index()+1;
					
					var lastIndex = $("#stImg1 li").last().index()+1 
						if(n==lastIndex){
							$("#stImg1").css({left:0});
								n=0;
						}
					$("#stImg1").animate({left:-400*n});
					
					console.log("클릭한 이미지의 인덱스 번호+1값 : "+n+"/"+"#stImg1의 왼쪽 위치값 :" +aa);
					});
				
			});
			
/* 슬라이드 2-2 */			
$(function(){
				$("#stImg2 img").click(function(){
					var n=$(this).parent().index()+1;
					
					var lastIndex = $("#stImg2 li").last().index()+1 
						if(n==lastIndex){
							$("#stImg2").css({left:0});
								n=0;
						}
					$("#stImg2").animate({left:-400*n});
					
					console.log("클릭한 이미지의 인덱스 번호+1값 : "+n+"/"+"#stImg1의 왼쪽 위치값 :" +aa);
					});
				
			});
			
			
/* 1 */
			$(function(){
				$("#main1").mouseenter(function(){
					$("li").children("#sub").slideDown(500);
				});
				
				$("#main1").mouseleave(function(){
					$("li").children("#sub").slideUp(500);
				});
			});

/* 2 */				
			$(function(){
				
				$("#main2").mouseenter(function(){
					$("li").children("#sub").slideDown(500);
				});
				
				$("#main2").mouseleave(function(){
					$("li").children("#sub").slideUp(500);
				});
				
			});
			
/* 3 */			
			$(function(){
				
				$("#main3").mouseenter(function(){
					$("li").children("#sub").slideDown(500);
				});
				
				$("#main3").mouseleave(function(){
					$("li").children("#sub").slideUp(500);
				});
				
			});

/* 4 */			
			$(function(){
				
				$("#main4").mouseenter(function(){
					$("li").children("#sub").slideDown(500);
				});
				
				$("#main4").mouseleave(function(){
					$("li").children("#sub").slideUp(500);
				});
				
			});

/* 5 */
			$(function(){
				
				$("#main5").mouseenter(function(){
					$("li").children("#sub").slideDown(500);
				});
				
				$("#main5").mouseleave(function(){
					$("li").children("#sub").slideUp(500);
				});
				
			});
			
/* 팝업창 */

	$("#popup").each(function(){
		$("#popup").show();
	
	});

	$("#.close").click(function(){
		$("#popup").hide();
	});

