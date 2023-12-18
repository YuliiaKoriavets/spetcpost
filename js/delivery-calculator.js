import countries from "./countries.js";
import { displayTariffs } from "./display-tariffs.js";

const form = document.querySelector(".calculator__form");
const tariffsContainer = document.querySelector(".tariffs__container");
const errorContainer = document.querySelector(".error__container");

function getCountryCode(countryName) {
  const selectedCountry = countries.find(
    (country) => country.name === countryName
  );
  return selectedCountry ? selectedCountry.code : null;
}

  function displayError(errorMessage) {
    errorContainer.textContent = errorMessage;
    errorContainer.style.display = "block";
  }

form.addEventListener("submit", handleCalculatorSubmit);

export async function handleCalculatorSubmit(event) {
  event.preventDefault();

  const fromCountryInput = document.getElementById("country-of-sending");
  const toCountryInput = document.getElementById("country-of-receiving");
  const fromCountryCode = getCountryCode(fromCountryInput.value);
  const toCountryCode = getCountryCode(toCountryInput.value);
  const quantity = document.getElementById("calculator-number").value;
  const weight = document.getElementById("calculator-weight").value;
  const recipientZip = document.getElementById("recipient-zip").value;
  const senderZip = document.getElementById("sender-zip").value;

  if (fromCountryCode && toCountryCode) {
    const requestBody = {
      fromISO2: fromCountryCode,
      toISO2: toCountryCode,
      type: "document_exp",
      items: [
        {
          number: Number(quantity),
          weight: Number(weight),
        },
      ],
      zip: recipientZip,
      sender_zip: senderZip,
    };

    try {
      const response = await axios.post(
        "http://pegas.loc/api/calculate",
        requestBody
      );

      if (response.data.status === false) {
          console.error("Error:", response.data.message);
           displayError(response.data.message);
      } else {
          const tariffs = response.data;
          tariffsContainer.style.display = "flex";
        displayTariffs(tariffs);
      }
    } catch (error) {
        console.error("Error:", error);

        displayError("Something went wrong. Please try again later.");
    }
  } else {
    console.error("Please fill in all required fields.");

      displayError("Будь ласка заповніть всі необхідні поля або перевірте правильність введених даних.");
  }
    //  form.reset();
}
