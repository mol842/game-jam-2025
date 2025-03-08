import { characters } from "./characters";
import flinders from './assets/flinders.png'
import dinos from './assets/dinos.png'

export const scenes = [
  {
    id: "start",
    background: flinders,
    dialogue: [
      { speaker: characters.lustig, characters: { left: { character: characters.lustig, expression: "neutral" } }, text: "Welcome to the story!" },
      { speaker: characters.lustig, characters: { right: { character: characters.lustig, expression: "happy" } }, text: "I'm so glad you're here!" },
      { text: "suddenly...... a large asteroid covers the sky" },
      { choices: [
          { text: "run.", next: "scene2" },
          { text: "stay and hold hands with lustig as the world falls down around you", next: "scene3" }
        ],
        characters: { center: { character: characters.lustig, expression: "sad" }}
      }
    ],
  },
  {
    id: "scene2",
    background: dinos,
    dialogue: [
      { speaker: characters.lustig, characters: { center: { character: characters.lustig, expression: "sad" } }, text: "Oh no! Why! what did i do????" },
      { choices: [{ text: "cry of guilt", next: "start" }] }
    ],
  },
  {
    id: "scene3",
    background: dinos,
    dialogue: [
      { speaker: characters.lustig, characters: { center: { character: characters.lustig, expression: "sad" } }, text: "Im so glad you stayed..." },
      {choices: [{ text: "lay down in the dirt", next: "start" }]}
    ],

  }

];
