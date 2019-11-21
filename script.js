var thisHour = moment().format('H');

console.log(thisHour);

function update() {
    $('#currentDay').html(moment().format('MMMM Do YYYY H:mm:ss'));
}

setInterval(update, 1000);
update();