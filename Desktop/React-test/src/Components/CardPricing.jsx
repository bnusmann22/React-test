// import Styles from "/CardPricing.module.css";

// export default function PricingCard({ label, image, priceLabel, imageAlt }) {
//   return (
//     <div className="{Styles.card}">
//       <div className="styles card__wrapper">
//         <span className="{Styles.card__label}">{label}</span>
//         <div className="{Styles.card__image}">
//           <img src={image} alt={imageAlt} />
//         </div>
//         <span className="{Styles.card__priceLabel}">{priceLabel}</span>

//         <span>Everything in Free,Plus</span>
//         <ul className="styles.card__benefits">
//           <li className="styles.card__benefit">Upto 10 users</li>
//           <li className="styles.card__benefit">Email Support, Call Support</li>
//           <li className="styles.card__benefit">1 Year Access</li>
//         </ul>

//         <button className="styles.card__button">CHOOSE</button>
//       </div>
//     </div>
//   );
// }

import Styles from "./CardPricing.module.css";
//import car from "../assets/car.svg";

export default function PricingCard({
  label,
  // eslint-disable-next-line react/prop-types
  image,
  // eslint-disable-next-line react/prop-types
  imageAlt,
  // eslint-disable-next-line react/prop-types
  duration,
  // eslint-disable-next-line react/prop-types
  priceLabel,
}) {
  return (
    <div className={Styles.wrapper}>
      <span className={Styles.card__label}>{label}</span>
      <div className={Styles.card__img}>
        <img src={image} alt={imageAlt} />
      </div>
      <span className={Styles.card__priceLabel}>
        {priceLabel} <span className={Styles.duration}>{duration}</span>
      </span>

      <div className={Styles.benefits__contain}>
        <span className={Styles["card__benefits-label"]}>
          Everything in Free,Plus
        </span>
        <ul className={Styles.card__benefits}>
          <li className={Styles.card__benefit}>Upto 10 users</li>
          <li className={Styles.card__benefit}>Email Support, Call Support</li>
          <li className={Styles.card__benefit}>1 Year Access</li>
        </ul>

        <button className={Styles.card__button}>Choose</button>
      </div>
    </div>
  );
}
