    $(document).ready(function () {
            
      //$('.topMove').hide();
      
      $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
            var scroll = $(window).scrollTop(); //스크롤의 거리
            
            console.log(scroll );
            if(scroll>=450 && scroll<550){ //300이상의 거리가 발생되면
                  $('#content .content_area .con_top p span:eq(0)').css('color','#333');
            }else if(scroll>=550 && scroll<650){
               $('#content .content_area .con_top p span:eq(1)').css('color','#333'); 
            }else if(scroll>=650 && scroll<750){
               $('#content .content_area .con_top p span:eq(2)').css('color','#333'); 
            }else if(scroll>=750){
               $('#content .content_area .con_top p span:eq(3)').css('color','#333'); 
            }else{
               $('#content .content_area .con_top p span').css('color','#ccc'); 
            }

            if(scroll>=550){
               $('#content .content_area .con_top .round').css({'opacity':'.8','transform':'scale(1)'}); 
            }else{
               $('#content .content_area .con_top .round').css({'opacity':'.1','transform':'scale(.2)'}); 
            }   
      });
      
     
   });