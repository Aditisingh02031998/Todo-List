$(document).ready(function () {
    $("#clearCompleted").on("click", function (event) {
        event.preventDefault();
        $(".Selected:checked").parents('li').remove();
    })
});
$(document).ready(function () {
    $("#active").on("click",function (event) {
        event.preventDefault();
        $(".Selected:checked").parents('li').hide();
        $(".Selected").not(":checked").parents('li').show()
    })
});
$(document).ready(function () {
    $("#complete").on("click",function (event) {
        event.preventDefault()
      $(".Selected").not(":checked").parents('li').hide()
        $(".Selected:checked").parents('li').show()

    })
});
$(document).ready(function () {
    $("#al").on("click",function (event) {
        event.preventDefault()
        $(".Selected").parents('li').show()

    })
});