function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    if (validate_numer() == true) {
        document.getElementById("result").innerHTML =
    "If you deposit <mark>" + principal + "</mark>,<br />" +
    "at an interest rate of <mark>" + rate + "</mark>.<br />" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br />" +
    "in the year <mark>" + year + "</mark>"
    }
}


function updateRate(value)
{
    //var rateval = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=value +"%";
}

function validate_numer()
{
    amount = document.getElementById("principal").value;

    if (amount <= 0) {
        alert('Enter a positive number')
        document.getElementById("principal").focus()
        return false
    }

    return true
}