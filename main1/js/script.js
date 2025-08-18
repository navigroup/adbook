var in_check = 0;
<!--기본-->
function Request_Now_input_check(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check=0;
    if(fm.M_agree)
    {
        if(fm.M_agree[0].checked==false)
            Agree_check=1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }

    in_check = 1;
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
    }
    /*
    else if(fm.M_items_value_10.value=="")		{	alert("직업을 입력하세요."); fm.M_items_value_10.focus();}
    else if(fm.M_items_value_33.value=="")		{	alert("차량번호를 입력하세요."); fm.M_items_value_33.focus();}
    else if(fm.M_items_value_20.value=="")		{	alert("차량종류를 입력하세요."); fm.M_items_value_20.focus();}
    */
    else if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
    } else {
        fm.submit();
    }
}
/**
 * default*/
var exceptAlphabet = ["v","z","x","f","q","V","Z","X","F","Q"];
var exceptWord = ["8등급","9등급","10등급","신불","신용불량","회생","파산","면책","연체","무직","외국인","청각장애","장애인","미필","공익","회복","외국","마세요","일용직","주부","동포","농아","워마드","느개비","창놈","한남","니애미","니애비"];
function setDefault(fm){
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check=0;
    if(fm.M_agree)
    {
        if(fm.M_agree[0].checked==false)
            Agree_check=1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }
    in_check = 1;
}
/**
 *보안문자 생성*/
var keylist="123456789";
var temp='';
function onCreate_captcha(){
    generatepass();
    $(".reload").click(function(){
        generatepass();
        $("input[name='M_input_captcha']").val("");
    });
}
function generatepass(){
    temp='';
    for (i = 0; i < 4; i++){
        temp+=keylist.charAt(Math.floor(Math.random()*keylist.length));
        $("input[name='M_show_captcha']").val(temp);
    }
}
/**
 * form check web*/
