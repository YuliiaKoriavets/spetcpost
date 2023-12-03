const trackingInformationContainer =
  document.querySelector(".result-container");

export function displayTrackingInformation(trackingData) {

  trackingInformationContainer.innerHTML = "";

  if (trackingData.awb.length > 0) {
    const awbInfo = trackingData.awb[0];
    const statusDescription = awbInfo.description_track_trace_translations.find(
      (translation) => translation.locale === "uk"
    );

    const rawDateTime = awbInfo.data_time.date;
    const dateTimeParts = rawDateTime.split(" ");
    const datePart = dateTimeParts[0];
    const timePart = dateTimeParts[1].split(".")[0]; 

    const formattedDateTime = `${datePart} ${timePart}`;

    const trackingInfoDiv = document.createElement("ul");
    trackingInfoDiv.classList.add("tracking-info");

    trackingInfoDiv.innerHTML = `
            <li>
                <p class="tracking__result__text">
                <span class="tracking__result__text--bold">Номер накладної:</span> ${
                  trackingData.awb_number
                }
                </p>
            </li>
             <li>
               <p class="tracking__result__text">
                <span class="tracking__result__text--bold">Місце відправлення:</span> ${
                  awbInfo.depo_name_translations[1].name
                }, ${awbInfo.depo_country_translations[1].name} 
                </p>
            </li>
             <li>
               <p class="tracking__result__text">
                <span class="tracking__result__text--bold">Дата та час:</span> ${formattedDateTime}
                </p>
            </li>
            <li>
               <p class="tracking__result__text">
                <span class="tracking__result__text--bold">Статус:</span> ${
                  statusDescription
                    ? statusDescription.description_track_trace
                    : "Статус невідомий"
                }
                </p>
            </li>
        `;

    trackingInformationContainer.appendChild(trackingInfoDiv);
  } else {
    trackingInformationContainer.textContent =
      "Інформація про трекінг відсутня";
  }
}
