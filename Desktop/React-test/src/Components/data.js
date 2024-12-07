const data = [
  {
    label: "Free",
    image: "../src/assets/bicycle.svg",
    priceLabel: "Free",
    duration: " ",
    imageAlt: "Moving bike With Clouds",
  },
  {
    label: "Pro",
    image: "../src/assets/car.svg",
    priceLabel: "49$ ",
    duration: "/ year",
    imageAlt: "Moving Car With Clouds",
  },
  {
    label: "Enterprise",
    image: "../src/assets/Airplane.svg",
    priceLabel: "99$ ",
    duration: " ",
    imageAlt: "Moving plane With Clouds",
  },
];

const newData = data.map((data) => `<h2> ${data.label}</h2>`);
newData;
