$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("nav").removeClass("menu-container").addClass("menu-container-small");
        $("ul.menu-list").removeClass("menu-list").addClass("menu-list-small");
        $("li.menu-item").removeClass("menu-item").addClass("menu-item-small");
    } else{
        $("nav").removeClass("menu-container-small").addClass("menu-container");
        $("ul.menu-list-small").removeClass("menu-list-small").addClass("menu-list");
        $("li.menu-item-small").removeClass("menu-item-small").addClass("menu-item");
    }
});
