var mtab1 = document.getElementById('t1');
var mtab2 = document.getElementById('t2');
var mtab3 = document.getElementById('t3');
var mtab4 = document.getElementById('t4');

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.


function ajax_call(localm){
  //alert(xhr.responseText);
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	// var localText='';                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    // if(localm==1){
    //     localText='친환경 에너지';
    // }else if(localm==2){
    //     localText='수소 에너지';
    // }else if(localm==3){
    //     localText='풍력 에너지';
    // }

    var newContent = '';
    
    newContent = '<ul>';
    newContent += '<li>';
    
    for (var i = 0; i < responseObject.text1.length; i++) {
      
      newContent += '<dl>';
      newContent += '<dt>'+ responseObject.text1[i].title+'</dt>';
      newContent += '<dd>'+ responseObject.text1[i].contents +'</dd>';    
      newContent += '</dl>'; 
        
    }
    
    newContent += '</li>';
    newContent += '</ul>';
 
    document.getElementById('contacts1').innerHTML = newContent;

}

xhr.onload = function() {                       // When readystate changes
   ajax_call(1);
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다


mtab1.onclick = function(){
   
    xhr.onload = function() {                       // When readystate changes
    ajax_call(1);
        
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

mtab2.onclick = function(){
   
    xhr.onload = function() {                       // When readystate changes
    ajax_call(2);
        
};

xhr.open('GET', 'data/data2.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

mtab3.onclick = function(){
   
    xhr.onload = function() {                       // When readystate changes
    ajax_call(3);
        
};

xhr.open('GET', 'data/data3.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

// mtab4.onclick = function(){
   
//     xhr.onload = function() {                       // When readystate changes
//     ajax_call(4);
        
// };

// xhr.open('GET', 'data/data4.json', true);        // 요청을 준비한다.
// xhr.send(null);     
    
// }





