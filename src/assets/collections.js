import hoops from "./img/hoops.png";
import item1 from "./img/item1.png";
import item2 from "./img/item2.png";
import item3 from "./img/item3.png";
import item4 from "./img/item4.png";
import item5 from "./img/item5.png";
import item6 from "./img/item6.png";
import item7 from "./img/item7.png";
import item8 from "./img/item8.png";

import col1 from "./img/collection-1.png";
import col2 from "./img/collection-2.png";
import col3 from "./img/collection-3.png";

export const collections = [
  {
    id: 0,
    title: "Miranda",
    img: col1,
    desc: "Our collection-building process is like carrying a baby. We try to give it the best and make it independent.",
    items: [
      { id: 0, title: "Miranda Earrings", price: 59, img: item1 },
      { id: 1, title: "Miranda Pendant", price: 79, img: item2 },
      { id: 2, title: "Miranda Ring", price: 89, img: item3 },
      { id: 3, title: "Miranda Earrings", price: 49, img: item4 },
      { id: 4, title: "Miranda Pendant", price: 79, img: hoops },
      { id: 5, title: "Miranda Pendant", price: 69, img: item5 },
      { id: 6, title: "Miranda Earrings", price: 49, img: item6 },
      { id: 7, title: "Miranda Pendant", price: 99, img: item7 },
    ],
  },
  {
    id: 1,
    title: "Rose",
    img: col2,
    desc: "Our collection-building process is like carrying a baby.",
    items: [
      { id: 0, title: "Rose Earrings", price: 109, img: item4 },
      { id: 1, title: "Rose Ring", price: 159, img: item8 },
      { id: 2, title: "Rose Pendant", price: 199, img: item5 },
      { id: 3, title: "Rose Pendant", price: 189, img: item7 },
      { id: 4, title: "Rose Earrings", price: 99, img: item1 },
    ],
  },
  {
    id: 2,
    title: "Lilith",
    img: col3,
    desc: "Our collection-building process is like carrying a baby. We try to give it the best and make it independent Our collection-building process is like carrying a baby.",
    items: [
      { id: 0, title: "Lilith Pendant", price: 39, img: item5 },
      { id: 1, title: "Lilith Ring", price: 29, img: item3 },
      { id: 2, title: "Lilith Pendant", price: 39, img: item7 },
      { id: 3, title: "Lilith Earrings", price: 29, img: item1 },
      { id: 4, title: "Lilith Pendant", price: 49, img: item2 },
      { id: 5, title: "Lilith Earrings", price: 39, img: item4 },
      { id: 6, title: "Lilith Pendant", price: 49, img: hoops },
    ],
  },
];
