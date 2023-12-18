export function displayTariffs(tariffs) {
  const container = document.querySelector(".tariffs__container");
  container.innerHTML = "";

  Object.keys(tariffs).forEach((tariffKey) => {
    const tariff = tariffs[tariffKey];

    const box = document.createElement("div");
    box.classList.add("tariff__box");

    const title = document.createElement("h4");
    title.classList.add("tariff__title");
    title.textContent = `Тариф ${tariff.serviceName}`;
    box.appendChild(title);

    const courier = document.createElement("p");
    courier.classList.add("tariff__text");
    courier.textContent = `${tariff.carrierName}`;
    box.appendChild(courier);

    const days = document.createElement("p");
    days.classList.add("tariff__text");
    days.textContent = `${tariff.deliveryTerm} днів`;
    box.appendChild(days);

    const cost = document.createElement("p");
    cost.classList.add("tariff__cost");
    cost.textContent = `${tariff.totalCost} грн`;
    box.appendChild(cost);

    container.appendChild(box);
  });
}