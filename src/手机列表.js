 var lilist =  $('#fenlei .four-2')
 lilist.mouseover(function(){
    $('#fenlei .four .xiala').addClass('show') 
    lilist.css('border-bottom','none')
 })
 lilist.mouseleave(function(){
    $('#fenlei .four .xiala').removeClass('show')
    lilist.css('border-bottom','1px solid #eaeaea')
   
 })

 var four =  $('#fenlei .four-3')
 four.mouseover(function(){
    $('#fenlei .war .four #xao').css('display','block')
    four.css('border-bottom','none')
 })
 four.mouseleave(function(){
    $('#fenlei .war .four #xao').css('display','none')
    four.css('border-bottom','1px solid #eaeaea')
 })