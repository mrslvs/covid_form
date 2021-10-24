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

// ***********************************************
// ****************SELECTION LIST****************
// ***********************************************

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
      // hide cities of cze & hun
      // cze
      showCzechJcCity.style.display = "none";
      showCzechJmCity.style.display = "none";
      showCzechZlCity.style.display = "none";
      // hun
      showHungaryKoCity.style.display = "none";
      showHungaryNoCity.style.display = "none";
      showHungaryRaCity.style.display = "none";
      break;
    case "cze":
      console.log("som z ciech");
      showCzechArea.style.display = "inline-block";
      //   hide others
      showSlovakArea.style.display = "none";
      showHungaryArea.style.display = "none";
      // hide cities of svk & hun
      // svk
      showSlovakWestCity.style.display = "none";
      showSlovakMidCity.style.display = "none";
      showSlovakEastCity.style.display = "none";
      // hun
      showHungaryKoCity.style.display = "none";
      showHungaryNoCity.style.display = "none";
      showHungaryRaCity.style.display = "none";
      break;
    case "hun":
      console.log("som z madarska");
      showHungaryArea.style.display = "inline-block";
      //   hide others
      showSlovakArea.style.display = "none";
      showCzechArea.style.display = "none";
      // hide cities of svk & cze
      // svk
      showSlovakWestCity.style.display = "none";
      showSlovakMidCity.style.display = "none";
      showSlovakEastCity.style.display = "none";
      // cze
      showCzechJcCity.style.display = "none";
      showCzechJmCity.style.display = "none";
      showCzechZlCity.style.display = "none";
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
      showSlovakMidCity.style.display = "none";
      showSlovakEastCity.style.display = "none";
      break;
    case "mid":
      console.log("som zo stredu, zobraz stredne mesta");
      showSlovakMidCity.style.display = "inline-block";
      // hide others
      showSlovakWestCity.style.display = "none";
      showSlovakEastCity.style.display = "none";
      break;
    case "east":
      console.log("som zo vychodu, zobraz vychodne mesta");
      showSlovakEastCity.style.display = "inline-block";
      // hide others
      showSlovakWestCity.style.display = "none";
      showSlovakMidCity.style.display = "none";
      break;
  }
});

//CITY cze
const showCzechJcCity = document.getElementById("showCzechJcCity");
const showCzechJmCity = document.getElementById("showCzechJmCity");
const showCzechZlCity = document.getElementById("showCzechZlCity");

const areaCzech = document.getElementById("areaCzech");

areaCzech.addEventListener("change", (event) => {
  switch (event.target.value) {
    case "jc":
      console.log("som jiznich cech, zobraz jihoceske mesta");
      showCzechJcCity.style.display = "inline-block";
      // hide others
      showCzechJmCity.style.display = "none";
      showCzechZlCity.style.display = "none";
      break;
    case "jm":
      console.log("som jizni moravy, zobraz jihomoravske mesta");
      showCzechJmCity.style.display = "inline-block";
      // hide others
      showCzechJcCity.style.display = "none";
      showCzechZlCity.style.display = "none";
      break;
    case "zl":
      console.log("som zo zlina, zobraz zlinske mesta");
      showCzechZlCity.style.display = "inline-block";
      // hide others
      showCzechJcCity.style.display = "none";
      showCzechJmCity.style.display = "none";
      break;
  }
});

// CITY hun
const showHungaryKoCity = document.getElementById("showHungaryKoCity");
const showHungaryNoCity = document.getElementById("showHungaryNoCity");
const showHungaryRaCity = document.getElementById("showHungaryRaCity");

const areaHungary = document.getElementById("areaHungary");

areaHungary.addEventListener("change", (event) => {
  switch (event.target.value) {
    case "ko":
      showHungaryKoCity.style.display = "inline-block";
      // hide others
      showHungaryNoCity.style.display = "none";
      showHungaryRaCity.style.display = "none";
      break;
    case "no":
      showHungaryNoCity.style.display = "inline-block";
      // hide others
      showHungaryKoCity.style.display = "none";
      showHungaryRaCity.style.display = "none";
      break;
    case "ra":
      showHungaryRaCity.style.display = "inline-block";
      // hide others
      showHungaryKoCity.style.display = "none";
      showHungaryNoCity.style.display = "none";
      break;
  }
});
