import { displayTrackingInformation } from "./js/tracking-information.js";

const trackingForm = document.querySelector(".tracking__form");
const trackingInformationContainer =
  document.querySelector(".result-container");
const trackingInfoDiv = document.createElement("div");

trackingForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const trackingNumber = form.elements.numbers.value;
  trackingInformationContainer.innerHTML = "";

  if (!trackingNumber) {
    trackingInfoDiv.classList.add("tracking-info");

    trackingInfoDiv.innerHTML = `
    <p class="tracking__result__text tracking__result__text--bold">Будь ласка, введіть номер накладної</p>
        `;
    trackingInformationContainer.appendChild(trackingInfoDiv);
    return;
  }
  const apiUrl = `http://pegas.loc/awb_following/follow/${trackingNumber}`;

  try {
    const response = await axios.get(apiUrl);

    const trackingData = response.data;

    if (trackingData) {
      displayTrackingInformation(trackingData);
    }
  } catch (error) {
    // alert("Помилка при виконанні запиту: " + error.message);

    if (error.response && error.response.status === 404) {
      displayNotFoundMessage();
    } else {
      alert("Помилка при виконанні запиту: " + error.message);
    }
  }

  form.reset();
}

function displayNotFoundMessage() {
  const trackingInformationContainer =
    document.querySelector(".result-container");
  trackingInformationContainer.classList.add("tracking-info");
  trackingInformationContainer.innerHTML = `<p class="tracking__result__text tracking__result__text--bold">Накладна не знайдена.</p>`;
}
