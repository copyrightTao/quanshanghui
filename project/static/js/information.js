$(function () {
    $('.daohang').remove();
    $('.hengxian').remove();
    //设置外边框点击之后border改变颜色
    $('.information_main .w >div').each(function () {
        $(this).click(function () {
            if ($(this).index() != 0) {
                $(this).css('border', '2px solid #f6aa77').siblings('div').not('.xinxi,.shouldpay').css('border', '2px solid #dadada')
            }
        })
    });
    //设置新货人信息模块事件
    $('.address_main').delegate('input', 'click', function () {
        $(this).attr('checked', 'checked').parent().siblings().children('input').removeAttr('checked');
        $(this).siblings().children('a').removeClass('hide').parent().parent().siblings().find('a').addClass('hide');
        $(this).parent('li').css('background-color', '#fff4d3').siblings('li').css('background-color', '#ffffff')
    })
    $('.address_main').delegate('.delete', 'click', function () {
        var conf = confirm('是否删除该地址？');
        if (conf) {
            $(this).parent().parent().remove()
        } else {
            return false;
        }
    })
    $('.newAddress .phoneNumber').blur(function () {
        var mobile = $(this)
        checkMobile(mobile)
    })
    $('.newAddress a').click(function () {
        if ($('.user_info .shouhuoren').val() == "") {
            alert('请填写收货人');
            return false;
        } else if ($('.moreAdd .moreAddress').val() == '') {
            alert('请填写详细收货地址');
            return false;
        } else {
            var newLi =
                '<li>' +
                '<input type="radio" id="">' +
                '<label for="">' +
                '<span class="name"></span>' +
                '<span class="phone"></span>' +
                '<span class="userAddress">' +
                '</span>' +
                '<a href="javascript:;" class="hide delete fr">删除</a>' +
                '<a href="javascript:;" class="hide bianji fr">编辑</a>' +
                '</label>'
            '</li>',
            phone = $('.newAddress .phoneNumber').val(),
                moreAddress = $('.newAddress .moreAddress').val(),
                province = $('#cmbProvince').val(),
                city = $('#cmbCity').val() == "市辖区" || $('#cmbCity').val() == "县" ? "" : $('#cmbCity').val(),
                area = $('#cmbArea').val(),
                name = $('.user_info .shouhuoren').val();
            $('.lastLi').before(newLi);
            var thisLi = $('.address_main li').eq(-2)
            $(thisLi).children('input').attr('id', phone);
            $(thisLi).children('label').attr('for', phone);
            $(thisLi).find('.name').html(name);
            $(thisLi).find('.phone').html(phone);
            $(thisLi).find('.userAddress').html(province + city + area + moreAddress);
            $(thisLi).children('input').attr('checked', 'checked').parent().siblings().children('input').removeAttr('checked');
            $(thisLi).css('background-color', '#fff4d3').siblings('li').css('background-color', '#ffffff')
            $(thisLi).find('a').removeClass('hide').parent().parent().siblings().find('a').addClass('hide');
            $('.newAddress .moreAddress').val("");
            $('.user_info .shouhuoren').val("");
            $('.newAddress .phoneNumber').val("");
        }
    })
    $('.lastLi').click(function () {
        $(this).siblings().find('a').addClass('hide')
    })
    //支付方式点击事件
    $('.paykind li').click(function () {
        $(this).css({
            'background-image': 'url("../images/information/background_03.png")',
            'border': 'none',
            'height': '48px',
            'width': '132px'
        }).siblings('li').css({
            'background-image': 'none',
            'border': '1px solid #dadada',
            'height': '46px',
            'width': '130px'
        })
    })






    //手机号码验证
    function checkMobile(mobile) {
        var sMobile = mobile.val()
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))) {
            alert("手机号码输入不正确");
            return false;
        }
    }
})