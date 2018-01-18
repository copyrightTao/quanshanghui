$(function () {
    $('#chkAll').click(function () {
        $('.checkbox').prop('checked', this.checked);
        $('#chekAll').prop('checked', this.checked);
        if (this.checked) {
            $('tbody tr').addClass('changePink');
        } else {
            $('body tr').removeClass('changePink')
        }
    });
    $('#chekAll').click(function () {
        $('.checkbox').prop('checked', this.checked);
        $('#chkAll').prop('checked', this.checked);
        if (this.checked) {
            $('tbody tr').addClass('changePink')

        } else {
            $('body tr').removeClass('changePink')
        }
    });
    $('tbody tr').click(function () {
        if ($(this).hasClass('changePink')) {
            $(this).removeClass('changePink')
            $(this).find('.checkbox').prop('checked', false);
            $('#chkAll').prop('checked', false);
            $('#chekAll').prop('checked', false);
        } else {
            $(this).addClass('changePink');
            $(this).find('.checkbox').prop('checked', true);
            var count = 0;
            $('tbody tr input').each(function () {
                if ($(this).prop('checked')) {
                    count++;
                }
            })
            if (count == $('tbody tr input').length) {
                $('#chkAll').prop('checked', true);
                $('#chekAll').prop('checked', true);
            }
        }
    });
    $('.checkbox').change(function () {
        $('#chkAll').prop('checked', $('.checkbox').filter(':checked').size() == $('.checkbox').size() ? true : false);
        $('#chekAll').prop('checked', $('.checkbox').filter(':checked').size() == $('.checkbox').size() ? true : false);
    });
    $('tbody tr .caozuo a').click(function(){
        return false;
    });
})