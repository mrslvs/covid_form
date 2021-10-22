const overcomeQuestion = document.getElementById("overcomequestion");
const overcomeDays = document.getElementById("overcomedaysquestion");

function displayOvercome(e) {
  console.log("nie som ockovany");
  overcomeQuestion.style.display = "inline-block";
}

function hideOvercome(e) {
  console.log("predsa len som ockovany");
  hideOvercomeDays(e);
  overcomeQuestion.style.display = "none";
  //   if YES was previously selected, overcome days will not be displayer untill the YES is pressed again
  document.getElementById("overcome").checked = false;
  document.getElementById("overcomenot").checked = false;

  //   document.getElementById("country-list").setAttribute("list", "city");
}

function displayOvercomeDays(e) {
  console.log("prekonal som covid");
  overcomeDays.style.display = "inline-block";
}

function hideOvercomeDays(e) {
  console.log("predsa len som neprekonal covid");
  overcomeDays.style.display = "none";
}
