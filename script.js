//line-through todo by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

//add todos
$("input").on("keypress",function(e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

//click plus to remove input field
$(".fa-plus").on("click", function() {
   $("input").fadeToggle();
});


