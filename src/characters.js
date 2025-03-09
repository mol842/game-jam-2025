import lustigNeutral from "./assets/lustig.png";
import lustigHappy from "./assets/lustig-happy.png";
import lustigSad from "./assets/lustig-sad.png";

import oscarNeutral from "./assets/oscar/Oscar.png";
import kuroNeutral from "./assets/kuro/Kuro.png";
import damenNeutral from "./assets/damen/Damen.png";

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
    }
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
