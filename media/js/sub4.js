// sub4
//★★탭메뉴 활성화
$('.tabs li').click(function(e){
    e.preventDefault();

    $('.tabs li').removeClass('on');
    $(this).addClass('on');
   
});


 $('.tabs .on1').css('background','#f00').css('color','#fff').css('box-shadow','4px 4px 8px'); //첫번째 탭메뉴 활성화
   
 $('.tabs li').click(function(e){
       e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
       
       $('.tabs li').css('background','none').css('color','#fff').css('box-shadow','none'); //모든 탭메뉴를 비활성화
       $(this).css('background','#f00').css('color','#fff').css('box-shadow','4px 4px 8px');// 클릭한 해당 탭메뉴만 활성화

  });


  
//★★youtube
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });
