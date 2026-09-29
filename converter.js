let usdRate= 1.13
let tryRate = 55.64
let gbpRate = 0.86

function convert(amount, from, to) {
    let euros; 
    if (from === "EUR") {
        euros = amount;
    } else if (from === "USD") {
        euros = amount / usdRate;
    } else if (from === "TRY") {
        euros = amount / tryRate; 
    
    } else if (from === "GBP") {
        euros = amount / gbpRate;
    }

    let result;
    if (to === "EUR") {
        result = euros;
    } else if (to === "USD") {
        result = euros * usdRate;
    } else if (to === "TRY") {
        result = euros * tryRate;
    } else if (to === "GBP") {
        result = euros * gbpRate;
    }
    return result;
}

console.log(convert(100, "TRY", "GBP"))
