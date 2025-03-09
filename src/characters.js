import lustigNeutral from "./assets/lustig.png";
import lustigHappy from "./assets/lustig-happy.png";
import lustigSad from "./assets/lustig-sad.png";

import oscarNeutral from "./assets/oscar/Oscar.png";
import kuroNeutral from "./assets/kuro/Kuro.png";
import damenNeutral from "./assets/damen/Damen.png";

import hat1 from "./assets/oscar/hat1.png";
import hat2 from "./assets/oscar/hat2.png";
import hat3 from "./assets/oscar/hat3.png";
import earrings1 from "./assets/oscar/earrings1.png";
import earrings2 from "./assets/oscar/earrings2.png";
import earrings3 from "./assets/oscar/earrings3.png";
// import necklace1 from "./assets/oscar/necklace1.png";
// import necklace2 from "./assets/oscar/necklace2.png";
// import necklace3 from "./assets/oscar/necklace3.png";

export const characters = {
  menu: {
    name: "Menu",
    expressions: {
      menu: lustigNeutral,
    }
  },

  lustig: {
    name: "Lustig",
    expressions: {
      neutral: lustigNeutral,
      happy: lustigHappy,
      sad: lustigSad
    }
  },
  Oscar: {
    name: "Oscar",
    expressions: {
      neutral: oscarNeutral,
      happy: oscarNeutral,
      sad: oscarNeutral
    },
    accessories: [hat1, hat2, hat3, earrings1, earrings2, earrings3 ]//, necklace1, necklace2, necklace3, ]
  },
  Kuro: {
    name: "Kuro 愛",
    expressions: {
      neutral: kuroNeutral,
      happy: kuroNeutral,
      sad: kuroNeutral
    }
  },
  Damen: {
    name: "Damen",
    expressions: {
      neutral: damenNeutral,
      happy: damenNeutral,
      sad: damenNeutral
    }
  },  
};
