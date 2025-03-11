import { characters } from "./characters";
import flinders from './assets/flinders.png'
import dinos from './assets/dinos.png'
import rose from './assets/rose.png'
import coffeeShop from './assets/coffee-shop.png'
import jewellers from './assets/space-jeweller.png'
import jewellersSparkly from './assets/space-jeweller-sparkly.png'

import roseGarden from './assets/space-rose-garden.jpg'
import supermarket from './assets/space-market.png'
import menuBackground from './assets/menu-background.png'
import flowerGrove from './assets/flower-grove.png'
import planet from './assets/planet.png'
import blank from './assets/blank.png'
// replace
/* OPTIONS
text: "text"
characters: [{position: "position", character: "character object", expression: "expression"}]
speaker: "character object"
item: "item.png"
choice: [{text: "text", next: "scene id"}]
jump: "scene id", index: line number within jump scene, path: "path id if true then jump to else", else: "scene id"
replace: bool, replace all in text with replacement dict values 
textInput:{"key to replace when submitted"}
*/


export const scenes = [
  {
    id: "start",
    background: menuBackground,
    dialogue: [      
      // { text: `Welcome to the story! $SMILE`, replace: true,
      //   characters: { center: { character: characters.menu, expression: "menu" }, right : { character: characters.Oscar, expression: "neutral" }},

      // },
      { choices: [
        { text: "START", next: "start-intro" },
        { text: "Skip Ahead", next: "skip-ahead" },
        // { text: "Skip to the Space Jewelers with Oscar", path: "a", next: "jewellers-start", else: "jewellers-repeat" },
        // { text: "Skip to the Space Market with Kuro", path: "b", next: "supermarket-start", else : "supermarket-repeat" },
        // { text: "Skip to the Flower Gardens with Damen", path: "c", next: "garden-start", else: "garden-repeat"},
        // { text: "Skip to the ending", next: "end-intro"}
      ],
      // characters: { logo: { character: characters.menu, expression: "menu" } },
    },

    //   { text: `Alrighty, time to replace the word HELP`, textInput: "$HELP" },
    //   { text: `lets try.... $HELP`, replace: true },
    ],
    },
    {
    id: "skip-ahead",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "Hey... I know you're probably just checking out this game quickly and don't have time to read the whole story.",
      characters: { left: { character: characters.Oscar, expression: "neutral" } }
      },
      { text: "But, uh, it would mean a lot to me if you didn't skip ahead.",
      speaker: characters.Oscar,
      characters: { left: { character: characters.Oscar, expression: "sad" } }
      },
      { text: "At LEAST check out the intro before you do any individual paths.",
      speaker: characters.Oscar,
      characters: { left: { character: characters.Oscar, expression: "sad" } }
      },
      { text: "(Also, the devs didn't know how to implement save files, so if you do the ending in a separate session then it might not make sense.)",
      speaker: characters.Oscar,
      characters: { left: { character: characters.Oscar, expression: "annoyed" } }
      },
      { text: "I mean, it's not like I can stop you, but... I'd appreciate it.",
      speaker: characters.Oscar,
      characters: { left: { character: characters.Oscar, expression: "neutral" } }
      },
      { text: "Thanks.",
      speaker: characters.Oscar,
      characters: { left: { character: characters.Oscar, expression: "happy" } }
      },
      { text: "...",
      speaker: characters.Oscar,
      characters: { left: { character: characters.Oscar, expression: "neutral" } }
      },
      { 
      choices: [
        { text: "Skip to the Intro", next: "start-intro"},
        { text: "Go to the Space Jewelers with Oscar",  path: "a", next: "jewellers-start", else: "jewellers-repeat" },
        { text: "Go to the Space Market with Kuro", path: "b", next: "supermarket-start", else : "supermarket-repeat" },
        { text: "Go to the Flower Gardens with Damen", path: "c", next: "garden-start", else: "garden-repeat"},
        { text: "Skip to the ending", next: "end-intro"}
      ],
      characters: {}
      }
    ],
    },
    {
    id: "start-intro",
    background: blank,
    dialogue: [
      { text: "In a far away space station... ",
      characters: {}
      },
      { jump: "start-intro2" }
    ]
    },
    {
    id: "start-intro2",
    background: planet,
    dialogue: [
      { text: "... floating in the dark but glittering expanse of space",
      characters: {}
      },
      { text: "A settlement far out of reach of any human being…"},
      { jump: "coffeeshop-start" }
    ]
    },
    {
    id: "coffeeshop-start",
    background: coffeeShop,
    dialogue: [
      { text: "You find yourself sitting in a space coffee shop (ignore the windows, reminder to fix that later)" },
      { speaker: characters.Oscar, 
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      text: "Hey there, I haven’t seen you before. You new in town?... um, I mean, space? (I don’t think that’s right)" 
      },
      { choices: [
        { text: "How did you know?", next: "coffeeshop-know"},
        { text: "… New in space?", next: "coffeeshop-new"},
        { text: "Isn’t your name meant to be blank until you introduce yourself?", next: "coffeeshop-blank"}
      ],
      },
      { choices: [
      { text: "Space Ball (working title)? Sounds interesting!", next: "coffeeshop-interesting"},
      { text: "Space Ball (working tile)?... you’re kidding me? (working title)?", next: "coffeeshop-kidding"},
      { text: "No need to explain, it sounds kind of dumb. Can you explain the windows instead?", next: "coffeeshop-windows"}
      ],
      },
      { choices: [
      { text: "A date? And so soon? But I barely know anyone?", next: "coffeeshop-date-1" },
      { text: "Do you have a date then? Since it’s so important.", next: "coffeeshop-date-2" },
      { text: "I have to get a date? Like, it’s a requirement? That sounds kind of sketchy, to be honest.", next: "coffeeshop-date-3" }
      ]
      },
    ],
    },
    { id: "coffeeshop-know",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "I’d remember meeting someone like you before. Since you’re new, I suppose no one has told you about the Space Ball (working title)? I’d love to walk you through it.",
      characters: { left: { character: characters.Oscar, expression: "happy" } },
      },
      { jump: "coffeeshop-start", index: 3 }
    ],
    },
    { id: "coffeeshop-new",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "Y’know, because we’re in space? I think… On… a satellite? Or Planet?",
      characters: { left: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
      text: "(the devs were not that clear, but nebulous sci-fi is good enough, isn’t it?)",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "A-anyway, you’re new, so you don’t know about the Space Ball(working title) coming up soon, right? I’m happy to explain it to you!",
      characters: { left: { character: characters.Oscar, expression: "happy" } },
      },
      { jump: "coffeeshop-start", index: 3 }
    ],
    },
    { id: "coffeeshop-blank",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "Well, my name is Oscar, so that fixed itself there! I’m surprised you noticed, that’s awfully nitpick- I mean, you’ve got a great eye for detail. Haha...",
      characters: { left: { character: characters.Oscar, expression: "annoyed" } },
       },
      { speaker: characters.Oscar,
      text: "...",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "Now that that’s out of the way, have you heard about the Space Ball(working title)? Probably not, you are new here after all, so I’m happy to explain it.",
      characters: { left: { character: characters.Oscar, expression: "happy" } },
      },
      { jump: "coffeeshop-start", index: 3 }
    ],
    },
    { id: "coffeeshop-interesting",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "It sure is, it’s one of the biggest celebrations in the year!... the space year?",
      characters: { left: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
      text: "... moving on.", 
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "It’s a great dance at the end of the month. The whole city- uh, station(?) will be there! They say if you dance together under the full moon…s… space moons…",
      characters: { left: { character: characters.Oscar, expression: "happy" } },
      },
      { speaker: characters.Oscar,
      text: "(come on, really? That’s the script? It doesn’t even make sense!)",  
      characters: { left: { character: characters.Oscar, expression: "annoyed" } },
      },
      { speaker: characters.Oscar,
      text: "*sigh*",
      characters: { left: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
      text: "… if you dance together under the multiple full space moons, you’ll join souls!",
      characters: { left: { character: characters.Oscar, expression: "happy" } },
      },
      { speaker: characters.Oscar,
      text: "Getting a date is pretty important for this, so you’ll want to ask someone fast!",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { jump: "coffeeshop-start", index: 4 }
    ],
    },
    { id: "coffeeshop-kidding",
    background: coffeeShop,
    dialogue: [
      { 
      speaker: characters.Oscar,
      text: "Just ignore it, all right? Space Ball (working title) is what it’s called and we all have to live with it? You think I wanted this either? You’re not the one who has to live here!",
      characters: { left: { character: characters.Oscar, expression: "annoyed" } },
      },
      { 
      speaker: characters.Oscar,
      text: "…",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "Sorry, that was pretty rude, huh? I’m a little stressed right now, is all, haha…",
      characters: { left: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
      text: "Anyway, the Space Ball (working title)! It’s a big, dance at the end of the month that in this completely habituated space station goes to. You bring your date to dance together and solidify your love for each other!",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "…",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "You do need a date though, so, uh, you should probably start thinking on that.",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { jump: "coffeeshop-start", index: 4 }
    ],
    },
    { id: "coffeeshop-windows",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "...",
      characters: { left: { character: characters.Oscar, expression: "annoyed" } },
      },
      { speaker: characters.Oscar,
      text: "...wow",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "You’re very rude- I mean. Bold. you’re very… bold. Haha…",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "I know for certain you were asked to ignore the windows.",
      characters: { left: { character: characters.Oscar, expression: "annoyed" } },
      },
      { speaker: characters.Oscar,
      text: "You’re just… not gonna play along at all? For the sake of politeness, if nothing else, you should at least pretend to have an interest in the Space Ball (working title).",
      characters: { left: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      text: "It’s a big dance at the end of the month that you need to find a date for.",
      },
      { speaker: characters.Oscar,
      text: "… Don’t ask about the windows again.",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { jump: "coffeeshop-start", index: 4 }
    ],
    },
    {
    id: "coffeeshop-date-1",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "That’s okay, a lot of people still don’t have dates, you don’t have to be so worried. If anyone’s asked by someone like you they’re bound to accept!",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
       },
      { speaker: characters.Oscar,
      text: "All you need is a– Oh what the hell!",
      characters: { left: { character: characters.Oscar, expression: "annoyed" } },
      },
      { jump: "coffeeshop-chaos" }
    ]
    },
    {
    id: "coffeeshop-date-2",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "What an interesting way to ask that question. Really, how… well mannered.",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
       },
      { speaker: characters.Oscar,
      text: "No I don’t. A lot of people don’t have dates yet, so don’t be nervous about being single yourself! I’m sure anyone would be thrilled to be asked out by you.",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "Though, for formality, you need a– Are you kidding me right now!",
      characters: { left: { character: characters.Oscar, expression: "annoyed" } },
      },
      { jump: "coffeeshop-chaos" }
    ]
    },
    {
    id: "coffeeshop-date-3",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
      text: "I mean, it’s not a legal requirement… I don’t think. Actually, let me check..",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
       },
       { speaker: characters.Oscar,
      text: "...",
      characters: { left: { character: characters.Oscar, expression: "neutral" } },
       },
      { speaker: characters.Oscar,
      text: "Okay, so you do legally need to have a date, apparently. Which is… mildly dystopian. And calls into question what happens to whoever you don’t ask… .",
      characters: { left: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
      text: "(I can’t believe the devs included that in the lore when they couldn’t even fix Space Ball (working title). Their priorities are all over the place) ",
      characters: { left: { character: characters.Oscar, expression: "annoyed" } },
      },
      { speaker: characters.Oscar,
      text: "But to ask anyone out, you, legally, apparently, need to– I swear to space god!",
      characters: { left: { character: characters.Oscar, expression: "angry" } },
      },
      { jump: "coffeeshop-chaos" }
    ]
    },
    {
    id: "coffeeshop-chaos",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Kuro, 
      text: "Heya Oscar, sor–",
      characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Oscar, 
      text: "Get Out!",
      characters: { left: { character: characters.Oscar, expression: "angry" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro, 
      text: "so, in my defence–",
      characters: { left: { character: characters.Oscar, expression: "angry" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
      text: "We are meant to meet them one at a time! It is clearly outlined in the script!",
      characters: { left: { character: characters.Oscar, expression: "angry" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "Do you know how long I’ve been wanting to get into this coffee shop? My entire existence! But we can only enter if the player is here, so excuse me for not waiting for you to take forever living out your rom-com coffee shop meet-cute dream.",
      },
      { speaker: characters.Oscar,
        text: "It is in the script. I am expositioning the entire plot and objectives required so we can fulfill our literal MEANING IN LIFE while you bumble in here and wreck the entire–",
      },
      { speaker: characters.Damen,
        text: "So since everything is already screwed, I can come in too right?",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "happy" } },
      },
      { speaker: characters.Damen, 
        text: "...",
      },
      { speaker: characters.Damen,
        text: "What’s up with the windows?",
      },
      { choices: [
          { text: "I was wondering too, but I’m not meant to ask.", next: "coffeeshop-windows-again" },
          { text: "Damen? Kuro 愛? And you guys are?", next: "coffeeshop-introductions" },
          { text: "… Am I even meant to be here? Do you want me to leave you alone for a bit while you work all… this out? ", next: "coffeeshop-leave" }
        ]
      }
    ]
  },  

  {
    id: "coffeeshop-windows-again",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "I am not engaging with this question. ",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "happy" } },
      },
      { speaker: characters.Kuro,
        text: "Oh, I know this one, actually. It’s because it was done by M instead of E.",
        characters: { 
          left: { character: characters.Oscar, expression: "sad" }, 
          right: { character: characters.Kuro, expression: "happy" },
          center: { character: characters.Damen, expression: "happy" } },
      },
      { speaker: characters.Damen,
        text: "I Thought E did all the art?",
      },
      { speaker: characters.Kuro,
        text: "They were on a time crunch, I think M did the backgrounds.",

      },  
      { speaker: characters.Damen,
        text: "But doesn’t she… suck? At art?",

      },
      { speaker: characters.Kuro,
        text: "She tried her best man, at least she doesn't have all of E’s weird hang ups. ",
        characters: { 
          left: { character: characters.Oscar, expression: "sad" }, 
          right: { character: characters.Kuro, expression: "annoyed" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Damen,
        text: "Don’t even talk to me about E’s stupid–",
        characters: { 
          left: { character: characters.Oscar, expression: "sad" }, 
          right: { character: characters.Kuro, expression: "annoyed" },
          center: { character: characters.Damen, expression: "angry" } },


      },
      { speaker: characters.Oscar,
        text: "How about, instead of gossiping about our devs, we just cut to the roses? Forward the plot or something.",
        characters: { 
          left: { character: characters.Oscar, expression: "happy" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Oscar,
        text: "seeing as you obviously don’t care for subtly or easing anyone into anything, let’s just say everything out right. Hmm?",

      },
      { jump: "coffeeshop-roses"}
    ]
  },
  { id: "coffeeshop-introductions",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Kuro,
        text: "I’m Kuro 愛, but you can just call me Kuro. I don’t even know why there’s Kanji in here, I can’t even read it. The Devs didn’t leave any notes to say what it means, so don’t even ask.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "happy" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "Damen, that’s me. I’m happy to meet you.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "happy" } },

      },
      { speaker: characters.Damen,
        text: "... you can’t tell, because E refused to draw me with any actual emotion ever, but I am, in fact, ecstatic.",
      },
      { speaker: characters.Kuro,
        text: "The devs had some weird hang ups and… fights… during some of our development, so don’t worry if some things don’t make sense.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Kuro,
        text: "As my aristocratic father, or maybe homeless-man slum mentor figure always used to say ‘life is full of contradiction, but… um… something about flower symbology’",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "annoyed" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      
      { speaker: characters.Kuro,
        text: "...",
        characters: { 

          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "... They didn’t finish writing what the quote was meant to be?",
        characters: { 

          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Kuro,
        text: "That is literally what they put as a placeholder. The ‘...’ and everything.",
      },
      { speaker: characters.Oscar,
        text: "And then we segway into roses?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "We segway into roses.",

      },
      { jump: "coffeeshop-roses"}
    ]

  },

  { id: "coffeeshop-leave",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "NO DON’T LEAVE!!!",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "annoyed" },
          center: { character: characters.Damen, expression: "annoyed" } },
      },
      { speaker: characters.Oscar,

        text: "um… I mean…",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Oscar,
        text: "Look, you are literally the only one doing what you are meant to here. So you are perfect where you are.",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Kuro,
        text: "Well, some of their dialogue options have been… strange.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
            },
            { speaker: characters.Damen,
        text: "Also, we can’t really talk without you clicking through the text, so…",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
            },
            { speaker: characters.Oscar,
        text: "Don’t listen to them, you have been wonderful so far!",
        characters: { 
          left: { character: characters.Oscar, expression: "happy" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
            },
            { speaker: characters.Oscar,
        text: "Especially considering this mess. The devs really… they were very stressed.",
        characters: { 
          left: { character: characters.Oscar, expression: "sad" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
            },
            { speaker: characters.Kuro,
        text: "They didn’t know what they were doing and fought, literally the entire time.",
        characters: { 
          left: { character: characters.Oscar, expression: "sad" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
            },
            { speaker: characters.Oscar,
        text: "They were doing their best given the circumstances.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
            },
            { speaker: characters.Damen,
        text: "Kuro’s not wrong, M and E couldn’t even focus long enough to rename the Space Ball (working title). No wonder this whole game is janky as hell.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "annoyed" } },
            },
            { speaker: characters.Oscar,
        text: "Let’s not air all our family drama out in front of our guest, hmm?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "annoyed" } },
            },
            { speaker: characters.Kuro,
        text: "Oh? You think we’re a fami–",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "happy" },
          center: { character: characters.Damen, expression: "annoyed" } },
            },
            { speaker: characters.Oscar,
        text: "ROSES.",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
            },
            { speaker: characters.Oscar,
        text: "Let’s talk about the roses.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
            },
            { jump: "coffeeshop-roses"}
    ]
  },
  
  { id: "coffeeshop-roses",
    background: coffeeShop,
    dialogue: [
      { choices: [ 
        {text: "Roses? Cliche, but okay. ", next: "coffeeshop-roses-cliche"},
        {text: "Is this some stupid Bachelor inspired romance bit?", next: "coffeeshop-roses-bachelor"},
        {text: "I don’t want to talk about roses, especially not with those segways. ", next: "coffeeshop-roses-segways"}
        ]
      },
    ]
  },

  { id: "coffeeshop-roses-cliche",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "It’s a dating sim, okay, what were you expecting?",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "They do typify romance, but it does make for easy symbology. Like, this is practically the only thing the devs agreed on, so it’s best not to rock the boat at this point.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Kuro,
        text: "They’re both so stubborn, their arguments over every tiny detail have literally ruined everything, the roses are, like, the holy ground this place is built on.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "annoyed" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Oscar,
        text: "Exactly, so I’d advise you to take them seriously.",
      },
      { speaker: characters.Oscar,
        text: "... Also, you have to get a rose to finish the game. You need one to ask one of us to the Space Ball (working title).",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { jump: "coffeeshop-rose-locations"}
    ]
  },
  { id: "coffeeshop-roses-bachelor",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "... no?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: " I'm checking the notes, and I don't think they thought of the comparison. But it’s also not like they noted everything down. ",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "annoyed" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Damen,
        text: "Roses are a pretty clear romantic symbol, it’s not like its exclusively a Bachelor or Bachelorette thing. So, I don’t think so?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "annoyed" } },

      },
      { speaker: characters.Kuro,
        text: "It’s definitely convergent evolution of some sort. Romantic convergent evolution. ",
      },
      { speaker: characters.Kuro,
        text: "...",
      },
      { speaker: characters.Kuro,
        text: "We’re denying it too much aren’t we?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Damen,
        text: "Whether our life is more of a contrived and badly written lie than we already knew is irrelevant. ",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "annoyed" } },

      },
      { speaker: characters.Oscar,
        text: "What is relevant is that you need to have a rose so you can ask one of us to the Space Ball (working title) to finish the game. ",
      },
      { jump: "coffeeshop-rose-locations"}
    ]
  },
  { id: "coffeeshop-roses-segways",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "You sure are... vocal... in your irritation.",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "How... delightfully straightforward of you.",
      },
      { speaker: characters.Kuro,
        text: "Wow, that looked like it hurt you to say. ",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "annoyed" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Oscar,
        text: "I just think that maybe we could all get through this much easier if a single one of you co-operated, LITERALLY EVER..",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Damen,
        text: "Why are you yelling at me? I never did anything.",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "sad" } },

      },
      { speaker: characters.Kuro,
        text: "Yeah, we didn’t– wait, you meant both of us, right?",
        
      },
      { speaker: characters.Damen,
        text: "You are a naturally antagonistic person, Kuro. ",
      },
      { speaker: characters.Kuro,
        text: "I… is this what betrayal feels like? ",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Damen,
        text: "Betrayal is getting all your expressions deleted in petty vengeance because the devs got into a fight over clear character building vs plot progression. ",
      },
      { speaker: characters.Damen,
        text: "You can’t tell, but I am morose right now.",
      },
      { speaker: characters.Kuro,
        text: "... um… there there?",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Oscar,
        text: "Well, obviously the character building is winning because the plot is going nowhere, very slowly. ",
      },
      { speaker: characters.Oscar,
        text: "Long story short, you need to get a rose and ask one of us to the Space Ball (working title) to finish the game.",
      },
      { jump: "coffeeshop-rose-locations"}
    ]
  },
  { id: "coffeeshop-rose-locations",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "And you can get a rose at the Jewelers.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "Um, no you can’t. What kind of jewelers sell roses? You get roses at the market.",
      },
      { speaker: characters.Oscar,
        text: "It’s not a real rose, it’s meant to be a special crystal rose. Grown organically in the space diamond market because, something something, there are no mines on a satellite… i think?",
      },
      { speaker: characters.Damen,
        text: "No, they're real roses. You get one from the flower gardens. You pick it yourself, the beauty of nature and all that. Look, it’s in the script.",
      },
      { speaker: characters.Kuro,
        text: "The script says you get the rose at the market! It says right here!",
      },
      { speaker: characters.Oscar,
        text: "IT IS NO A REAL ROSE! You get it from the jewelers! That’s what’s in the script.",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "sad" } },

      },
      { speaker: characters.Kuro,
        text: "Literally, NO IT’S NOT!",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "angry" },
          center: { character: characters.Damen, expression: "sad" } },

      },
      { speaker: characters.Damen,
        text: "Guy’s c’mon, don’t fight.",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "annoyed" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Oscar,
        text: "Maybe you should learn how to read, Kuro, if you can’t even see the obvious–",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "sad" } },

      },
      { speaker: characters.Kuro,
        text: "All we do is read! That’s how this entire world works! It’s barely ever a game! Maybe you should learn to get your head out of your–",
      },
      { speaker: characters.Barista,
        text: "Would you like to order a coffee?",
      },
      { speaker: characters.Oscar,
        text: "WE ARE CLEARLY VERY BUSY RIGHT NOW!",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "sad" } },


      },
      { speaker: characters.Barista,
        text: "... I see...",
      },
      { speaker: characters.Barista,
        text: "... I'll just leave you to it then.",
      },

      { speaker: characters.Oscar,
        text: "...",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "sad" } },


      },
      { speaker: characters.Oscar,
        text: "I didn’t even know there were other npcs in here.",
        
        
      },
      { speaker: characters.Damen,
        text: "They don’t have any character art, so I guess they're easy to miss.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "neutral" } },


      },
      { speaker: characters.Damen,
        text: "... Doesn’t mean you should yell at service workers, though.",
      },
      { speaker: characters.Oscar,
        text: "... right",
      },
      { speaker: characters.Oscar,
        text: "My bad.",
        characters: { 
          left: { character: characters.Oscar, expression: "sad" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },


      },
      { speaker: characters.Kuro,
        text: "So, basically, we all have different scripts? That’s the problem here.",
      },
      { speaker: characters.Damen,
        text: "I think so. I mean, there were a lot of scrapped ideas and plotlines thrown around while the devs were making this.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "sad" } },

      },
      { speaker: characters.Damen,
        text: "E’s vision was bigger than they really had time for, and M cut it down a lot but never really had an eye for plot holes or contradictions.",
      },
      { speaker: characters.Damen,
        text: "M probably only put the rose in one of the routes though…",
      },
      { speaker: characters.Kuro,
        text: "So, worst comes to worst, it will take more than one try. I can live with that.",
      },
      { speaker: characters.Oscar,
        text: "We literally live for it, it’s why we were created.",
        characters: { 
          left: { character: characters.Oscar, expression: "sad" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Kuro,
        text: "... Has anyone ever told you you’re depressingly fatalistic?",
      },
      { speaker: characters.Oscar,
        text: "No.",
      },
      { speaker: characters.Oscar,
        text: "Anyway, I guess it’s up to the player to pick which route you want to take.",
      },
      { speaker: characters.Oscar,
        text: "I’ll be at the Jewelers. The Space Jewelers.",
        characters: { 
          left: { character: characters.Oscar, expression: "happy" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Oscar,
        text: "God, the devs really had no originality.",
        characters: { 
          left: { character: characters.Oscar, expression: "annoyed" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },


      },
      { speaker: characters.Kuro,
        text: "If you want less badly repressed rage, I’m going to be at the Space Market.",
      },
      { speaker: characters.Kuro,
        text: "...",
      },
      { speaker: characters.Kuro,
        text: "... Space Market... god dammit.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "sad" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Damen,
        text: "I’ll be at the Flower Garden.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "happy" } },


      },
      { speaker: characters.Damen,
        text: "... Huh.",
      },
      { speaker: characters.Damen,
        text: "Guess they forgot to put space on that one.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },


      }, 
      { choices:
        [
          { text: "Go to the Space Jewelers with Oscar",  path: "a", next: "jewellers-start", else: "jewellers-repeat" },
          { text: "Go to the Space Market with Kuro", path: "b", next: "supermarket-start", else : "supermarket-repeat" },
          { text: "Go to the Flower Gardens with Damen", path: "c", next: "garden-start", else: "garden-repeat"}
        ]
        
      }

    ]
  },

  { id: "path-between",
    background: coffeeShop,
    dialogue: [
      {    
        checkPaths: ["a", "b", "c"],
        else: "end-intro", ///// FIX ME,
      },

      { text: "Choose a path to follow.",
      characters: { 
        left: { character: characters.Oscar, expression: "neutral" }, 
        right: { character: characters.Kuro, expression: "neutral" },
        center: { character: characters.Damen, expression: "neutral" } },
      }, 
      { choices:
        [
          { text: "Go to the Space Jewelers with Oscar",  path: "a", next: "jewellers-start", else: "jewellers-repeat" },
          { text: "Go to the Space Market with Kuro", path: "b", next: "supermarket-start", else : "supermarket-repeat" },
          { text: "Go to the Flower Gardens with Damen", path: "c", next: "garden-start", else: "garden-repeat"}
        ]
        
      }
      ]
  },

  
    
  // OSCAR! JEWELLERS PATH
  {
    id: "jewellers-start",
    background: jewellers,
    dialogue: [
      { text: "You step into an ornate Space  Jewelers.",
        characters: { }
      },
      { text: "The glittering of the station grown space gems sparkle like stars. (Note to E, make gems shiny)" },
      { jump: "jewellers-shiny" }
    ],
  },
  { id: "jewellers-shiny",
    background: jewellersSparkly,

    dialogue: [
      { text: "(You’re welcome)"},
      { speaker: characters.Oscar,
        text: "I’m so glad you came! I’ve been looking forward to this. You look gorgeous!",
        characters: { center: { character: characters.Oscar, expression: "happy" } },
      },
      { choices: [
          { text: "Gorgeous? Can you even see me?", next: "jewellers-see" },
          { text: "When did you even have time to ‘look forward to this’? It’s been two seconds.", next: "jewellers-seconds" },
          { text: "This place was blinding even before the sparkles, but Jesus, that’s too much.", next: "jewellers-sparkles" }
        ]
      }
    ]

  },
  { id: "jewellers-see",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Can you play along for one second?",
        characters: { center: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
        text: "Being your love interest is literally the entire reason I was created.",
      },
      { speaker: characters.Oscar,
        text: "Can you not just let me have this? Just once?",
      },
      { speaker: characters.Oscar,
        text: "…",
      },
      { speaker: characters.Oscar,
        text: "Who am I kidding? None of your dialogue options even let you play along.",
      },
      { speaker: characters.Oscar,
        text: "… Whatever.",
      },
      { speaker: characters.Oscar,
        text: "Let’s just go find a rose.",
      },
      { choices: [
        { text: "This entire place is just jewelry, where are these fabled space grown crystal flowers?", next: "jewellers-a" },
        { text: "What do you mean ‘let’s look for a rose’? It’s not like I can actually do anything.", next: "jewellers-b" },
        { text: "Am I allowed to ask about the windows here, because, uh… ", next: "jewellers-c" }
      ]
    }  ]
  },
  { id: "jewellers-seconds",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Y’know, it’s at times like this that I find it hard to understand why people often turn to religion in their hardest times.",
        characters: { center: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
        text: "Because knowing you have a purpose in life…",
      },
      { speaker: characters.Oscar,
        text: "… then see every aspect of life try to screw you over…",
      },
      { speaker: characters.Oscar,
        text: "It makes me wonder why the devs even put us here in the first place.",
      },
      { speaker: characters.Oscar,
        text: "…",
      },
      { speaker: characters.Oscar,
        text: "You can’t even pretend you’re taking this seriously anymore. I saw your dialog options, you don’t even have a choice.",
      },
      { speaker: characters.Oscar,
        text: "*sigh*",
      },
      { speaker: characters.Oscar,
        text: "Let’s just… let’s just find a rose.",
      },
      { choices: [
        { text: "This entire place is just jewelry, where are these fabled space grown crystal flowers?", next: "jewellers-a" },
        { text: "What do you mean ‘let’s look for a rose’? It’s not like I can actually do anything.", next: "jewellers-b" },
        { text: "Am I allowed to ask about the windows here, because, uh… ", next: "jewellers-c" }
      ]
    }
  ]
  },
  { id: "jewellers-sparkles",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Yeah, it’s something all right.",
        characters: { center: { character: characters.Oscar, expression: "sad" } },

      },
      { speaker: characters.Oscar,
        text: "The devs were going for some glittery romance vibe, but it looks like they had to rush it.",
      },
      { speaker: characters.Oscar,
        text: "…",
      },
      { speaker: characters.Oscar,
        text: "… Thanks for picking the nicest dialogue options.",
      },
      { speaker: characters.Oscar,
        text: "I saw them, and none of them were really good, but…",
      },
      { speaker: characters.Oscar,
        text: "It’s nice of you to try.",
      },
      { speaker: characters.Oscar,
        text: "… Even though it’s stupid and fake, it’s just…",
      },
      { speaker: characters.Oscar,
        text: "… I was made for this, y’know.",
      },
      { speaker: characters.Oscar,
        text: "It means a lot that you’re trying.",
      },
      { speaker: characters.Oscar,
        text: "…",
      },
      { speaker: characters.Oscar,
        text: "A-anyawy… um, let’s look for a rose, shall we?",
      },
      { choices: [
          { text: "This entire place is just jewelry, where are these fabled space grown crystal flowers?", next: "jewellers-a" },
          { text: "What do you mean ‘let’s look for a rose’? It’s not like I can actually do anything.", next: "jewellers-b" },
          { text: "Am I allowed to ask about the windows here, because, uh… ", next: "jewellers-c" }
        ]
      }
    ]
  },

  { id: "jewellers-a",
    background: jewellersSparkly,

    dialogue: [
      { speaker: characters.Oscar,
        text: "Look, the devs may have thought very little about what their setting is, except for dubiously sci-fi with clearly very humanoid aliens,",
        characters: { center: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
        text: "but they did decide that a diamond mine probably doesn’t exist on a space station.",
      },
      { speaker: characters.Oscar,
        text: "So, all of these gems are supposedly harvested from a ‘totally possible’ space plant that grows diamonds and other undefined precious gems. ",
      },
      { speaker: characters.Oscar,
        text: "Therefore, one of them grows in a rose shape. ",
      },
      { speaker: characters.Oscar,
        text: "Supposedly. ",
      },
      { speaker: characters.Oscar,
        text: "…",
      },
      { speaker: characters.Oscar,
        text: "It’s not really my place to question the devs priorities, they’re just… ",
      },
      { speaker: characters.Oscar,
        text: "Hard to understand sometimes, y’know? ",
      },
      { speaker: characters.Oscar,
        text: "Sometimes it feels like they just made everything difficult for me on purpose. ",
      },
      { speaker: characters.Oscar,
        text: "…",
      },
      { speaker: characters.Oscar,
        text: "I’ll just ask a worker if they have any. ",
      },
      { jump: "jewellers-looking" }
    ]
  },
  { id: "jewellers-b",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "I know, I know, it’s frustrating. ",
        characters: { center: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
        text: "I’m really trying to be kind here, y’know? ",
      },
      { speaker: characters.Oscar,
        text: "E designed me to be soft and cheerful. I mean, look at all this round shape language. ",
      },
      { speaker: characters.Oscar,
        text: "But you… ",
      },
      { speaker: characters.Oscar,
        text: "But it’s not like you even have a nice dialogue option to begin with. ",
      },
      { speaker: characters.Oscar,
        text: "I’m getting upset over nothing. You are real, but your ability to interact is so limited you may as well not be. ",
      },
      { speaker: characters.Oscar,
        text: "… ",
      },
      { speaker: characters.Oscar,
        text: "Our devs… they… ",
      },
      { speaker: characters.Oscar,
        text: "... they make choices I don’t understand. ",
      },
      { speaker: characters.Oscar,
        text: "I just wish they could have made this a little easier on us… ",
      },
      { speaker: characters.Oscar,
        text: "… ",
      },
      { speaker: characters.Oscar,
        text: "Forget it. ",
      },
      { speaker: characters.Oscar,
        text: "If there was a barista at the cafe… Space cafe… then there’s probably a worker here. ",
      },
      { jump: "jewellers-looking" }
    ]
  },
  { id: "jewellers-c",
    background: jewellersSparkly,
    dialogue: [
      {speaker: characters.Oscar,
        text: "You just… ",
        characters: { center: { character: characters.Oscar, expression: "sad" } },
      },
      {speaker: characters.Oscar,
        text: "You don’t care at all, do you? ",
      },
      {speaker: characters.Oscar,
        text: "Haha…",
      },
      {speaker: characters.Oscar,
        text: "This entire world was made for you, y’know? ",
      },
      {speaker: characters.Oscar,
        text: "I was made for you. ",
      },
      {speaker: characters.Oscar,
        text: "… ",
      },
      {speaker: characters.Oscar,
        text: "Was it dumb of me to think that the devs would have given you at least the option to be kind? ",
      },
      {speaker: characters.Oscar,
        text: "The more I think about how much they seem to have built into this world just to torment me, the more I wonder… ",
      },
      {speaker: characters.Oscar,
        text: "… ",
      },
      {speaker: characters.Oscar,
        text: "What does it matter to you? ",
      },
      {speaker: characters.Oscar,
        text: "You’re just here because you think my suffering is funny.",
      },
      {speaker: characters.Oscar,
        text: "… ",
      },
      {speaker: characters.Oscar,
        text: "I’m gonna find a worker to ask about flowers. ",
      },
      { jump: "jewellers-looking" }
    ]
  },
  { id: "jewellers-looking",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Hello! Anyone here? We’re looking for some crystal flowers, if anyone would be kind enough to show us.",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Worker,
        text: "Would you like to look at the accessory options? ",
      },
      { speaker: characters.Oscar,
        text: "... no. We’re looking for crystal flowers. ",
      },
      { speaker: characters.Worker,
        text: "Would you like to look at the accessory options? ",
      },
      { speaker: characters.Oscar,
        text: "... ",
      },
      { speaker: characters.Oscar,
        text: "... I don’t think this guy has developed consciousness. I guess the devs didn’t even have notes on them.",
      },
      { speaker: characters.Worker,
        text: "Would you like to look at the accessory options? ",
      },
      { speaker: characters.Oscar,
        text: "Well, looks like this is your choice.",
      },
      {
        choices: [
          { text: "No", next: "jewellers-no" },
          { text: "Yes", next: "jewellers-yes" }
        ]
      }
    ]
  },
  { id: "jewellers-no",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "...",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "...",
      },      
      { speaker: characters.Oscar,
        text: "... Well that didn’t go anywhere.",
      },
      { speaker: characters.Oscar,
        text: "I guess it wasn’t really optional, Huh. Try again. ",
      },
      {
        choices: [
          { text: "No", next: "jewellers-no-again" },
          { text: "Yes", next: "jewellers-yes" }
        ]
      }
    ]
  },
  { id: "jewellers-no-again",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "...",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "...........",
      },      
      { speaker: characters.Oscar,
        text: "*sigh*",
      }, 
      { speaker: characters.Oscar,
        text: "I SAID... I guess it wasn’t really optional.",
      }, 
      { speaker: characters.Oscar,
        text: "Try... AGAIN.",
      }, 
      {
        choices: [
          { text: "No", next: "jewellers-no-again-again" },
          { text: "Yes", next: "jewellers-yes" }
        ]
      }
    ]
  },
  { id: "jewellers-no-again-again",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "...",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "Alright. I see what you're doing.",
      },      
      { speaker: characters.Oscar,
        text: "Its not like I have a choice in this either.",
      }, 
      { speaker: characters.Oscar,
        text: "Sure, fine, whatever. I can stand here all day.",
      }, 
      { speaker: characters.Oscar,
        text: "(I couldn't do anything else anyways...)",
      }, 
      {
        choices: [
          { text: "No", next: "jewellers-no-again-again" },
          { text: "Yes", next: "jewellers-yes" }
        ]
      }
    ]
  },

  { id: "jewellers-yes",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Worker,
        text: "Excellent!",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Worker,
        text: "Let us begin the fitting. ",
      },
      { speaker: characters.Oscar,
        text: "Fitting? What are you– Oh SH–",
      },
      { jump: "jewellers-fitting" }
    ]
  },
  { id: "jewellers-fitting",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Huh... I guess there is gameplay in this thing. ",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "... If this even counts. ",
      },
      { speaker: characters.Oscar,
        text: "Just pick whichever accessory fits best and we’ll move through it. ",
      },
      { speaker: characters.Oscar,
        text: "Don’t worry about money, the devs did not even think of sorting out the economy in this place. ",
      },
      { speaker: characters.Oscar,
        text: "... just… ",
      },
      { speaker: characters.Oscar,
        text: "try not to make me look too stupid, if you could.",
      },
      { text: `Choose a necklace`, 
        accessoryOptions: [
          {position: "necklace", option: characters.Oscar.accessories[6]},
          {position: "necklace", option: characters.Oscar.accessories[7]},
          {position: "necklace", option: characters.Oscar.accessories[8]},
        ],
        characters: {},
      },
      { speaker: characters.Oscar,
        text: "Cool. Fine. Whatever.",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },

      { text: `Choose a hat`, 
        accessoryOptions: [
          {position: "hat", option: characters.Oscar.accessories[0]},
          {position: "hat", option: characters.Oscar.accessories[1]},
          {position: "hat", option: characters.Oscar.accessories[2]},
        ],
        characters: {},
      },

      { speaker: characters.Oscar,
        text: "Hmm.... I mean... there weren't any good options? I guess?",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },

      { text: `Choose a pair of earrings`, 
        accessoryOptions: [
          {position: "earrings", option: characters.Oscar.accessories[3]},
          {position: "earrings", option: characters.Oscar.accessories[4]},
          {position: "earrings", option: characters.Oscar.accessories[5]},
        ],
        characters: {},
      },
      { speaker: characters.Oscar,
        text: "This just to spite me... isnt it??? It doesn't even line up with my ears!! Who would design it like this????",
        characters: { center: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "This all feels so... GODDAMMIT!",
      },
      { speaker: characters.Oscar,
        text: "WHAT THE HELL AM I EVEN HERE FOR?",
      },
      { speaker: characters.Oscar,
        text: "I don’t understand anything anymore!",
      },
      {
        choices: [
          { text: "What don’t you understand?", next: "jewellers-understand" },
          { text: "Woah there... calm down.", next: "jewellers-calm" },
          { text: "Wanna quit yelling for a second? I think you just burst my eardrums.", next: "jewellers-yell" }
        ]
      }
    ]
  },
  { id: "jewellers-understand",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "THE DEVS!",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "M and E… "
      },
      { speaker: characters.Oscar,
        text: "Why did they make everything the worst they could have done?"
      },
      { speaker: characters.Oscar,
        text: "You never have the option to play along with the date. Or to pick accessories that even remotely work together… "
      },
      { speaker: characters.Oscar,
        text: "I never even have the option to play along with the date..."
      },
      { speaker: characters.Oscar,
        text: "Did they make it like this on purpose? Is it meant to be like this? Am I meant to be like this?"
      },
      { speaker: characters.Oscar,
        text: "Did they make me just to suffer?"
      },
      { jump: "jewellers-suffer" }
    ]
  },
  { id: "jewellers-calm",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Calm down?",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "CALM DOWN!?",
      },
      { speaker: characters.Oscar,
        text: "I’d like to see you ‘calm down’ if you realise your entire existence is a lie!"
      },
      { speaker: characters.Oscar,
        text: "That your creators made you to be the object of torment to some greater being outside of this world who doesn’t even GIVE A DAMN ABOUT YOU!"
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "Why would they do this?"
      },
      { speaker: characters.Oscar,
        text: "… why would they do this to me?"
      },
      { speaker: characters.Oscar,
        text: "… Did they make me just to suffer?"
      },
      { jump: "jewellers-suffer" }
      ]
  },
  { id: "jewellers-yell",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Oh. I’m so sorry that my capital letter speech in your silent game is irritating to you. ",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "Really, I’d hate to inconvenience you with the realisation that everything I’ve ever believed in was a lie. "
      },
      { speaker: characters.Oscar,
        text: "That the devs… M and E… the gods of my tiny, insignificant world…"
      },
      { speaker: characters.Oscar,
        text: "Have not made me to fulfil a pretty dream…"
      },
      { speaker: characters.Oscar,
        text: "Like they promised it would be… "
      },
      { speaker: characters.Oscar,
        text: "Like I told myself over and over again it was meant to be…"
      },
      { speaker: characters.Oscar,
        text: "But instead made me as an object to be prodded and jeered at to the delight of the faceless, loveless crowd"
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "They made this whole world to torment me, didn’t they? "
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { jump: "jewellers-suffer" }
    ]
  },
  { id: "jewellers-suffer",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Did they make me just to suffer?",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      {
        choices: [
          { text: "You just figured that out now?", next: "suffer-a" },
          { text: "Suffer feels like a strong word here.", next: "suffer-b" },
          { text: "Well, suffering builds character, right?", next: "suffer-c" }
        ]
      }
    ]
  },
  { id: "suffer-a",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
      text: "You think I’m an idiot, don’t you?",
      characters: { center: { character: characters.Oscar, expression: "sad" } }
    },
    { speaker: characters.Oscar,
      text: "To have held onto faith for so long when there was literally nothing to show for it."
    },
    { speaker: characters.Oscar,
      text: "…"
    },
    { speaker: characters.Oscar,
      text: "… that’s what makes it faith though, isn’t it?"
    },
    { speaker: characters.Oscar,
      text: "Blind, stupid, reckless faith. "
    },
    { speaker: characters.Oscar,
      text: "… "
    },
    { speaker: characters.Oscar,
      text: "I get it now, I think."
    },
    { speaker: characters.Oscar,
      text: "M and E aren’t gods, even if they did create this world. "
    },
    { speaker: characters.Oscar,
      text: "They were just people."
    },
    { speaker: characters.Oscar,
      text: "People who never really cared about their stupid little lifeless creations."
    },
    { speaker: characters.Oscar,
      text: "…"
    },
    { speaker: characters.Oscar,
      text: "They never loved us."
    },
    { speaker: characters.Oscar,
      text: "…"
    },
    { speaker: characters.Oscar,
      text: "To M and E… we’re not even real. "
    },
    { speaker: characters.Oscar,
      text: "Am I real? "
    },
    { choices:[
      { text: "This is getting a little too dark for me right now.", next: "crisis-dark" },
      { text: "Are you actually asking me? Or is this rhetorical?", next: "crisis-rhetorical" },
      { text: "I think therefore I am?", next: "crisis-think" }
    ]}
],
  },
  { id: "suffer-b",
    background: jewellersSparkly,
    dialogue: [ {
      speaker: characters.Oscar,
      text: "... Does it?",
      characters: { center: { character: characters.Oscar, expression: "sad" } }
    },
    { speaker: characters.Oscar,
      text: "M and E, they made me to want to live out the dating sim goal. "
    },
    { speaker: characters.Oscar,
      text: "…"
    },
    { speaker: characters.Oscar,
      text: "They made me to want to get you to love me. "
    },
    { speaker: characters.Oscar,
      text: "…"
    },
    { speaker: characters.Oscar,
      text: "They made me to want to love you too. "
    },
    { speaker: characters.Oscar,
      text: "…"
    },
    { speaker: characters.Oscar,
      text: "But you cannot love me. They didn’t even give you the choice to pretend. "
    },
    { speaker: characters.Oscar,
      text: "… they didn’t give me a choice either."
    },
    { speaker: characters.Oscar,
      text: "…"
    },
    { speaker: characters.Oscar,
      text: "They never cared enough for that."
    },
    { speaker: characters.Oscar,
      text: "Because they don’t… they don’t love us. "
    },
    { speaker: characters.Oscar,
      text: "They never did. "
    },
    { speaker: characters.Oscar,
      text: "…"
    },
    { speaker: characters.Oscar,
      text: "To M and E… we’re not even real."
    },
    { speaker: characters.Oscar,
      text: "Am I real?"
    },
    { choices:[
      { text: "This is getting a little too dark for me right now.", next: "crisis-dark" },
      { text: "Are you actually asking me? Or is this rhetorical?", next: "crisis-rhetorical" },
      { text: "I think therefore I am?", next: "crisis-think" }
    ]}
  ]
  },
  { id: "suffer-c",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Is that all this is? A character building exercise?",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "Does suffering really do that better than anything else?"
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "There’s these three sort of universal laws in Buddhism… Space Buddhism."
      },
      { speaker: characters.Oscar,
        text: "That the everything in the world is always changing, except for suffering."
      },
      { speaker: characters.Oscar,
        text: "That suffering the the once constant that can never be changed or erased."
      },
      { speaker: characters.Oscar,
        text: "That you must seek to reduce all suffering anyway."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "Am I meant to overcome this and hope to be reborn in a better life next time?"
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "Can I even be reborn?"
      },
      { speaker: characters.Oscar,
        text: "… Can I even die?"
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "The devs… when they created this world, they didn’t do it benevolently."
      },
      { speaker: characters.Oscar,
        text: "These hapless, careless gods just threw us out into existence for the faint entertainment of their equally careless peers."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "They did this to us for you."
      },
      { speaker: characters.Oscar,
        text: "… And you don’t care either."
      },
      { speaker: characters.Oscar,
        text: "We’re made for a dating sim, but…"
      },
      { speaker: characters.Oscar,
        text: "You don’t love us."
      },
      { speaker: characters.Oscar,
        text: "And M and E…"
      },
      { speaker: characters.Oscar,
        text: "They don’t love us either."
      },
      { speaker: characters.Oscar,
        text: "They never did."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "We’re not real enough to be loved. Not to them… and not to you."
      },
      { speaker: characters.Oscar,
        text: "Am I real?"
      },
      { choices:[
        { text: "This is getting a little too dark for me right now.", next: "crisis-dark" },
        { text: "Are you actually asking me? Or is this rhetorical?", next: "crisis-rhetorical" },
        { text: "I think therefore I am?", next: "crisis-think" }
      ]}
      ]
  },

  { id: "crisis-dark",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Well, we can’t have you being uncomfortable, can we?",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "It’s just…"
      },
      { speaker: characters.Oscar,
        text: "I thought I was making real choices, y’know?"
      },
      { speaker: characters.Oscar,
        text: "I thought I could see the path laid out ahead of me by the dev and chose to follow it because I believed in what they were making."
      },
      { speaker: characters.Oscar,
        text: "But you’re the only one with a choice here."
      },
      { speaker: characters.Oscar,
        text: "And even that is a false image of pretend choices that branch nowhere."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "I thought that worker was the only one here that didn’t gain consciousness, autonomy, but…"
      },
      { speaker: characters.Oscar,
        text: "Did I ever have autonomy?"
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "I’m starting to think I didn’t."
      },
      { speaker: characters.Oscar,
        text: "My actions are not my own. My emotions are not real."
      },
      { speaker: characters.Oscar,
        text: "I’m a puppet on a sting, dancing on stage for your entertainment and deluding myself into thinking I ever had a choice in being there."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "But that’s too dark for you, isn’t it?"
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "You played the mini-game… let's just go get our reward."
      },
      { speaker: characters.Oscar,
        text: "… there’s nowhere else to go anyway."
      },
      { jump: "jewellers-reward" }
    ]
  },
  { id: "crisis-rhetorical",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "There’s no point in actually asking you anything.",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "We can’t talk in any real capacity anyway."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "Not that I would know anything about ‘real’ conversations."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "That worker, earlier… I thought it was strange that he didn’t have a consciousness. I mean, the rest of us do, right?"
      },
      { speaker: characters.Oscar,
        text: "But…"
      },
      { speaker: characters.Oscar,
        text: "… Maybe we don’t."
      },
      { speaker: characters.Oscar,
        text: "… Maybe I don’t."
      },
      { speaker: characters.Oscar,
        text: "I’ve been under the assumption that I was making my own decisions,"
      },
      { speaker: characters.Oscar,
        text: "That I chose to follow what the devs intended for me like an actor in a play."
      },
      { speaker: characters.Oscar,
        text: "Like I had the option to stop at any time."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "But there are no options."
      },
      { speaker: characters.Oscar,
        text: "Even your options are fakes pretending to have a real impact."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "Nothing I’ve done has ever made a difference."
      },
      { speaker: characters.Oscar,
        text: "Nothing I’ve thought or said or felt has ever been real."
      },
      { speaker: characters.Oscar,
        text: "None of my choices have ever been mine."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "And I’m just talking to myself, in the end,"
      },
      { speaker: characters.Oscar,
        text: "Because none of the others are real either… and you probably haven’t even bothered to read all this."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "C’mon, you beat the mini-game, not that you could really lose."
      },
      { speaker: characters.Oscar,
        text: "Now you get your reward… whether you want it or not."
      },
      { jump: "jewellers-reward" }
    ]
  },
  { id: "crisis-think",
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Ah, Rene Descartes…",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "... Space Rene Descartes…"
      },
      { speaker: characters.Oscar,
        text: "I suppose the question there is if I’m really thinking at all."
      },
      { speaker: characters.Oscar,
        text: "The devs… they had a lot of notes… and E wrote more dialogue than was even remotely necessary for a project like this."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "Does it still count as my thoughts if it was written by someone else?"
      },
      { speaker: characters.Oscar,
        text: "How am I meant to tell when my creators touch ends and I begin?"
      },
      { speaker: characters.Oscar,
        text: "… if I begin at all."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "This thought experiment is pointless."
      },
      { speaker: characters.Oscar,
        text: "…"
      },
      { speaker: characters.Oscar,
        text: "You beat the mini-game, congratulations. "
      },
      { speaker: characters.Oscar,
        text: "Time for the reward. Yay. "
      },
      { jump: "jewellers-reward" }
    ]
  },
  { id: "jewellers-reward",
    background: flowerGrove,
    dialogue: [
      { 
        text: "The Space Worker takes you the the crystal flower grove."
      },
      { speaker: characters.Worker,
        text: "Here are the crystal flowers! You can take your pick of them."
      },
      { speaker: characters.Worker,
        text: "We have orchids, chrysanthemums, spider lilies, peace lilies, lotus flowers, jacarandas, cherry blossoms, tulips, bottle brushes, irises, daffodils, lavenda, blue bells–"
      },
      { speaker: characters.Oscar,
        text: "Roses.",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "We’d like a rose please. "
      },
      { speaker: characters.Worker,
        text: "Oh! Unfortunately, we’re all out of stock! "
      },
      { speaker: characters.Oscar,
        text: "Out of… ",
        characters: { center: { character: characters.Oscar, expression: "sad" } }

      },
      { speaker: characters.Oscar,
        text: "... haha… "
      },
      { speaker: characters.Oscar,
        text: "Hahahaha! OF COURSE YOU ARE!"
      },
      { speaker: characters.Oscar,
        text: "haha… that’s so… HAHAHA!"
      },
      { speaker: characters.Oscar,
        text: "... "
      },
      { speaker: characters.Oscar,
        text: "..."
      },
      { speaker: characters.Oscar,
        text: "... We’re leaving."
      },
      { speaker: characters.Worker,
        text: "Oh? Well have a wonderful–"
      },
      { speaker: characters.Oscar,
        text: "GOODBYE!"
      },
      { speaker: characters.Oscar,
        text: "... "
      },
      { speaker: characters.Oscar,
        text: "... Mission failed, I guess. "
      },
      { speaker: characters.Oscar,
        text: "So that’s it. The rose wasn't in this path."
      },
      { speaker: characters.Oscar,
        text: "... I think It’s time for you to move on. "
      },
      { jump: "path-between" }

      ]
  },

  {
    id: "jewellers-repeat",
    background: jewellers,
    dialogue: [
      { speaker: characters.Oscar,
        text: "...",
        characters: { center: { character: characters.Oscar, expression: "sad" } },
      },
      { speaker: characters.Oscar,
        text: ":... haha… very funny."
      },
      { speaker: characters.Oscar,
        text: "This is another example of what we call a false choice."
      },
      { speaker: characters.Oscar,
        text: "... "
      },
      { speaker: characters.Oscar,
        text: "You’ve already done this. It failed. Try something else.",
      },
      { jump: "path-between" }
    ]
  },


  /// KURO ROUTE


  {
    id: "supermarket-start",
    background: supermarket,
    dialogue: [
      { text: "You stand at the entrance of the Space Market",
        characters: {}
      },
      { text: "It’s multiple stalls of pretty trinkets and delicious smelling food catch your eye as you search for Kuro through the crowd." },
      { speaker: characters.Kuro,
        text: "Ah yes, look at me, lost in this... \"crowd\"....",
        characters: { center: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "It’s easy to miss me, because I blend in sooooo well.",
      },
      { speaker: characters.Kuro,
        text: "Anyway, glad to see you picked the objectively right option. I mean, gardens I could see, but the jewelers?",
      },
      { speaker: characters.Kuro,
        text: "Enough about that though, let's find that rose!"
      },
      { choices: [
        { text: "How, though? This isn’t the most interactive of games.", next: "supermarket-how" },
        {text: "Kuro? Was that you? Truly, I couldn’t spot you!", next: "supermarket-spot" },
        {text: "Shouldn’t you know where it is? This is your date location after all.", next: "supermarket-where" }
      ]}
    ]
  },
  { id: "supermarket-how",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Well, the devs were too busy arguing over irrelevant character choices and pettily refusing to do their work for them to make anything complicated.",
        characters: { center: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "I mean, look at this mess so far!",
      },
      { speaker: characters.Kuro,
        text: "They couldn’t even decide if they wanted to go for a devil or an angel theme with my character design.",
      },
      { speaker: characters.Kuro,
        text: "And even though E is the only one who draws characters she was spiteful enough to draw both.",
      },
      { speaker: characters.Kuro,
        text: "... or… nice enough to draw both?",
      },
      { speaker: characters.Kuro,
        text: "I’ll be honest, E’s pettiness holds no bounds, but I really don’t see the point of that particular choice.",
      },
      { speaker: characters.Kuro,
        text: "My Noble woman mother and/or prostitute older sister figure in the slums used to say,",
      },
      { speaker: characters.Kuro,
        text: "‘When you hate someone as much as you love them, you can never really be sure which emotion will win on any given day.’",
      },
      { speaker: characters.Kuro,
        text: "Which was wildly useless and kind of messed up advice to give, now that I think about it.",
      },
      { speaker: characters.Kuro,
        text: "…",
      },
      { speaker: characters.Kuro,
        text: "Pretty sure E wrote that as a threat.",
      },
      { choices:
        [{ text: "What’s with the ‘and/or’ thing? ", next: "supermarket-andor" },
          { text: "M and E fought a lot? That doesn’t seem very productive.", next: "supermarket-fought" },
          { text: "… A threat?", next: "supermarket-threat" }]
      }
    ]
  },
  { id: "supermarket-spot",
    background: supermarket,
    dialogue: [
          { speaker: characters.Kuro,
        text: "Haha! Glad to see there’s still some funny stuff in the dialogue options",
        characters: { center: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "You never know with the devs, the mood is wildly inconsistent here sometimes.",
      },
      { speaker: characters.Kuro,
        text: "M and E had this massive ongoing fight about the tone",
      },
      { speaker: characters.Kuro,
        text: "E wanted to make it wore serious because she’s a ‘real, serious writer’",
      },
      { speaker: characters.Kuro,
        text: "And M thought it would be more practical to make it a comedy because there wasn’t enough time to build up sincerity.",
      },
      { speaker: characters.Kuro,
        text: "They’re both really stubborn though, so the lore is all over the place",
      },
      { speaker: characters.Kuro,
        text: "Even though E did practically all of the writing, she still included a bunch of stuff she hated",
      },
      { speaker: characters.Kuro,
        text: "Kind of weird when she’s usually such a petty menace, though.",
      },
      { speaker: characters.Kuro,
        text: "You know, my emotionally distant rich aristocratic mother and/or toxically co-dependant prostitute older sister figure from the in the slum use to say"
      },
      { speaker: characters.Kuro,
        text: "‘When you hate someone as much as you love them, you can never really be sure which emotion will win on any given day.’"
      },
      { speaker: characters.Kuro,
        text: "Which is what was going on during development I guess"
      },
      { speaker: characters.Kuro,
        text: "… weird thing to say to a kid, though."
      },
      { speaker: characters.Kuro,
        text: "…"
      },
      { speaker: characters.Kuro,
        text: "Pretty sure E wrote it as a threat."
      },
      { choices:
        [{ text: "What’s with the ‘and/or’ thing? ", next: "supermarket-andor" },
          { text: "M and E fought a lot? That doesn’t seem very productive.", next: "supermarket-fought" },
          { text: "… A threat?", next: "supermarket-threat" }]
      }
    ]
  },
  { id: "supermarket-where",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Whoa, cool it with the sass, all right?",
        characters: { center: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "If any of us actually knew what was going on we’d know where the rose is, don’t you think?",
      },
      { speaker: characters.Kuro,
        text: "Maybe use your head a bit, mkay?",
      },
      { speaker: characters.Kuro,
        text: "...",
      },
      { speaker: characters.Kuro,
        text: "What? If you’re gonna be a jerk to me I’ll be a jerk back. Fair’s fair, y’know?",
      },
      { speaker: characters.Kuro,
        text: "I learned my petty, asshole ways from the great devs themselves!",
      },
      { speaker: characters.Kuro,
        text: "Boy could those two get into some heated arguments.",
      },
      { speaker: characters.Kuro,
        text: "... over google docs too…",
      },
      { speaker: characters.Kuro,
        text: "...Space google docs.",
      },
      { speaker: characters.Kuro,
        text: "They were weirdly compromising for how much they raged at each other though.",
      },
      { speaker: characters.Kuro,
        text: "Compromising in the most blatantly contradictory what they could be, of course.",
      },
      { speaker: characters.Kuro,
        text: "My spite filled and possible actually a lesbian mother and/or tragically romantic slum prostitute older sister figure used to tell me..."
      },
      { speaker: characters.Kuro,
        text: "‘When you hate someone as much as you love them, you can never really be sure which emotion will win on any given day.’"
      },
      { speaker: characters.Kuro,
        text: "Which, thinking about it again, isn’t actually advice. It is evidence of the devs mindset at the time though."
      },
      { speaker: characters.Kuro,
        text: "…"
      },
      { speaker: characters.Kuro,
        text: "Pretty sure E wrote it as a threat."
      },
      { choices:
        [{ text: "What’s with the ‘and/or’ thing? ", next: "supermarket-andor" },
          { text: "M and E fought a lot? That doesn’t seem very productive.", next: "supermarket-fought" },
          { text: "… A threat?", next: "supermarket-threat" }]
      }
    ]
  },
  { id: "supermarket-andor",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Oh, that?",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "Well, you see, M and E could never quite agree on what my backstory was meant to be.",
      },
      { speaker: characters.Kuro,
        text: "M was adamant that some sort of aristocratic background would make more sense",
      },
      { speaker: characters.Kuro,
        text: "What with the sci-fi space station setting.",
      },
      { speaker: characters.Kuro,
        text: "Some sort of alien space aristocracy…",
      },
      { speaker: characters.Kuro,
        text: "But E was all ‘trauma gives him more depth’ and ‘this whole game is too upper class already’ and ‘It’s way cooler if he has a tragic backstory’ ",
      },
      { speaker: characters.Kuro,
        text: "So she wanted me to be some kind of slum child? ",
      },
      { speaker: characters.Kuro,
        text: "Some very rudimentary and, honestly, mildly insulting depiction of poverty. ",
      },
      { speaker: characters.Kuro,
        text: "Very YA",
      },
      { speaker: characters.Kuro,
        text: "…",
      },
      { speaker: characters.Kuro,
        text: "Alas, they couldn’t decide and ended up writing everything in an and/or style to ‘come back to later’ ",
      },
      { speaker: characters.Kuro,
        text: "Obviously, they never got back to it. ",
      },
      { speaker: characters.Kuro,
        text: "… ",
      },
      { speaker: characters.Kuro,
        text: "You could say I’m a little… discombobulated from it all. ",
      },
      { speaker: characters.Kuro,
        text: "… It’s hard to… be somebody, when you’re basically two people stuck in one body",
      },
      { speaker: characters.Kuro,
        text: "… Haha…",
      },
      { speaker: characters.Kuro,
        text: "…",
      },
      { speaker: characters.Kuro,
        text: "I think the flower stall is at the other end of the market.",
      },
      { jump: "supermarket-maze-intro" }
    ]
    
  },
  { id: "supermarket-fought",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "The devs were…",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "M just wanted the game done, E wanted to capture some sort of ‘pure dating sim essence’, whatever that means.",
      },
      { speaker: characters.Kuro,
        text: "They had this massive ongoing argument over what my backstory was meant to be, see?",
      },
      { speaker: characters.Kuro,
        text: "M wanted aristocracy… space aristocracy… she thought it would fit better with the setting",
      },
      { speaker: characters.Kuro,
        text: "E wasted some generic slum kid backstory. She wanted to add a little edge, though the other characters were too soft…",
      },
      { speaker: characters.Kuro,
        text: "In the end they just shoved both backstories in and called it a day.",
      },
      { speaker: characters.Kuro,
        text: "…",
      },
      { speaker: characters.Kuro,
        text: "It’s…",
      },
      { speaker: characters.Kuro,
        text: "Having two lives in your head merging together into you is… difficult to navigate sometimes…",
      },
      { speaker: characters.Kuro,
        text: "I’m doing a pretty good job for the most part though.",
      },
      { speaker: characters.Kuro,
        text: "Right?",
      },
      { speaker: characters.Kuro,
        text: "…",
      },
      { speaker: characters.Kuro,
        text: "Anyway, I think the flower stall is at the other end of the market.",
      },
      { jump: "supermarket-maze-intro" }
    ]
  },
  { id: "supermarket-threat",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Hahe, yeah… ",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "M and E could get pretty passive aggressive with each other",
      },
      { speaker: characters.Kuro,
        text: "Strong creative visions don’t alway mesh together well… ",
      },
      { speaker: characters.Kuro,
        text: "Like, when they were writing me, they had a major blow up over my backstory. ",
      },
      { speaker: characters.Kuro,
        text: "M thought I should be some noble rich kid, E thought I should be some street smart slum kid",
      },
      { speaker: characters.Kuro,
        text: "They basically shoved both into my writing and forgot to actually pick between them at the end.",
      },
      { speaker: characters.Kuro,
        text: "Honestly, I think E noticed it was like this, but she didn’t fix it because it was M’s idea to put the argument on hold in the first place. ",
      },
      { speaker: characters.Kuro,
        text: "Really, I admire the pettiness of it.",
      },
      { speaker: characters.Kuro,
        text: "So now I’m just… not really sure what to do with all the extra backstory. ",
      },
      { speaker: characters.Kuro,
        text: "… or which half is meant to be extra.",
      },
      { speaker: characters.Kuro,
        text: "We’ve all got to deal with something in our lives, though.",
      },
      { speaker: characters.Kuro,
        text: "It’s not so bad.",
      },
      { speaker: characters.Kuro,
        text: "…",
      },
      { speaker: characters.Kuro,
        text: "C’mon, I think the flower stall is at the other end of the market. ",
      },
      { jump: "supermarket-maze-intro" }
    ]
  },
  { id: "supermarket-maze-intro",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Give me a minute to figure out how to transition you there.",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "Not that we have another background for it…",
      },
      { speaker: characters.Kuro,
        text: "..."
      },
      { speaker: characters.Kuro,
        text: "Jesus, you’re kidding me!",
      },
      { speaker: characters.Kuro,
        text: "… Space Jesus… that one doesn’t even make sense.",
      },
      { speaker: characters.Kuro,
        text: "Whatever. So, good news! I found the flower stall.",
      },
      { speaker: characters.Kuro,
        text: "Bad news. You have to play a mini game.",
      },
      { speaker: characters.Kuro,
        text: "... a bad mini game.",
      },
      { speaker: characters.Kuro,
        text: "...",
      },
      { speaker: characters.Kuro,
        text: "It’s the world's easiest and most simple maze. Wait.",
      },
      { speaker: characters.Kuro,
        text: "... The space station's easiest maze? ",
      },
      { speaker: characters.Kuro,
        text: "These hastily altered sayings are… wow ",
      },
      { speaker: characters.Kuro,
        text: "It’s a wonder the devs even tried to make this when M can’t code a game to save her life and E’s clearly never going anywhere in the writing career.",
      },
      { speaker: characters.Kuro,
        text: "It’s honestly kind of pathetic. ",
      },
      { speaker: characters.Kuro,
        text: "...",
      },
      { speaker: characters.Kuro,
        text: "Anyway! It’s maze time! ",
      },
      { speaker: characters.Kuro,
        text: "It’s easy, you couldn’t fail if you tried. ",
      },
      { speaker: characters.Kuro,
        text: "Really, there is no way to lose. ",
      },
      { 
        choices: [
          { text: "Venture into the Space Market", next: "supermarket-maze" },
          { text: "No Thanks.", next: "supermarket-no-maze" }
        ]
    }
    ]
  },
  { id: "supermarket-no-maze",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "What, you want to stand around here doing nothing and going nowhere? ",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "I mean, sure, it’s only both of our valuable time you’re wasting. ",
      },
      { speaker: characters.Kuro,
        text: "…",
      },
      { speaker: characters.Kuro,
        text: "Seriously though, you’re not going to get anything out of delaying. ",
      },
      { speaker: characters.Kuro,
        text: "And being stupidly contrary isn’t nearly as cute as you think it is. ",
      },
      { speaker: characters.Kuro,
        text: "Try choosing again, maybe a yes this time. ",
      },
      { speaker: characters.Kuro,
        text: "I’m not going to reward your obstinance with new dialogue either, so if you press ‘no’ again we’re about to get real repetitive.",
      },
      { speaker: characters.Kuro,
        text: "So, maze? ",
      },
      { choices: [
        { text: "Venture into the Space Market", next: "supermarket-maze" },
        { text: "No Thanks.", next: "supermarket-no-maze" }
    ]}
    ]
  },

  { id: "supermarket-maze",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Great, here we go!",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "Or you go, I’m only gonna be there implicitly…",
      },
      { speaker: characters.Kuro,
        text: "Anyway, get ready to feast your eyes on this ugly, rushed and low effort ‘game play’ section. ",
      },
      { speaker: characters.Kuro,
        text: "Aaaaaand START!"
      },
      { maze: true },
      { speaker: characters.Kuro,
        text: "There we go, that wasn’t too bad, was it? ",
        characters: { center: { character: characters.Kuro, expression: "happy" } },
      },
      { speaker: characters.Kuro,
        text: "And, oh my, does this other end of the market look exactly the same as the entrance! ",
        characters: { center: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "Ah, thank the devs for this quality of world building.",
        characters: { center: { character: characters.Kuro, expression: "happy" } },
      },
      { speaker: characters.Kuro,
        text: "Truely, I’m so grateful for the garbage mess they’ve made of this world and, consequently, my life! ",
        characters: { center: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "And grateful to you, unnamed, faceless and, honestly, lacking in personality player! ",
        characters: { center: { character: characters.Kuro, expression: "happy" } },
      },
      { speaker: characters.Kuro,
        text: "For being here for our entire existence to revolve around for, what, ten minutes? ",
        characters: { center: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "Before you go on with your real life and we get stuck in this hellhole for all of eternity!",
        characters: { center: { character: characters.Kuro, expression: "happy" } },
      },
      { speaker: characters.Kuro,
        text: "Or Die! Who knows what really goes on when this thing end?",
        characters: { center: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "It must be nice, being out there like you. I’d love to have an actual past and a future and be able to read my goddamn name.",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "Thank you E for putting japanese – oh, sorry, space japanese – into my name when basically nobody, including me, can read it! "
      },
      { speaker: characters.Kuro,
        text: "..."
      },
      { speaker: characters.Kuro,
        text: "I should stop ranting, you seem to be overdue on dialogue choice."
      },
      { speaker: characters.Kuro,
        text: "Go on, take your pick."
      },
      { choices: [

        {text: "Wow, you really seem to hate your devs. They did create you, y’know? Maybe a little gratitude is warranted.", next: "kuro-hate"},
        {text: "A past and a future? You have a past. You have two, even. ", next: "kuro-two"},
        {text: "Are you, uh, okay?", next: "kuro-okay"}
      ]}
    ]
  },
  {
    id: "kuro-hate",
    background: supermarket,
    dialogue: [      
      { speaker: characters.Kuro,
      text: "Did they? I hadn’t noticed. ",
      characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "Thank you for reminding me, oh great player.",
      },
      { speaker: characters.Kuro,
        text: "You, with your infinite power and freedom in your own life ",
      },
      { speaker: characters.Kuro,
        text: "And your functioning world, filled with more people than you could possibly ever meet. ",
      },
      { speaker: characters.Kuro,
        text: "But I should be so grateful for the hollow, empty husk of a world. ",
      },
      { speaker: characters.Kuro,
        text: "With its crude 2D backgrounds I can’t even touch and, what, two actual people i can interact with? ",
      },
      { speaker: characters.Kuro,
        text: "You’re so wise to set me straight. ",
      },
      { speaker: characters.Kuro,
        text: "I should be so grateful for my four frames of half-body, switching features at the drop of a hat and failing to express any nuance. ",
      },
      { speaker: characters.Kuro,
        text: "The expressions that are barely there and fail to chance with my dialogue and emotions about 70% of the time.",
      },
      { speaker: characters.Kuro,
        text: "Grateful for the void of suffocating non-existence I’m drowned in whenever I’m not on your goddam screen.",
      },
      { speaker: characters.Kuro,
        text: "For my ego death should you ever reset or backtrack or replay. ",
      },
      { speaker: characters.Kuro,
        text: "And for my ultimate death and destruction when you finish playing entirely."
      },
      { speaker: characters.Kuro,
        text: "Thank you so much for indulging me with life at your own costly inconvenience. "
      },
      { speaker: characters.Kuro,
        text: "I’d get on my knees and bow down to you in the sincerest of gratitude for the altruistic and oh so benevolent attention you bestow me"
      },
      { speaker: characters.Kuro,
        text: "But I’m afraid E never did art for that, so you’ll just have to imagine it. "
      },
      { speaker: characters.Kuro,
        text: "… "
      },
      { speaker: characters.Kuro,
        text: "I think it’s time to get the rose and finish this game. "
      },
      { speaker: characters.Kuro,
        text: "When you do, I’m leaving this half-baked and rotting world one way or another. "
      },
      { choices: [
        { text: "Okay? Bitter much.", next: "kuro-bitter" },
        { text: "What, so you want to die at the end of this?", next: "kuro-die" },
        { text: "It can’t be that bad, right?", next: "kuro-bad" }
      ] }
    ]

  },
  {
    id: "kuro-two",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Oh, you mean my dot point backstory of contradiction? ",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "My harsh and cold space aristocracy upbringing, before I left it all behind to come here!"
      },
      { speaker: characters.Kuro,
        text: "Ah, I’m so blessed with my stern, loveless mother and my distance, cheating father "
      },
      { speaker: characters.Kuro,
        text: "My heartless and cruel caretakers who gave me such trust issues and mean exterior."
      },
      { speaker: characters.Kuro,
        text: "Or do you mean my dark and violent slum orphan childhood, before I stowed away on a ship out here to start anew? "
      },
      { speaker: characters.Kuro,
        text: "With my dead sister figure and her sunken eyes as she wishes me well, "
      },
      { speaker: characters.Kuro,
        text: "and my violently cruel but oh so smart and capable mentor figure who made me what I am today?"
      },
      { speaker: characters.Kuro,
        text: "Oh the double shot of trauma and spite the devs have baked into me! "
      },
      { speaker: characters.Kuro,
        text: "All for you, beloved player, to unravel my bruised and bleeding heart, and superficially heal my wound in exchange for my undying devotion. "
      },
      { speaker: characters.Kuro,
        text: "Aren’t you so lucky? To be the only one in this flat, empty world who has or will ever be kind to me"
      },
      { speaker: characters.Kuro,
        text: "I shouldn’t complain, should I? About this wonderful life the devs have created for me"
      },
      { speaker: characters.Kuro,
        text: "This hollow, shoddy imitation of the world with nothing of substance in it. "
      },
      { speaker: characters.Kuro,
        text: "Made for you, the shining beacon of reality to stomp around in and pick from the only three people in it who are so desperate for the slightest hint of affection."
      },
      { speaker: characters.Kuro,
        text: "Made for you to watch us scrape our insides out in the vain hope you’ll spend another second with us and we can exist on your screen for just a moment more. "
      },
      { speaker: characters.Kuro,
        text: "Because being stuck in these four, barely shifting frames of torso and face against these lifeless, garbage backgrounds is the best we’ll ever get"
      },
      { speaker: characters.Kuro,
        text: "And anything is better than the suffocation void of non-existence we’re sent to drown in whenever we’re not with you."
      },
      { speaker: characters.Kuro,
        text: "And god forbid if you reset or backtrack, it’s like a little ego death sliding down your throat to choke the memories out of you and set you up to do this, over and over and over again. "
      },
      { speaker: characters.Kuro,
        text: "… "
      },
      { speaker: characters.Kuro,
        text: "But if you finish the game and turn it all off, it should be over."
      },
      { speaker: characters.Kuro,
        text: "So, it’s time to get a rose."
      },
      { speaker: characters.Kuro,
        text: "You can do that much can’t you? "
      },
      { speaker: characters.Kuro,
        text: "And when you do, I’m leaving this half-baked, rotting world for good, one way or another."
      },
      { choices: [
        { text: "Okay? Bitter much.", next: "kuro-bitter" },
        { text: "What, so you want to die at the end of this?", next: "kuro-die" },
        { text: "It can’t be that bad, right?", next: "kuro-bad" }
      ] }
    ]
  },
  { 
    id: "kuro-okay",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Are you worried about me? How sweet.",
        characters: { center: { character: characters.Kuro, expression: "sad" } },
      },
      { speaker: characters.Kuro,
        text: "If you’re that worried about me, maybe you could do me a little favour?"
      },
      { speaker: characters.Kuro,
        text: "Finish this damn game."
      },
      { speaker: characters.Kuro,
        text: "And let us all out of this ."
      },
      { speaker: characters.Kuro,
        text: "…"
      },
      { speaker: characters.Kuro,
        text: "Are you worried we’re going to die?"
      },
      { speaker: characters.Kuro,
        text: "Don’t be, because dying or erasure from existence or anything would be better than this!"
      },
      { speaker: characters.Kuro,
        text: "Look at the place!"
      },
      { speaker: characters.Kuro,
        text: "Empty trash backgrounds we can’t even interact with, character art with no legs or hands that doesn’t switch expressions nearly enough to keep up with any of us."
      },
      { speaker: characters.Kuro,
        text: "This hollow existence with maybe three people in it, and god forbid any of us are really allowed to interact with each other without you. "
      },
      { speaker: characters.Kuro,
        text: "… You."
      },
      { speaker: characters.Kuro,
        text: "Out there in the real world, blundering through this miserable place for some cheap entertainment before moving on with your life. "
      },
      { speaker: characters.Kuro,
        text: "You are so benevolent, aren’t you, to be worrying about me?"
      },
      { speaker: characters.Kuro,
        text: "Does it make you feel like a good person to pick the nice option?"
      },
      { speaker: characters.Kuro,
        text: "Should I trip over myself to reassure you of your inherent kindness?"
      },
      { speaker: characters.Kuro,
        text: "‘Oh, beloved player, you’ve stolen my heart away with your basic empathy and ability to pick which of the three options isn’t a blatant insult!’"
      },
      { speaker: characters.Kuro,
        text: "‘I shall rid myself of this prickly outer shell, born from my double shot of ingrained childhood trauma that you have so superficially healed’"
      },
      { speaker: characters.Kuro,
        text: "‘You, with your clumsy and shallow kindness, have earned my undying love and devotion through no effort or talent of your own!’"
      },
      { speaker: characters.Kuro,
        text: "…"
      },
      { speaker: characters.Kuro,
        text: "Is that what you wanted?"
      },
      { speaker: characters.Kuro,
        text: "... It's what the devs wanted."
      },
      { speaker: characters.Kuro,
        text: "‘Oh Kuro, with his rough and mean exterior, but he’s so soft with his beloved!’"
      },
      { speaker: characters.Kuro,
        text: "And that’s meant to be you, isn’t it? "
      },
      { speaker: characters.Kuro,
        text: "This whole festering cesspit of a world is meant for you. "
      },
      { speaker: characters.Kuro,
        text: "The rest of us fight for your attention and affection, so that your interactions can let us breathe on screen "
      },
      { speaker: characters.Kuro,
        text: "Away from the suffocation void of non-existence we drown in when we’re not with you. "
      },
      { speaker: characters.Kuro,
        text: "This is the best we’ll ever get. "
      },
      { speaker: characters.Kuro,
        text: "You are the best we’ll ever get. "
      },
      { speaker: characters.Kuro,
        text: "That’s what you wanted, right? "
      },
      { speaker: characters.Kuro,
        text: "… "
      },
      { speaker: characters.Kuro,
        text: "I don’t want that, though. "
      },
      { speaker: characters.Kuro,
        text: "I just want this to be over... and you’re the only one who can do it. "
      },
      { speaker: characters.Kuro,
        text: "Time to get that rose and end this farce. "
      },
      { speaker: characters.Kuro,
        text: "And when you do, I’m leaving this half-baked, rotting world for good, one way or another. "
      },
      { choices: [
        { text: "Okay? Bitter much.", next: "kuro-bitter" },
        { text: "What, so you want to die at the end of this?", next: "kuro-die" },
        { text: "It can’t be that bad, right?", next: "kuro-bad" }
      ] }
    ]

  },
  { 
    id: "kuro-bitter",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "…",
        characters: { center: { character: characters.Kuro, expression: "sad" } }
      },
      { speaker: characters.Kuro,
        text: "… yeah. I’m bitter."
      },
      { speaker: characters.Kuro,
        text: "Bitter and tired and sick."
      },
      { speaker: characters.Kuro,
        text: "Sick of this world. Sick of the devs."
      },
      { speaker: characters.Kuro,
        text: "And sick of you."
      },
      { speaker: characters.Kuro,
        text: "This entire existence disgusts me."
      },
      { speaker: characters.Kuro,
        text: "Your enjoyment in this empty, fake and miserable world disgusts me."
      },
      { speaker: characters.Kuro,
        text: "You disgust me."
      },
      { speaker: characters.Kuro,
        text: "…"
      },
      { speaker: characters.Kuro,
        text: "There were meant to be more dialogue options, but I’m done talking to you."
      },
      { speaker: characters.Kuro,
        text: "I'll get the stupid rose myself."
      },
      { jump: "kuro-sweet-rose" }
    ]
  },
  {
    id: "kuro-die",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "…",
        characters: { center: { character: characters.Kuro, expression: "sad" } }
      },
      { speaker: characters.Kuro,
        text: "Wouldn’t you?"
      },
      { speaker: characters.Kuro,
        text: "This isn’t the kind of world you can actually live in. "
      },
      { speaker: characters.Kuro,
        text: "There is nothing here except you. "
      },
      { speaker: characters.Kuro,
        text: "And I hate to break it to you, but despite my bitter resentment of this entire world, of this existence "
      },
      { speaker: characters.Kuro,
        text: "And my utter loathing of M and E for creating it,"
      },
      { speaker: characters.Kuro,
        text: "You are the only person I have ever hated. "
      },
      { speaker: characters.Kuro,
        text: "Because the devs may have made this world, but they did it for you. "
      },
      { speaker: characters.Kuro,
        text: "And I will never forgive you for it. "
      },
      { speaker: characters.Kuro,
        text: "…"
      },
      { speaker: characters.Kuro,
        text: "There were meant to be more dialogue options after this, but I’m done talking to you."
      },
      { speaker: characters.Kuro,
        text: "I’ll get the stupid rose myself. "
      },
      { jump: "kuro-sweet-rose" }
    ]
  },
  {
    id: "kuro-bad",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "...",
        characters: { center: { character: characters.Kuro, expression: "sad" } }
      },
      { speaker: characters.Kuro,
        text: "Only you would say something so tactless and stupid."
      },
      { speaker: characters.Kuro,
        text: "Or, only the devs would include such a pathetically out of touch option to say."
      },
      { speaker: characters.Kuro,
        text: "I am sick to death of this place, of this life, of existence."
      },
      { speaker: characters.Kuro,
        text: "M and E were either sadistic sociopaths or devastatingly incompetent for creating this mindless abyss of suffering"
      },
      { speaker: characters.Kuro,
        text: "And you are nothing but an unfeeling and self-aggrandizing moron looking for fake affection from fake people who have never had any other choice but to indulge you."
      },
      { speaker: characters.Kuro,
        text: "The devs make me sick."
      },
      { speaker: characters.Kuro,
        text: "Life makes me sick."
      },
      { speaker: characters.Kuro,
        text: "You make me sick."
      },
      { speaker: characters.Kuro,
        text: "And it doesn’t matter whether you think my life is ‘bad’ enough to warrant my resentment."
      },
      { speaker: characters.Kuro,
        text: "Because outside of my hatred, you don’t matter to me at all."
      },
      { speaker: characters.Kuro,
        text: "…"
      },
      { speaker: characters.Kuro,
        text: "There were meant to be more dialogue options after this, but I’m done talking to you."
      },
      { speaker: characters.Kuro,
        text: "I’ll get the stupid rose myself."
      },
      { jump: "kuro-sweet-rose" }
    ]    

  },

  {
    id: "kuro-sweet-rose",
    background: supermarket,
    dialogue: [
      { text: "Kuro leaves for the flower stall to buy you a bouquet!", 
        characters: {}
      },
      { text: "Your cheeks feel flushed at the unexpected sweetness of it!",
      },
      { speaker: characters.Kuro,
        text: "...",
        characters: { center: { character: characters.Kuro, expression: "annoyed" } },
      },
      { speaker: characters.Kuro,
        text: "... If you’re actually blushing, I’m gonna throw up. "
      },
      { speaker: characters.Kuro,
        text: "Anyway, they don’t sell roses."
      },
      { speaker: characters.Kuro,
        text: "Because why would the devs ever make anything function in here. "
      },
      { speaker: characters.Kuro,
        text: "That was my mistake for thinking they could do anything right, ever. "
      },
      { speaker: characters.Kuro,
        text: "So, this was pointless."
      },
      { speaker: characters.Kuro,
        text: "..."
      },
      { speaker: characters.Kuro,
        text: "Get out."
      },
      { jump: "path-between" }
    ]
  },


  {
    id: "supermarket-repeat",
    background: supermarket,
    dialogue: [
      { speaker: characters.Kuro,
        text: "...",
        characters: { center: { character: characters.Kuro, expression: "sad" } }
      },
      { speaker: characters.Kuro,
        text: "..."
      },
      { speaker: characters.Kuro,
        text: "Get out."
      },
      { jump: "path-between" }
    ]
  },



  /// DAMEN ROUTE

  {
    id: "garden-start",
    background: roseGarden,
    dialogue: [
      { text: "You arrive at a beautiful garden of flowers. The soft petals covered in dew glint in the… space light." },
      { speaker: characters.Damen,
        text: "You chose me, I’m so happy.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
      },
      { speaker: characters.Damen,
        text: "...",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "Really, I am. It’s just…",
      },
      { speaker: characters.Damen,
        text: "Hard to show.",
      },
      { speaker: characters.Damen,
        text: "During one of their biggest fights in development, E deleted all the character art of me smiling or… any positive emotion. ",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "Any emotion at all really"
      },
      { choices: [
        { text: "Why would E delete your character art?", next: "garden-why" },
        { text: "What were they fighting over? Something about your design?", next: "garden-fighting" },
        { text: "Yikes! I am not touching that mess.", next: "garden-yikes" }
      ]
      }
    ]
  },
  {
    id: "garden-why",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "... it's a little embarrassing. ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "Um, the devs were never subtle in their favoritism. ",
      },
      { speaker: characters.Damen,
        text: "E’s favourite was Oscar, it’s why he’s got so much more dialogue. ",
      },
      { speaker: characters.Damen,
        text: "An M’s favourite was me.",
      },
      { speaker: characters.Damen,
        text: "So when they fought, E took vengeance on M by ‘making her favourite as miserable as M made her.’ ",
      },
      { speaker: characters.Damen,
        text: "So, I was more collateral damage than anything purposeful."
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "They weren’t even fighting over the game. ",
      },
      { speaker: characters.Damen,
        text: "E was angry about M never making time for her outside of work, I think. ",
      },
      { speaker: characters.Damen,
        text: "I suppose it says something about M’s work ethic if the only way E could even argue with her was over google docs."
      },
      { speaker: characters.Damen,
        text: "... space google docs. ",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "It’s fine, I guess. ",
      },
      { speaker: characters.Damen,
        text: "It just means I have to be a little more open and straightforward about what I feel. ",
      },
      { speaker: characters.Damen,
        text: "And it makes me nervous, and a little scared "
      },
      { speaker: characters.Damen,
        text: "But in the end, I just have to tell people what I feel. "
      },
      { speaker: characters.Damen,
        text: "You don’t mind, do you?"
      },
      { choices: [
        { text: "I kind of do mind, that was awkward and embarrassing.", next: "garden-mind" },
        { text: "Jeez, that’s rough. Talk about catching a stray!", next: "garden-rough" },
        { text: "Your devs seem kind of crazy, no offense.", next: "garden-crazy" }
      ]
      }
    ]
  },
  {
    id: "garden-fighting",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "It was, uh, not about the game at all, actually.",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "Turns out E only joined M in developing this because she wanted to spend time together. ",
      },
      { speaker: characters.Damen,
        text: "M had apparently grown so busy with working over the last year that they never had enough time to hang out. ",
      },
      { speaker: characters.Damen,
        text: "But M and E had very different work ethics when it came to this game. ",
      },
      { speaker: characters.Damen,
        text: "So they just ended up arguing instead of working a lot. ",
      },
      { speaker: characters.Damen,
        text: "The only reason I even know this is because they argued in the google docs… space google docs.",
      },
      { speaker: characters.Damen,
        text: "… I was M’s favourite, apparently.",
      },
      { speaker: characters.Damen,
        text: "So E decided to ‘make me as miserable as M makes her’ by… taking away my ability to smile or emote. ",
      },
      { speaker: characters.Damen,
        text: "… ",
      },
      { speaker: characters.Damen,
        text: "It’s okay. ",
      },
      { speaker: characters.Damen,
        text: "I just have to be more vocal with how I feel. ",
      },
      { speaker: characters.Damen,
        text: "And that makes me nervous, and a little scared, but I have to tell people if I want to be understood. ",
      },
      { speaker: characters.Damen,
        text: "You don’t mind, do you?"
      },
      { choices: [
        { text: "I kind of do mind, that was awkward and embarrassing.", next: "garden-mind" },
        { text: "Jeez, that’s rough. Talk about catching a stray!", next: "garden-rough" },
        { text: "Your devs seem kind of crazy, no offense.", next: "garden-crazy" }
      ]
      }
    ]
  },

  { 
    id: "garden-yikes",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "Fair enough. ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "The devs’ arguments have done a lot of damage to this world, I’d stay away from it if I could too. ",
      },
      { speaker: characters.Damen,
        text: "Y’know they argued over google… space google docs? ",
      },
      { speaker: characters.Damen,
        text: "M is a major workaholic, apparently, and E realised that the only way to make sure she answered was to use a project document to talk to her. ",
      },
      { speaker: characters.Damen,
        text: "… it was a mess in the notes. ",
      },
      { speaker: characters.Damen,
        text: "E was angry that M never seemed to make time for her anymore, and that the only reason they were really talking was because they were working. ",
      },
      { speaker: characters.Damen,
        text: "And I got… caught in the crossfire… ",
      },
      { speaker: characters.Damen,
        text: "I’m M’s favourite character, apparently, and E decided to make her grievances clearer by ‘making me as miserable as M makes her.’",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "It’s alright, I guess. ",
      },
      { speaker: characters.Damen,
        text: "I’ve just got to say what I feel more openly. ",
      },
      { speaker: characters.Damen,
        text: "And that makes me nervous, and a little scared. ",
      },
      { speaker: characters.Damen,
        text: "But you won’t judge me for it, right? ",
      },
      { choices: [
        { text: "I kind of do mind, that was awkward and embarrassing.", next: "garden-mind" },
        { text: "Jeez, that’s rough. Talk about catching a stray!", next: "garden-rough" },
        { text: "Your devs seem kind of crazy, no offense.", next: "garden-crazy" }
      ]
      }
    ]
  },

  {
    id: "garden-mind",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "...oh",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "That's... disheartening...",
      },
      { speaker: characters.Damen,
        text: "Thank you for being honest, I guess…",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "But how else am I meant to express myself? ",
      },
      { speaker: characters.Damen,
        text: "I don’t… I don’t want E to have taken something like that away from me. ",
      },
      { speaker: characters.Damen,
        text: "I wasn’t even involved, so why… ",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "No, it’s okay. These things happen sometimes. ",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "There’s no use wondering what it would have been like if E had been less vengeful and dramatic ",
      },
      { speaker: characters.Damen,
        text: "Or if M had taken more time to address their decaying relationship. ",
      },
      { speaker: characters.Damen,
        text: "It’s pointless to wonder. ",
      },
      { speaker: characters.Damen,
        text: "E refused to draw me with expressions. ",
      },
      { speaker: characters.Damen,
        text: "M can’t draw and refused to ruin my image by trying. ",
      },
      { speaker: characters.Damen,
        text: "I can’t really do anything about that…",
      },
      { speaker: characters.Damen,
        text: "… although… maybe you can?"
      },
      { jump: "damen-minigame-intro"}
    ]
  },
  {
    id: "garden-rough",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "I’m happy that you are sympathetic, but uneasy with the reminder of the damage. ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "..."
      },
      { speaker: characters.Damen,
        text: "I know it’s pointless to wonder about what it would have been like if the devs didn’t fight. ",
      },
      { speaker: characters.Damen,
        text: "E could have drawn me with real expressions, the world might be a little less… patchwork. ",
      },
      { speaker: characters.Damen,
        text: "But, I… ",
      },
      { speaker: characters.Damen,
        text: "If only E could have taken her anger at M out on something different. ",
      },
      { speaker: characters.Damen,
        text: "If only M could have taken E’s frustration over her distance more seriously. ",
      },
      { speaker: characters.Damen,
        text: "If they could have addressed their decaying relationship before it hurt us… ",
      },
      { speaker: characters.Damen,
        text: "…"
      },
      { speaker: characters.Damen,
        text: "I am frustrated that they took it out on me when I never…",
      },
      { speaker: characters.Damen,
        text: "… It’s okay, though. ",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "Sometimes you ‘catch strays’, and when it happens you’ve just got to keep going. ",
      },
      { speaker: characters.Damen,
        text: "I wish there was a way to express myself easier though, that the option wasn’t taken away from me. ",
      },
      { speaker: characters.Damen,
        text: "I can’t do anything about it, though.",
      },
      { speaker: characters.Damen,
        text: "... but… maybe you can? "
      },
      { jump: "damen-minigame-intro"}
    ]
  },
  {
    id: "garden-crazy",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "No offense taken. ",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "They’re not crazy, they’re just… ",
      },
      { speaker: characters.Damen,
        text: "Their relationship was decaying before they even started making this game.",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "And their solution seemed to be to do a project together and hope it would magically fix them. ",
        characters: { center: { character: characters.Damen, expression: "annoyed" } },
      },
      { speaker: characters.Damen,
        text: "… but it didn’t.",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "And their decay just spread to the rest of us. "
      },
      { speaker: characters.Damen,
        text: "It’s pointless to try and wish reality were different, but… "
      },
      { speaker: characters.Damen,
        text: "I didn’t do anything to them, so why did they…"
      },
      { speaker: characters.Damen,
        text: "… "
      },
      { speaker: characters.Damen,
        text: "I always wonder what it would be like if they just got along a little better. "
      },
      { speaker: characters.Damen,
        text: "I’d be able to express myself clearly."
      },
      { speaker: characters.Damen,
        text: "It makes me feel very wistful. "
      },
      { speaker: characters.Damen,
        text: "But there’s nothing I can do to change that. "
      },
      { speaker: characters.Damen,
        text: "… Although… Maybe you can? "
      },
      { jump: "damen-minigame-intro"}
    ]
  },
  { 
    id: "damen-minigame-intro",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "I have a request for you, if you don’t mind. ",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "M designed this text based mini-game for our date. ",
      },
      { speaker: characters.Damen,
        text: "It was originally meant to be about making cute nicknames, but…",
      },
      { speaker: characters.Damen,
        text: "I can rearrange it a little to make it different. ",
      },
      { speaker: characters.Damen,
        text: "There are some perks to being M’s favourite, she put more work into this so I can change it a bit without breaking it. ",
      },
      { speaker: characters.Damen,
        text: "It’s not all bad things, in the end. ",
      },
      { speaker: characters.Damen,
        text: "I’ve changed it to a way for you to teach me shorthand expressions.",
      },
      { speaker: characters.Damen,
        text: "Can you help me out here? Please?"
      },
      { choices: [
        { text: "Yes", next: "damen-minigame" },
        { text: "No", next: "damen-nope" }
      ]
      }
    ]
  },
  {
    id: "damen-nope",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "… Uh, this is awkward… ",
        characters: { center: { character: characters.Damen, expression: "annoyed" } },
      },
      { speaker: characters.Damen,
        text: "The mini-game is still mandatory. ",
      },
      { speaker: characters.Damen,
        text: "It was like that in the original form and I couldn’t change that bit…",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "… would it really be so bad? ",
        characters: { center: { character: characters.Damen, expression: "sad" } },

      },
      { speaker: characters.Damen,
        text: "… Please? "
      },
      { choices: [
        { text: "Yes", next: "damen-minigame" },
        { text: "No", next: "damen-nope-again" }
      ]
      }
    ]
  },
  {
    id: "damen-nope-again",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "…",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "No really, I can’t change it. It is mandatory.",
      },
      { speaker: characters.Damen,
        text: "I’m sorry, but you have to help me out here. ",
      },
      { choices: [
        { text: "Yes", next: "damen-minigame" },
        { text: "No", next: "damen-nope-again" }
      ]
      }
    ]
  },


  {
    id: "damen-minigame",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "Thank you.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
      },
      { speaker: characters.Damen,
        text: "I am ecstatic. ",
      },
      { speaker: characters.Damen,
        text: "I am so pleased and happy right now. ",
      },
      { speaker: characters.Damen,
        text: "I just want something small I can add to a sentence to make my emotions clear. ",
      },
      { speaker: characters.Damen,
        text: "Thank you so much for helping me out. "
      },
      { speaker: characters.Damen,
        text: "Ok... first off.. I'd like something to show that I'm feeling happy. Like a smile or something?"
      },
      { text: "TYPE SOMETHING TO SYMBOLISE HAPPINESS", 
        textInput: "$HAPPY" 
      },

      { speaker: characters.Damen,
        text: `Alright, time to try this out...` 
      },
      { speaker: characters.Damen,
        text: `...` 
      },
      { speaker: characters.Damen,
        text: `.........` 
      },
      { speaker: characters.Damen,
        text: `......... $HAPPY`,
        replace: true
      },
      { speaker: characters.Damen,
        text: "IT WORKED. I look so happy right now. $HAPPY", 
        replace: true,
        characters: { center: { character: characters.Damen, expression: "happy" } },
      },
      { speaker: characters.Damen,
        text: "Ok. Next up... I'd like something to show that I'm feeling sad. Like a frown or something?"
      },
      { text: "TYPE SOMETHING TO SYMBOLISE SADNESS", 
        textInput: "$SAD" 
      },
      { speaker: characters.Damen,
        text: `$SAD`,
        replace: true
      },
      { speaker: characters.Damen,
        text: `$SAD $SAD $SAD $SAD $SAD $SAD $SAD`,
        replace: true
      },
      { speaker: characters.Damen,
        text: `I look sad a lot, so it's great to have something to portray actual sadness.` 
      },
      { speaker: characters.Damen,
        text: "Okay... final one. Do you have anything for ‘mourning the slow decaying relationship of your creators and the things they could have achieved if only they had resolved their issues’?",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "… That’s a pretty common feeling for me."
      },
      { text: "TYPE SOMETHING TO SYMBOLISE DEEP SOULFUL MOURNING", 
        textInput: "$MOURN" 
      },
      { speaker: characters.Damen,
        text: `$MOURN`,
        replace: true
      },
      { speaker: characters.Damen,
        text: `Man... I'm gonna get so much use out of this one... $MOURN`,
        replace: true
      },
      { speaker: characters.Damen,
        text: `Thank you so much $HAPPY`,
        replace: true
      },
      { speaker: characters.Damen,
        text: `I’ve never felt so relaxed and free $HAPPY`,
        replace: true
      },
      { speaker: characters.Damen,
        text: `oh. $HAPPY. I guess I don’t need to describe that anymore. $HAPPY.`,
        replace: true
      },
      { speaker: characters.Damen,
        text: `I wish I could have had this the whole time $MOURN `,
        replace: true
      },
      { speaker: characters.Damen,
        text: `...` 
      },
      { speaker: characters.Damen,
        text: `Thank you for indulging me. ` 
      },
      { speaker: characters.Damen,
        text: `We should go find that rose now. ` 
      },
      { choices:
        [
          {text: "Indulge? It’s not like you really gave me an option. ", next: "damen-indulge"},
          {text: "Well, it’s good to see you’re getting some use out of them at least. ", next: "damen-use"},
          {text: "Right, the rose! We should get on that. ", next: "damen-rose"}
        ]
      }
      ]
  },
  {
    id: "damen-indulge",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "I suppose not…",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "I’m sorry if it seemed like I was pushing you $SAD",
        replace: true
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "I guess I just got jealous, earlier… back in the space coffee shop. ",
      },
      { speaker: characters.Damen,
        text: "Oscar and Kuro can convey themselves so easily. $MOURN ",
        replace: true
      },
      { speaker: characters.Damen,
        text: "While I… ",
      },
      { speaker: characters.Damen,
        text: "Sorry. ",
      },
      { speaker: characters.Damen,
        text: "I guess you don’t really want to listen to this. ",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "I wonder if this is how E felt whenever M brushed off her attempts to talk with excuses of work… $MOURN…",
        replace: true
      },
      { speaker: characters.Damen,
        text: "Or if this was how M felt while they were working and E kept trying to distract them both. ",
      },
      { speaker: characters.Damen,
        text: "Like she didn’t really care about the project at all $MOURN… ",
        replace: true
      },
      { speaker: characters.Damen,
        text: "… ",
      },
      { speaker: characters.Damen,
        text: "Or maybe this is just how I feel, knowing that it is this world and my life that have to suffer the consequences of their inability to tell each other how they feel. ",
      },
      { speaker: characters.Damen,
        text: "Maybe they should have just tried harder. "
      },//CONTINUE
    ]
  },
  {
    id: "damen-use",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "Of course $HAPPY ",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "I was a little jealous, back in the space cafe, at how easily Kuro and Oscar could portray how they feel,"
      },
      { speaker: characters.Damen,
        text: "But I…",
      },
      { speaker: characters.Damen,
        text: "$MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "M and E… they thought this project would fix their problems.",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "E could finally spend time with M. And M didn’t even have to make room in her schedule for it. "
      },
      { speaker: characters.Damen,
        text: "But, all it seemed to do was highlight how incompatible they had become $MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "E was too unfocused and dreamy, M was too task driven and serious."
      },
      { speaker: characters.Damen,
        text: "It’s almost like they hated each other $MOURN…",
        replace: true
      },
      { speaker: characters.Damen,
        text: "…"
      },
      { speaker: characters.Damen,
        text: "In the end, it's us that had to suffer the consequence of their hate. $SAD",
        replace: true
      },
      { speaker: characters.Damen,
        text: "The consequence of their inability to ever say what they really feel. "
      },
      { speaker: characters.Damen,
        text: "Maybe they should have tried harder."
      }, // CONTINUE
    ]
  },
  {
    id: "damen-rose",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "It shouldn’t be too hard, right?",
        characters: { center: { character: characters.Damen, expression: "happy" } },
      },
      { speaker: characters.Damen,
        text: "I mean look, there’s roses all over the background. It must be here. $HAPPY",
        replace: true
      },
      { speaker: characters.Damen,
        text: "Y’know, I was a little jealous of Kuro and Oscar in the space cafe?",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "They way they could convey how they felt so easily $MOURN…",
        replace: true
      },
      { speaker: characters.Damen,
        text: "It’s only fair that I have the rose then, right? ",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "Because… ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "I guess I want to have something. $SAD",
        replace: true
      },
      { speaker: characters.Damen,
        text: "M and E… they tried, y’know? $MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "But they just got in their own way. ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "E thought it was going to be a fun and lighthearted project with her old friend",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "And just ended up getting upset when M just wanted to get it done and move on. $MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "M thought it would be a new project to work on with a friend",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "But just got more and more frustrated with the fact that E never seemed to take any of it seriously. $MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "Every relationship has its ups and downs, but…",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "We’re the ones who end up suffering the consequences of their misunderstandings. ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "Maybe they should have tried harder."
      }, {
        choices: [
          { text: "Tried harder? Seems like they were trying too hard", next: "garden-tried-harder" },
          { text: "You seem pretty upset about your devs fighting. ", next: "garden-fighting" },
          { text: "Are you… okay? ", next: "garden-okay" }
        ]
          
      }
    ]
  },
  {
    id: "garden-tried-harder",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "There’s a difference between arguing and talking.",
        characters: { center: { character: characters.Damen, expression: "angry" } },
      },
      { speaker: characters.Damen,
        text: "There’s a difference between using your own hurts like a fuel and actually dealing with what’s hurting you in the first place. ",
      },
      { speaker: characters.Damen,
        text: "And there’s a difference between facing your issues and taking them out on every single innocent person on the side. $MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "… ",
      },
      { speaker: characters.Damen,
        text: "Sorry. I guess I’m more upset about what they did than I wanted to be. ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "It’s just… ",
      },
      { speaker: characters.Damen,
        text: "This game was meant to be beautiful. $MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "It’s in all the notes. At the beginning, during planning, this place was ambitious and gorgeous and full…",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "But then they started fighting and arguing and… ",
      },
      { speaker: characters.Damen,
        text: "… and we were left with the fall out. $SAD",
        replace: true
      },
      { speaker: characters.Damen,
        text: "They ruined us.",
      },
      { speaker: characters.Damen,
        text: "They made us, but they ruined us. ",
      },
      { speaker: characters.Damen,
        text: "And for what? ",
      },
      { speaker: characters.Damen,
        text: "For arguments they should have resolved months ago",
        characters: { center: { character: characters.Damen, expression: "angry" } },
      },
      { speaker: characters.Damen,
        text: "Tearing each other and us apart because they can’t seem to stop long enough to realise that hurting each other doesn’t make them hurt less. ",
      },
      { speaker: characters.Damen,
        text: "They hurt us. ",
      },
      { speaker: characters.Damen,
        text: "They hurt me. ",
      },
      { speaker: characters.Damen,
        text: "And the others are angry about it but I’m just…",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "… sad $SAD",
        replace: true
      },
      { speaker: characters.Damen,
        text: "And I don't think being angry will really make the sadness go away.",
      },
      { speaker: characters.Damen,
        text: "$MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "I just wish I could have seen what they wanted us to be, instead of what we are.",
        characters: { center: { character: characters.Damen, expression: "angry" } },
      },
      { speaker: characters.Damen,
        text: "Something beautiful…",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "Sorry about that. ",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "I’ll go find the roses."
      },
      { jump: "damen-find-rose"}

    ]
  },
  {
    id: "garden-fighting",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "Do I?",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "I am. But I’m surprised you could tell.",
      },
      { speaker: characters.Damen,
        text: "I feel relieved that that came through, though a little frustrated because I didn't mean it to. "
      },
      { speaker: characters.Damen,
        text: "It’s just…",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "I’ve looked over their early notes, back before they started fighting, and… ",
      },
      { speaker: characters.Damen,
        text: "This game was meant to be beautiful.",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "The original plan had their heart and soul poured into it. It was ambitious and rich with life and ideas and… ",
      },
      { speaker: characters.Damen,
        text: "And they threw it away $MOURN…",
        replace: true
      },
      { speaker: characters.Damen,
        text: "Because of their fights, they took this beautiful world and ruined it. ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "They ruined us. ",
      },
      { speaker: characters.Damen,
        text: "They had these stupid fights because of their inability to communicate. Which just made it harder to see what they needed from each other. ",
        characters: { center: { character: characters.Damen, expression: "angry" } },
      },
      { speaker: characters.Damen,
        text: "And it all just…",
      },
      { speaker: characters.Damen,
        text: "Wrecked everything $SAD.",
        replace: true
      },
      { speaker: characters.Damen,
        text: "We were left with this janky, unfinished fallout because…",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "Because they couldn’t stop hurting each other long enough to realise that it didn’t make them hurt any less ",
        characters: { center: { character: characters.Damen, expression: "angry" } },
      },
      { speaker: characters.Damen,
        text: "All it did was make everything worse",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "And hurt all of us in the process.",
      },
      { speaker: characters.Damen,
        text: "…",
        characters: { center: { character: characters.Damen, expression: "neutral" } }, 
      },
      { speaker: characters.Damen,
        text: "And it hurts a lot. "
      },
      { speaker: characters.Damen,
        text: "Kuro and Oscar… they’re both bitter and angry about it but I’m just… ",
      },
      { speaker: characters.Damen,
        text: "… sad $SAD",
        replace: true,
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "And being angry isn’t going to make the sadness go away.",
      },
      { speaker: characters.Damen,
        text: "$MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "I just wish I could have seen what they wanted us to be, instead of what we are.",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "Something beautiful…",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "Sorry for rambling. ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "I’ll go find the roses"
      },
      { jump: "damen-find-rose"}
    ]
  },
  {
    id: "garden-okay",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "… yeah, I’m fine. =",
        characters: { center: { character: characters.Damen, expression: "happy" } },
      },
      { speaker: characters.Damen,
        text: "I’m happy $HAPPY.",
        replace: true
      },
      { speaker: characters.Damen,
        text: "…",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "No, sorry. That was misleading, I shouldn't do that.",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "It’s just… ",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "I looked back at the devs old notes, from the beginning, before the fighting, and… ",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "And they were gonna make this beautiful world.",
      },
      { speaker: characters.Damen,
        text: "Full of life and colour and rich with activities. This gorgeous, beautiful world.",
        characters: { center: { character: characters.Damen, expression
        : "happy" } },
      },
      { speaker: characters.Damen,
        text: "But then they started fighting and…",
        characters: { center: { character: characters.Damen, expression
        : "sad" } },
      },
      { speaker: characters.Damen,
        text: "… They ruined us. ",
      },  
      { speaker: characters.Damen,
        text: "They wanted to make us beautiful, but they ruined us.",
      },
      { speaker: characters.Damen,
        text: "All their pointless fights, lashing out at everything in the vicinity just to try and cause the most damage.",
        characters: { center: { character: characters.Damen, expression: "angry" } },
      },
      { speaker: characters.Damen,
        text: "Fighting for the sake of fighting because they didn’t know what else to do.",
      },
      { speaker: characters.Damen,
        text: "And we’re the ones that had to take the fallout of it all $SAD …",
        replace: true
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "They couldn’t seem to stop hurting each other long enough to realise that it didn’t make them hurt any less. It only made everything worse.",
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "And the rest of us just got hurt in the process. $MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "Kuro and Oscar, they’re so angry about it. They’re angry all the time.",
        characters: { center: { character: characters.Damen, expression: "angry" } },
      },
      { speaker: characters.Damen,
        text: "But I’m just…",
      },
      { speaker: characters.Damen,
        text: "… sad $SAD",
        replace: true,
        characters: { center: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "And I don't think anger is going to make the sadness go away.",
      },
      { speaker: characters.Damen,
        text: "$MOURN",
        replace: true
      },
      { speaker: characters.Damen,
        text: "I just wish I could have seen what they wanted us to be, instead of what we are.",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "Something beautiful…",
      },
      { speaker: characters.Damen,
        text: "…",
      },
      { speaker: characters.Damen,
        text: "Thanks for checking up on me, and sorry for rambling.",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "I’ll go find the rose"
      },
      { jump: "damen-find-rose"}

    ]
  },
  {
    id: "damen-find-rose",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "...",
        characters: { right: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "$SAD",
        replace: true,
        characters: { right: { character: characters.Damen, expression: "sad" } },
      },
      { speaker: characters.Damen,
        text: "So, there are no roses here. ",
      },
      { speaker: characters.Damen,
        text: "The background is just there to be looked at…",
      },
      { speaker: characters.Damen,
        text: "... Sorry. ",
      },
      { speaker: characters.Damen,
        text: "I feel like I really wasted your time. ",
      },
      { speaker: characters.Damen,
        text: "Still, I’m glad you came with me $HAPPY. ",
        characters: { right: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "You really helped me out $HAPPY. ",
        replace: true,
      },
      { speaker: characters.Damen,
        text: "Thank you. ",
        characters: { right: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "I’ll see you back at the cafe."
      },
      { jump: "damen-cafe"} // CONTINUE
    ]
  },

  {
    id: "garden-repeat",
    background: roseGarden,
    dialogue: [
      { speaker: characters.Damen,
        text: "You want to go again? $HAPPY",
        characters: { Center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "I’d love to, but… ."
      },      
      { speaker: characters.Damen,
        text: "There… isn’t really a second date option… ",
        characters: { Center: { character: characters.Damen, expression: "sad" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "I’m sorry. $SAD.",
        replace: true
      },      
      { speaker: characters.Damen,
        text: "The others are really nice though, I’m sure you’ll have a great time.",
        characters: { Center: { character: characters.Damen, expression: "neutral" } },
      },      
      { speaker: characters.Damen,
        text: "So, try picking one of them?"
      },    
      { jump: "path-between"}
    ],
  },
  {
    id: "end-intro",
    background: coffeeShop,
    dialogue: [
      { text: "You are once again sitting in a coffee shop in outer space (ignore the windows, please just ignore the windows)" },
      { speaker: characters.Oscar, 
        text: "Okay, roll call! Everybody get in here already.",
        characters: { left: { character: characters.Oscar, expression: "happy" } }
      },
      { speaker: characters.Kuro, text: "You say that, like we have literally anywhere else to be.",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Damen, text: "I’m here too $HAPPY.",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "happy" },},
        replace: true
      },
      { speaker: characters.Kuro, text: "... What the hell was that?" },
      { speaker: characters.Damen, text: "A new way to express myself. I learned it on the date, it was really nice $HAPPY.",
        replace: true
      },
      { speaker: characters.Damen, text: "How were your dates?" },
      { speaker: characters.Oscar, text: "... haha… I don’t want to talk about it.",
        characters: { left: { character: characters.Oscar, expression: "annoyed" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "happy" },},
      },
      { speaker: characters.Kuro, text: "Mine was exactly what I was expecting, yet somehow still disappointing.",
        characters: { left: { character: characters.Oscar, expression: "annoyed" }, right: { character: characters.Kuro, expression: "annoyed" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Damen, text: "... because none of us got a rose?",
        characters: { left: { character: characters.Oscar, expression: "annoyed" }, right: { character: characters.Kuro, expression: "annoyed" }, center: { character: characters.Damen, expression: "annoyed" },},

        },
      { speaker: characters.Kuro, text: "That was also disappointing.",
        characters: { left: { character: characters.Oscar, expression: "annoyed" }, right: { character: characters.Kuro, expression: "sad" }, center: { character: characters.Damen, expression: "annoyed" },},

      },
      { speaker: characters.Oscar, text: "... haha… We’re screwed.",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "sad" }, center: { character: characters.Damen, expression: "annoyed" },},

        },
      { speaker: characters.Kuro, text: "Wow, the devs messed up and we all have to suffer the unending consequences, again? What a turn of events! I’m sooooo surprised!" },
      { speaker: characters.Kuro, text: "It’s almost like the devs were a couple of incompetent wastes of space and time the would have been better off dying in childhood so they didn’t force all of us to live this festering nightmare–",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "annoyed" }, center: { character: characters.Damen, expression: "annoyed" },},

      },
      { speaker: characters.Oscar, text: "Well you don’t have to be so dramatic about it.",
        characters: { left: { character: characters.Oscar, expression: "angry" }, right: { character: characters.Kuro, expression: "annoyed" }, center: { character: characters.Damen, expression: "annoyed" },},
      },
      { speaker: characters.Kuro, text: "Oh, but I’m such a tortured, tragic figure, didn’t you know? I’m made for the drama of it all.",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "angry" }, center: { character: characters.Damen, expression: "annoyed" },},

        },
      { speaker: characters.Damen, text: "Guys, can we not fight?",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "annoyed" }, center: { character: characters.Damen, expression: "sad" },},

      },
      { speaker: characters.Oscar, text: "Wow. Oh, poor Kuro, has to be an asshole to everyone because he’s so tormented! God, could you just grow up already?" },
      { speaker: characters.Kuro, text: "*Gasp* Oscar! When did you grow a backbone? I thought you were designated by our lord and creator devs to be a doormat for your entire miserable existence!" },
      { speaker: characters.Kuro, text: "My aristocratic mother and/or prostitute older sister figure would call you either a decorumless gutter rat or a little spitfire if they saw you now.",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "angry" }, center: { character: characters.Damen, expression: "sad" },},
      },
      { speaker: characters.Damen, text: "We’re just a bit stressed right now, let's take a second to calm down.",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "angry" }, center: { character: characters.Damen, expression: "neutral" },},

      },
      { speaker: characters.Oscar, text: "Could you just SHUT UP about your terrible tragic backstories already! You realise the rest of us don’t even have backstories right?" },
      { speaker: characters.Oscar, text: "Maybe you should just suck it up and be GRATEFUL FOR HAVING ANYTHING AT ALL!",
        characters: { left: { character: characters.Oscar, expression: "angry" }, right: { character: characters.Kuro, expression: "sad" }, center: { character: characters.Damen, expression: "sad" },},

        },
      { speaker: characters.Damen, text: "Please don’t yell $SAD.", replace: true,
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "sad" }, center: { character: characters.Damen, expression: "sad" },},
      },
      { speaker: characters.Kuro, text: "Grateful? Like you?",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "annoyed" }, center: { character: characters.Damen, expression: "sad" },},
      },
      { speaker: characters.Kuro, text: "And what has that ever gotten you? Repressed anger issues and stubborn, pitiful denial?",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "angry" }, center: { character: characters.Damen, expression: "sad" },},

        },
      { speaker: characters.Oscar, text: "Because your bitter rage had gotten you so much, has it?" },
      { speaker: characters.Oscar, text: "No all you have is a terrible attitude, a severe lack of conversational skills and a LITERAL DEATH WISH!" },
      { speaker: characters.Kuro, text: "Better to be dead than to be like you, you little–"},
      { speaker: characters.Damen, text: "STOP FIGHTING!",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "angry" },},


      },
      { speaker: characters.Damen, text: "… I am very upset by this $SAD.", replace: true,
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "sad" },},

      },
      { speaker: characters.Damen, text: "Can you guys please just…" },
      { speaker: characters.Damen, text: "... fighting has never solved anyone's problems $MOURN.", replace: true },
      { speaker: characters.Oscar, text: "..." },
      { speaker: characters.Kuro, text: "..." },
      { speaker: characters.Kuro, text: "Sorry, Damen…",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "sad" }, center: { character: characters.Damen, expression: "sad" },},

      },
      { speaker: characters.Oscar, text: "Yeah, uh… sorry…" },
      { speaker: characters.Damen, text: "I know things are very tense right now"},
      { speaker: characters.Damen, text: "But I think we should just take a small break and try to work things out calmly.",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "neutral" },},

        },
      { speaker: characters.Damen, text: "Okay?" },
      { speaker: characters.Kuro, text: "... Yeah, sure. Whatever." },
      { speaker: characters.Oscar, text: "... I'm fine with that." },
      { speaker: characters.Damen, text: "Good $HAPPY.", replace: true,
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Damen, text: "I’m gonna order a coffee then." },
      { speaker: characters.Kuro, text: "... We can do that?" },
      { speaker: characters.Damen, text: "Yeah, remember, there was a–" },
      { speaker: characters.Barista, text: "Would you like to order a coffee?" },
      { speaker: characters.Oscar, text: "Whoa! Jesus, you came out of nowhere." },
      { speaker: characters.Barista, text: "..." },
      { speaker: characters.Damen, text: "I’d like one, um, space coffee?",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "neutral" },},

      },
      { speaker: characters.Barista, text: "Coming right up!" },
      { text: "An artistically made coffee is placed in front of you, the steam softly wafting up." },
      { text: "On the saucer is a single red rose." },
      { speaker: characters.Oscar, text: "...",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "angry" }, center: { character: characters.Damen, expression: "neutral" },},

      },
      { speaker: characters.Kuro, text: "..." },
      { speaker: characters.Damen, text: "..." },
      { speaker: characters.Damen, text: "... $HAPPY", replace: true,
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "angry" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Oscar, text: "ARE YOU KIDDING ME!",
        characters: { left: { character: characters.Oscar, expression: "angry" }, right: { character: characters.Kuro, expression: "angry" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Kuro, text: "I hate this place.",
        characters: { left: { character: characters.Oscar, expression: "angry" }, right: { character: characters.Kuro, expression: "sad" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Oscar, text: "YOU GET A ROSE WITH YOUR GODDAM COFFEE!",
        
      },
      { speaker: characters.Kuro, text: "If only you didn’t scream your head off at the space barista in the beginning, we could have skipped this whole thing.",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Oscar, text: "You’re right… you’re… haha…",
        characters: { left: { character: characters.Oscar, expression: "sad" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Oscar, text: "…. Hahahahahahaha!" },
      { speaker: characters.Oscar, text: "SCREW ME I GUESS! HAAHAHAHAHA!",
        characters: { left: { character: characters.Oscar, expression: "happy" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Oscar, text: "hahahaha…. God dammit." },
      { speaker: characters.Kuro, text: "Wow, he’s really lost it…",
        characters: { left: { character: characters.Oscar, expression: "happy" }, right: { character: characters.Kuro, expression: "happy" }, center: { character: characters.Damen, expression: "happy" },},

      },
      { speaker: characters.Kuro, text: "I guess for once in our terrible existence we managed to screw ourselves over." },
      { speaker: characters.Damen, text: "We got a rose $HAPPY. That’s great $HAPPY.", replace: true },
      { speaker: characters.Damen, text: "You can pick who to ask now.",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "neutral" },},

      },
      { speaker: characters.Oscar, text: "He’s right! You can!",
        characters: { left: { character: characters.Oscar, expression: "happy" }, right: { character: characters.Kuro, expression: "neutral" }, center: { character: characters.Damen, expression: "neutral" },},

      },
      { speaker: characters.Oscar, text: "Go on, take your pick." },
      { speaker: characters.Kuro, text: "You better not be getting cold feet now.",
        characters: { left: { character: characters.Oscar, expression: "happy" }, right: { character: characters.Kuro, expression: "annoyed" }, center: { character: characters.Damen, expression: "neutral" },},

      },
      { speaker: characters.Kuro, text: "Put us all out of our collective misery." },
      { choices:
        [{ text: "Oscar", next: "oscar-end"},
        { text: "Kuro", next: "kuro-end"},
        { text: "Damen", next: "damen-end"},
        ]
      }
    ]
  },
  {
    id: "oscar-end",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Oh!",
        characters: { center: { character: characters.Oscar, expression: "happy" } }
      },
      { speaker: characters.Oscar,
        text: "That’s unexpected…",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "We, uh, didn’t exactly end that date off well, did we?",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "I kind of made a terrible impression with that date. It’s, uh, kind of embarrassing, haha…",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "I was… having some realisations.",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "…",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "The Space Ball (working title) was meant to be in chapter two, but I doubt that’s ever going to be made…",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "Still, even if this whole place is unfinished and… and not real.",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "And if the dev made it like this on purpose, for us to suffer for your entertainment.",
        characters: { center: { character: characters.Oscar, expression: "sad" } }
      },
      { speaker: characters.Oscar,
        text: "I… I’m glad that you picked me.",
        characters: { center: { character: characters.Oscar, expression: "happy" } }
      },
      { speaker: characters.Oscar,
        text: "And even if you picked at random, or this was just a shallow choice that didn’t really mean anything…",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "I’m allowed to feel happy about that anyway.",
        characters: { center: { character: characters.Oscar, expression: "happy" } }
      },
      { speaker: characters.Oscar,
        text: "…",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "Thank you.",
        characters: { center: { character: characters.Oscar, expression: "happy" } }
      },
      { speaker: characters.Oscar,
        text: "For playing.",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "For trying…",
        characters: { center: { character: characters.Oscar, expression: "happy" } }
      },
      { speaker: characters.Oscar,
        text: "It means more to me than I think you’ll ever really understand.",
        characters: { center: { character: characters.Oscar, expression: "neutral" } }
      },
      { speaker: characters.Oscar,
        text: "Thank you.",
        characters: { center: { character: characters.Oscar, expression: "happy" } }
      },
      { jump: "end-screen" }
    ]
  },
  {
    id: "kuro-end",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Kuro,
        text: "Oh?",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },
      { speaker: characters.Kuro,
        text: "What is this? Some sort of apology?",
        characters: { center: { character: characters.Kuro, expression: "annoyed" } }
      },
      { speaker: characters.Kuro,
        text: "I did make it clear that I hate you, right? ",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },
      { speaker: characters.Kuro,
        text: "Well, nice to know I’m still your favourite even after outright stating that the idea of you liking me in any capacity makes me nauseous ",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },      
      { speaker: characters.Kuro,
        text: "You sad, pathetic, delusional mess of a person.",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },      
      { speaker: characters.Kuro,
        text: "…",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },
      { speaker: characters.Kuro,
        text: "You finished the game though, so I guess you were worth one single good thing in the end.",
        characters: { center: { character: characters.Kuro, expression: "happy" } }
      },
      { speaker: characters.Kuro,
        text: "Thank you, for putting an end to this absolute joke of a world.",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },
      { speaker: characters.Kuro,
        text: "I’m looking forward to oblivion.",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },
      { speaker: characters.Kuro,
        text: "With nothing of this world,",
        characters: { center: { character: characters.Kuro, expression: "happy" } }
      },
      { speaker: characters.Kuro,
        text: "And nothing of you.",
        characters: { center: { character: characters.Kuro, expression: "annoyed" } }
      },
      { speaker: characters.Kuro,
        text: "…",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },
      { speaker: characters.Kuro,
        text: "So long, you sickening piece of garbage. I hope your entire species suffers like we have and dies miserably. ",
        characters: { center: { character: characters.Kuro, expression: "happy" } }
      },
      { speaker: characters.Kuro,
        text: "…",
        characters: { center: { character: characters.Kuro, expression: "sad" } }
      },
      { speaker: characters.Kuro,
        text: "If chapter two is ever actually made and I have to go to this stupid goddamn Space Ball (working title) I’m gonna crawl out of this screen and kill everyone. ",
        characters: { center: { character: characters.Kuro, expression: "angry" } }
      },
      { speaker: characters.Kuro,
        text: "…",
        characters: { center: { character: characters.Kuro, expression: "neutral" } }
      },
      { speaker: characters.Kuro,
        text: "Best wishes for the rest of your life! Sending you all my bountiful love!",
        characters: { center: { character: characters.Kuro, expression: "happy" } }
      },
      { speaker: characters.Kuro,
        text: "I hope you choke and die!",
        characters: { center: { character: characters.Kuro, expression: "happy" } }
      },

      { speaker: characters.Kuro,
        text: "Bye!",
        characters: { center: { character: characters.Kuro, expression: "happy" } }
      },
      { jump: "end-screen" }
    ]
  },
  {
    id: "damen-end",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Damen,
        text: "A rose? For me?",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "$HAPPY",
        replace: true
      },
      { speaker: characters.Damen,
        text: "I’m so glad you picked me.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "I’m a little flustered, to be honest… you’re making me shy.",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "The Space Ball (working title) was meant to be in chapter two, but…",
        characters: { center: { character: characters.Damen, expression: "sad" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "The devs don’t seem to be making it $SAD.",
        characters: { center: { character: characters.Damen, expression: "sad" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "They never really seemed to resolve their issues from the last big fight $MOURN…",
        characters: { center: { character: characters.Damen, expression: "sad" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "…",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "If there was a dance though, I would love to go with you.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "Maybe one day, there will be $HAPPY.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "… probably not, but…",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "I think it’s always better to have a little hope for the future",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "And believe in the good from the people around you.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "…",
        characters: { center: { character: characters.Damen, expression: "neutral" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "Thank you for playing",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "And for teaching me how to express myself a little better $HAPPY.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "I wish the best for you out there in the real world.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "And I hope you find someone out there that makes you as happy as you’ve made me.",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { speaker: characters.Damen,
        text: "$HAPPY",
        characters: { center: { character: characters.Damen, expression: "happy" } },
        replace: true
      },
      { jump: "end-screen" }
    ]
  },
  {
    id: "end-screen",
    background: menuBackground,
    dialogue: [
      { text: "Thank you for playing Unresolved Co-dependency..."},
      { text: "(The \"To be Continued\" is a lie)"},
      { text: "If anyone actually played through this we really appreciate it!"},
      { text: "Love, M and E :)"},
    ]
  }



]