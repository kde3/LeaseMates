const pwd = document.querySelector('.enter-pw');
const pwdck = document.querySelector('.check-pw');
const message = document.querySelector('.missmatch-message');

// 비밀번호 불일치 나오는 스타일 
message.style.color = "red";
message.style.fontSize = "16px";
message.style.justifyContent = "center";
message.style.paddingBottom = "10px";

// 값 비교 함수
function miss (password1, password2){
    return password1 == password2
}

// 오류 메세지
function pwdcheck(){
    if(pwdck.value.length !== 0){
        if(pwd.value !== pwdck.value){
            alert("비밀번호 확인!");
        }else{
            alert("탈퇴하셨습니다!");
            // 주소로 이동...
            window.location.href = "http://127.0.0.1:5500/user/profile/delete/delete_success/delete_success.html";
        }
    }
}
function back(){
    window.location.href = "http://127.0.0.1:5500/user/profile/index/index.html";
}

// 비밀번호 불일치시 경고 메시지 
pwdck.onkeyup = function(){
    if(pwdck.value.length !==0){
        if(miss(pwd.value, pwdck.value)){
            message.classList.add('hide');
        }else{
            message.classList.remove('hide');
        }
    }else{
        message.classList.add('hide');
    }
}
pwd.onkeyup = function(){
    if(pwdck.value.length !==0){
        if(miss(pwd.value, pwdck.value)){
            message.classList.add('hide');
        }else{
            message.classList.remove('hide');
        }
    }else{
        message.classList.add('hide');
    }
}