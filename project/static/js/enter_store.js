$(function(){
    layui.use('laydate', function(){
        var laydate = layui.laydate;
        //执行一个laydate实例
        laydate.render({
          elem: '#test1' //指定元素
        });
        laydate.render({
            elem: '#test2' //指定元素
          });
      });
      $('.submit').click(function(){
        $('.xieyi .content input').each(function(){
            if(!$(this).val()){
                var msg = $(this).siblings('span').html().substr(0,$(this).siblings('span').html().length-1)
                alert(msg + '不能为空')
                return false;
            }
        })
        var PHONE_START = /0\d{2,3}/;//验证区号
        var PHONE_END = /\d{7,8}/;//验证座机号码
        var LICENSE_ID = /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/;//验证税号
        var LAW_ID=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;//身份证号
        var BANK_ACCNO = /^([1-9]{1})(\d{15}|\d{18})$/;//验证银行卡号
        alertMsg(PHONE_START,$('#SI_PHONE_START'));
        alertMsg(PHONE_END,$('#SI_PHONE_END'));
        alertMsg(LICENSE_ID,$('#SI_LICENSE_ID'));
        alertMsg(LAW_ID,$('#SI_LAW_ID'));
        alertMsg(BANK_ACCNO,$('#SI_BANK_ACCNO'));
      })
      function alertMsg(a,ele){
         if(!ele.val()==""){
            if(!a.test(ele.val())){
                var msg = $(ele).siblings('span').html().substr(0,$(ele).siblings('span').html().length-1)
                alert(msg + '输入有误')
                return false;
            }
         }
      }
})