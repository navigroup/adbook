$(document).ready(function(){
    $('#send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        // const regex1 = /^[가-힣]+$/;
        // const regex = /^[|0-9|]+$/;
        // const regex2 = /^[가-힣|a-z|A-Z|0-9\s+]+$/;
        
        // var name = $('#name').val();
        // var phone = $('#phone').val();
        // var agree = $('#agree11').is(":checked");
        
  
  
         // Form field validation
         $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZ8G0m5tzcxhyG77_CGUpqM3hxTFquCrSyKX05HyckudWBmw/formResponse");
         $('#send_message').attr({'disabled' : 'true', 'value' : '잠시만 기다려주세요' });
        const messages = ['정보를 확인 중입니다', '전송 준비 중입니다', '곧 신청이 완료됩니다.'];
        let msgIndex = 0;

        const msgInterval = setInterval(function () {
        msgIndex++;
        if (msgIndex < messages.length) {
            $('#send_message').val(messages[msgIndex]);
        } else {
            clearInterval(msgInterval); // 3번째 메시지 후 반복 종료
        }
        }, 1000);
          
   $('#send_message').prop("disabled", false);
  $('#send_message').css({transition:"1s"});
  $('#send_message').css({background:"#686868ff"});
  $('#send_message').css({color:"#fff"});
  $('#hidden_iframe11').attr("onload", "hoa3();");
    });    
  
   
  
  });
  
  
  function dll(){
    // var f = document.fm;
    // f.submit();
    // $('[name="fm"],[name="fm1"]').submit();
    //    window.karrotPixel.track('SubmitApplication');
    // alert("빠른 안내를 통해 도움 드리겠습니다.\n신청해주셔서 감사합니다.");
  
  }
  
  function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
  }
  
  function hoa3(){ 
  
     setTimeout( function(){
        alert("신청이 완료되었습니다.");
        // $(window).scrollTop(0);
        // window.location.reload();
         window.location.href = './thanks.html';
       },1500);

  
  }
  
  function site1111(){
  //$('#mc-embedded-subscribe').click();
  
  
  //   $(window).scrollTop(0);
  //   window.location.href = './thanks.html';
  //   window.location.reload();
  }
  
  function getSelectedValue(className) {
  const selected = $('.' + className + '.active').data('value');
  return selected || null;
}

function form_c() {
  const regex1 = /^[가-힣]+$/;
  const regex = /^[0-9]+$/;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var position  = getSelectedValue('intro_select');
  var position1 = getSelectedValue('intro_select1');
  var position2 = getSelectedValue('intro_select2');
  // var position3 = getSelectedValue('intro_select3');
  // var position4 = getSelectedValue('intro_select4');
  // var position5 = getSelectedValue('intro_select5');

  // var location = $('#location').val();
  var name = $('#name').val();
  var email = $('#email').val();
  var email1 = $('#email_confirm').val();
  var phone = $('#phone').val();
  var message = $('#message').val();
  var agree = $('#agree11').is(":checked");




  function disableButton(message) {
    $('#send_message').css({ transition: "1s", background: "#686868ff", color: "#fff" });
    $('#send_message').prop("disabled", true).val(message).css("cursor", "default");
  }

  function enableButton() {
    $('#send_message').css({ transition: "1s", background: "#dcbe4e", color: "#000" });
    $('#send_message').prop("disabled", false).val("무료 상담 신청하기").css("cursor", "pointer");
  }

  if (!position1) return disableButton("참여동의 선택을 확인하세요");
  if (!regex1.test(name) || name.length <= 1) return disableButton("성함 입력을 확인하세요");
  if (!(phone.substr(0, 3) == "010" && phone.length == 11 && regex.test(phone))) return disableButton("전화번호 입력을 확인하세요");


   // ===== 이메일 형식 & 일치 검증 =====
  if (!emailRegex.test(email))  return disableButton('이메일 입력을 확인하세요');
  if (!emailRegex.test(email1)) return disableButton('이메일 확인의 형식을 확인하세요');
  if (email !== email1)         return disableButton('이메일 일치를 확인하세요');


if (message.trim().length === 0) 
  return disableButton("메시지를 입력하세요");


  if (!position2) return disableButton("신청 경로 선택을 확인하세요");
  // if (!position)  return disableButton("채무 금액 선택을 확인하세요");
  if (!position) return disableButton("영상촬영 동의를 확인하세요");
  // if (!position4) return disableButton("대출유무 선택을 확인하세요");
  // if (!position5) return disableButton("채무원인 선택을 확인하세요");

  
  // if (!location) return disableButton("지역 선택을 확인하세요");
  
  if (!agree) return disableButton("개인 정보 동의를 확인하세요");

  enableButton();
}
  
  
  
   
  
  
  
  
  $(function(){
  $('#name,#phone, .intro_select, .intro_select1,.intro_select2, .intro_select3, .intro_select4,.intro_select5,#location, #email, #email_confirm,  #message,#agree11').bind("keyup click change",form_c);
  //  $('#name,#phone,#intro_select,#car_type,#car,#message,#agree11,#now-wg,#hope-wg,#height').bind("keyup click change",form_check1);
  //  $('#license').bind("keyup click change",lic_pick);
  })
  