function onCheckForm_web(fm){
    setDefault(fm);
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if (fm.M_items_value_75.value == "" || fm.M_items_value_75.value == "선택" ){
        alert("희망금액을 입력하세요.");
        fm.M_items_value_75.focus();
        return false;
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check web2*/
function onCheckForm_web2(fm){
    setDefault(fm);
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    /**pc main*/
    if(fm.name == "form_main"){
        if(fm.M_items_value_75 !== undefined){
            if (fm.M_items_value_75.value.trim() == ""){
                alert("희망 대출금액을 입력하세요.");
                fm.M_items_value_75.focus();
                return false;
            }
            if (fm.M_items_value_75.value == 0 || fm.M_items_value_75 == "0"){
                fm.M_items_value_75.value = "0원";
            }
        }
    }
    /**출생년도 있을 시*/
    if(fm.name == "form_sub_quick" || fm.name == "m_form_sub_quick" || fm.name == "form_sub" || fm.name == "m_form_sub"){
        if(fm.M_items_value_19 !== undefined){
            if (fm.M_items_value_19.value.trim() == "" || fm.M_items_value_19.value == 0 || fm.M_items_value_19.value == "0"){
                alert("출생년도를 입력하세요.");
                fm.M_items_value_19.focus();
                return false;
            }
        }
    }
    /**추가정보 있을 시 mobile sub*/
    if(fm.name == "m_form_sub"){
        if(fm.M_items_value_49 !== undefined){
            if (fm.M_items_value_49.value.trim() == "" || fm.M_items_value_49.value == "선택"){
                alert("직군을 입력하세요.");
                fm.M_items_value_49.focus();
                return false;
            }
        }
        if(fm.M_items_value_74 !== undefined){
            if (fm.M_items_value_74.value.trim() == "" || fm.M_items_value_74.value == "선택"){
                alert("연소득을 입력하세요.");
                fm.M_items_value_74.focus();
                return false;
            }
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check*/
function onCheckForm(fm){
    setDefault(fm);
    /*대출종류 있을때*/
    if(fm.M_items_value_79 !== undefined){
        if (fm.M_items_value_79.value.trim() == ""){
            alert("서비스를 선택하세요.");
            $(".fp-scroller").css("transform", "translate(0px, 0px)");
            return false;
        }
    }
    if (fm.M_name.value.trim() == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    /*인증번호 있을때*/
    if(fm.M_acc_code !== undefined){
        if (fm.M_acc_code.value.trim() == ""){
            alert("휴대폰 인증번호를 입력하세요.");
            fm.M_acc_code.focus();
            return false;
        }
    }
    /*신청종류 있을때*/
    if(fm.M_items_value_69 !== undefined){
        if (fm.M_items_value_69.value == "" || fm.M_items_value_69.value == "선택" ){
            alert("신청종류를 선택하세요.");
            fm.M_items_value_69.focus();
            return false;
        }
    }
    /*신청종류 있을때*/
    if(fm.M_items_value_96 !== undefined){
        if (fm.M_items_value_96.value == "" || fm.M_items_value_96.value == "선택" ){
            alert("신청종류를 선택하세요.");
            fm.M_items_value_96.focus();
            return false;
        }
    }
    /*상담가능시간 있을때*/
    if(fm.M_items_value_90 !== undefined){
        if (fm.M_items_value_90.value == "" || fm.M_items_value_90.value == "선택" ){
            alert("상담가능시간을 선택하세요.");
            fm.M_items_value_90.focus();
            return false;
        }
    }
    /*필요금액 있을때*/
    if(fm.M_items_value_48 !== undefined){
        if (fm.M_items_value_48.value == "" || fm.M_items_value_48.value == "선택" ){
            alert("필요금액을 선택하세요.");
            fm.M_items_value_48.focus();
            return false;
        }
    }
    /*직업구분 있을때*/
    if(fm.M_items_value_49 !== undefined){
        if (fm.M_items_value_49.value == "" || fm.M_items_value_49.value == "선택" ){
            alert("직업구분을 선택하세요.");
            return false;
        }
    }
    /*사대보험 가입여부 있을때*/
    if(fm.M_items_value_70 !== undefined){
        if (fm.M_items_value_70.value == ""){
            alert("4대보험 가입여부를 선택해주세요.");
            return false;
        }
    }
    /*신용카드 사용여부 있을때*/
    if(fm.M_items_value_73 !== undefined){
        if (fm.M_items_value_73.value == ""){
            alert("신용카드 사용여부를 선택해주세요.");
            return false;
        }
    }
    /*카드론 사용여부 있을때*/
    if(fm.M_items_value_72 !== undefined){
        if (fm.M_items_value_72.value == ""){
            alert("카드론 사용여부를 선택하세요.");
            return false;
        }
    }
    /*상담신청 종류 있을때*/
    if(fm.M_items_value_78 !== undefined){
        if (fm.M_items_value_78.value == ""){
            alert("원하시는 상담방식을 선택하세요.");
            return false;
        }
    }
    /*카카오톡 상담여부 있을때*/
    if(fm.M_items_value_77 !== undefined){
        if (fm.M_items_value_77.value == ""){
            alert("카카오톡 상담여부를 선택하세요.");
            return false;
        }
    }
    /*연소득액(입력박스) 있을때*/
    if(fm.M_items_value_7 !== undefined){
        if (fm.M_items_value_7.value.trim() == ""){
            alert("연봉을 입력하세요.");
            fm.M_items_value_7.focus();
            return false;
        }
        if (fm.M_items_value_7.value == 0 || fm.M_items_value_7.value == "0"){
            fm.M_items_value_7.value = "연소득없음";
        }
    }
    /*연봉입력 있을때*/
    if(fm.M_items_value_56 !== undefined){
        if (fm.M_items_value_56.value.trim() == ""){
            alert("연봉을 입력하세요.");
            fm.M_items_value_56.focus();
            return false;
        }
        if (fm.M_items_value_56.value == 0 || fm.M_items_value_56.value == "0"){
            fm.M_items_value_56.value = "연소득없음";
        }
    }
    /*채무금액 있을때*/
    if(fm.M_items_value_61 !== undefined){
        if (fm.M_items_value_61.value.trim() == ""){
            alert("채무금액을 입력하세요.");
            fm.M_items_value_61.focus();
            return false;
        }
        if (fm.M_items_value_61.value == 0 || fm.M_items_value_61.value == "0"){
            fm.M_items_value_61.value = "채무없음";
        }
    }
    /*연소득액(선택박스) 있을때*/
    if(fm.M_items_value_74 !== undefined){
        if (fm.M_items_value_74.value == "" || fm.M_items_value_74.value == "선택" ){
            alert("연소득액을 선택하세요.");
            fm.M_items_value_74.focus();
            return false;
        }
    }
    if(fm.M_items_value_84 !== undefined){
        if (fm.M_items_value_84.value == "" || fm.M_items_value_84.value == "선택" ){
            alert("연소득액을 입력하세요.");
            return false;
        }
    }
    /*연체*/
    if(fm.M_items_value_100 !== undefined){
        if (fm.M_items_value_100.value == ""){
            alert("연체유무를 선택하세요.");
            return false;
        }
    }
    /*보유자산*/
    if(fm.M_items_value_101 !== undefined){
        if (fm.M_items_value_101.value == ""){
            alert("보유자산여부를 선택하세요.");
            return false;
        }
    }
    /*통화가능시간(선택박스) 있을때*/
    if(fm.M_items_value_11 !== undefined){
        if (fm.M_items_value_11.value == "" || fm.M_items_value_11.value == "선택" ){
            alert("통화가능시간을 선택하세요.");
            fm.M_items_value_11.focus();
            return false;
        }
    }
    /*메모 있을때*/
    if(fm.M_data !== undefined){
        for(var j = 0; j < exceptWord.length; j++){
            if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
                alert("죄송합니다 신청이 불가합니다.");
                return false;
            }
        }
    }
    /*captcha 있을때*/
    if(fm.M_show_captcha !== undefined){
        if (fm.M_input_captcha.value == ""){
            alert("보안문자를 입력 해주세요.");
            fm.M_input_captcha.focus();
            return false;
        }
        if (fm.M_show_captcha.value !== fm.M_input_captcha.value){
            alert("보안문자가 틀렸습니다.\n다시 한 번 확인해주시기 바랍니다.");
            generatepass();
            fm.M_input_captcha.value = "";
            fm.M_input_captcha.focus();
            return false;
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.acceptCharset = "euc-kr";
    fm.submit();
}
/**
 * form check 이름 전화 메모 captcha*/
function onCheckForm_name_phone_memo_captcha(fm){
    if(fm.M_name.value == ""){
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if(!tel_OK_check && !phone_OK_check){
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    for(var j = 0; j < exceptWord.length; j++){
        if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if(fm.M_input_captcha.value == ""){
        alert("보안문자를 입력 해주세요.");
        fm.M_input_captcha.focus();
        return false;
    }
    if(fm.M_show_captcha.value !== fm.M_input_captcha.value){
        alert("보안문자가 틀렸습니다.\n다시 한 번 확인해주시기 바랍니다.");
        generatepass();
        fm.M_input_captcha.value = "";
        fm.M_input_captcha.focus();
        return false;
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름 전화 48 메모*/
function onCheckForm_name_phone_48_memo(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if (fm.M_items_value_48.value == "" || fm.M_items_value_48.value == "선택"){
        alert("필요금액을 선택 해주세요.");
        fm.M_items_value_48.focus();
        return false;
    }
    for(var j = 0; j < exceptWord.length; j++){
        if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰,메모*/
function onCheckForm_name_phone_memo(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    /*메모 있을때*/
    if(fm.M_data !== undefined){
        for(var j = 0; j < exceptWord.length; j++){
            if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
                alert("죄송합니다 신청이 불가합니다.");
                return false;
            }
        }
    }
    /*captcha 있을때*/
    if(fm.M_show_captcha !== undefined){
        if (fm.M_input_captcha.value == ""){
            alert("보안문자를 입력 해주세요.");
            fm.M_input_captcha.focus();
            return false;
        }
        if (fm.M_show_captcha.value !== fm.M_input_captcha.value){
            alert("보안문자가 틀렸습니다.\n다시 한 번 확인해주시기 바랍니다.");
            generatepass();
            fm.M_input_captcha.value = "";
            fm.M_input_captcha.focus();
            return false;
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰*/
function onCheckForm_nonCheck(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰,메모, 필요금액16*/
function onCheckForm_name_phone_16_memo(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if (fm.M_items_value_16.value == "" || fm.M_items_value_16.value == "선택") {
        alert("필요금액을 선택하세요.");
        fm.M_items_value_16.focus();
        return false;
    }
    for(var j = 0; j < exceptWord.length; j++){
        if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰,채무금액_상담시간*/
function onCheckForm_name_phone_61_60(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    // for(var i = 0; i < exceptAlphabet.length; i++){
    //     if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
    //         alert("죄송합니다 신청이 불가합니다.");
    //         return false;
    //     }
    // }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if (fm.M_items_value_61.value == "") {
        alert("채무금액을 입력하세요.");
        fm.M_items_value_61.focus();
        return false;
    }
    if (fm.M_items_value_60.value == "") {
        alert("상담시간을 선택하세요.");
        fm.M_items_value_60.focus();
        return false;
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 필요금액48,이름,폰*/
function onCheckForm_48_name_phone(fm){
    if(fm.M_items_value_48.value=="선택" || fm.M_items_value_48.value=="") {
        alert("필요금액을 선택하세요.");
        fm.M_items_value_48.focus();
        return false;
    }
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 필요금액48,이름,폰,메모*/
function onCheckForm_48_name_phone_memo(fm){
    if(fm.M_items_value_48.value=="선택" || fm.M_items_value_48.value=="") {
        alert("필요금액을 선택하세요.");
        fm.M_items_value_48.focus();
        return false;
    }
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    for(var j = 0; j < exceptWord.length; j++){
        if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰, 통화가능시간, 메모*/
function onCheckForm_name_phone_11_memo(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if(fm.M_items_value_11.value == "" || fm.M_items_value_11.value == "선택"){
        alert("통화 가능시간을 입력하세요.");
        fm.M_items_value_61.focus();
        return false;
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰,채무금액, 통화가능시간, 메모*/
function onCheckForm_name_phone_61_11_memo(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if(fm.M_items_value_61.value == ""){
        alert("채무금액을 입력하세요.");
        fm.M_items_value_61.focus();
        return false;
    }
    if(fm.M_items_value_11.value == "" || fm.M_items_value_11.value == "선택"){
        alert("통화 가능시간을 선택하세요.");
        fm.M_items_value_61.focus();
        return false;
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰,신청종류, 필요금액, 직업구분*/
function onCheckForm_name_phone_69_48_49(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    /*신청종류 있을때*/
    if(fm.M_items_value_69 !== undefined){
        if(fm.M_items_value_69.value == "" || fm.M_items_value_69.value == "선택"){
            alert("신청종류를 입력하세요.");
            fm.M_items_value_69.focus();
            return false;
        }
    }
    /*필요금액 있을때*/
    if(fm.M_items_value_48 !== undefined){
        if(fm.M_items_value_48.value == "" || fm.M_items_value_48.value == "선택"){
            alert("필요금액을 선택하세요.");
            fm.M_items_value_48.focus();
            return false;
        }
    }
    /*직업구분 있을때*/
    if(fm.M_items_value_49 !== undefined){
        if(fm.M_items_value_49.value == "" || fm.M_items_value_49.value == "선택"){
            alert("직업을 선택하세요.");
            fm.M_items_value_49.focus();
            return false;
        }
    }
    /*메모 있을때*/
    if(fm.M_data !== undefined){
        for(var j = 0; j < exceptWord.length; j++){
            if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
                alert("죄송합니다 신청이 불가합니다.");
                return false;
            }
        }
    }
    /*captcha 있을때*/
    if(fm.M_show_captcha !== undefined){
        if (fm.M_input_captcha.value == ""){
            alert("보안문자를 입력 해주세요.");
            fm.M_input_captcha.focus();
            return false;
        }
        if (fm.M_show_captcha.value !== fm.M_input_captcha.value){
            alert("보안문자가 틀렸습니다.\n다시 한 번 확인해주시기 바랍니다.");
            generatepass();
            fm.M_input_captcha.value = "";
            fm.M_input_captcha.focus();
            return false;
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰,직업구분, 사대보험가입여부(캡차,메모 선택)*/
function onCheckForm_name_phone_49_70_memo(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if(fm.M_items_value_49.value == "" || fm.M_items_value_49.value == "선택"){
        alert("직업을 선택하세요.");
        fm.M_items_value_49.focus();
        return false;
    }
    if(fm.M_items_value_70.value == ""){
        alert("사대보험 가입여부를 선택하세요.");
        // fm.M_items_value_70.focus();
        return false;
    }
    /*메모 있을때*/
    if(fm.M_data !== undefined){
        for(var j = 0; j < exceptWord.length; j++){
            if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
                alert("죄송합니다 신청이 불가합니다.");
                return false;
            }
        }
    }
    /*captcha 있을때*/
    if(fm.M_show_captcha !== undefined){
        if (fm.M_input_captcha.value == ""){
            alert("보안문자를 입력 해주세요.");
            fm.M_input_captcha.focus();
            return false;
        }
        if (fm.M_show_captcha.value !== fm.M_input_captcha.value){
            alert("보안문자가 틀렸습니다.\n다시 한 번 확인해주시기 바랍니다.");
            generatepass();
            fm.M_input_captcha.value = "";
            fm.M_input_captcha.focus();
            return false;
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰,직업구분,연소득액,사대보험가입여부,메모*/
function onCheckForm_name_phone_49_7_70_memo(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if(fm.M_items_value_49.value == "" || fm.M_items_value_49.value == "선택"){
        alert("직업을 선택하세요.");
        fm.M_items_value_49.focus();
        return false;
    }
    if(fm.M_items_value_7.value == ""){
        alert("연소득액을 입력하세요");
        fm.M_items_value_7.focus();
        return false;
    }
    if(fm.M_items_value_70.value == ""){
        alert("사대보험 가입여부를 선택하세요.");
        return false;
    }
    if(fm.M_data !== undefined){
        for(var j = 0; j < exceptWord.length; j++){
            if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
                alert("죄송합니다 신청이 불가합니다.");
                return false;
            }
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    fm.submit();
}
/**
 * form check 이름,폰,사대보험,카드론,연소득,총부채,메모*/
function onCheckForm_name_phone_70_7_61_memo(fm){
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
        return false;
    }
    for(var i = 0; i < exceptAlphabet.length; i++){
        if( fm.M_name.value.indexOf(exceptAlphabet[i]) !== -1){
            alert("죄송합니다 신청이 불가합니다.");
            return false;
        }
    }
    if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
        return false;
    }
    if(fm.M_items_value_70 !== undefined){
        if(fm.M_items_value_70.value == ""){
            alert("사대보험 가입여부를 선택하세요.");
            return false;
        }
    }
    if(fm.M_items_value_7 !== undefined){
        if(fm.M_items_value_7.value == ""){
            alert("연소득액을 입력하세요.");
            fm.M_items_value_7.focus();
            return false;
        }
    }
    if(fm.M_items_value_61 !== undefined){
        if(fm.M_items_value_61.value == ""){
            alert("총부채금액을 입력하세요.");
            fm.M_items_value_61.focus();
            return false;
        }
    }
    if(fm.M_data !== undefined){
        for(var j = 0; j < exceptWord.length; j++){
            if( fm.M_data.value.indexOf(exceptWord[j]) !== -1){
                alert("죄송합니다 신청이 불가합니다.");
                return false;
            }
        }
    }
    if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
        return false;
    }
    checkForm = true;
    fm.setAttribute('method','post');
    if(checkForm == true){
        fm.submit();
        checkForm = false;
    }
}
//차량 종류,번호 체크
function Request_Now_input_check_car(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check=0;
    if(fm.M_agree)
    {
        if(fm.M_agree.checked==false)
            Agree_check=1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }
    in_check = 1;
    if (fm.M_name.value == "") {
        alert("이름을 입력하세요.");
        fm.M_name.focus();
    } else if (fm.M_phone1.value == "" || fm.M_phone2.value == "" || fm.M_phone3.value == "") {
        alert("연락처를 입력하세요.");
        fm.M_phone1.focus();
    } else if (fm.M_items_value_20.value == "") {
        alert("차량종류를 입력하세요.");
        fm.M_items_value_20.focus();
    } else if (fm.M_items_value_33.value == "") {
        alert("차량번호를 입력하세요.");
        fm.M_items_value_33.focus();
    } else {
        fm.submit();
    }
}
//직업선택체크
function Request_Now_input_check_67(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check=0;
    if(fm.M_agree)
    {
        if(fm.M_agree.checked==false)
            Agree_check=1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }
    in_check = 1;
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
    } else if(fm.M_items_value_67.value=="" || fm.M_items_value_67.value=="선택"){
        alert("직업을 입력하세요.");
    } else if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
    } else {
        fm.submit();
    }
}
//통화가능시간체크
function Request_Now_input_check_11(fm){
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check = 0;
    if (fm.M_agree) {
        if (fm.M_agree[0].checked == false)
            Agree_check = 1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }

    in_check = 1;
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
    } else if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
    } else if (fm.M_items_value_61.value.trim() == "") {
        alert("채무금액을 입력해주세요.");
    } else if (fm.M_items_value_11.value == "" || fm.M_items_value_11.value == "선택") {
        alert("통화가능시간을 선택해주세요.");
    }else {
        fm.submit();
    }
}
//필요금액 입력 선택 체크
function Request_Now_input_check_money(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check = 0;
    if (fm.M_agree) {
        if (fm.M_agree[0].checked == false)
            Agree_check = 1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }

    in_check = 1;
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
    } else if (fm.M_items_value_16.value == "선택" || fm.M_items_value_16.value == "") {
        alert("필요금액을 선택하세요.");
    } else if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
    } else {
        fm.submit();
    }
}
<!--기본e22-->
<!--rnd-->
function Request_Now_input_check7(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check = 0;
    if (fm.M_agree) {
        if (fm.M_agree[0].checked == false)
            Agree_check = 1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }

    }

    in_check = 1;
    if (fm.M_items_value_27.value == "") {
        alert("회사명을 입력하세요.");
        fm.M_items_value_27.focus();
    } else if (fm.M_items_value_28.value == "") {
        alert("지역을 입력하세요.");
        fm.M_items_value_28.focus();
    } else if (fm.M_name.value == "") {
        alert("담당자명 입력하세요.");
        fm.M_name.focus();
    } else if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (f을.M_phone1) {
            fm.M_phone1.focus();
        }
    } else if (fm.M_data.value == "") {
        alert("필수사항을 입력하세요.");
        fm.M_data.focus();
    } else if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
    } else {
        fm.submit();
    }
}
<!--rnde-->
<!--현진,지선팀장님(희망트리론)약관동의-->
function Request_Now_input_check2(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check = 0;
    if (fm.M_agree) {
        if (fm.M_agree[0].checked == false)
            Agree_check = 1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }

    in_check = 1;
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
    } else if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
    } else {
        fm.submit();
    }
}
<!--현진약관동의e-->
function CheckForm(Join) {
    var chk1 = document.Write_form.M_agree1.checked;
    var chk2 = document.Write_form.M_agree2.checked;
    if (chk1 == "") {
        alert('약관에동의해 주세요');
        return false;
    }
    if (chk2 == "") {
        alert('약관에동의해 주세요');
        return false;
    }
}
<!--incar보험-->
function Request_Now_input_check3(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check = 0;
    if (fm.M_agree) {
        if (fm.M_agree[0].checked == false)
            Agree_check = 1;
    }


    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }

    in_check = 1;
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
    } else if (fm.M_items_value_19.value == "") {
        alert("생년월일을 입력하세요.");
        fm.M_items_value_19.focus();
    } else if (Agree_check) {
        alert("이용 약관에 동의 해주세요.");
    } else {
        fm.submit();
    }
}
<!--incar보험-->
<!--디비드림 파트너 이벤트용 intro/92s-->
function Request_Now_input_check4(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check = 0;
    if (fm.M_agree) {
        if (fm.M_agree[0].checked == false)
            Agree_check = 1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }

    in_check = 1;
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else {
        fm.submit();
    }
}
<!--디비드림 파트너 이벤트용 intro/92e-->
<!--모나미-->
function Request_Now_input_check6(fm) {
    phone_OK_check = 0;
    tel_OK_check = 0;
    if (fm.M_phone1) {
        if (fm.M_phone1.value.length > 2 && fm.M_phone2.value.length > 3 && fm.M_phone3.value.length > 3) phone_OK_check = 1;
    }
    if (fm.M_phone) {
        if (fm.M_phone.value.length > 5) phone_OK_check = 1;
    }
    if (fm.M_tel1) {
        if (fm.M_tel1.value.length > 1 || fm.M_tel2.value.length > 2 || fm.M_tel3.value.length > 3) tel_OK_check = 1;
    }
    if (fm.M_tel) {
        if (fm.M_tel.value.length > 5) tel_OK_check = 1;
    }

    Agree_check = 0;
    if (fm.M_agree) {
        if (fm.M_agree[0].checked == false)
            Agree_check = 1;
    }

    //체크 박스값체크
    if (fm.M_items_check) {
        Check_type_counts = fm.M_items_check.length;
        if (Check_type_counts) {
            for (rof = 0; rof < Check_type_counts; rof++) {
                Checking_data_value = "";
                Obj_info_values = fm.M_items_check[rof].value;

                Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
                Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);

                Checkbox_Item_counts = Item_value_obj_List.length;
                if (Checkbox_Item_counts) {
                    for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                        if (Item_value_obj_List[rof_chk].checked == true) {
                            if (Checking_data_value) Checking_data_value += ",";
                            Checking_data_value += Item_value_obj_List[rof_chk].value;
                        }
                    }
                } else {
                    if (Item_value_obj_List.checked == true)
                        Checking_data_value += Item_value_obj_List.value;
                }
                Item_value_obj.value = Checking_data_value;
            }
        } else {
            Checking_data_value = "";
            Obj_info_values = fm.M_items_check.value;
            Item_value_obj = eval("fm.M_items_value_" + Obj_info_values);
            Item_value_obj_List = eval("fm.M_items_value_checkbox_" + Obj_info_values);
            Checkbox_Item_counts = Item_value_obj_List.length;
            if (Checkbox_Item_counts) {
                for (rof_chk = 0; rof_chk < Checkbox_Item_counts; rof_chk++) {
                    if (Item_value_obj_List[rof_chk].checked == true) {
                        if (Checking_data_value) Checking_data_value += ",";
                        Checking_data_value += Item_value_obj_List[rof_chk].value;
                    }
                }
            } else {
                if (Item_value_obj_List.checked == true)
                    Checking_data_value += Item_value_obj_List.value;
            }
            Item_value_obj.value = Checking_data_value;
        }
    }

    in_check = 1;
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else if (!tel_OK_check && !phone_OK_check) {
        alert("휴대폰번호를 입력하세요.");
        if (fm.M_phone1) {
            fm.M_phone1.focus();
        }
    } else if (fm.M_items_value_7.value == "") {
        alert("연소득액을 입력하세요.");
        fm.M_items_value_7.focus();
    } else if (fm.M_items_value_24.value == "") {
        alert("재직기간을 입력하세요.");
        fm.M_items_value_24.focus();
    } else if (fm.M_data.value == "" || !in_check) {
        alert("문의내용을 입력하세요.");
        fm.M_data.focus();
    } else {
        fm.submit();
    }
}
<!--모나미e-->
function Request_Now_input_check3_re(fm2) {
    //alert('wetewtewetwtewewt');
    if (fm.M_name.value == "") {
        alert("이름을 입력하세요.");
        fm.M_name.focus();
    } else if (fm.M_phone1.value == "") {
        alert("핸드폰을 입력하세요.");
        fm.M_phone1.focus();
    } else if (fm.M_phone2.value == "") {
        alert("핸드폰을 입력하세요.");
        fm.M_phone2.focus();
    } else if (fm.M_phone3.value == "") {
        alert("핸드폰을 입력하세요.");
        fm.M_phone3.focus();
    } else {
        fm.submit();
    }
}
function Request_Now_input_check4_re(fm) {
    if (fm.M_name.value == "") {
        alert("이름을 입력하세요.");
        fm.M_name.focus();
    } else if (fm.M_items_value_2.value == "") {
        alert("나이를 입력하세요.");
        fm.M_items_value_2.focus();
    } else if (fm.M_items_value_25.value == "") {
        alert("신장을 입력하세요.");
        fm.M_items_value_25.focus();
    } else if (fm.M_items_value_26.value == "") {
        alert("체중을 입력하세요.");
        fm.M_items_value_26.focus();
    } else if (fm.M_items_value_27.value == "") {
        alert("허리둘레를 입력하세요.");
        fm.M_items_value_27.focus();
    } else if (fm.M_items_value_28.value == "") {
        alert("희망체중을 입력하세요.");
        fm.M_items_value_28.focus();
    } else if (fm.M_phone1.value == "") {
        alert("연락처를 입력하세요.");
        fm.M_phone1.focus();
    } else if (fm.M_phone2.value == "") {
        alert("연락처를 입력하세요.");
        fm.M_phone2.focus();
    } else if (fm.M_phone3.value == "") {
        alert("연락처를 입력하세요.");
        fm.M_phone3.focus();
    } else if (fm.M_items_value_17.value == "") {
        alert("이메일을 입력하세요.");
        fm.M_items_value_17.focus();
    } else if (fm.M_data.value == "") {
        alert("남기고 싶은말을 입력하세요.");
        fm.M_data.focus();
    } else {
        fm.submit();
    }
}
function Request_Now_input_check5_re(fm) {
    if (fm.M_name.value == "") {
        alert("이름을 입력하세요.");
        fm.M_name.focus();
    } else if (fm.M_phone1.value == "") {
        alert("연락처를 입력하세요.");
        fm.M_phone1.focus();
    } else if (fm.M_data.value == "") {
        alert("메모를 입력하세요.");
        fm.M_data.focus();
    } else {
        fm.submit();
    }
}
function Request_Now_input_check6_re(fm) {
    if (fm.M_name.value == "") {
        alert("성명을 입력하세요.");
        fm.M_name.focus();
    } else if (fm.M_phone1.value == "") {
        alert("연락처를 입력하세요.");
        fm.M_phone1.focus();
    } else if (fm.M_items_value_17.value == "") {
        alert("이메일을 입력하세요.");
        fm.M_items_value_17.focus();
    } else if (fm.M_items_value_31.value == "") {
        alert("예약날짜를 입력하세요.");
        fm.M_items_value_31.focus();
    } else if (fm.M_items_value_32.value == "") {
        alert("통화가능시간을 입력하세요.");
        fm.M_items_value_32.focus();
    } else if (fm.M_items_value_33.value == "") {
        alert("거주지를 입력하세요.");
        fm.M_items_value_33.focus();
    } else if (fm.M_data.value == "") {
        alert("상담내용을 입력하세요.");
        fm.M_data.focus();
    } else {
        fm.submit();
    }
}
function Request_Now_input_check7_re(fm) {
    if (fm.M_name.value == "") {
        alert("성함을 입력하세요.");
        fm.M_name.focus();
    } else if (fm.M_phone1.value == "") {
        alert("연락처를 입력하세요.");
        fm.M_phone1.focus();
    } else if (fm.M_items_value_10.value == "") {
        alert("지역을 입력하세요.");
        fm.M_items_value_10.focus();
    } else if (fm.M_items_value_35.value == "") {
        alert("투자자금 규묘를 입력하세요.");
        fm.M_items_value_35.focus();
    } else if (fm.M_items_value_36.value == "") {
        alert("점포 소유 여부를 입력하세요.");
        fm.M_items_value_36.focus();
    } else {
        fm.submit();
    }
}
function Request_Now_input_check8_re(fm) {
    if (fm.M_name.value == "") {
        alert("이름을 입력하세요.");
        fm.M_name.focus();
    } else if (fm.M_phone1.value == "") {
        alert("연락처를 입력하세요.");
        fm.M_phone1.focus();
    } else if (fm.M_items_value_33.value == "") {
        alert("차량번호를 입력하세요.");
        fm.M_items_value_33.focus();
    } else if (fm.M_items_value_20.value == "") {
        alert("차량종류를 입력하세요.");
        fm.M_items_value_20.focus();
    } else {
        //fm.submit();
        alert(fm.M_agree.value);
    }
}
//자동포커스 이동
function Auto_focus_next(check_focus, next_focus, length_size) {
    if (check_focus.value.length >= length_size)
        next_focus.focus();
}
//이메일체크
function Email_Format_check(email) {
    email.replace(" ", "");
    email = trim(email);

    reg = new RegExp("^[\\w\\-]+(\\.[\\w\\-_]+)*@[\\w\\-]+(\\.[\\w\\-]+)*(\\.[a-zA-Z]{2,3})$", "gi");
    if (!reg.test(email)) {
        return false;
    }

    return true;
}
//불필요 문자 제거
function trim(str) {
    str = str.replace(/^\s*/, '').replace(/\s*$/, '');
    return str;
}
function Show_Flash_EXE(url, s_width, s_height, bg_colors, option_string) {
    html_text = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" id="param" width="' + s_width + '" height="' + s_height + '">';
    html_text += '<param name="movie" value="' + url + '">';
    html_text += '<param name="quality" value="high">';
    html_text += '<param name="wmode" value="transparent">';
    html_text += option_string;
    html_text += '<param name="bgcolor" value="' + bg_colors + '">';
    html_text += '<embed src="' + url + '" quality=high bgcolor="' + bg_colors + '" width="' + s_width + '" height="' + s_height + '" swliveconnect="true" id="param" name="param" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode=transparent><\/embed>';
    html_text += '<\/object>';
    document.write(html_text);
}
function start_check(fm, check_value) {
    fm.M_data.value = "";
    in_check = 1;
}
function form_check() {

    $("#btn_join").click(function () {

        var M_phone1_pattern = /(^01[016789]$)/; //정규식

        //alert("ok");
        if ($("#M_name").val() == "") {
            alert("이름을 꼭 입력하세요!");
            $("#M_name").focus();
            return false;

        } else if ($("#M_phone1").val() == "") {
            alert("전화번호 첫번째자리 입력하세요!");
            $("#M_phone1").focus();
            return false;

        } else if ($("#M_phone1").val().length != 3) {

            alert("전화1을 3개의 숫자로 꼭 입력하세요!");
            $("#M_phone1").val("");
            $("#M_phone1").focus();
            return false;

        } else if (isNaN($("#M_phone1").val())) {
            alert("전화1을 3개의 숫자로 꼭 입력하세요!");
            $("#M_phone1").val("");
            $("#M_phone1").focus();
            return false;

        } else if (!M_phone1_pattern.test($("#M_phone1").val())) {
            alert("010, 011, 016, 017, 018, 019,o19만 가능합니다.")
            $("#M_phone1").val("")
            $("#M_phone1").focus();
            return false;
        }
        /*
        if($("#M_phone1").val() != "" & $("#M_phone1").val().length ==3 & !isNaN($("#M_phone1").val()) ){
        alert("okkkkkkk");
        var pattern = /(^01[016789]$)/; //정규식 슬래쉬(/)로 시작해서, 슬래쉬(/)로 끝났다.
        var M_phone1=$("#M_phone1").val();
        if(! pattern.test(M_phone1)){
        //틀리면
        alert("010, 011, 016, 017, 018, 019,o19만 가능합니다.")
        $("#tel").val("")
        $("#tel").focus();

            }
        }*/

        else if ($("#M_phone2").val() == "") {
            alert("전화번호 두번째자리를 입력하세요!");
            $("#M_phone2").focus();
            return false;

        } else if ($("#M_phone1").val().length != 3) {

            alert("전화1을 3개의 숫자로 꼭 입력하세요!");
            $("#M_phone2").val("");
            $("#M_phone2").focus();
            return false;

        } else if (isNaN($("#M_phone2").val())) {
            alert("전화2을 3~4개의 숫자로 꼭 입력하세요!");
            $("#M_phone2").val("");
            $("#M_phone2").focus();
            return false;

        } else if ($("#M_phone2").val() != "" & $("#M_phone2").val().length > 4 & isNaN($("#M_phone2").val())) {
            alert("okkkkkkk");
            var pattern = /(^01[016789]$)/; //정규식 슬래쉬(/)로 시작해서, 슬래쉬(/)로 끝났다.
            var M_phone1 = $("#M_phone2").val();
            if (!pattern.test(M_phone1)) {
                //틀리면
                alert("010, 011, 016, 017, 018, 019,o19만 가능합니다.")
                $("#te2").val("")
                $("#te2").focus();
                return false;

            }
        } else if ($("#M_phone3").val() == "") {
            alert("전화번호 세번째자리를 입력하세요!");
            $("#M_phone3").focus();
            return false;


        } else if ($("#M_items_value_43").val() == "") {
            alert("생일을  꼭 입력하세요!");
            $("#M_items_value_43").focus();
            return false;

        } else if ($("#man").is(':checked') == false && $("#woman").is(':checked') == false) {
            alert("남자 또는 여자를 꼭 선택하세요!");
            return false;
        } else if ($("#M_items_value_42_1").is(':checked') == false && $("#M_items_value_42_2").is(':checked') == false) {
            alert("보험가능하신분 선택");
            return false;


        } else if ($("#email").val() == "") {
            alert("이메일을 꼭 입력하세요!");
            $("#email").focus();
            return false;

        } else if ($("#intro").val() == "") {
            alert("자기소개를 꼭 입력하세요!");

            $("#intro").focus();
            return false;

        } else if ($("#M_agree1").is(':checked') == false || $("#M_agree2").is(':checked') == false) {
            alert("전체동의해주세요.");
            return false;


        } else {
            alert("ok");
            document.Write_form.submit();
        }


    });

    //$("#birth").datepicker();
    //$.datepicker.setDefaults( $.datepicker.regional[ "" ] );
    //$("#birth").datepicker($.datepicker.regional["ko"]);
    $("#M_items_value_43").datepicker();

}
function acc_module_load(fm)
{
	phone_no=fm.M_phone1.value+fm.M_phone2.value+fm.M_phone3.value;

	if(phone_no=="")
	{
		alert("연락처를 입력해주세요.");
		fm.M_phone1.focus();
	}
	else if(phone_no.length>11)
	{
		alert("연락처가 정확한지 확인해주세요.");
		fm.M_phone1.focus();
	}
	else if(!isCellPhone(phone_no))
	{
		alert("연락처를 정확히 입력해주세요.");
		fm.M_phone1.focus();
	} 
	else
	{
		 fm.M_phone1.readOnly = true;
		 fm.M_phone2.readOnly = true;
		 fm.M_phone3.readOnly = true;
		DATASEND_Data_SEND_acc('Mode_value=acc_exe&phoneno='+phone_no);
	}
}
function DATASEND_newXMLHttpRequest()
{
	var DATASEND_XML_req = false;
	if (window.XMLHttpRequest)
	{
		DATASEND_XML_req = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		try{	DATASEND_XML_req = new ActiveXObject("Msxml2.XMLHTTP");	}
		catch (e1)
		{
			try{	DATASEND_XML_req = new ActiveXObject("Microsoft.XMLHTTP");	}
			catch (e2){}
		}
	}
	return DATASEND_XML_req;
}
function DATASEND_Data_SEND_acc(load_data)
{
	DATASEND_Xml_Auth_load_Request = DATASEND_newXMLHttpRequest();

	var DATASEND_handlerFunction = DATASEND_Data_SEND_acc_return;
	DATASEND_Xml_Auth_load_Request.onreadystatechange = DATASEND_handlerFunction;
	DATASEND_Xml_Auth_load_Request.open("POST", "/module/sacc_module.html", true);
	DATASEND_Xml_Auth_load_Request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	DATASEND_Xml_Auth_load_Request.send(load_data);

}
function DATASEND_Data_SEND_acc_return()
{
	if (DATASEND_Xml_Auth_load_Request.readyState == 4)
	{
		if (DATASEND_Xml_Auth_load_Request.status == 200)
		{
			if(DATASEND_Xml_Auth_load_Request.responseText=="OK")
			{
				 Write_form.M_acc_code.readOnly = false;
				 Write_form.M_acc_code.focus();
				alert("휴대폰번호로 전송된 인증번호를 입력해주세요.");
			}
			else
			{
				alert(DATASEND_Xml_Auth_load_Request.responseText);
			}
		}
	}
}
function isCellPhone(p)
{
	p = p.split('-').join('');
	var regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
	return regPhone.test(p);
}

function cdcheck(obj){
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "v")) {
        event.returnValue = false;
    }
    
    var regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\　ㅤ(\=]/gi;
    if( regExp.test(obj.value) ){
       obj.value = obj.value.substring( 0 , obj.value.length - 1 ); 
    }
}
function checkNumber(event) {
  if(event.key >= 0 && event.key <= 9) {
    return true;
  }
  return false;
}