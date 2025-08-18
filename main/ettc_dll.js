function etc(){
    $('.more').fadeIn(550);
    $('.etc').hide();
}



function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength);
    }    
  }

 

  function getCheckboxValue()  {
    // 선택된 목록 가져오기
    const query = 'input[name="checklist"]:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    
    // 선택된 목록에서 value 찾기
    let result = '';
    
    selectedEls.forEach((el) => {
      result += el.value + ' ';
   
    });
    // 출력
    $('#checkli').val(result);

}

		 function db_lp(i){	 
		$('#db'+i+'_p').fadeIn(350);
		$('#db'+i+'_p .conWrap').scrollTop(0);
	  $('body').css({overflow:"hidden"});
 
		$('#db'+i+'_p .closeBtn').click(function(){
		$('#db'+i+'_p').fadeOut(350);
		$('body').css({overflow:"auto"});	
	});		 
		 }
 

$(function(){
      $('.quest10').on('click',getCheckboxValue);
     
      
})