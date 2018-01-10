$(function () {
    // 轮播图
    layui.use(['carousel', 'form', 'layedit','laydate'], function () {
        var carousel = layui.carousel;
        var form = layui.form
            ,layer = layui.layer
            ,layedit = layui.layedit
            ,laydate = layui.laydate;

        //建造实例
        carousel.render({
            elem: '#test1',
            width: '818px', //设置容器宽度
            arrow: 'hover', //左右箭头显示
            interval: 2000, //轮播图切换速度
            height: '357px',
            arrow: 'always' //始终显示箭头
            //,anim: 'updown' //切换动画方式
        });
        //自定义验证规则
        form.verify({
            pass: [/(.+){6,12}$/, '密码必须6到12位'],
            repeatpass:function(value,item){
                var oldPass = $('.password').val();
                if(value == ""){
                    return "请重复输入密码"
                }else if(value != oldPass){
                    return "两次输入的密码不一样"
                }
            }
        });
        //监听提交
        form.on('submit(demo1)', function (data) {
            // layer.alert(JSON.stringify(data.field), {
            //     title: '最终的提交信息'
            // })
            console.log(data.field)
            return false;
        });
        $('.layui-unselect').remove();
        //点击获取验证码之后改变样式及倒计时
        var wait=10;
        function time(o) {
          if (wait == 0) {
           o.removeAttribute("disabled");   
           o.value="获取手机验证码";
           o.style.color="#e10222"
           wait = 10;
          } else { 
           o.setAttribute("disabled", true);
           o.value=wait+"秒后重新发送";
           o.style.color="#999999"
           wait--;
           setTimeout(function() {
            time(o)
           },
           1000)
          }
         }
        document.querySelector('.getyanzhengma').onclick=function(){
            console.log(1)
            time(this);
            document.querySelector('.getyanzhengma').setAttribute('color','#999999')
        }
    });
})