$(function () {
    // 轮播图
    layui.use(['carousel', 'element'], function () {
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
    $('.category').mouseover(function () {
        document.querySelector('#test1 > div').style.top = 0;
    })
    //商品筛选模块逻辑
    $('.spsx_content dd a').click(function () {
        $(this).addClass('changeOrange').parent().siblings('dd').find('a').removeClass('changeOrange');
    })
    $('.spsx .reset').click(function () {
        $('.spsx_content dl').each(function () {
            $(this).find('a').eq(0).addClass('changeOrange').parent().siblings('dd').find('a').removeClass('changeOrange')
            $('.price_section dd').find('input').removeAttr('checked');
        })
    })
    //价格区间动态样式
    $('.price_section dd').click(function () {
        if ($("input[name='price']:checked").length != 0) {
            $('.price_section dd').eq(0).find('a').removeClass('changeOrange')
        } else {
            $('.price_section dd').eq(0).find('a').addClass('changeOrange')
        }
    });
    $('.price_section dd').eq(0).find('a').click(function () {
        $(this).addClass('changeOrange').parent().siblings('dd').find('input').removeAttr('checked');
    })
    //点击更多按钮显示更多筛选项
    $('.spsx_content .more_button').click(function () {
        var moreHeight = 500;
        var height = 80 + moreHeight;
        if ($('.spsx_content').css('height') == '80px') {
            $('.spsx_content').css('height', height + 'px')
            $(this).find('a').css('background', "url('../images/category/shouqi_03.png') no-repeat center center")
        } else {
            $('.spsx_content').css('height', '80px');
            $(this).find('a').css('background', "url('../images/category/more_03.png') no-repeat center center")
        }
    });
    //点击排序按钮的动态效果
    $('.sort_left dd a ').click(function () {
        $(this).addClass('changeRed').parent().siblings('dd').find('a').removeClass('changeRed')
    })
    //点击购物车加减按钮效果
    $('.gouwuche .jian').click(function () {
        if ($(this).siblings('input').val() > 1) {
            var newVal = parseInt($(this).siblings('input').val()) - 1;
            $(this).siblings('input').val(newVal)
        } else {
            return false;
        }
    })
    $('.gouwuche .jia').click(function () {
        var newVal = parseInt($(this).siblings('input').val()) + 1;
        $(this).siblings('input').val(newVal)
    })
})