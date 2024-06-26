 //4-2
 $(document).ready(function(){
     
      $('.openBtn').on('click', function(e){
          e.preventDefault();
          
          $(this).next('.big').fadeIn('slow');
          $('.box').show();/*클릭한 openBtn 의 big 만 뜨기위해서 next 로 지정 */
      });
     
     $('.closeBtn, .box').on('click', function(e){
          e.preventDefault();/*닫기버튼이나 뒤에 배경을 클릭하면 둘다 사라짐 */

          $('.big').fadeOut('fast');
          $('.box').hide();
     });
 });

