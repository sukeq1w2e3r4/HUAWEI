// 获取点击左键的节点
var left = document.querySelectorAll('#lun #left')[0]
// 获取点击右键的节点
var right = document.querySelectorAll('#right')[0]
// 获取所有图片的节点

let lilist = $('#lun .one li')
let ul = $('#lun .one')
var n = 0;
left.onclick = function () {
    if (n === 0) {
        n = lilist.length - 1
        ul.css('margin-left', -(n * 1440) + "px")
    } else {
        n--
        ul.css('margin-left', -(n * 1440) + "px")
    }
    jia()
}
// 给右箭头绑定点击事件
$('#lun #right').click(function () {
    if (n === lilist.length - 1) {
        n = 0
        ul.css('margin-left', -(n * 1440) + "px")
    } else {
        n++
        ul.css('margin-left', -(n * 1440) + "px")
    }
    jia()
})

var ol = document.querySelectorAll('#qiu')[0]

for (var i = 0; i < lilist.length; i++) {
    var o = document.createElement('span')
    ol.appendChild(o)
    if (i === 0) {
        o.className = 'fffff'
    }
    o.setAttribute("number", i)
    o.onclick = function () {
        n = Number(this.getAttribute("number"))
        ul.css('margin-left', -(n * 1440) + "px")
        jia()
    }
}
var o = document.querySelectorAll('span')

function jia() {
    for (var i = 0; i < lilist.length; i++) {
        o[i].className = ''
        o[n].className = 'fffff'
    }
}
var box = document.getElementById('lun')
// 加计时器
var kaishi = setInterval(function () {
    right.click()
}, 5000)
//   鼠标移上清除计时器
box.onmouseenter = function () {
    clearInterval(kaishi)
}
box.onmouseleave = function () {
    setInterval(function () {
        right.click()
    }, 5000)
}

// $('#box1').mouseenter(function () {
    // $('#left').css('display', 'none')
// })
// $('#box1').mouseleave(function () {
    // $('#left').css('display', 'block')
// })
// 
// 
var n = 0
var lun = $('#bo .war li')
for (let i = 0; i < lun.length; i++) {
    //   生成小球
    let m = $('<li>')
    let a = m.attr('index', i)
    if (i === 0){
        a.addClass('bian') 
    }
    a.appendTo($('#bo .war #xiao'))
}   
let qiuli = $('#bo .war ol li')
function gong(){
    for (let i = 0; i < lun.length; i++){
        $(lun)[i].className = ''
        $(lun)[n].className = 'show'
        $(qiuli)[i].className = ''
        $(qiuli)[n].className = 'bian'
    }
}
function bian(){
    if (n === 0) {
        n = lun.length - 1
        gong()
    } else {
        n--
        gong()
    }
}
var kaishi = setInterval(function () {
    bian()
}, 2000)




