const getDay=document.querySelector("#Day-input")
const getMonth=document.querySelector("#Month-input")
const getYear=document.querySelector("#year-input")
const submit=document.querySelector(".submit")


const date = new Date();
function age()
{
    const yearOutput=document.querySelector(".year-output")
    const monthOutput=document.querySelector(".Month-output")
    const dayOutput=document.querySelector(".day-output")

    let currentDate = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if((parseInt(getDay.value) )> currentDate){
        currentDate = currentDate + month[currentMonth - 1];
        currentMonth = currentMonth - 1;
      }
      if((parseInt(getMonth.value)) > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
      }
      const birthDate = currentDate - parseInt(getDay.value);
      const birthMonth = currentMonth - parseInt(getMonth.value);
      const birthYear = currentYear - parseInt(getYear.value);
     yearOutput.innerHTML=birthYear;
     monthOutput.innerHTML=birthMonth;
     dayOutput.innerHTML=birthDate;
}
function dayValidation ()
{
    const dayError=document.querySelector(".error-day")
    const getDayDescription=document.querySelector(".day")
    if(Number(getDay.value)===0)
    {
    dayError.textContent="This field is required";
   getDayDescription.style.color = "hsl(0, 100%, 67%)";
    return false;
    }
    else if(Number(getDay.value)>31){
   dayError.textContent="Must be valid day";
   getDayDescription.style.color = "hsl(0, 100%, 67%)";
   return false;
    }
    else{
        dayError.textContent=""
        return true;
    }
}
function monthValidation ()
{
    const monthError=document.querySelector(".error-month")
    const getMonthDescription=document.querySelector(".month")
    if(Number(getMonth.value)===0)
    {
  monthError.textContent="This field is required";
  getMonthDescription.style.color="hsl(0, 100%, 67%)"
    return false;
    }
    else if(Number(getMonth.value)>12){
   monthError.textContent="Must be valid month";
   getMonthDescription.style.color="hsl(0, 100%, 67%)"
   return false;
    }
   else
   {
    monthError.textContent="";
    return true;
   }
}
function yearValidation ()
{
    const yearError=document.querySelector(".error-year")
    const getYearDescription=document.querySelector(".year")
    if(Number(getYear.value)===0)
    {
   yearError.textContent="This field is required";
   getYearDescription.style.color="hsl(0, 100%, 67%)"
    return false;
    }
    else if(Number(getYear.value)>date.getFullYear() ||  (Number(getYear.value).toString().length<4)){
   yearError.textContent="Must be valid year";
   getYearDescription.style.color="hsl(0, 100%, 67%)"
   return false;
    }
   else
   {
    yearError.textContent="";
    return true;
   }
}

submit.addEventListener("click",()=>
{
    if(((dayValidation()===true) && (monthValidation()===true) && (yearValidation()===true)))
    {
  age();
    }

}
   
 

 
  
   
)