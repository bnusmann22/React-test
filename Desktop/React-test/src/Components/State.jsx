import Style from "./state.module.css";
import React from "react";

export default function State() {
  const [count, setCount] = React.useState(0);
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const minus = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <main className={Style.container}>
        <h1>How many times will Bob say STATE in this section?</h1>
        <div className={Style.counter}>
          <button
            onClick={minus}
            className={Style.minus}
            aria-label="Decrease count"
          >
            –
          </button>
          <h2 className={Style.count}>{count}</h2>
          <button
            onClick={add}
            className={Style.plus}
            aria-label="Increase count"
          >
            +
          </button>
        </div>
      </main>
    </>
  );
}

// import { useState } from "react";

// //Boolean Flipping Example

// export default function State() {
//   const [isGoingOut, setIsGoingOut] = useState(true);

//   const handleClick = () => {
//     setIsGoingOut(!isGoingOut);
//   };

//   //let answer = isGoingOut ? "Yes" : "No";

//   return (
//     <main>
//       <h1 className="title">Do I feel like going out tonight?</h1>
//       <button className="value" onClick={handleClick}>
//         {isGoingOut ? "Yes" : "No"}
//       </button>
//     </main>
//   );
// }

//ARRAY STATE MANAGEMENT

// export default function State() {
//   const [myFriends, setMyFriends] = React.useState([]);

//   const allFriendsList = [
//     "Aisha",
//     "Khairee",
//     "Muhammad",
//     "Jogana",
//     "Yar Mariri",
//     "Bilal",
//     "Shatrii",
//   ];

//   const friendsElements = myFriends.map((friends) => (
//     <li key={friends}>{friends}</li>
//   ));

//   const addMyFriend = () => {
//     setMyFriends((prevFriends) => [
//       ...prevFriends,
//       allFriendsList[prevFriends.length],
//     ]);
//   };

//   return (
//     <main>
//       <h2>MY FRIENDS</h2>
//       <button onClick={addMyFriend}>Add Another Name</button>
//       <section aria-live="polite">{friendsElements}</section>
//     </main>
//   );
// }

//State Counter Example
