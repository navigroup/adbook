const template = document.getElementById('header_template');
template.innerHTML = `
<!-- header start -->
<header id="header">
    <nav class="nav">
        <h1 class="logo-area">
            <a href="./index.html" class="logo-area" >
                <img src="./index/img/jp.png" style="max-width:200px;">
            </a>
        </h1>
        <button class="hamburger-menu" aria-label="메뉴 열기">
            <img class="hamburger-icon" src="./index/img/ico_header_menu_2x.png" >
        </button>
        <nav class="gnb" role="navigation">
            <ul class="gnb-area">
                <li class="gnb-menu menu1 on"><a href="./introduce.html">고용증대세액공제?</a></li>
                <li class="gnb-menu menu2"><a href="./checklist.html">공제대상 체크 및 신청</a></li>
                <li class="gnb-menu menu3"><a href="./video.html">2억 환급금 후기</a></li>
                <li class="gnb-menu menu4"><a href="./faq.html">자주 묻는 질문</a></li>
            </ul>
            <div class="line" aria-hidden="true"></div>
        </nav>
    
        <div class="background-layer"></div>
    </nav>
</header>
<!-- header end -->

	
`;

document.body.appendChild(template.content);