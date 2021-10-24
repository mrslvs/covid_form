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

function showCitiesSlovakia(e) {
  console.log("slovakia");
}

// COUNTRY
const selectCountry = document.getElementById("country-list");

const showSlovakArea = document.getElementById("showAreaSlovakia");
const showCzechArea = document.getElementById("showAreaCzech");
const showHungaryArea = document.getElementById("showAreaHungary");

selectCountry.addEventListener("change", (event) => {
  switch (event.target.value) {
    case "svk":
      console.log("som zo slovenska");
      showSlovakArea.style.display = "inline-block";
      //   hide others
      showCzechArea.style.display = "none";
      showHungaryArea.style.display = "none";
      break;
    case "cze":
      console.log("som z ciech");
      showCzechArea.style.display = "inline-block";
      //   hide others
      showSlovakArea.style.display = "none";
      showHungaryArea.style.display = "none";
      break;
    case "hun":
      console.log("som z madarska");
      showHungaryArea.style.display = "inline-block";
      //   hide others
      showSlovakArea.style.display = "none";
      showCzechArea.style.display = "none";
      break;
  }
});

// CITY
// CITY svk
const showSlovakWestCity = document.getElementById("showSlovakWestCity");
const showSlovakMidCity = document.getElementById("showSlovakMidCity");
const showSlovakEastCity = document.getElementById("showSlovakEastCity");

const areaSlovakia = document.getElementById("areaSlovakia");

areaSlovakia.addEventListener("change", (event) => {
  switch (event.target.value) {
    case "west":
      console.log("som zo zapadu, zobraz zapadne mesta");
      showSlovakWestCity.style.display = "inline-block";
      // hide others
      break;
    case "mid":
      console.log("som zo stredu, zobraz stredne mesta");
      showSlovakMidCity.style.display = "inline-block";
      // hide others
      break;
    case "east":
      console.log("som zo vychodu, zobraz vychodne mesta");
      showSlovakEastCity.style.display = "inline-block";
      // hide others
      break;
  }
});

//CITY cze
const showCzechJcCity = document.getElementById("showCzechJcCity");
const showCzechJmCity = document.getElementById("showCzechJmCity");
const showCzechZlCity = document.getElementById("showCzechZlCitygi");

const areaCzech = document.getElementById("areaCzech");

areaCzech.addEventListener("change", (event) => {
  switch (event.target.value) {
    case "jc":
      console.log("som zo zapadu, zobraz zapadne mesta");
      showSlovakWestCity.style.display = "inline-block";
      // hide others
      break;
    case "jm":
      console.log("som zo stredu, zobraz stredne mesta");
      showSlovakMidCity.style.display = "inline-block";
      // hide others
      break;
    case "Zl":
      console.log("som zo vychodu, zobraz vychodne mesta");
      showSlovakEastCity.style.display = "inline-block";
      // hide others
      break;
  }
});

// CITY hun
const showHungaryKoCity = document.getElementById("showHungaryKoCity");
const showHungaryNoCity = document.getElementById("showHungaryNoCity");
const showHungaryRaCity = document.getElementById("showHungaryRaCity");
