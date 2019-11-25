var thisHour = parseInt(moment().format('H'));

function update() {
    $('#currentDay').html(moment().format('LLLL'));
}

setInterval(update, 1000);
update();

$(".field").each(function () {
    //var blockHour = parseInt($(this).attr("id").split("-"));
    var slotHour = parseInt($(this).attr("id"));
    console.log(parseInt($(this).attr("id")));
    if (slotHour < thisHour) {
        $(this).addClass("past");
    }
    else if (slotHour === thisHour) {
        $(this).addClass("present");
    }
    else $(this).addClass("future");

});



$(".submit-btn").on("click", function (event) {
    event.preventDefault();

    var fieldInput1 = $("#text-field9").val();
    var fieldInput2 = $("#text-field10").val();
    var fieldInput3 = $("#text-field11").val();
    var fieldInput4 = $("#text-field12").val();
    var fieldInput5 = $("#text-field1").val();
    var fieldInput6 = $("#text-field2").val();
    var fieldInput7 = $("#text-field3").val();
    var fieldInput8 = $("#text-field4").val();
    var fieldInput9 = $("#text-field5").val();

    localStorage.setItem("9 AM", fieldInput1);
    localStorage.setItem("10 AM", fieldInput2);
    localStorage.setItem("11 AM", fieldInput3);
    localStorage.setItem("12 PM", fieldInput4);
    localStorage.setItem("1 PM", fieldInput5);
    localStorage.setItem("2 PM", fieldInput6);
    localStorage.setItem("3 PM", fieldInput7);
    localStorage.setItem("4 PM", fieldInput8);
    localStorage.setItem("5 PM", fieldInput9);
});
