const $ = document;
// toggle btn
const annuallyInputElem = $.querySelector("#Annually");
const monthlyInputElem = $.querySelector("#Monthly");

// price elements
const basicPrice = $.querySelector(".basic-price");
const professionalPrice = $.querySelector(".professional-price");
const masterPrice = $.querySelector(".master-price");

// for toggle
const toggleElem = document.querySelector(".main-toggle");
toggleElem.addEventListener('change', (e) => {
  if (e.target.id == "Monthly") {
    toggleElem.setAttribute("for", "Annually");
  } else {
    toggleElem.setAttribute("for", "Monthly");
  }
})

// change price
annuallyInputElem.addEventListener("change", () => {
  basicPrice.innerHTML = "&dollar;199.99";
  professionalPrice.innerHTML = "&dollar;249.99";
  masterPrice.innerHTML = "&dollar;399.99";
});

monthlyInputElem.addEventListener("change", () => {
  basicPrice.innerHTML = "&dollar;19.99";
  professionalPrice.innerHTML = "&dollar;24.99";
  masterPrice.innerHTML = "&dollar;39.99";
});
