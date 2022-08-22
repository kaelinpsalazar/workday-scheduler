
var dateToday = $('#currentDay');
var currentDate = moment().format('MMMM Do YYYY');
dateToday.text(currentDate)
var currentTime = moment().hours(); 

console.log(currentTime)

var workDay = [
    9, 
    10, 
    11, 
    12, 
    13, 
    14, 
    15, 
    16, 
    17,

];

for (let i = 0; i < workDay.length; i++) {

    var container = $('.container');

    var icon = $('<i>')
    icon.addClass('fa-solid fa-floppy-disk');
    
    var liEl = $('<ul>');
    container.append(liEl);
    liEl.addClass('row time-block');

    var timeSection = $('<li>');
    timeSection.addClass('col-md-2 hour').text(workDay[i]);
    liEl.append(timeSection);
    var timeValue = $(timeSection.attr('id',workDay[i]));



    var textContainer = $('<textarea>');
    textContainer.addClass('col-md-8 description').attr("placeholder" ,"Enter Text Here");
    liEl.append(textContainer);

    var button = $('<button>');
    button.addClass('col-md-2 saveBtn').attr("id","i:hover");
    button.append(icon);
    liEl.append(button);


    
    if (workDay[i] < 12) {
        timeSection.text(workDay[i] +"AM")
    } if (workDay[i] === 12) {
        timeSection.text(workDay[i] + "PM")
    } else if (workDay[i]> 12){
        timeSection.text(workDay[i] - 12 + "PM")
    
    }


    if (workDay[i] > currentTime){
            textContainer.addClass('past');
    } if (workDay[i] == currentTime){
                textContainer.addClass('present');
    } else if (workDay[i] < currentTime){
                    textContainer.addClass('future');}
        
    } 


// Hint on how to save strings in local storage
// var shoppingItem = $('input[name="shopping-input"]').val();






// var sortDay = function (){

//     if (workDay[i] < currentTime) {
//         textContainer.addClass('past')}
    // else if (workDay[i] == currentTime){
    //     textContainer.addClass('present') 
    //         if (workDay[i] > currentTime) {
    //             textContainer.addClass('future')}
    //         