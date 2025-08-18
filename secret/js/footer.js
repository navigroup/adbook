const footer = document.getElementById('footer_template');
footer.innerHTML = `
<section id="footer-section">
  <!-- 상단: 로고 + 네비 -->
  <div class="footer-top">
    <div class="footer-logo">
      <img src="./img/logo-white.png" alt="">
    </div>
   
  </div>

  <!-- 본문: 왼쪽 기관정보 + 오른쪽 링크리스트 -->
  <div class="footer-main">
    <div class="footer-info">
      <p>  회사명 : 나비스쿨출판 |
법인사업자번호: 355-87-08194 |
대표자: 조우석 <br><br>

                       
                        나비스쿨 © All Rights Reserved.</a></p>
   

    </div>

  </div>

  <!-- 저작권 -->
  <div class="footer-copy">
    <small>Copyright © 2025 FLOS. All Rights Reserved.</small>
  </div>
</section>


	
`;

document.body.appendChild(footer.content);