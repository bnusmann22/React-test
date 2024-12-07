.card {
max-width: 280px;
background-color: white;
border-radius: 3px;
--price-theme: #f3847e;
--price-theme-darker: #d43533;
}

.card\_\_wrapper {
width: 90%;
margin: 0 auto;
padding: 40px 10px;
}

.card\_\_label {
color: black;
font-weight: bold;
font-size: 1.2rem;
}

.card\_\_image {
max-width: 80px;
width: 100%;
margin-top: 40px;
}

.card\_\_price-label {
margin-top: 20px;
font-size: 1.3rem;
text-align: center;
color: var(--price-theme);
width: 100%;
padding-bottom: 15px;
border-bottom: 1px solid #f3f1f1;
}

.card\_\_price-figure {
font-weight: bold;
}

.card\_\_price-duration {
font-size: 0.8rem;
margin-left: 4px;
}

.card\_\_benefits-label {
color: var(--price-theme);
text-transform: uppercase;
font-size: 0.9rem;
text-align: center;
margin-top: 20px;
letter-spacing: 1.5px;
}

.card\_\_benefits {
color: black;
padding-left: 10px;
font-size: 0.7rem;
}

.card\_\_benefit {
margin-bottom: 15px;
}

.card\_\_benefit-icon {
width: 12px;
height: 12px;
background-color: color-mix(in srgb, var(--price-theme), white 40%);
padding: 2px;
border-radius: 50%;
margin-right: 6px;
}

.card\_\_button {
text-transform: uppercase;
padding: 15px;
background-color: var(--price-theme);
width: 100%;
text-align: center;
border: 2px solid var(--price-theme-darker);
border-radius: 3px;
margin-top: 20px;
}

# Some comments

import style from "./Mine.module.css";

export default function Mine() {
const Names = ["Fatima", "Jamil", "Aisha", "Bilal"];

return (
<div>
{Names.map((name) => (
<h1 className={style.cards}>Hello,{name}.</h1>
))}
</div>
);
}
