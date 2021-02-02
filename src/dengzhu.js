
// 用户名验证
function userBtn() {
    let usename = $('#usname').val();
    var userReg = /^[-_a-zA-Z0-9]{4,16}$/;
    if (userReg.test(usename)) {
        return true;
    }
    return false
}
// 密码验证
function pwdBtn() {
   let pwd = $('#passward').val()
    var pwdReg = /^[a-zA-Z0-9]{4,10}$/;
    if (pwdReg.test(pwd)) {
        return true;
    }
    return false;
}
// 确认密码
function queren() {
    let pwd = $('#passward').val()
    let que = $('#queren').val()
    if (pwd === que) {
        return true
    } else {
        return false
    }
}   
// 验证码
function verifyCode(n) {
    let count = n || 4;
    let arr = ["q", "a", "z", "x", "s", "w", "e", "d", "c", "v", "f", "r", "t", "g", "b", "n", "h", "y", "u",
        "j", "m", "k", "i", "o", "l", "p", "0", "1",
        "3", "4", "5", "6", "7", "8", "9"
    ];
    let result = "";
    for (let i = 0; i < count; i++) {   
        var index = Math.floor(Math.random() * arr.length)
        result = result + arr[index];
    }
    return result;
}
var ma = $('#yanzhengma')

$('#yanzhengma').html(verifyCode(4)) 
ma.click(function(){
    $('#yanzhengma').html(verifyCode(4)) 
})

console.log(ma)


function zheng() {
    let yan = $('#ma').val()
    let ma = $('#yanzhengma').html()
    if (yan === ma) {
        return true
    } else {
        return false
    }
}


// 向后端发送请求的条件
function postBool() {
    if (userBtn() && pwdBtn() && queren() && zheng()) {
        alert("提交成功!");
        return true
    }
}
// 向后端发送请求

$('#zhuce').click(function () {
    if (postBool()) {
        let http = new XMLHttpRequest()
        http.open("get",
            `http://10.211.55.4:8080/zhu?username=${$('#usname').val()}&password=${$('#passward').val()}`
        )
        http.send()
        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                if (http.responseText === "success") {
                    alert("注册成功,点击登录吧")
                    location.href = "";
                } else {
                    alert("注册失败")
                }
            }
        }
    }
})
