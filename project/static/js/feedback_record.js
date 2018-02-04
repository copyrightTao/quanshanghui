$(function(){
    $('.main_right .content').delegate('.withdraw','click',function(){
        var conf = confirm('是否删除该反馈记录?');
        if(conf){
            $(this).parent().parent().remove();
        }
    })
})