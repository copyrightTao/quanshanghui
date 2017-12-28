$(function () {
    // 轮播图
    layui.use(['carousel','element'], function () {
        var carousel = layui.carousel;
        var element = layui.element;
        //建造实例
        carousel.render({
            elem: '#test1',
            width: '100%', //设置容器宽度
            arrow: 'hover', //左右箭头显示
            interval: 2000, //轮播图切换速度
            height: '330px',
            arrow: 'always' //始终显示箭头
            //,anim: 'updown' //切换动画方式
        });
    });
    $('.category').mouseover(function(){
        $('.category ul').css('display','block');
        $('.layui-carousel-ind').css('top','-550px');
        document.querySelector('#test1 > div').style.top = 0;
    })
    //设置轮播图上面二级菜单的显示与隐藏
    $('.category li').mouseover(function () {
        $('.secondkind').css('display', 'block');
    });
    $('.navi').mouseleave(function () {
        $('.secondkind').css('display', 'none');
        $('.category ul').css('display','none');
        $('.layui-carousel-ind').css('top','0px');
        $('.layui-carousel > [carousel-item]').css('top','0px')
    })
})