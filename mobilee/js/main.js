/*visual영역 */
 //box1 호출코드 (갤러리)
 var swiper1 = new Swiper('.swiper1', {
    autoHeight: true,
    slidesPerView:1,
    loop: true,
    
   pagination: {   //페이지 네이션
     el: '.pagination1',
     //dynamicBullets: true,
     clickable: true,
     //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
 });
   


   
/*vision영역 */
var swiper1 = new Swiper('.swiper-container1', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 2,  //단수
    spaceBetween: 10,  //단사이 여백
    //loop: true,  //무한 loop
    
    scrollbar: {  //하단 스크롤바
      el: '.swiper-scrollbar',
      hide: true
    },
  });



  /*esg 영역 */
  var swiper2 = new Swiper('.swiper2', {
    //autoHeight: true,  높이 고정이라 필요없음
    effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    slidesPerView:'auto',
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide:1,
    coverfloEffect:{
      rotare:0,
      stretch:0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
     },
    
    pagination: {   //페이지 네이션
    el: '.pagination2',
    //dynamicBullets: true,
    clickable: true,
    //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
   },
});


  
 

// scroll top

var top_move = document.getElementById('top_move');

        top_move.onclick =function(e){
              e.preventDefault();
              window.scroll({
                  top:0,
                 //left:0,
               behavior:'smooth'

              });

        }


 /*footer 네비 */
        $('.select .arrow').toggle(function(){
          $('.select .aList').fadeIn('slow');	
          $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
        },function(){
              $('.select .aList').fadeOut('fast');	
          $(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
        });
      
        //tab키 처리
          $('.select .arrow').on('focus', function () {        
                    $('.select .aList').fadeIn('slow');	
             });
             $('.select .aList li:last a').on('blur', function () {        
                    $('.select .aList').fadeOut('fast');
             });
       