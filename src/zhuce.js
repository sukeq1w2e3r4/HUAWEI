
//注册
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
var ma = document.getElementById('yanzhengma')
console.log(ma);
ma.innerHTML = verifyCode(4)
ma.onclick = function(){
    ma.innerHTML = verifyCode(4)
}