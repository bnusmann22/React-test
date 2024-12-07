import PricingCard from "./Components/CardPricing";
//import State from "./Components/State";npm r
import Styles from "./App.module.css";
//import data from "./Components/data";

function App() {
  const cards = [
    {
      label: "Free",
      image: "../src/assets/bicycle.svg",
      priceLabel: "Free",
      duration: " ",
      imageAlt: "Moving bike With Clouds",
      benefits: ["Some users", "No support", "some days Access"],
    },
    {
      label: "Pro",
      image: "../src/assets/car.svg",
      priceLabel: "49$ ",
      duration: "/ year",
      imageAlt: "Moving Car With Clouds",
      benefits: [
        "Upto 10 users",
        "Email Support, Call Support",
        "1 Year Access",
      ],
    },
    {
      label: "Enterprise",
      image: "../src/assets/Airplane.svg",
      priceLabel: "99$ ",
      duration: " ",
      imageAlt: "Moving plane With Clouds",
      benefits: [
        "Infinite  users",
        "Email Support, Call Support and home service sef😎",
        "Lifetime Access",
      ],
    },
  ];
  return (
    <div className={Styles.prices}>
      {cards.map((card) => {
        return (
          <PricingCard
            key={card.label}
            label={card.label}
            image={card.image}
            priceLabel={card.priceLabel}
            duration={card.duration}
            imageAlt={card.imageAlt}
            benefits={card.benefits}
          />
        );
      })}
      {/* <State /> */}
    </div>
  );
}

export default App;
