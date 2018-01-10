$(function(){
    // 轮播图
    layui.use(['carousel','form'], function () {
        var carousel = layui.carousel;
        var form = layui.form;
        //建造实例
        carousel.render({
            elem: '#test1',
            width: '818px', //设置容器宽度
            arrow: 'hover', //左右箭头显示
            interval: 2000, //轮播图切换速度
            height: '357px',
            arrow: 'always' //始终显示箭头
            //,anim: 'updown' //切换动画方式
        });
    });
})