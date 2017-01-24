$(function () {
    $(window).scroll(function () {
        //                var header = $("header");
        //                if($(window).scrollTop() < 0){
        //                    header.removeClass("navbar-fixed-top");
        //                    $("#container").css("padding-top", 0)
        //                } else {
        //                    header.addClass("navbar-fixed-top");
        //                    $("#container").css("padding-top", $("header").height())
        //                }
        //                console.log($(window).scrollTop() + "<" + header.height())
    });

    $(window).resize(function () {
        var header = $("header");
        if (header.hasClass("navbar-fixed-top")) 
            $("body").css("padding-top", header.height() + "px");
        else 
            $("body").css("padding-top", "0")
    })
    $(window).resize();
    $(".sidebar-toggle").click(function () {
        $("body").toggleClass("sidebar-open")
    })
    $("body>.dim").click(function(){
        $("body").removeClass("sidebar-open")
    })
    
    
    //START TEST
    $("[data-toggle-class]").change(function(){
        var self = $(this);
        var c = self.attr("data-toggle-class");
        var selector = self.attr("data-toggle-target");
        if(selector === undefined)
            selector = "body";

        if(self.is(":checked"))
            $(selector).addClass(c);
        else 
            $(selector).removeClass(c);
        //make sure 'navbar-fixed-top' has been applied
        $(window).resize();
    })
    $("#boxed").change(function () {
        var container = $(".container-a")
        if ($(this).is(":checked")) {
            container.removeClass("container-fluid");
            container.addClass("container");
        }
        else {
            container.addClass("container-fluid");
            container.removeClass("container");
        }
    })
    //END TEST
})