$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".other").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".other").hide();
            }
        });
    }).change();
});