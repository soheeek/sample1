// sub3_1 scroll이벤트
$(document).ready(function () {
            
	//$('.topMove').hide();
	
	$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
		  var scroll = $(window).scrollTop(); //스크롤의 거리
		  
		  console.log(scroll );
		  if(scroll>=150 && scroll<200){ //300이상의 거리가 발생되면
				$('#content .top_area p span:eq(0)').css('color','#333');
		  }else if(scroll>=200 && scroll<250){
			 $('#content .top_area p span:eq(1)').css('color','#333'); 
		  }else if(scroll>=250 && scroll<300){
			 $('#content .top_area p span:eq(2)').css('color','#333'); 
		  }else if(scroll>=300){
			 $('#content .top_area p span:eq(3)').css('color','#333'); 
		  }else{
			 $('#content .top_area p span').css('color','#ccc'); 
		  }

		  if(scroll>=100){
			 $('#content .top_area .round').css({'opacity':'.8','transform':'scale(1)'}); 
		  }else{
			 $('#content .top_area .round').css({'opacity':'.1','transform':'scale(.2)'}); 
		  }   
	});
	
   
 });


 //sub3_1 co
 $(document).ready(function(){
    //var cnt=$('.tab_menu li').size(); //탭메뉴 개수 ***
    //변수의 숫자로 써도 되지만 식을써서 하면 변수가 바뀔때마다 신경안써도되서 더편함/cnt 이 예제에선필요없음
    $('.tabs .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라 or fadeIn('slow')도 해봐도됨
    $('.tabs .tab1').css('background','#ED7D31').css('color','#fff'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
          $(".tabs .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').css('background','#ccc').css('color','#fff'); //모든 탭메뉴를 비활성화
          $(this).css('background','#ED7D31').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

     });
    });

  });


