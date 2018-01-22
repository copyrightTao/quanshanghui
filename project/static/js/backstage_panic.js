$(function () {
    
    //点击已发货或者代发货样式改变
    $('.content .option li').click(function(){
        $(this).addClass('changePink').siblings('li').removeClass('changePink');
    })
})