function getHoriscope(month, day){
    apiUrl = "https://the-ultimate-api-challenge.herokuapp.com/https://ohmanda.com/api/horoscope/"+getZodiak(month, day);
    fetch(apiUrl)
          .then(function (response) {
          return response.json();
      })
      .then(function (data) {
         // title.textContent = data.title;
          //displayImage(data.img);
          console.log(data);
      });
  }
  
  function getZodiak(month, day){
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
  getHoriscope("10", "6");