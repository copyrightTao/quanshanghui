$(function () {
    $('.daohang').remove();
    $('.hengxian').remove();
    var timer = setInterval(function () {
        var time = $('.pay_title .fl span').html().substr(0,1);
        if (time >= 1) {
            time--;
            $('.pay_title .fl span').html(time + '秒')
        } else {
            clearInterval(timer);
            var href = window.location.href;
            href = href.split('/');
            href[href.length-1]="index.html";
            href = href.join('/');
            window.location.href = href;
        }
    }, 1000)

})