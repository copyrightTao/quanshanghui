$(function () {
    //在线word插件
    $('#edit')
        .editable({
            inlineMode: false
        })
    //商品种类添加按钮点击事件
    var count = 0;
    $('.goods_def .addTr').click(function () {
        var len = $('.goods_def').find('tr').size();
        if (len <= 5) {
            var str = "<tr>" +
                "<td>" +
                "<input type='text' placeholder='请输入规格'>" +
                "</td>" +
                "<td>" +
                "<input type='text' placeholder='请输入种类,种类之间以中文逗号分隔'>" +
                "</td>" +
                "<td>" +
                "<a href='javascript:;' class='deleteTr'>删除</a>" +
                "</td>" +
                "</tr>";
            $('.goods_def tbody').append(str);
        } else {
            alert('最多可以添加5行')
            return false;
        }

    })
    //商品种类删除按钮点击事件
    $('.goods_def table').on('click', '.deleteTr', function () {
        $(this).parent().parent().remove();
    })
    //规格定义添加按钮点击事件
    $('.goods_options .addTr').click(function () {
        if ($('.goods_def tbody tr').size() == 0) {
            alert('请先填写商品种类')
        } else {
            var count = 0;
            $('.goods_def input').each(function () {
                if ($(this).val() != "") {
                    count++;
                }
            })
            if (count == $('.goods_def input').size()) {
                var str = '<tr>' +
                    '<td>' +
                    '</td>' +
                    '<td>' +
                    '<input type="text">' +
                    '</td>' +
                    '<td>' +
                    '<input type="text">' +
                    '</td>' +
                    '<td>' +
                    '<input type="text">' +
                    '</td>' +
                    '<td>' +
                    '<input type="text">' +
                    '</td>' +
                    '<td>' +
                    '<a href="javascript:;" class="deleteTr">删除</a>' +
                    '</td>' +
                    '</tr>',
                    trLen = $('.goods_def tbody tr').size();
                $('.goods_options tbody').append(str);
                for (var i = 0; i < trLen; i++) {
                    var sizeSelect = document.createElement('select');
                    $('.goods_options tbody tr').eq(-1).find('td').eq(0).append(sizeSelect);
                    // $('.goods_options select').css({
                    //     'width': 100 / (trLen + 1) + '%',
                    //     'margin-left': 18 / (trLen + 1) + '%'
                    // });
                    var msg = $('.goods_def tbody tr').eq(i).find('td').eq(1).find('input').val();
                    msg = msg.split(',');
                    var titleMsg = document.createElement('option');
                    $(titleMsg).html($('.goods_def tbody tr').eq(i).find('td').eq(0).find('input').val());
                    $('.goods_options tr').eq(-1).find('select').eq(i).append(titleMsg);
                    for (var j = 0; j < msg.length; j++) {
                        var sizeOption = document.createElement('option');
                        $(sizeOption).html(msg[j]);
                        $('.goods_options select').eq(-1).append(sizeOption);
                    }
                }
            } else {
                alert('选项内容不能为空')
                return false;
            }
        }
    })
    $('.goods_options table').on('click', '.deleteTr', function () {
        $(this).parent().parent().remove();
    })

    //点击图片添加图片事件
    $('.uploadImg').change(function (index,ele) {
        var objUrl = getObjectURL(this.files[0]);
        if (objUrl) {
            // 在这里修改图片的地址属性 
            $(this).siblings('img').attr("src", objUrl);
        }
    })
    $('.delete').click(function () {
        $(this).siblings('img').attr('src', '../images/backstage_release/push_03.png')
    })
    //建立一個可存取到該file的url  
    function getObjectURL(file) {
        var url = null;
        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已  
        if (window.createObjectURL != undefined) { // basic  
            url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)  
            url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome  
            url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }
})