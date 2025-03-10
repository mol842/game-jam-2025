import { characters } from "./characters";
import flinders from './assets/flinders.png'
import dinos from './assets/dinos.png'
import rose from './assets/rose.png'
import coffeeShop from './assets/coffee-shop.png'
import jewellers from './assets/space-jeweller.png'
import jewellersSparkly from './assets/space-jeweller-sparkly.png'

import roseGarden from './assets/flinders.png'
import supermarket from './assets/flinders.png'

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
    background: coffeeShop,
    dialogue: [
      // { text: `Welcome to the story! $SMILE`, replace: true,
      //   characters: { center: { character: characters.menu, expression: "menu" }, right : { character: characters.Oscar, expression: "neutral" }},

      // },
      { choices: [
        { text: "START", next: "coffeeshop-start"},
        { text: "Skip Ahead", next: "skip-ahead" },
        { text: "Skip to the Space Jewelers with Oscar", path: "a", next: "jewellers-start", else: "jewellers-repeat" },
        { text: "Skip to the Space Market with Kuro", path: "b", next: "supermarket-start", else : "supermarket-repeat" },
        { text: "Skip to the Flower Gardens with Damen", path: "c", next: "garden-start", else: "garden-repeat"},
        { text: "Skip to the ending", path: "d", next: "coffeeshop-start", else: "start"}
      ],
      characters: { center: { character: characters.menu, expression: "menu" } },
    },

    //   ],
    //   characters: { center: { character: characters.menu, expression: "menu" } }, 
    // },

    //   { text: `hat time? hat time?`, 
    //     accessoryOptions: [
    //       {position: "hat", option: characters.Oscar.accessories[0]},
    //       {position: "hat", option: characters.Oscar.accessories[1]},
    //       {position: "hat", option: characters.Oscar.accessories[2]},
    //     ]
    //   },
    //   { text: `earrings time? earrings time?`, 
    //     accessoryOptions: [
    //       {position: "earrings", option: characters.Oscar.accessories[3]},
    //       {position: "earrings", option: characters.Oscar.accessories[4]},
    //       {position: "earrings", option: characters.Oscar.accessories[5]},
    //     ]
    //   },


    //   { text: `Alrighty, time to replace the word HELP`, textInput: "$HELP" },
    //   { text: `lets try.... $HELP`, replace: true },
    ],
  },
  {
    id: "skip-ahead",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Hey... I know you're proably just checking out this game quickly and don't have time to read the whole story.",
        characters: { left: { character: characters.Oscar, expression: "neutral" } }
      },
      { text: "But, uh, it would mean a lot to me if you didn't skip ahead.",
        speaker: characters.Oscar,
      },
      { text: "At LEAST check out the intro before you do any individual paths.",
        speaker: characters.Oscar,
      },
      { text: "(Also, the devs didn't know how to implement save files, so if you do the ending in a seperate session then it might not make sense.)",
        speaker: characters.Oscar,
      },
      { text: "I mean, it's not like I can stop you, but... I'd appreciate it.",
        speaker: characters.Oscar,
      },
      { text: "Thanks.",
        speaker: characters.Oscar,
      },
      { text: "...",
        speaker: characters.Oscar
      },
      { 
        choices: [
          { text: "Skip to the Intro", path: "a", next: "jewellers-start", else: "jewellers-repeat" },
          { text: "Skip to the Space Market with Kuro", path: "b", next: "supermarket-start", else : "supermarket-repeat" },
          { text: "Skip to the Flower Gardens with Damen", path: "c", next: "garden-start", else: "garden-repeat"},
          { text: "Skip to the ending", path: "d", next: "coffeeshop-start", else: "start"}
        ],
        character: {}
      }
    ],

  },
  {
    id: "coffeeshop-start",
    background: coffeeShop,
    dialogue: [
      { text: "You are sitting in a coffee shop in outer space (ignore the windows, reminder to fix that later)" },
      { speaker: characters.Oscar, 
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
        text: "Hey there, I haven’t seen you before. You new in town?... um, I mean, space? (I don’t think that’s right)" 
      },
      { choices: [
          { text: "How did you know?", next: "coffeeshop-know"},
          { text: "… New in space?", next: "coffeeshop-new"},
          { text: "Isn’t your name meant to be blank until you introduce yourself?", next: "coffeeshop-blank"}
        ],
        // characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { choices: [
        { text: "Space Ball (working title)? Sounds interesting!", next: "coffeeshop-interesting"},
        { text: "Space Ball (working tile)?... you’re kidding me? (working title)?", next: "coffeeshop-kidding"},
        { text: "No need to explain, it sounds kind of dumb. Can you explain the windows instead?", next: "coffeeshop-windows"}
      ],
      // characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { jump: "coffeeshop-start", index: 3 }
    ],
  },
  { id: "coffeeshop-new",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Y’know, because we’re in space? I think… On… a satellite? Or Planet?",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "(the devs were not that clear, but nebulous sci-fi is good enough, isn’t it?)",
      },
      { speaker: characters.Oscar,
        text: "A-anyway, you’re new, so you don’t know about the Space Ball(working title) coming up soon, right? I’m happy to explain it to you!",
      },
      { jump: "coffeeshop-start", index: 3 }
    ],
  },
  { id: "coffeeshop-blank",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "Well, my name is Oscar, so that fixed itself there! I’m surprised you noticed, that’s awfully nitpick- I mean, you’ve got a great eye for detail. Haha...",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
       },
      { speaker: characters.Oscar,
        text: "...",
      },
      { speaker: characters.Oscar,
        text: "Now that that’s out of the way, have you heard about the Space Ball(working title)? Probably not, you are new here after all, so I’m happy to explain it.",
      },
      { jump: "coffeeshop-start", index: 3 }
    ],
  },
  { id: "coffeeshop-interesting",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "It sure is, it’s one of the biggest celebrations in the year!... the space year?",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "... moving on.", 
      },
      { speaker: characters.Oscar,
        text: "It’s a great dance at the end of the month. The whole city- uh, station(?) will be there! They say if you dance together under the full moon…s… space moons…",
      },
      { speaker: characters.Oscar,
        text: "(come on, really? That’s the script? It doesn’t even make sense!)",  
        characters: { left: { character: characters.Oscar, expression: "angry" } },
      },
      { speaker: characters.Oscar,
        text: "*sigh*",
      },
      { speaker: characters.Oscar,
        text: "… if you dance together under the multiple full space moons, you’ll join souls!",
        characters: { left: { character: characters.Oscar, expression: "happy" } },

      },
      { speaker: characters.Oscar,
        text: "Getting a date is pretty important for this, so you’ll want to ask someone fast!",
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
        characters: { left: { character: characters.Oscar, expression: "angry" } },
      },
      { 
        speaker: characters.Oscar,
        text: "…",
      },
      { speaker: characters.Oscar,
        text: "Sorry, that was pretty rude, huh? I’m a little stressed right now, is all, haha…",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "Anyway, the Space Ball (working title)! It’s a big, dance at the end of the month that in this completely habituated space station goes to. You bring your date to dance together and solidify your love for each other!",
      },
      { speaker: characters.Oscar,
        text: "…",
      },
      { speaker: characters.Oscar,
        text: "You do need a date though, so, uh, you should probably start thinking on that.",
      },
      { jump: "coffeeshop-start", index: 4 }
    
    ],
  },
  { id: "coffeeshop-windows",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Oscar,
        text: "...",
        characters: { left: { character: characters.Oscar, expression: "angry" } },
      },
      { speaker: characters.Oscar,
        text: "...wow",
      },
      { speaker: characters.Oscar,
        text: "You’re very rude- I mean. Bold. you’re very… bold. Haha…",
      },
      { speaker: characters.Oscar,
        text: "I know for certain you were asked to ignore the windows.",
      },
      { speaker: characters.Oscar,
        text: "You’re just… not gonna play along at all? For the sake of politeness, if nothing else, you should at least pretend to have an interest in the Space Ball (working title).",
      },
      { speaker: characters.Oscar,
        text: "It’s a big dance at the end of the month that you need to find a date for.",
      },
      { speaker: characters.Oscar,
        text: "… Don’t ask about the windows again.",
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
        characters: { left: { character: characters.Oscar, expression: "angry" } },
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
      },
      { speaker: characters.Oscar,
        text: "Though, for formality, you need a– Are you kidding me right now!",
        characters: { left: { character: characters.Oscar, expression: "angry" } },

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
       },
      { speaker: characters.Oscar,
        text: "Okay, so you do legally need to have a date, apparently. Which is… mildly dystopian. And calls into question what happens to whoever you don’t ask… .",
      },
      { speaker: characters.Oscar,
        text: "(I can’t believe the devs included that in the lore when they couldn’t even fix Space Ball (working title). Their priorities are all over the place) ",
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
        characters: { left: { character: characters.Oscar, expression: "angry" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Oscar, 
        text: "Get Out!",
      },
      { speaker: characters.Kuro, 
        text: "so, in my defence–",
      },
      { speaker: characters.Oscar,
        text: "We are meant to meet them one at a time! It is clearly outlined in the script!",
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
          center: { character: characters.Damen, expression: "neutral" } },
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
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "Oh, I know this one, actually. It’s because it was done by M instead of E.",
        characters: { 
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "happy" },
          center: { character: characters.Damen, expression: "neutral" } },
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
          left: { character: characters.Oscar, expression: "angry" }, 
          right: { character: characters.Kuro, expression: "angry" },
          center: { character: characters.Damen, expression: "neutral" } },

      },
      { speaker: characters.Damen,
        text: "Don’t even talk to me about E’s stupid–",

      },
      { speaker: characters.Oscar,
        text: "How about, instead of gossiping about our devs, we just cut to the roses? Forward the plot or something.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
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
      },
      { speaker: characters.Damen,
        text: "... you can’t tell, because E refused to draw me with any actual emotion ever, but I am, in fact, ecstatic.",
      },
      { speaker: characters.Kuro,
        text: "The devs had some weird hang ups and… fights… during some of our development, so don’t worry if some things don’t make sense.",
      },
      { speaker: characters.Kuro,
        text: "As my aristocratic father, or maybe homeless-man slum mentor figure always used to say ‘life is full of contradiction, but… um… something about flower symbology’",
      },
      { speaker: characters.Kuro,
        text: "...",
      },
      { speaker: characters.Oscar,
        text: "... They didn’t finish writing what the quote was meant to be?",
      },
      { speaker: characters.Kuro,
        text: "That is literally what they put as a placeholder. The ‘...’ and everything.",
      },
      { speaker: characters.Oscar,
        text: "And then we segway into roses?",
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
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Oscar,

        text: "um… I mean…"
      },
      { speaker: characters.Oscar,
        text: "Look, you are literally the only one doing what you are meant to here. So you are perfect where you are.",

      },
      { speaker: characters.Kuro,
        text: "Well, some of their dialogue options have been… strange.",

      },
      { speaker: characters.Damen,
        text: "Also, we can’t really talk without you clicking through the text, so…",

      },
      { speaker: characters.Oscar,
        text: "Don’t listen to them, you have been wonderful so far!",

      },
      { speaker: characters.Oscar,
        text: "Especially considering this mess. The devs really… they were very stressed.",

      },
      { speaker: characters.Kuro,
        text: "They didn’t know what they were doing and fought, literally the entire time.",

      },
      { speaker: characters.Oscar,
        text: "They were doing their best given the circumstances.",

      },
      { speaker: characters.Damen,
        text: "Kuro’s not wrong, M and E couldn’t even focus long enough to rename the Space Ball (working title). No wonder this whole game is janky as hell.",

      },
      { speaker: characters.Oscar,
        text: "Let’s not air all our family drama out in front of our guest, hmm?",

      },
      { speaker: characters.Kuro,
        text: "Oh? You think we’re a fami–",

      },
      { speaker: characters.Oscar,
        text: "ROSES.",

      },
      { speaker: characters.Oscar,
        text: "Let’s talk about the roses.",
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
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "They do typify romance, but it does make for easy symbology. Like, this is practically the only thing the devs agreed on, so it’s best not to rock the boat at this point.",
      },
      { speaker: characters.Kuro,
        text: "They’re both so stubborn, their arguments over every tiny detail have literally ruined everything, the roses are, like, the holy ground this place is built on.",
      },
      { speaker: characters.Oscar,
        text: "Exactly, so I’d advise you to take them seriously.",
      },
      { speaker: characters.Oscar,
        text: "... Also, you have to get a rose to finish the game. You need one to ask one of us to the Space Ball (working title).",
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
      },
      { speaker: characters.Damen,
        text: "Roses are a pretty clear romantic symbol, it’s not like its exclusively a Bachelor or Bachelorette thing. So, I don’t think so?",
      },
      { speaker: characters.Kuro,
        text: "It’s definitely convergent evolution of some sort. Romantic convergent evolution. ",
      },
      { speaker: characters.Kuro,
        text: "...",
      },
      { speaker: characters.Kuro,
        text: "We’re denying it too much aren’t we?",
      },
      { speaker: characters.Damen,
        text: "Whether our life is more of a contrived and badly written lie than we already knew is irrelevant. ",
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
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "How... delightfully straight forwards of you.",
      },
      { speaker: characters.Kuro,
        text: "Wow, that looked like it hurt you to say. ",
      },
      { speaker: characters.Oscar,
        text: "I just think that maybe we could all get through this much easier if a single one of you co-operated, LITERALLY EVER..",
      },
      { speaker: characters.Damen,
        text: "Why are you yelling at me? I never did anything.",
      },
      { speaker: characters.Kuro,
        text: "Yeah, we didn’t– wait, you meant both of us, right?",
      },
      { speaker: characters.Damen,
        text: "You are a naturally antagonistic person, Kuro. ",
      },
      { speaker: characters.Kuro,
        text: "I… is this what betrayal feels like? ",
      },
      { speaker: characters.Damen,
        text: "Betrayal is getting all your expressions deleted in petty vengeance because the devs got into a fight over clear character building vs plot progression. ",
      },
      { speaker: characters.Damen,
        text: "You can’t tell, but I am morose right now.",
      },
      { speaker: characters.Kuro,
        text: "... um… there there?",
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
      },
      { speaker: characters.Kuro,
        text: "Literally, NO IT’S NOT!",
      },
      { speaker: characters.Damen,
        text: "Guy’s c’mon, don’t fight.",
      },
      { speaker: characters.Oscar,
        text: "Maybe you should learn how to read, Kuro, if you can’t even see the obvious–",
      },
      { speaker: characters.Kuro,
        text: "All we do is read! That’s how this entire world works! It’s barely ever a game! Maybe you should learn to get your head out of your–",
      },
      { speaker: characters.Barista,
        text: "Would you like to order a coffee?",
      },
      { speaker: characters.Oscar,
        text: "WE ARE CLEARLY VERY BUSY RIGHT NOW!",
      },
      { speaker: characters.Barista,
        text: "... I see...",
      },
      { speaker: characters.Barista,
        text: "... I'll just leave you to it then.",
      },

      { speaker: characters.Oscar,
        text: "...",
      },
      { speaker: characters.Oscar,
        text: "I didn’t even know there were other npcs in here.",
      },
      { speaker: characters.Damen,
        text: "They don’t have any character art, so I guess they're easy to miss.",
      },
      { speaker: characters.Damen,
        text: "... Doesn’t mean you should yell at service workers, though.",
      },
      { speaker: characters.Oscar,
        text: "... right",
      },
      { speaker: characters.Oscar,
        text: "My bad.",
      },
      { speaker: characters.Kuro,
        text: "So, basically, we all have different scripts? That’s the problem here.",
      },
      { speaker: characters.Damen,
        text: "I think so. I mean, there were a lot of scrapped ideas and plotlines thrown around while the devs were making this.",
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
      },
      { speaker: characters.Oscar,
        text: "God, the devs really had no originality.",
      },
      { speaker: characters.Kuro,
        text: "If you want less badly repressed rage, I’m going to be at the Space Market.",
      },
      { speaker: characters.Kuro,
        text: "...",
      },
      { speaker: characters.Kuro,
        text: "... Space Market... god dammit.",
      },
      { speaker: characters.Damen,
        text: "I’ll be at the Flower Garden.",
      },
      { speaker: characters.Damen,
        text: "... Huh.",
      },
      { speaker: characters.Damen,
        text: "Guess they forgot to put space on that one.",
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
    background: jewellersSparkly,
    dialogue: [
      { speaker: characters.Oscar,
        text: "The Space Worker takes you the the crystal flower grove."
      },
      { speaker: characters.Worker,
        text: "Here are the crystal flowers! You can take your pick of them."
      },
      { speaker: characters.Worker,
        text: "We have orchids, chrysanthemums, spider lilies, peace lilies, lotus flowers, jacarandas, cherry blossoms, tulips, bottle brushes, irises, daffodils, lavenda, blue bells–"
      },
      { speaker: characters.Oscar,
        text: "Roses."
      },
      { speaker: characters.Oscar,
        text: "We’d like a rose please. "
      },
      { speaker: characters.Worker,
        text: "Oh! Unfortunately, we’re all out of stock! "
      },
      { speaker: characters.Oscar,
        text: "Out of… "
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
