 // 所有小图的节点
 let liimg = $('#xiang .war .box2 li img')
 //  大图的节点
 let bigimg = $('#xiang .war #img1')
 //  获取放大图的节点
 let daimg = $('#xiang .war #fang')
 // 获取放大镜盒子的节点
 let glassbox = $('#xiang .war .da')
 // 获取阴影的节点
 let zhe = $('#xiang .war .zhe')
 //  获取放大镜图片的节点
 let glassimg = $('#xiang .war #fang')
 //  给所有的小图绑定鼠标移上事件
 liimg.mouseenter(function () {
     $(bigimg)[0].src = this.src
     $(daimg)[0].src = this.src
 })
 //  给大图绑定鼠标移上事件
 bigimg.mouseenter(function () {
     glassbox.css({
         'display': 'block'
     })
     zhe.css({
         'display': 'block'
     })
 })
 //  给大图绑定鼠标移出事件
 bigimg.mouseleave(function () {
     glassbox.css({
         'display': 'none'
     })
     zhe.css({
         'display': 'none'
     })
 })
 //  给大图绑定鼠标移动事件
 bigimg.mousemove(function (m) {
     let zhew = $(zhe)[0].offsetWidth
     let zheh = $(zhe)[0].offsetHeight
     var xy = {
         x: m.offsetX,
         y: m.offsetY
     }
     if (xy.x >= parseInt($(bigimg)[0].offsetWidth) - parseInt(zhew) / 2) {
         xy.x = parseInt($(bigimg)[0].offsetWidth) - parseInt(zhew) / 2
     }
     if (xy.y >= parseInt($(bigimg)[0].offsetHeight) - parseInt(zheh) / 2) {
         xy.y = parseInt($(bigimg)[0].offsetHeight) - parseInt(zheh) / 2
     }
     if (xy.x < parseInt(zhew) / 2) {
         xy.x = parseInt(zhew) / 2
     }
     if (xy.y < parseInt(zheh) / 2) {
         xy.y = parseInt(zheh) / 2
     }
     zhe.css({
         'left': parseInt(xy.x) - parseInt(zhew) / 2 + "px",
         'top': parseInt(xy.y) - parseInt(zheh) / 2 + "px"
     })
     glassimg.css({
         'left': -(parseInt(xy.x) - parseInt(zhew) / 2) * 2 + "px",
         'top': -(parseInt(xy.y) - parseInt(zheh) / 2) * 2 + "px"
     })
 })
 console.log(citys);
 //  获取到省的节点
 var sheng = $($('#xiang .war .box3 #one'))[0]
 var shi = $($('#xiang .war .box3 #two'))[0]
 var xian = $($('#xiang .war .box3 #there'))[0]
 console.log(xian);
 // 循环city数组,得出省
 for (var i = 0; i < citys.length; i++) {
     //    let option =document.createElement('option')
     let option = $("<option>")
     option.html(citys[i].provinceName)
     sheng.append($(option)[0])
 }
 for (var i = 0; i < citys[0].mallCityList.length; i++) {
     let option = $("<option>")
     option.html(citys[0].mallCityList[i].cityName)
     shi.append($(option)[0])
 }
 for (var i = 0; i < citys[0].mallCityList[0].mallAreaList.length; i++) {
     let option = $("<option>")
     option.html(citys[0].mallCityList[0].mallAreaList[i].areaName)
     xian.append($(option)[0])
 }



// 更新市
 function city(shu){
    shi.innerHTML = ''
    var shu = shu || 0;;
    for (var i = 0; i < citys[shu].mallCityList.length; i++){
        let option = $("<option>")
        option.html(citys[shu].mallCityList[i].cityName)
        shi.append((option)[0])
    }
 }
 
 
//  更新县
function xia(x,y){
    xian.innerHTML = ''
    var x = x || 0;;
    var y = y || 0;;
    for (var i = 0; i < citys[x].mallCityList[y].mallAreaList.length; i++){
        let option = $("<option>")
        option.html(citys[x].mallCityList[y].mallAreaList[i].areaName)
        xian.append((option)[0])
    }
 }
 sheng.onchange = function () {
    city(this.selectedIndex) 
    let n = shi.selectedIndex
    xia(this.selectedIndex,n)
 }
 shi.onchange = function () {
     let m = sheng.selectedIndex
    xia(m,this.selectedIndex)
 }