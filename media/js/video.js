var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 768){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  }); 
  
  $('.down').click(function(e){
      e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
  


//★★visit 영역 swiper
var swiper = new Swiper('.swiper-container', {//다 감싸주는 전체박스 
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    //slidesPerView: 4,  //단수
    spaceBetween:20,  //단사이 여백
    initalSlide:0, //처음 왼쪽 끝에 보여지는 초기슬라이드번호(0부터 시작함,2이면3번째부터 보여지면서 시작하라는 뜻)
    //loop: true,  //무한 loop 안끊기고 계속돌아감
    //freeMode: true,  //터치 만큼 자유롭게 이동,한칸씩 이동하는게 아니라 swipe 한만큼 움직임
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(change되는거기 때문에 단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(change되는거기 때문에 단수가 1단이 된다)
    // effect: 'coverflow',
    
    scrollbar: {  //하단 스크롤바
      el: '.swiper-scrollbar',
      //hide: true
    },
    breakpoints:{
      1280 : {
        slidesPerView: 4, 
      },
      1024 : {
        slidesPerView: 3, 
      },
      768 : {
        slidesPerView: 2, 
      },
      640: {
        slidesPerView: 1, 
      }
     }
  });


//★★culture 영역 tap
var characters = [
  {
      name:'Toronto International Film Festival: TIFF', 
      information:"The Toronto International Film Festival (TIFF, often stylized as tiff) is one of the most prestigious  and largest publicly attended film festivals in the world, founded in 1976 and taking place each September. It is also a permanent destination for film culture operating out of the TIFF Lightbox cultural centre,located in Downtown Toronto."
  },
  {
      name:'Toronto Blue Jays', 
      information:"The Toronto Blue Jays are a Canadian professional baseball team based in Toronto. The Blue Jays compete in Major League Baseball (MLB) as a member club of the American League (AL) East Division. Since 1989, the team has played its home games primarily at Rogers Centre in downtown Toronto.The name 'Blue Jays' originates from the bird of the same name, and blue is also the traditional colour of Toronto's collegiate and professional sports teams including the Maple Leafs (ice hockey) and the Argonauts (Canadian football). In 1976, out of the over 4,000 suggestions, 154 people selected the name 'Blue Jays.'In addition, the team was originally owned by the Labatt Brewing Company, makers of the popular beer Labatt Blue. ", 
  },
  {
      name:'Toronto Maple Leafs', 
      information:'Boo has a vocabulary of about three words, but that doesn`t stop this curious human girl from stealing Sulley`s heart and overcoming her fear of Randall.', 
  },
  {
      name:'Canada Day', 
      information:'Able to scare even his co-workers with his chameleon abilities, Randall is one of the most wicked monsters in Monstropolis. ', 
  }
];


$('.culture .culbox img').attr('src','./images/cul_main.jpg');
$('.gallery-thumbs .title').html(characters[0].name);
$('.gallery-thumbs .main_t').html(characters[0].information);
$('.culture .gallery-thumbs ul li:eq(0) a').css('filter','grayscale(0)');

$('.culture .gallery-thumbs a').click(function(e){
  e.preventDefault();

  var ind = $(this).index('.culture .gallery-thumbs a');

  $('.culture .culbox img').attr('src','./images/cul0'+(ind+1)+'x2.jpg');

  $('.gallery-thumbs .text .title').html(characters[ind].name);
  $('.gallery-thumbs .text .main_t').html(characters[ind].information);

  $('.culture .gallery-thumbs ul li a').css('filter','grayscale(100%)');
  $('.culture .gallery-thumbs ul li:eq('+ind+') a').css('filter','grayscale(0)');
});




   /* unesco 영역 */
   $(".hover").mouseenter (
    function () {
      $(this).removeClass("hover");
    }
  );
