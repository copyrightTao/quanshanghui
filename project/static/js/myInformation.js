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
    $('.msg').delegate('.check', 'click', function () {
        var height = $(this).siblings('.overflow').find('p').css('height');
        console.log(height)
        if ($(this).siblings('.overflow').css('height') == '50px') {
            $(this).siblings('.overflow').css('height', height);
            $(this).html('收起>>')
        } else {
            $(this).siblings('.overflow').css('height', '50px')
            $(this).html('展开>>')
        }
    });
    $('.content>ul li').delegate('.delete', 'click', function () {
        var conf = confirm('是否删除此条信息');
        if (conf) {
            $(this).parent().remove();
        }
    })
})