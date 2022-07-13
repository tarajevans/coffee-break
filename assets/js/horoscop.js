/*Author :- Prerana Shukla*/

var horoscopeTitle = document.getElementById("horotitle");
var horoscopeContent = document.getElementById("content")
var displayImg = document.getElementById("display_img")
var title = "";
var content = "";
var initialhoroscpeLoad = document.getElementById("horoscope");
var horoSubmit = document.getElementById("submit");

title.onload = getHoroscope();

function getHoroscope(){
$.ajax({
    type:'Post',
    url:'https://divineapi.com/api/1.0/get_coffee_cup_reading.php',
    //url: 'https://divineapi.com/api/1.0/get_daily_horoscope.php',
    data: {api_key:'99bcfcd754a98ce89cb86f73acc04645'},
    success:function(data){
        var json = JSON.parse(data);
        var d = json.data.prediction;
        title = d.present_title;
        content = d.present_content;
        img = d.present_image;
        imageDisplay(img);
        horoscopeTitle.textContent = title;
        horoscopeContent.textContent = content;

    }
     });
}

function imageDisplay(urlIn){
    displayImg.src = urlIn
}

     horoSubmit.addEventListener("click", getHoroscope);