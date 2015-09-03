$(document).ready(function() {
        $(".map .address .btn").click(function() {
        $(".write-us").fadeTo("fast", 1)
      })
        $(".btn-close").click(function(){
        $(".write-us").fadeOut()
       })
        $(window).scroll(function() {
            var header = $(".header-scroll"),
                scroll = $(window).scrollTop();
            if (scroll >= 10) header.fadeTo("slow", 1)
            else header.fadeTo("fast", 0)       
        })       
})