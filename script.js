// Function to compute & display Simple Interest

function compute()
{
 // variable Declaration of Principal, Rate, & No. of Years 

   var p = document.getElementById("principal").value;
   var r = document.getElementById("rate").value;
   var y = document.getElementById("years").value;
     
    // Simple Interest Formula

   var interest = p * y * r /100;

   // Converting No. of Years to Actual Years in Future

   var year = new Date().getFullYear()+parseInt(y);
   
   // If-Else loop to Validate Principal value

   if(p == 0 || p < 0){
     alert("Enter a Positive Number !!");
     document.getElementById("principal").focus();
   }
   else{
    document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
   }

}



//    Function to read and display value of slider

   function updateRate() 
  {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
   }
        