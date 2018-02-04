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
layui.use(['form', 'layedit', 'laydate'], function () {
    var form = layui.form,
        layer = layui.layer,
        layedit = layui.layedit,
        laydate = layui.laydate;
    //自定义验证规则
    form.verify({
        /**
         * 
         * 
         * @param {any} value 
         * @param {any} item 
         * @returns 
         */
        repeatpass: function (value, item) {
            var oldPass = $('.password').val();
            if (value == "") {
                return "请重复输入密码"
            } else if (value != oldPass) {
                return "两次输入的密码不一样"
            } else if (value.length <6){
                return "密码长度必须大于6位"
            }
        }
    });
    //监听提交
    form.on('submit(demo1)', function (data) {
        // layer.alert(JSON.stringify(data.field), {
        //     title: '最终的提交信息'
        // })
        alert('更改成功了')
        return false;
    })

});
})