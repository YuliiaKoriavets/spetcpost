import countries from "./countries.js";

const inputSending = document.getElementById("country-of-sending");
const inputReceiving = document.getElementById("country-of-receiving");
const dropdownContentSending = document.getElementById(
  "dropdown-content-sending"
);
const dropdownContentReceiving = document.getElementById(
  "dropdown-content-receiving"
);

function createDropdownItems(input, dropdownContent, countriesArray) {
  countriesArray.forEach((country) => {
    const countryItem = document.createElement("div");
    countryItem.textContent = country.name;
    countryItem.classList.add("dropdown__item");

    countryItem.addEventListener("click", () => {
      input.value = country.name;
      hideDropdown(dropdownContent);
    });

    dropdownContent.appendChild(countryItem);
  });
}

function filterCountries(input, dropdownContent, searchText, countriesArray) {
  const filteredCountries = countriesArray.filter((country) =>
    country.name.toLowerCase().includes(searchText)
  );

  dropdownContent.innerHTML = "";

  createDropdownItems(input, dropdownContent, filteredCountries);

  showDropdown(dropdownContent);
}

function showDropdown(dropdownContent) {
  dropdownContent.style.display = "block";
}

function hideDropdown(dropdownContent) {
  dropdownContent.style.display = "none";
}

inputSending.addEventListener("click", () => {
  filterCountries(inputSending, dropdownContentSending, "", countries);
});

inputSending.addEventListener("input", () => {
  const searchTextSending = inputSending.value.toLowerCase();
  filterCountries(
    inputSending,
    dropdownContentSending,
    searchTextSending,
    countries
  );
});

inputReceiving.addEventListener("click", () => {
  filterCountries(inputReceiving, dropdownContentReceiving, "", countries);
});

inputReceiving.addEventListener("input", () => {
  const searchTextReceiving = inputReceiving.value.toLowerCase();
  filterCountries(
    inputReceiving,
    dropdownContentReceiving,
    searchTextReceiving,
    countries
  );
});

document.addEventListener("click", (event) => {
  const isClickInsideDropdownSending =
    inputSending.contains(event.target) ||
    dropdownContentSending.contains(event.target);
  const isClickInsideDropdownReceiving =
    inputReceiving.contains(event.target) ||
    dropdownContentReceiving.contains(event.target);

  if (!isClickInsideDropdownSending) {
    hideDropdown(dropdownContentSending);
  }

  if (!isClickInsideDropdownReceiving) {
    hideDropdown(dropdownContentReceiving);
  }
});
