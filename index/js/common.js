
$(document).ready(function(){

    // header start 
    function updateMenu() {
        if ($(window).width() >= 1024) {
            // pc�먯꽌�� 硫붾돱 �숈옉
            $(".hamburger-menu").off('click'); // 紐⑤컮�� �숈옉 �쒓굅
            $('.gnb-menu:not(.open-2nd) a').off('click'); // open-2nd媛� �꾨땶 寃쎌슦�� ���� 紐⑤컮�� �숈옉 �쒓굅
            
            
            var $onMenu = $('.gnb-menu.on');
            if ($onMenu.length > 0) {
                var lineLeft = $onMenu.position().left + 'px';
                var lineWidth = $onMenu.innerWidth() + 'px';
                $('.gnb .line').css({
                    'left': lineLeft,
                    'width': lineWidth
                }).addClass('on');
            }
        
            $('.gnb-menu:not(.open-2nd) a').click(function(e){
                e.preventDefault();
                var $parentLi = $(this).closest('.gnb-menu'); 
                $('.gnb-menu.on').removeClass('on');
                $parentLi.addClass('on');
                var lineLeft = $parentLi.position().left + 'px';
                var lineWidth = $parentLi.innerWidth() + 'px';
                $('.gnb .line').css({
                    'left': lineLeft,
                    'width': lineWidth
                }).addClass('on'); 
                var href = $(this).attr('href');
                window.location.href = href;
            });
        
            $(document).click(function(event) {
                if (!$(event.target).closest('.gnb-menu').length && !$(event.target).hasClass('gnb-menu')) {
                    return; 
                }
            });

            // 紐⑤컮�쇱뿉�� �대┛ 硫붾돱�� �� 諛곌꼍 �덉씠�대� �④�
            $('.background-layer').hide();
        } else {
            // 紐⑤컮�쇱뿉�쒖쓽 硫붾돱 �숈옉
            $(".hamburger-menu").click(function(){
                $(".gnb").toggleClass("on");

                // 諛곌꼍 �덉씠�대� �좉��섏뿬 蹂댁씠怨� �④�
                $(".background-layer").toggle();
                
                var ariaLabel = $(this).attr("aria-label");
                if (ariaLabel === "硫붾돱 �닿린") {
                    $(this).attr("aria-label", "硫붾돱 �リ린");
                } else {
                    $(this).attr("aria-label", "硫붾돱 �닿린");
                }
            });
        }
    }

        // 泥섏쓬 濡쒕뱶�� �뚯� 李� �ш린 蹂�寃� �쒖뿉 �⑥닔 �ㅽ뻾
    updateMenu();
    $(window).resize(function() {
        updateMenu();
    });
    // header end

	$('input[name=answer1]').change(function() {
		execCheckList();
    });
	
	$('input[name=answer2]').change(function() {
		execCheckList();
    });
	
	$('input[name=answer3]').change(function() {
		execCheckList();
    });
	
	$('input[name=answer4]').change(function() {
		execCheckList();
    });
	
	$("#conButton").click(function() {
		location.href='https://maxsave.jptax.kr/TAX_CFR_010000?USERID=maxsave';
    });


    // // �앹뾽 �대깽�� start
    $('.pop-close-btn').click(function() {
        $('.popup-content').removeClass('on');
        $('.popup-container').hide();
    });
    // �앹뾽 �대깽�� end


    

    // 2李� �ㅽ뵂 start
        // .gnb-menu menu2.open-2nd瑜� �대┃�덉쓣 �� 泥섎━
    // $('.gnb-menu.menu2.open-2nd,.quick-menu.menu2').click(function() {
    //     $('.open-container, .open-background-layer').addClass('on');
    // });

    //     // �곸뿭 �リ린
    // $('.open-close-btn').click(function() {
    //     $('.open-content, .open-container').removeClass('on');
    // });
    // �앹뾽 �대깽�� end




    // 泥댄겕由ъ뒪�� start
    // var today = new Date().getDate();

    // $('#today').text(today % 2 === 0 ? '吏앹닔' : '����');

    
    // $('#goBackMain').click(function() {
    //     window.location.href = './index.html';
    // });

    // 泥댄겕由ъ뒪�� start
 

 
        // �� 硫붾돱 start
    $('.tab').click(function(e){
        e.preventDefault();
         
        $('.tab').removeClass('on');
        $(this).addClass('on');
 
        var href = $(this).find('a').attr('href');
        if (href && href !== '#') {
            window.location.href = href;
         }
     });
     
    $('.faq-tab li').click(function() {
        var category = $(this).attr('class').split(' ')[1];
         
        $('.faqlist dt, .faqlist dd').hide();
         
        $('.faqlist dt').removeClass('on');
 
        if (category === 'cateAll') {
            $('.faqlist dt').show();
        } else {
            $('.faqlist dt.' + category + ', .faqlist dd.' + category).show();
        }
    });


    // �먯＜ 臾삳뒗 吏덈Ц start
    $('.faqlist dt').click(function() {
        var $this = $(this);
        var $dd = $this.next('dd');

        var hasOnClass = $this.hasClass('on');

        if (hasOnClass) {
            $this.removeClass('on');
            $dd.slideUp(getAnimationSpeed());
        } else {
            $this.addClass('on').siblings('dt').removeClass('on').next('dd').slideUp(getAnimationSpeed());
            $dd.slideDown(getAnimationSpeed());
        }
    });

        // 珥덇린�� 紐⑤뱺 dd �붿냼 �④린湲�
    $('.faqlist dd').hide();

        // �붾㈃ �덈퉬�� �곕씪 �좊땲硫붿씠�� �띾룄瑜� 寃곗젙�섎뒗 �⑥닔
    function getAnimationSpeed() {
        // �붾㈃ �덈퉬 �뺤씤
        if ($(window).width() <= 767) {
            return 0; // 利됱떆 �꾪솚
        } else {
            return 300; // 遺��쒕윭�� �꾪솚
        }
    }
    //�먯＜ 臾삳뒗 吏덈Ц end


	function execCheckList(){
		var answer1Value  = $("input[name='answer1']:checked").val();
		var answer2Value  = $("input[name='answer2']:checked").val();
		var answer3Value  = $("input[name='answer3']:checked").val();
		// var answer4Value  = $("input[name='answer4']:checked").val();
		
		if(answer1Value == "Y" && answer2Value == "Y" && answer3Value == "Y" 
        //    && answer4Value == "Y"
           ){
			$("#conButton").removeAttr("disabled");  // enabled 泥섎━
		}else{
			$("#conButton").attr("disabled","disabled");  // disabled 泥섎━
		}
	}
	
});






