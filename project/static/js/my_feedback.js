$(function () {
    //个人中心通用的样式修改start
    $('.hengxian').remove();
    $('.daohang').css('background-color', '#da0011');
    $('.othercategory li').eq(2).remove();
    $('.othercategory li').eq(2).remove();
    var li = "<li><a href='../view/index.html'>首页</a></li>";
    $(li).insertBefore($('.othercategory li').eq(0));
    $('.othercategory li').css({
        'margin-left': '60px',
        'margin-top': '3px'
    });
    $('.othercategory li').find('a').css('color', '#fff')
    //左侧导航栏
    $('.main_left dt').click(function () {
        $(this).siblings('dd').toggle();
    })
    //个人中心通用的样式修改end
})