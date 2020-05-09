const $ = require("jquery");

// Product Filter
function productFilter(){
    $(function() {
        var selectedClass = "";
        $(".product-tag").click(function(){
            selectedClass = $(this).attr("data-rel");
            $("#product-list").fadeTo(100, 0.1);
            $("#product-list li").not("."+selectedClass).fadeOut();
            setTimeout(function() {
                $("."+selectedClass).fadeIn();
                $("#product-list").fadeTo(500, 1);
            }, 500);
            
        });
    });
}

export default productFilter;