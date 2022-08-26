
var dateToday = $('#currentDay');
var currentDate = moment().format('MMMM Do YYYY');
dateToday.text(currentDate);
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
// var savedCal=[];

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
    textContainer.val(localStorage.getItem(workDay[i]));
    textContainer.addClass('col-md-8 description').attr("placeholder" ,"Enter Text Here").attr('id','inputValue');
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
    

    // start with a save button event selector.     
    $('button').on('click', function saveFunction(event) {
        event.preventDefault();
        // save related data as an object
        var sectionID = $(this).siblings('li').attr('id');
        
        
        var textVal = $(this).siblings('textarea').val();
        console.log(textVal)

        
        localStorage.setItem(sectionID,(textVal));
        // localStorage.setItem("textVal",JSON.stringify(textVal));
        // use set item to store in local
        
        // JSON.parse(localStorage.getItem(sectionID));
        // JSON.parse(localStorage.getItem(textVal));
        // // use get item to retrieve from storage
        
        // init() so it loads when page is opened
    }) 
    // 80 let newNote = {sectionId: sectionID, note: textVal,}
    // 86 let savedNotes = JSON.parse(localStorage.getItem(“notes”))

//     loop to apply code. Clicking on the save buttons saves the time and note for one time block, but when another save button is clicked the information saved in local storage is replaced with that of the new time block. To save all of your notes make a global array variable. Then on line 80 of your script.js create an object variable (example: let newNote = {sectionId: sectionID, note: textVal,}. Then on line 86 of your script.js, change JSON.parse(localStorage.getItem(sectionID)); to let savedNotes = JSON.parse(localStorage.getItem(“notes”));. From there you can delete line 87, and set the textareas content equal to the corresponding note. 

// Based on the grading rubric points were deducted for the following reasons:
// * Clicking a time block's save button doesn't save the input text to local storage
// * Code lacks quality comments
// * Repository README is missing a screenshot and a link to the deployed application