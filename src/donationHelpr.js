export const fromShekellsToX = (sumAtShekel, dollarRate, toCoin) => {
    console.log(dollarRate);
    console.log(toCoin);
    console.log(sumAtShekel);
    let t = ""
    let result = 0
        if (toCoin === "shekel") {
          // אם המטבע המבוקש הוא שקל, החזר את הסכום כפי שהוא
          result = sumAtShekel
          
          return "₪" + Math.floor(result);
      
        } else if (toCoin === "dollar") {
            result = sumAtShekel / dollarRate
            t = Math.floor(result)
    
           
          // אם המטבע המבוקש הוא דולר, החזר את הסכום מומר לדולרים
          return "$" + t  ;
        }
      
    }
