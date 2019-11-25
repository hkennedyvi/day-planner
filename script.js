var thisHour = parseInt(moment().format('H'));
//var slotHour = parseInt($(".hideme").text());

var hourIndex = 0;

var slotHour = [{
    slot: parseInt($("#9").text()),
},
{
    slot: parseInt($("#10").text()),
},
{
    slot: parseInt($("#11").text()),
},]
   /* slot: parseInt($("#12").text()),

    slot: parseInt($("#13").text()),

    slot: parseInt($("#14").text()),

    slot: parseInt($("#15").text()),

    slot: parseInt($("#16").text()),

    slot: parseInt($("#17").text()),
};*/



console.log(thisHour);
console.log(slotHour.slot);
console.log(thisHour - slotHour[hourIndex]);
console.log(slotHour[hourIndex]);

function update() {
    $('#currentDay').html(moment().format('LLLL'));
}

setInterval(update, 1000);
update();

$(".field").each(function () {
    //var blockHour = parseInt($(this).attr("id").split("-")[1]);

    //for (i = 0; i < slotHour.length; i++)

        if ('.number' < thisHour) {
            $(this).addClass("past");
        }
        else if ('.number' === thisHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");

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
