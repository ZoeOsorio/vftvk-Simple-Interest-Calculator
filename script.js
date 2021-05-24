function computeInterest()
{
     var principle = document.getElementById("principle").value;

     //Check if principle  is 0 or negative
    if(principle < 1){
        alert("Please enter a positive value");
        document.getElementById("principle").focus();
        return false;
    }
     var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
     //Calculate Interest
     var interest = principle * years * rate /100;
     var year = new Date().getFullYear()+parseInt(years) ;
     var amount = principle + interest
     //show the result
     document.getElementById("result").innerHTML="If you deposit "+principle+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
}