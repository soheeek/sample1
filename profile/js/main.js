/*move_top상단이동 */
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면 (window=scroll함께 외워)
	var scroll = $(window).scrollTop(); //스크롤의 거리(좌표)
   
	//$('.text').text(scroll);

	if(scroll>300){ //300이상의 거리가 발생되면
		$('.move_top').fadeIn('fast');  //top보여라~~~~
	}else{
		$('.move_top').fadeOut('fast');//top안보여라~~~~
	}
});
$('.move_top').click(function(e){
	e.preventDefault();
	 //상단으로 스르륵 이동합니다.
	$("html,body").stop().animate({"scrollTop":0},1000);//해당위치로 스크롤 탑값을 부드럽게 이동시키는 코드★★이줄외우기
 });


/* */