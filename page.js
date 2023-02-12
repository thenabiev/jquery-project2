$(function(){
    let element=document.getElementsByTagName('a');
    for (i=0; i<element.length; i++){
        $(element[i]).click(function(){
            $(this).not(".exception").addClass("active").siblings().removeClass("active");
            
        });
    }
});