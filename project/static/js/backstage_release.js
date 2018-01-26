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
})