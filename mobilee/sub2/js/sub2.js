/*sub2-2 더보기 js */

  $('.q .trigger').toggle(function(){
       $('.a').slideDown('slow');
  },function(){
	$('.a').slideUp('fast');
  });
	
 



/*sub2-3*/
	var tabnum=1;
	$('.content_area .container_box:eq(0)').show(); // 첫번째 탭 내용만 열어라 or fadeIn('slow')도 해봐도됨
  
	$('.content_area .tab').each(function (index) {  // index=0 1
	  $(this).click(function(e){
		  e.preventDefault();  
  
		  $(".content_area .container_box").hide(); //모든 탭내용을 안보이게...
		  $(".content_area .container_box:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
		  
		  $('#content .tabs ul li a').removeClass('current');
		  $(this).addClass('current');
		  tabnum = index+1
	  });
	});
  