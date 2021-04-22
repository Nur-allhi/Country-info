document.getElementById("more-info-btn").addEventListener("click", () => {
  document.getElementById("more-info").style.display = "block";
  document.getElementById("more-info-btn").style.display = "none";
});

// function moreInfoBtn() {
//   const moreInfo = document.getElementById("more-info");
//   if (moreInfo.style.display === "none") {
//     moreInfo.style.display = "block";
//   } else {
//     moreInfo.style.display = "none";
//   }
// }

const apiBase = "https://restcountries.eu/rest/v2/name/";

const getCountryName = (country) => {
  const url = `${apiBase}${country}?fultext=true`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => updateData(data));
};

const sarchBtn = document
  .getElementById("sarch-btn")
  .addEventListener("click", () => {
    const inputCountry = document.getElementById("country-input").value;
    getCountryName(inputCountry);
  });

const updateData = (data) => {
  document.getElementById("country-name").innerText =
    data[0].name || "Unknown Location!";
  document.getElementById("capital").innerText = data[0].capital;
  document.getElementById("population").innerText = data[0].population;
  document.getElementById("pass-name").innerText = data[0].altSpellings[1];
  document.getElementById("region").innerText = data[0].region;
  document.getElementById("language").innerText = data[0].languages[0].name;
  document.getElementById("area").innerText = data[0].area;
  document.getElementById("timezone").innerText = data[0].timezones;
  document.getElementById("currencie").innerText = data[0].currencies[0].code;
  document.getElementById("country-input").value = "";
};
