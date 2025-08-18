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
         $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeUyoiTCEs1--wJ9l0WOnfMc1U-4lyRccyEKDCX3DRnfn1Mng/formResponse");
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
  $('#send_message').css({background:"#222222"});
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

  var position  = getSelectedValue('intro_select');
  var position1 = getSelectedValue('intro_select1');
  var position2 = getSelectedValue('intro_select2');
  var position3 = getSelectedValue('intro_select3');
  var position4 = getSelectedValue('intro_select4');
  var position5 = getSelectedValue('intro_select5');

  var location = $('#location').val();
  var name = $('#name').val();
  var phone = $('#phone').val();
  var agree = $('#agree11').is(":checked");

  function disableButton(message) {
    $('#send_message').css({ transition: "1s", background: "#000", color: "#fff" });
    $('#send_message').prop("disabled", true).val(message).css("cursor", "default");
  }

  function enableButton() {
    $('#send_message').css({ transition: "1s", background: "#dcbe4e", color: "#000" });
    $('#send_message').prop("disabled", false).val("무료 상담 신청하기").css("cursor", "pointer");
  }

  if (!position1) return disableButton("직업종류 선택을 확인하세요");
  if (!position2) return disableButton("월평균 수입 선택을 확인하세요");
  if (!position)  return disableButton("채무 금액 선택을 확인하세요");
  if (!position3) return disableButton("부양가족 선택을 확인하세요");
  if (!position4) return disableButton("대출유무 선택을 확인하세요");
  if (!position5) return disableButton("채무원인 선택을 확인하세요");

  if (!regex1.test(name) || name.length <= 1) return disableButton("성함 입력을 확인하세요");
  if (!location) return disableButton("지역 선택을 확인하세요");
  if (!(phone.substr(0, 3) == "010" && phone.length == 11 && regex.test(phone))) return disableButton("전화번호 입력을 확인하세요");
  if (!agree) return disableButton("개인 정보 동의를 확인하세요");

  enableButton();
}
  
  
  
   
  
  
  
  
  $(function(){
  $('#name,#phone, .intro_select, .intro_select1,.intro_select2, .intro_select3, .intro_select4,.intro_select5,#location,  #message,#agree11').bind("keyup click change",form_c);
  //  $('#name,#phone,#intro_select,#car_type,#car,#message,#agree11,#now-wg,#hope-wg,#height').bind("keyup click change",form_check1);
  //  $('#license').bind("keyup click change",lic_pick);
  })
  