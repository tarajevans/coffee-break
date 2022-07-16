var submit = document.getElementById("submit_3");
var horoscopeText = document.getElementById("displayHoroscope");
var monthInput = document.getElementById("month");
var dayInput = document.getElementById("day");
var dobButton =document.getElementById("submit_3");
var userMonth = "Pleaase enter 1-12";
var userDay = "Pleaase enter 1-31";

function updateDob() {
  userMonth = monthInput.value;
  userDay = dayInput.value;
  if (parseInt(userMonth) > 0 && parseInt(userMonth)< 13){
    if(parseInt(userDay) > 0 && parseInt(userDay) < 32){
      getHoriscope(userMonth, userDay);
    }else{
      dayInput.value = "Pleaase enter 1-31";
      monthInput.value = "Pleaase enter 1-12";
    }
  }else{
    dayInput.value = "Pleaase enter 1-31";
    monthInput.value = "Pleaase enter 1-12";
  }
  var dob = [];
  dob.push(userMonth);
  dob.push(userDay);
  localStorage.setItem("userDob", JSON.stringify(dob));
}

function getDob(){
  var dob = JSON.parse(localStorage.getItem("userDob"));
  if(dob != null){
    userMonth = dob[0];
    userDay = dob[1];
    console.log(dob);
  }else{
    return;
  }
}

function pageLoad(){
  getDob();
  monthInput.value = userMonth;
  dayInput.value = userDay;
  getHoriscope(userMonth, userDay);
}

dobButton.addEventListener("click", updateDob);

function getHoriscope(month, day){
    apiUrl = "https://the-ultimate-api-challenge.herokuapp.com/https://ohmanda.com/api/horoscope/"+getZodiac(month, day);
    fetch(apiUrl)
          .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        horoscopeText.textContent=data.horoscope;
      });
  }
  
  function getZodiac(month, day){
    switch (month){
      case "1":
        if (day <= 19){
          return "capricorn"
          break;
        }else if(day >= 20){
          return "aquarius"
          break;
        }
        case "2":
          if (day <= 18){
            return "aquarius"
            break;
          }
          else if (day >= 19){
            return "pisces";
            break;
          }
        case "3":
          if (day <= 20){
            return "pisces";
            break; 
          }else if (day >= 21){
            return "aries";
            break;
          }
        case "4":
          if (day <= 19){
            return "aries";
            break;
          }else if (day >= 20){
            return "taurus";
            break;
          }
        case "5":
          if (day <= 20){
            return "taurus";
            break;
          }else if (day >= 21){
            return "gemini";
            break;
          }
          case "6":
            if (day <= 20){
              return "gemini";
              break;
            }else if (day >= 21){
              return "Cancer";
              break;
            }
          case "7":
            if (day <= 22){
              return "cancer";
              break;
            }else if (day >= 23){
              return "leo";
              break;
            }
          case "8":
            if (day <= 22){
              return "leo";
              break;
            }else if (day >= 23){
              return "virgo";
              break;
            }
          case "9":
            if (day <= 22){
              return "virgo";
              break;
            }else if (day >= 23){
              return "libra";
              break;
            }
          case "10":
            if (day <= 22){
              return "libra";
              break;
            }else if (day >= 23){
              return "scorpio";
              break;
            }
          case "11":
            if (day <= 21){
              return "scorpio";
              break;
            }else if (day >= 22){
              return "sagittarius";
              break;
            }
          case "12":
            if (day <= 21){
              return "sagittarius";
              break;
            }else if (day >= 22){
              return "capricorn";
              break;
            }
    }
  }

  pageLoad();