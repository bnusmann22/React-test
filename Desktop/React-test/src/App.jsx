import PricingCard from "./Components/CardPricing";
//import State from "./Components/State";
import Styles from "./App.module.css";
import data from "./Components/data";

function App() {
  const [{ label: , image, priceLabel, duration, imageAlt }] = data.map(
    (datum) => datum
  );
  return (
    <div className={Styles.prices}>
      <PricingCard />
      <PricingCard />
      <PricingCard />

      {/* <State /> */}
    </div>
  );
}

console.log(label:);
export default App;
