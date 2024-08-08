
//menu
var tombolmenu = $(".tombol-rum");
var menu = $("nav .menu ul");

 function klikMenu(){
    tombolmenu.click(function() {
        menu.toggle();
    });

    menu.click(function(){
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
   if(width < 990){
    klikMenu();
   }

})

//cek lebar
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989){
        menu.css("display","block");
        //display:block
    }else{
        menu.css("display", "none");
    }
});

//efec scrol

$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function() {  
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0) {
            $("nav").addClass("putih");
        }else{
            $("nav").removeClass("putih");
        }

})}
);