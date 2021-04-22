document.getElementById("more-info-btn").addEventListener("click", () => {
  document.getElementById("more-info").style.display = "block";
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
    .then((data) => console.log(data));
};

const sarchBtn = document
  .getElementById("sarch-btn")
  .addEventListener("click", () => {
    const inputCountry = document.getElementById("country-input").value;
    getCountryName(inputCountry);
  });
