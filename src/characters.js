import lustigNeutral from "./assets/lustig.png";
import lustigHappy from "./assets/lustig-happy.png";
import lustigSad from "./assets/lustig-sad.png";

import oscarNeutral from "./assets/oscar/Oscar.png";
import kuroNeutral from "./assets/kuro/Kuro.png";
import damenNeutral from "./assets/damen/Damen.png";

import oscarSad from "./assets/oscar/OscarSad.png";
import kuroSad from "./assets/kuro/KuroSad.png";
import damenSad from "./assets/damen/DamenSad.png";

import oscarAnnoyed from "./assets/oscar/OscarAngry.png";
import kuroAnnoyed from "./assets/kuro/KuroAngry.png";
import damenAnnoyed from "./assets/damen/DamenAngry.png";

import hat1 from "./assets/oscar/hat1.png";
import hat2 from "./assets/oscar/hat2.png";
import hat3 from "./assets/oscar/hat3.png";
import earrings1 from "./assets/oscar/earrings1.png";
import earrings2 from "./assets/oscar/earrings2.png";
import earrings3 from "./assets/oscar/earrings3.png";
import necklace1 from "./assets/oscar/necklace1.png";
import necklace2 from "./assets/oscar/necklace2.png";
import necklace3 from "./assets/oscar/necklace3.png";

import logo from "./assets/logo.png";

export const characters = {
  menu: {
    name: "Menu",
    expressions: {
      menu: logo,
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
      sad: oscarSad,
      annoyed: oscarAnnoyed
    },
    accessories: [hat1, hat2, hat3, earrings1, earrings2, earrings3, necklace1, necklace2, necklace3, ],
    colour: "rgba(9, 66, 10, 0.9)"
  },
  Kuro: {
    name: "Kuro 愛",
    expressions: {
      neutral: kuroNeutral,
      happy: kuroNeutral,
      sad: kuroSad,
      annoyed: kuroAnnoyed
    },
    colour: "rgba(7, 24, 74, 0.9)"
  },
  Damen: {
    name: "Damen",
    expressions: {
      neutral: damenNeutral,
      happy: damenNeutral,
      sad: damenSad,
      annoyed: damenAnnoyed
    },
    colour: "rgba(72, 8, 8, 0.9)"

  },  
  Barista: {
    name: "Space Barista"
  },  
  Worker: {
    name: "Space Worker"
  },  


};
