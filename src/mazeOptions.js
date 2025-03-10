import one from "./assets/mazeImgs/1.png";
import two from "./assets/mazeImgs/2.png";
import three from "./assets/mazeImgs/3.png";
import four from "./assets/mazeImgs/4.png";
import five from "./assets/mazeImgs/5.png";
import six from "./assets/mazeImgs/6.png";
import seven from "./assets/mazeImgs/7.png";
import eight from "./assets/mazeImgs/8.png";
import nine from "./assets/mazeImgs/9.png";
import ten from "./assets/mazeImgs/10.png";
import eleven from "./assets/mazeImgs/11.png";
import twelve from "./assets/mazeImgs/12.png";
import thirteen from "./assets/mazeImgs/13.png";
import fourteen from "./assets/mazeImgs/14.png";
import fifteen from "./assets/mazeImgs/15.png";
import sixteen from "./assets/mazeImgs/16.png";
import seventeen from "./assets/mazeImgs/17.png";
import eighteen from "./assets/mazeImgs/18.png";
import nineteen from "./assets/mazeImgs/19.png";
import twenty from "./assets/mazeImgs/20.png";
import twentyone from "./assets/mazeImgs/21.png";
import twentytwo from "./assets/mazeImgs/22.png";
import twentythree from "./assets/mazeImgs/23.png";
import twentyfour from "./assets/mazeImgs/24.png";
import twentyfive from "./assets/mazeImgs/25.png";
import twentysix from "./assets/mazeImgs/26.png";
import twentyseven from "./assets/mazeImgs/27.png";
import twentyeight from "./assets/mazeImgs/28.png";
import twentynine from "./assets/mazeImgs/29.png";
import thirty from "./assets/mazeImgs/30.png";
import win from "./assets/mazeImgs/31.png";
export const locations = [
  { 
    space: "0, 0",
    img: one,
    down: "0, 1", 
  },
  { 
    space: "0, 1",
    img: two,
    up: "0, 0",
    down: "0, 2",
    right: "1, 1",
  },
  { 
    space: "0, 2",
    img: three,
    up: "0, 1",
  },
  {
    space: "0, 3",
    img: four,
    right: "1, 3",
    down: "0, 4",
  },
  { space: "0, 4",
    img: five,

    up: "0, 3",
  },

  {
    space: "1, 0",
    img: six,
    right: "2, 0",
  },
  { 
    space: "1, 1",
    img: seven,
    left: "0, 1",
    right: "2, 1",
  }
  ,
  { 
    space: "1, 2",
    img: eight,
    right: "2, 2",
    down: "1, 3",
  },
  { 
    space: "1, 3",
    img: nine,
    up: "1, 2",
    left: "0, 3",
    down: "1, 4",
  }
  ,
  { 
    space: "1, 4",
    img: ten,
    up: "1, 3",
    right: "2, 4",
  },

  
  { 
    space: "2, 0",
    img: eleven,
    left: "1, 0",
    down: "2, 1",
  },
  { 
    space: "2, 1",
    img: twelve,
    left: "1, 1",
    up: "2, 0",
    down: "2, 2",
  },
  { 
    space: "2, 2",
    img: thirteen,
    left: "1, 2",
    right: "3, 2",
  },
  { 
    space: "2, 3",
    img: fourteen,
    down: "2, 4",
  },
  { 
    space: "2, 4",
    img: fifteen,
    left: "1, 4",
    up: "2, 3",
    right: "3, 4",
  },


  {
    space: "3, 0",
    img: sixteen,
    right: "4, 0",
  },
  { 
    space: "3, 1",
    img: seventeen,
    right: "4, 1",
    down: "3, 2",
  },
  { 
    space: "3, 2",
    img: eighteen,
    left: "2, 2",
    up: "3, 1",
    down: "3, 3",
  },
  { 
    space: "3, 3",
    img: nineteen,
    up: "3, 2",
    right: "4, 3",
  },
  { 
    space: "3, 4",
    img: twenty,
    left: "2, 4",
    right: "4, 4",
  },

  { 
    space: "4, 0",
    img: twentyone,
    left: "3, 0",
    down: "4, 1",
  },
  { 
    space: "4, 1",
    img: twentytwo,
    left: "3, 1",
    right: "5, 1",
    up: "4, 0",
    down: "4, 2",
  },
  { 
    space: "4, 2",
    img: twentythree,
    up: "4, 1",
  },
  { 
    space: "4, 3",
    img: twentyfour,
    left: "3, 3",
    right: "5, 3",
  },
  { 
    space: "4, 4",
    img: twentyfive,
    left: "3, 4",
  },

  {
    space: "5, 0",
    img: twentysix,
    down: "5, 1",
  },
  { 
    space: "5, 1",
    img: twentyseven,
    left: "4, 1",
    up: "5, 0",
  },
  { 
    space: "5, 2",
    img: twentyeight,
    down: "5, 3",
  },
  { 
    space: "5, 3",
    img: twentynine,
    left: "4, 3",
    up: "5, 2",
    down: "5, 4",
  },

  { 
    space: "5, 4",
    img: thirty,
    up: "5, 3",
    right: "win"
  },
  {
    space: "win",
    img: win,
  }
];
