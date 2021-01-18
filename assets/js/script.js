// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click on X to Delete todos
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        // removes parent element with fadeOut animation
        $(this).remove();
    });
    event.stopPropagation(); //stops event bubbling
});

$("input[type=text]").keypress(function (event) {
    if (event.which === 13) {
        // grabbing new text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and to ul aka appending string to selected element
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
})

$(".add-todo").click(function () {
    $("input[type=text]").fadeToggle();
})