$(function () {
   
    setInterval( function fast(){
      
      $.ajax({
    
            
            url:"https://script.googleusercontent.com/macros/echo?user_content_key=UyNyr_im_SMdSl9ijcCmpuQWdsDBuwTDwtopdH5hUMqjodyepQkCXMYwXf4qnwp1NqPE9thuM2oE-fspRWerBbHPkSPNRV4KOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa5V7SzAZj2xBfFDRtNxpfsmuqfjnOYLBpWrI3G8IWJh29l4LSossvEa_fiNHZ0znxEBErwHi9mmiEPVQb2CWB2OPwzaYP1xbIZJfBCVU5sMVgTZPTN7UC3rQnuU7In4iOKwnDNCV1KSJU4oShtwtnF81yQ_L-lNrO3wbXz-eVqkeIE5VCeoIVZvQDDmPCF_Tzw&lib=M7OO09pfGNQD9igEAo4bouJoiE_6Oxspk",
            type:"get",
            datatype:"json",
            success:function(json){
    
                    
                    $.each(json, function(index, item) {   //each문으로 table id값으로 추가만 해주면 됨
                        let ttt = JSON.stringify(json);
 
                        
                    })
            },
        });
    },1000);
    })