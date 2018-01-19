$(function () {
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        //执行一个laydate实例
        laydate.render({
            elem: '#test1' //指定元素
        });
        laydate.render({
            elem: '#test2' //指定元素
        });
    });
    //点击已发货或者代发货样式改变
    // $('.content .option li').click(function(){
    //     $(this).addClass('changePink').siblings('li').removeClass('changePink');
    // })
    $('.content .option li').click(function(){
        $(this).addClass('changePink').siblings('li').removeClass('changePink');
    })
})