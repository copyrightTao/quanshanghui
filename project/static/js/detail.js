$(function () {
    //注意进度条依赖 element 模块，否则无法进行正常渲染和功能性操作
    layui.use('element', function () {
        var element = layui.element;
    });
    //设置点击左右按钮小图选中部分变动及大图图片更改
    $('.left_button').click(function () {
        var selected = $('.goumai_left .small_img li.selected');
        if (selected.index() > 0) {
            $(selected).removeClass('selected').prev().addClass('selected');
            $('.big_img li').eq(selected.index()).addClass('displayNone').prev().removeClass('displayNone')
        } else {
            return false;
        }
    })
    $('.right_button').click(function () {
        var selected = $('.goumai_left .small_img li.selected');
        if (selected.index() < 3) {
            $(selected).removeClass('selected').next().addClass('selected');
            $('.big_img li').eq(selected.index()).addClass('displayNone').next().removeClass('displayNone')
        } else {
            return false;
        }
    })
    $('.small_img li').click(function () {
        var selected = $('.goumai_left .small_img li.selected');
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.big_img li').eq(selected.index()).addClass('displayNone');
        $('.big_img li').eq($(this).index()).removeClass('displayNone')
    })
    //选择颜色按钮
    $('.color li img').click(function () {
        $(this).css({
            'border': '2px solid #bababa',
            'height': '24px',
            'width': '24px'
        }).parent().siblings().children('img').css({
            'border': 'none',
            'height': '28px',
            'width': '28px'
        })
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
        var totalNum = parseInt($('.total').html());
        if ($(this).siblings('input').val() < totalNum) {
            var newVal = parseInt($(this).siblings('input').val()) + 1;
            $(this).siblings('input').val(newVal)
        }else {
            return false;
        }
    })
    //商品描述和用户评价的切换
    $('.xuanxiang .miaoshu').click(function(){
        $(this).children('img').attr('src','../images/detail/shangpinmiaoshu_11.png')
        .parent().siblings('a').children('img').attr('src','../images/detail/yonghupingjia_03.png')
        $('.main_content .miaoshu_content').css('display','block');
        $('.main_content .pingjia_content').css('display','none')
        $('.goods_main').css('height','2380px')
    })
    $('.xuanxiang .pingjia').click(function(){
        $(this).children('img').attr('src','../images/detail/yonghupingjia_new_03.png')
        .parent().siblings('a').children('img').attr('src','../images/detail/shangpinmiaoshu_new_03.png')
        $('.main_content .miaoshu_content').css('display','none');
        $('.main_content .pingjia_content').css('display','block')
        $('.goods_main').css('height','2080px')
    })
    //评论区域选择评论排序按钮
    $('.zhengwen .xuanze li').each(function(){
        $(this).click(function(){
            $(this).addClass('selected').siblings().removeClass('selected')
        })
    })
})