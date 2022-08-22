
var dateToday = $('#currentDay');
var currentDate = moment().format('MMMM Do YYYY');
dateToday.text(currentDate)
var currentTime = moment().hours(); 


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
    
    var liEl = $('<ul>');
    container.append(liEl);
    liEl.addClass('row time-block');

    var timeSection = $('<id>');
    timeSection.addClass('col-md-2 hour');
    liEl.append(timeSection);

    var textContainer = $('<textarea>');
    textContainer.addClass('col-md-8 description').attr("placeholder" ,"Enter Text Here");
    liEl.append(textContainer);

    var saveBtn = $('<button>');
    saveBtn.addClass('col-md-2 saveBtn');
    liEl.append(saveBtn);
    // saveBtn.appendChild('<i class="fa-solid fa-floppy-disk"></i>)


    // incon = <i class="fa-solid fa-floppy-disk"></i>




var sortDay = function (){

    if (workDay[i] < currentTime) {
        textContainer.addClass('past')}
    // else if (workDay[i] == currentTime){
    //     textContainer.addClass('present') 
    //         if (workDay[i] > currentTime) {
    //             textContainer.addClass('future')}
    //         }
    //     }

}}

