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
    //店铺全选按钮点击事件
    $('.main_right .content').delegate('.chkAll', 'click', function () {
        $(this).parent().next().find('.checkBox').prop('checked', this.checked);
        var checks = $('.chkAll');
        $('#allCheck').prop('checked', checks.length == checks.filter(':checked').length ? true : false)
    })
    $(".checkBox").click(function () {
        var $subs = $(this).parent().parent().find('.checkBox');
        $(this).parent().parent().prev().find('.chkAll').prop("checked", $subs.length == $subs.filter(":checked").length ? true : false);
        var checks = $('.chkAll');
        $('#allCheck').prop('checked', checks.length == checks.filter(':checked').length ? true : false)
    });
    //删除按钮点击事件
    $('.main_right .content').delegate('.store a', 'click', function () {
        var conf = confirm('是否删除该收藏?');
        if (conf) {
            $(this).parent().parent().remove();
        }
    })
    $('.main_right .content').delegate('ul ul a', 'click', function () {
        var conf = confirm('是否删除该收藏?');
        if (conf) {
            $(this).parent().remove();
        }
    })
    //全部选择点击事件
    $('#allCheck').click(function () {
        $('ul input').prop('checked', this.checked);
    })
    //删除按钮点击事件
    $('.deleteAll').click(function () {
        var conf = confirm('是否删除指定收藏?');
        if (conf) {
            $('.main_right .content>ul>li').each(function () {


                if ($(this).children('.store').children('input').prop('checked')) {
                    $(this).children('.store').parent().remove();
                    $(this).find('li').find('input').filter(':checked').parent().remove();
                } else {
                    $(this).find('li').find('input').filter(':checked').parent().remove();
                }

            })
        }
    })
})