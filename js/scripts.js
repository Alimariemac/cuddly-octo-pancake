$(function(){

    $("#expand-message-01").click(function(){        
        if($("#message-container-01").css("display")=='none' && $(window).width() < 576){
            $("#message-container-01").css('display','block');
        }
        else if($("#message-container-01").css("display")=='block' ){
            $("#message-container-01").css('display','none');
        }
    });
    if( $(window).width()>576){
        $("#message-container-01").css('display','block');
    } 
});