console.log("lets go ");

let yearspan = document.querySelector(".years>span")
let monthspan = document.querySelector(".months>span")
let dayspan = document.querySelector(".days>span")
let empty = "This field is required"
let dateerror = "Must be a valid"
let yearerror = "Must be in the past"
const currentYear = new Date().getFullYear();


function formateDate(Day, Month, Year) {
  const inputDateObj = new Date(Year, Month - 1, Day)
  const currentDateObj = new Date()
  const timeDifference = currentDateObj.getTime() - inputDateObj.getTime();
  // convert 
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = Math.floor(timeDifference / millisecondsPerYear);
  const remainingMilliseconds = timeDifference % millisecondsPerYear;
  const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44;
  const months = Math.floor(remainingMilliseconds / millisecondsPerMonth);
  const remainingDays = Math.floor((remainingMilliseconds % millisecondsPerMonth) / (1000 * 60 * 60 * 24));


  // formate 
  yearspan.innerHTML = years
  monthspan.innerHTML = months
  dayspan.innerHTML = remainingDays

}






document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  var Day = document.getElementById('Day').value;
  var Month = document.getElementById('Month').value;
  var Year = document.getElementById('Year').value;
  var error = document.querySelector(".error")
  var label = document.querySelectorAll("label")
  var derror = document.querySelector(".derror")
  var merror = document.querySelector(".merror")
  var yerror = document.querySelector(".yerror")

  // Do something with the data, for example, log it to the console
console.log(label);

  // validation 
  if (Day == "" && Month == "" && Year == "") {
    error.style.color = "red"
    error.innerHTML = empty
   for (const i of label) {
    i.style.color = "red"
    
   }
    // return false

  }

  if (Day == "") {
    label[0].style.color = "red"
    yerror.style.color = "red"
    derror.style.color = "red"
    derror.innerHTML = empty
    // alert("Name must be filled out");
    // return false
  }
  if (Day > 31 && Month % 2 == 0 || Month == 2 && Day > 28 || Day > 30) {
    label[0].style.color = "red"

    derror.style.color = "red"
    derror.innerHTML = dateerror + " day"
  }
  if (Month > 12) {
    label[1].style.color = "red"

    merror.style.color = "red"
    merror.innerHTML = dateerror + " month"


  }
  if (Year > currentYear) {
    label[2].style.color = "red"

    yerror.style.color = "red"
    yerror.innerHTML = yearerror

  }
  if (Month == "") {
    label[1].style.color = "red"

    merror.style.color = "red"
    merror.innerHTML = empty
    // alert("Name must be filled out");
  }

  if (Year == "") {
    label[2].style.color = "red"
    yerror.style.color = "red"
    yerror.innerHTML = empty
    // alert("Name must be filled out");
    return false

  }





  console.log('Name:', Day);
  console.log('Month:', Month);
  console.log('Year:', Year);

  formateDate(Day, Month, Year)




})


