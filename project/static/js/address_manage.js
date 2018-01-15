$(function () {
    //**************个人中心通用的样式修改start
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
    //左侧导航栏逻辑
    $('.main_left dt').click(function () {
        $(this).siblings('dd').toggle();
    })
    //**************个人中心通用的样式修改end



    //点击新增地址及返回地址事件
    $('.right_title .add_address').click(function () {
        $(this).addClass('hide').siblings('a').removeClass('hide');
        $('.newAddress').removeClass('hide').siblings('ul').addClass('hide');
    })
    $('.right_title .return_list').click(function () {
        returnList($(this));
    })
    $('.newAddress .give_up').click(function () {
        $('.right_title').children('.add_address').removeClass('hide').siblings('.return_list').addClass('hide');
        $('.main_right ul').removeClass('hide').siblings('.newAddress').addClass('hide');
        $('.newAddress .moreAddress').val("");
        $('.user_info .shouhuoren').val("");
        $('.newAddress .phoneNumber').val("");
    })
    //右侧我的地址点击事件
    $('.main_right').delegate('.moren', 'click', (function () {
        $(this).parent().addClass('setmoren').siblings().removeClass('setmoren');
        $(this).addClass('hide').siblings('.morendizhi').removeClass('hide')
            .parent().siblings().children('.moren').removeClass('hide').siblings('.morendizhi').addClass('hide');
    }))
    $('.main_right').delegate('.delete', 'click', function () {
        var conf = confirm('是否删除该地址?');
        if (conf) {
            $(this).parent().remove();
        }
    })
    $('.main_right').delegate('.bianji', 'click', function () {
        $(this).parent().attr('data-num', 'a');
        $('.newAddress').removeClass('hide').siblings('ul').addClass('hide');
        $('.newAddress .add').children('img').attr('src', '../images/address_manage/xiugai_03.png');

    })
    $('.newAddress .add').click(function () {
        var phone = $('.newAddress .phoneNumber').val();
        if ($('.user_info .shouhuoren').val() == "") {
            alert('请填写收货人');
            return false;
        } else if ($('.moreAdd .moreAddress').val() == '') {
            alert('请填写详细收货地址');
            return false;
        } else if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))) {
            alert("手机号码输入不正确");
            return false;
        } else {
                moreAddress = $('.newAddress .moreAddress').val(),
                province = $('#cmbProvince').val(),
                city = $('#cmbCity').val(),
                area = $('#cmbArea').val(),
                name = $('.user_info .shouhuoren').val();
            if ($('.main_right ul li[data-num="a"]')) {
                thisLi = $('.main_right ul li[data-num="a"]');
            } else {
                var newLi =
                "<li>" +
                "<div class='shouhuoren'>" +
                "<span>收货人:</span>" +
                "<i></i>" +
                "</div>" +
                " <div class='suozaidiqu'>" +
                "<span>所在地区:</span>" +
                "<i></i>" +
                "</div>" +
                "<div class='dizhi'>" +
                "<span>详细地址:</span>" +
                "<i></i>" +
                "</div>" +
                "<div class='phone'>" +
                "<span>联系电话:</span>" +
                "<i></i>" +
                "</div>" +
                "<a href='javascript:;' class='moren'>设为默认</a>" +
                "<a href='javascript:;' class='bianji'>编辑</a>" +
                "<a href='javascript:;' class='delete'>删除</a>" +
                "<div class='morendizhi hide'>" +
                "默认地址" +
                "</div>" +
                "</li>";
                $('.main_right ul').prepend(newLi);
                thisLi = $('.main_right li').eq(0);
            }
            $(thisLi).find('.shouhuoren').children('i').html(name);
            $(thisLi).find('.phone').children('i').html(phone);
            $(thisLi).find('.dizhi').children('i').html(moreAddress);
            $(thisLi).find('.suozaidiqu').children('i').html(province + city + area);
            $('.newAddress .moreAddress').val("");
            $('.user_info .shouhuoren').val("");
            $('.newAddress .phoneNumber').val("");
            $('.right_title .add_address').removeClass('hide').siblings('.return_list').addClass('hide');
            $('.main_right ul').removeClass('hide').siblings('.newAddress').addClass('hide');
            $('.main_right li').removeAttr('data-num');
        }
    })
    //省市县三级联动
    addressInit('cmbProvince', 'cmbCity', 'cmbArea');
    //返回事件
    function returnList(abc) {
        abc.addClass('hide').siblings('a').removeClass('hide');
        $('.main_right ul').removeClass('hide').siblings('.newAddress').addClass('hide');
    }
})