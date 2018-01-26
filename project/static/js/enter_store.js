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


    $('.submit').click(function () {
        $('.xieyi .content input').each(function () {
            if (!$(this).val()) {
                var msg = $(this).siblings('span').html().substr(0, $(this).siblings('span').html().length - 1)
                alert(msg + '不能为空')
                return false;
            }
        })
        var PHONE_START = /0\d{2,3}/; //验证区号
        var PHONE_END = /\d{7,8}/; //验证座机号码
        var LICENSE_ID = /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/; //验证税号
        var LAW_ID = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; //身份证号
        var BANK_ACCNO = /^([1-9]{1})(\d{15}|\d{18})$/; //验证银行卡号
        alertMsg(PHONE_START, $('#SI_PHONE_START'));
        alertMsg(PHONE_END, $('#SI_PHONE_END'));
        alertMsg(LICENSE_ID, $('#SI_LICENSE_ID'));
        alertMsg(LAW_ID, $('#SI_LAW_ID'));
        alertMsg(BANK_ACCNO, $('#SI_BANK_ACCNO'));
    })
    $('input[type="file"]').change(function () {
        var idName = $(this).attr('id');
        var ele = document.getElementById(idName);
        checkImg(ele);
    })

    function checkImg(ele) {
        if (typeof FileReader != 'undefined') {
            var file = ele.files[0];
            if ((file.type).indexOf("image/") == -1) {
                alert('请上传图片格式文件');
                ele.value="";                
            }else {
                var fileName = ele.value;
                var suffixIndex = fileName.lastIndexOf(".");
                var suffix = fileName.substring(suffixIndex + 1).toUpperCase();
                var fileSize = ele.files[0].size/(1024*1024);
                if (suffix != "JPG" && suffix != "PNG" && suffix != "GIF") {
                    alert('请上传JPG、PNG、GIF格式的图片');
                    ele.value="";                  
                }else if(fileSize > 1){
                    alert('上传的图片大于1M')
                    ele.value="";
                }
            }
        } 
    }

    function alertMsg(a, ele) {
        if (!ele.val() == "") {
            if (!a.test(ele.val())) {
                var msg = $(ele).siblings('span').html().substr(0, $(ele).siblings('span').html().length - 1)
                alert(msg + '输入有误')
                return false;
            }
        }
    }
})