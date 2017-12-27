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
    //设置两侧导航栏固定位置
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 600) {
            $('.asidetools').css('display', 'block');
        } else {
            $('.asidetools').css('display', 'none');
        }

    });
    //设置轮播图上面二级菜单的显示与隐藏
    $('.category').mouseover(function () {
        $('.secondkind').css('display', 'block');
    }).mouseout(function () {
        $('.secondkind').css('display', 'none');
    })
    //设置鼠标移入侧边栏之后事件及点击侧边栏跳转到相应位置
    $('.lefttools li').mouseover(function(){
        $(this).children('a').css('display','none').siblings('div').css({'display':'block','backgroundColor':'#e01222'});
    });
    $('.lefttools li').mouseout(function(){
        $(this).children('div').css('display','none').siblings('a').css('display','block')
    });
    $('.lefttools li').click(function(){
        var len = $('.lefttools li').length;
    })
})