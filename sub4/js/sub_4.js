/*4-2 사회공헌활동 javascript */

/*li=370+margin15*2=400 */

$(function(){
   var position = 0;
   var movesize=$('.notice_content ul li').outerWidth(true);  //400
   //console.log(movesize);

   $('.notice_content ul').after($('.notice_content ul').clone());  // 4000

   function moveG(){
         position-=movesize;
         $('.notice_content').animate({left:position},'fast',
            function(){
            if(position<=-2800){
                $('.notice_content').css('left',-800);
                position=-800;
             }
        }).clearQueue();
   }

   timeonoff= setInterval(moveG, 3000);


   var lastClickTime = 0;

   $('.button').click(function(e){
        e.preventDefault();

        clearInterval(timeonoff);

        var currentTime = new Date().getTime();

        var timeDiff = currentTime-lastClickTime;

        if(timeDiff < 500){
             e.preventDefault();
             return false;
        }

        lastClickTime = currentTime;
        //빨리누를때 오류나는거 잡아주는거

        if($(this).is('.m1')){
            position-=movesize;
            $('.notice_content').animate({left:position},'fast',
              function(){
                if(position<=-2800){
                    position=-800;
                    $('.notice_content').css('left',-800);
                }
             }).clearQueue();
        }else if($(this).is('.m2')){
              if(position>=0){
                $('.notice_content').css('left',-2000);
                position=-2000;
              }
                position+=movesize;
                $('.notice_content').animate({left:position}, 'fast',
                    function(){							
                        if(position>=0){
                            $('.notice_content').css('left',-2000);
                            position=-2000;
                        }
                    }).clearQueue();

       }
 });
});




// 검색
$(function(){

  $.ajax({
      url: './data/sam.json',
      dataType: 'json',
      success: function(data){
          var useData = data.sam;//모든객체안에있는 배열 
          
          function dataPrint(arr){//화면에 보여지는것
              
                  var txt = '<ul>';
                  
                  for(var i in arr){
                      
                      var $Name = arr[i].Name;
                      // var $Price = arr[i].Price;
                      //var $Descript = arr[i].Descript;
                      var $Image = arr[i].Image;

                      txt+='<li>';
                      txt+='<img src="'+ $Image +'" alt="">';
                      txt+='<dl>';
                      txt+='<dt>'+$Name+'</dt>'; 
                      // txt+='<dd>'+$Price+'원</dd>';
                      // txt+='<dd>'+$Descript+'</dd>';
                      txt+='</dl>';
                      txt +='</li>';
                  }

                  txt += '</ul>';

                  $('.product_list').html(txt);
             
          };
          

          //초기실행, 함수호출
          dataPrint(useData);


          $('#btn').click(function(){ //검색버튼을 클릭하면
                /*
                   var 객체배열 = 객체배열.filter(function(element){
                         return 조건절;  //조건에 만족하면 리턴
                       
                   });
                */
               var newArray = useData.filter(function(element){
                 
                 //'베이스'라는 키워드 입력
                //console.log($('#title').val());
                //return element.Name == $('#title').val();

                /*조건별로 검색하는 방법!!  */

                //return element.Price >=30000 && element.Price <=48000;
                //return element.Price >= $('#title').val()// 입력된 값보다 같거나 큰것만 검색
                return element.Name.includes($('#title').val());//입력된 값이 포함하고있으면 빼는 문법 
                //return element.Name == $('#title').val();//풀네임다쳐야 검색되는 함수
               });
               console.log(newArray);//'베이스' 가 포함된 두객체만 검색됨
               dataPrint(newArray);  //검색된 배열로 리스트 출력
          });

          $('.btn_all').click(function(){  //모두보기
              dataPrint(useData);//useData == sam
          });
      } 
  });
   
});