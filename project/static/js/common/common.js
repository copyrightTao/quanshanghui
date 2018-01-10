$(function(){
    //设置轮播图上面二级菜单的显示与隐藏
$('.category li').mouseover(function () {
    $('.secondkind').css('display', 'block');
});
$('.navi').mouseleave(function () {
    $('.secondkind').css('display', 'none');
    $('.category ul').css('display', 'none');
    $('.layui-carousel-ind').css('top', '0px');
    $('.layui-carousel > [carousel-item]').css('top', '0px')
});
$('.category').mouseover(function () {
    $('.category ul').css('display', 'block');
    $('.layui-carousel-ind').css('top', '-550px');
    
})
//设置点击返回顶部按钮返回到首页顶部
$('.returntop').click(function () {
    $(window).scrollTop(0)
    console.log($(window).scrollTop())
});
/**
 * 左侧侧边栏鼠标移出事件
 */
function LeftFloorMouseOut() {
    var LeftFloorLiIndex = Math.floor(($(window).scrollTop() - 1470) / 1050) >= 0 ? Math.floor(($(window).scrollTop() - 1470) / 1050) : 100;
    $('.lefttools li').eq(LeftFloorLiIndex).children('a').css('display', 'none').siblings('div').css('display', 'block')
        .parent('li').siblings('li').children('a').css('display', 'block').siblings('div').css('display', 'none');
}
})
