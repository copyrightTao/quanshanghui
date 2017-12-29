$(function () {
    // 轮播图
    layui.use('carousel', function () {
        var carousel = layui.carousel;
        //建造实例
        carousel.render({
            elem: '#test1',
            width: '100%', //设置容器宽度
            arrow: 'hover', //左右箭头显示
            interval: 2000, //轮播图切换速度
            height: '498px',
            arrow: 'always' //始终显示箭头
            //,anim: 'updown' //切换动画方式
        });
    });
    //设置轮播图上面二级菜单的显示与隐藏
    $('.category li').mouseover(function () {
        $('.secondkind').css('display', 'block');
    });
    $('.navi').mouseleave(function () {
        $('.secondkind').css('display', 'none');
    })
    //设置鼠标移入左侧边栏之后事件及点击侧边栏跳转到相应位置
    $('.lefttools li').mouseover(function () {
        $(this).children('a').css('display', 'none').siblings('div').css('display', 'block')
            .parent('li').siblings('li').children('a').css('display', 'block').siblings('div').css('display', 'none');
    });
    var len = $('.lefttools li').length;
    var topHeight = 1400;
    var floorHeight = 1120;
    $('.lefttools').mouseout(function () {
        LeftFloorMouseOut()
    });
    $('.lefttools li').each(function (i) {
        $(this).click(function () {

            $(window).scrollTop(topHeight + floorHeight * i);
            $(this).children('a').css('display', 'none').siblings('div').css(
                'display', 'block');
        });

    })
    //设置点击返回顶部按钮返回到首页顶部
    $('.returntop').click(function () {
        $(window).scrollTop(0)
        console.log($(window).scrollTop())
    })
})
/**
 * 左侧侧边栏鼠标移出事件
 */
function LeftFloorMouseOut() {
    var LeftFloorLiIndex = Math.floor(($(window).scrollTop() - 1470) / 1050)>=0?Math.floor(($(window).scrollTop() - 1470) / 1050):100;
    $('.lefttools li').eq(LeftFloorLiIndex).children('a').css('display', 'none').siblings('div').css('display','block')
        .parent('li').siblings('li').children('a').css('display', 'block').siblings('div').css('display', 'none');
}