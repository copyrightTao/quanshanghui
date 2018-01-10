$(function(){
    $('.daohang').remove();
    $('.hengxian').remove();
    //设置在线支付与网银支付之间的选择
    $('.zhifufangshi input').click(function(){
            $(this).siblings('input').removeAttr('checked')
        });
    //支付宝与微信选择
    $('.zhiwei li').click(function(){
        $(this).css({
            'background-image':'url("../images/submit/zhi_img_03.png")',
            'border':'none',
            'padding':'9px 16px'
        })
        .siblings().css({
            'background-image':'none',
            'border':'1px solid #dadada',
            'padding':'8px 15px'
        })
        $('#zaixianzhifu').attr('checked','checked').siblings('input').removeAttr('checked');
        $('.allBank li').css({
            'background-image':'none',
            'border':'1px solid #b0c2e1',
            'padding':'7px 34px'
        })
    })
    $('.allBank li').click(function(){
        $(this).css({
            'background-image':'url("../images/submit/bank_img_03.png")',
            'border':'none',
            'padding':'8px 35px'
        }).siblings().css({
            'background-image':'none',
            'border':'1px solid #b0c2e1',
            'padding':'7px 34px'
        })
        $('#wangyinzhifu').attr('checked','checked').siblings('input').removeAttr('checked');
        $('.zhiwei li').css({
            'background-image':'none',
            'border':'1px solid #dadada',
            'padding':'8px 15px'
        })
    })
    //提交按钮点击事件  
    $('.submit_main a').click(function(){
        var flag = false;
        $('.zhiwei li').each(function(){
            if($(this).css('background-image') != 'none'){
                flag = true;
                return false;
            }
        })
        $('.allBank li').each(function(){
            if($(this).css('background-image') != 'none'){
                flag = true;
                return false;
            }
        })
        if(flag){
            console.log('付款方式正确')
        }else{
            alert('您还没有选择付款方式哦!')
        }
    })
})