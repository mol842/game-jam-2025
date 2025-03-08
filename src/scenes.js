import { characters } from "./characters";
import flinders from './assets/flinders.png'

import dinos from './assets/dinos.png'
import rose from './assets/rose.png'


import coffeeShop from './assets/flinders.png'
import jewellers from './assets/flinders.png'
import roseGarden from './assets/flinders.png'
import supermarket from './assets/flinders.png'

export const scenes = [
  {
    id: "start",
    background: coffeeShop,
    dialogue: [
      { text: "welcome to the space coffee shop" },

      { speaker: characters.a, 
        characters: { left: { character: characters.a, expression: "neutral" }, center: { character: characters.b, expression: "neutral" }, right: {character: characters.c, expression: "neutral"} }, 
        text: "we r at the coffee shop" },
      { choices: [
          { text: "go to the jewellers with a", path: "a", next: "jewellers-start", else: "jewellers-repeat" },
          { text: "go to the rose garden with b",  path: "b", next: "garden-start", else : "garden-repeat" },
          { text: "go to the supermarket with c",  path: "c", next: "supermarket-start", else: "supermarket-repeat"}
        ],
        characters: { left: { character: characters.a, expression: "neutral" }, center: { character: characters.b, expression: "neutral" }, right: {character: characters.c, expression: "neutral"} }, 
      }
    ],
  },



  {
    id: "jewellers-start",
    background: jewellers,
    dialogue: [
      { text: "welcome to the space jewellery shop" },
      { text: "why? hm... uhm" },

      { speaker: characters.lustig, characters: { center: { character: characters.lustig, expression: "sad" } }, text: "Oh no! Why! what did i do????" },
      { choices: [{ text: "cry of guilt", next: "start" }] }
    ],
  },


  {
    id: "jewellers-repeat",
    background: jewellers,
    dialogue: [
      { text: "youve been here before." },
      { choices: [{ text: "cry of guilt", next: "start" }] }
    ],
  },



  {
    id: "garden-start",
    background: roseGarden,
    dialogue: [
      { speaker: characters.lustig, characters: { center: { character: characters.lustig, expression: "sad" } }, text: "Oh no! Why! what did i do????" },
      { choices: [{ text: "cry of guilt", next: "start" }] }
    ],
  },
  {
    id: "garden-repeat",
    background: roseGarden,
    dialogue: [
      { text: "youve been here before." },
      { choices: [{ text: "cry of guilt", next: "start" }] }
    ],
  },






  {
    id: "supermarket-start",
    background: supermarket,
    dialogue: [
      { speaker: characters.lustig, characters: { center: { character: characters.lustig, expression: "sad" } }, text: "Oh no! Why! what did i do????" },
      { choices: [{ text: "cry of guilt", next: "start" }] }
    ],
  },
  {
    id: "supermarket-repeat",
    background: supermarket,
    dialogue: [
      { text: "youve been here before." },
      { choices: [{ text: "cry of guilt", next: "start" }] }
    ],
  },


];
