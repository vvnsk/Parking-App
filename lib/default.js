$(document).ready(function(){
    $("#pagezero form").on("submit",function(e){
        e.preventDefault();
        $('.bookingStart').show();
    })
    $('#pageone .ui-btn').on("click",function(e){
        $(".selZone").html($(this).html());
    })
    $('#pagetwo a').on("click",function(e){
        $(".selLot").html($(this).html());
    })
    $("#pagethree form").on("submit",function(e){
        e.preventDefault();
        $(".selExit").html($("#outDate").val()+" "+$("#outTime").val());
        $(".selEntry").html($("#inDate").val()+" "+$("#inTime").val());
        $(".selLic").html($("lic").val());
        $(".selPhone").html($("#phone").val());
        $(".selEmail").html($("#email").val());
        $(".selName").html($("#name").val());
        $.mobile.navigate( "#final", { transition: "slide" });
    })
})