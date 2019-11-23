var thisHour = parseInt(moment().format('H'));
var slotHour = parseInt($(".hideme").text());
console.log(thisHour);
console.log(slotHour);

function update() {
    $('#currentDay').html(moment().format('LLLL'));
}

setInterval(update, 1000);
update();

$(".hour").each(function () {
    //var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
    for (i=0; i<slotHour.length; i++)

    if (slotHour < thisHour) {
        $(this).addClass("past");
    }
    else if (slotHour === thisHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    
});

$(".submit-btn").on("click", function(event) {
    event.preventDefault();
});
