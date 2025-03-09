import { characters } from "./characters";
import flinders from './assets/flinders.png'
import dinos from './assets/dinos.png'
import rose from './assets/rose.png'
import coffeeShop from './assets/coffee-shop.png'
import jewellers from './assets/flinders.png'
import roseGarden from './assets/flinders.png'
import supermarket from './assets/flinders.png'

export const scenes = [
  {
    id: "start",
    background: coffeeShop,
    dialogue: [
      { choices: [
          { text: "START", next: "coffeeshop-start"},
        ],
        characters: { center: { character: characters.menu, expression: "menu" } }, 
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
      { choices: [
          { text: "go to the jewellers with a", path: "a", next: "jewellers-start", else: "jewellers-repeat" },
          { text: "go to the rose garden with b",  path: "b", next: "garden-start", else : "garden-repeat" },
          { text: "go to the supermarket with c",  path: "c", next: "supermarket-start", else: "supermarket-repeat"}
        ],
        characters: { left: { character: characters.Oscar, expression: "neutral" }, center: { character: characters.Kuro, expression: "neutral" }, right: {character: characters.Damen, expression: "neutral"} }, 
      }
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "A-anyway, you’re new, so you don’t know about the Space Ball(working title) coming up soon, right? I’m happy to explain it to you!",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "Now that that’s out of the way, have you heard about the Space Ball(working title)? Probably not, you are new here after all, so I’m happy to explain it.",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "It’s a great dance at the end of the month. The whole city- uh, station(?) will be there! They say if you dance together under the full moon…s… space moons…",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "(come on, really? That’s the script? It doesn’t even make sense!)",  
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "*sigh*",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "… if you dance together under the multiple full space moons, you’ll join souls!",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { 
        speaker: characters.Oscar,
        text: "…",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "Sorry, that was pretty rude, huh? I’m a little stressed right now, is all, haha…",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "You’re just… not gonna play along at all? For the sake of politeness, if nothing else, you should at least pretend to have an interest in the Space Ball (working title).",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "It’s a big dance at the end of the month that you need to find a date for.",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Kuro, 
        text: "Heya Oscar, sor–",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Oscar, 
        text: "Get Out!",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" } },
      }
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "(I can’t believe the devs included that in the lore when they couldn’t even fix Space Ball (working title). Their priorities are all over the place) ",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "But to ask anyone out, you, legally, apparently, need to– I swear to space god!",
        characters: { left: { character: characters.Oscar, expression: "neutral" } },
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
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Oscar, 
        text: "Get Out!",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" } },
      },

      { speaker: characters.Kuro, 
        text: "so, in my defence–",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "We are meant to meet them one at a time! It is clearly outlined in the script!",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "Do you know how long I’ve been wanting to get into this coffee shop? My entire existence! But we can only enter if the player is here, so excuse me for not waiting for you to take forever living out your rom-com coffee shop meet-cute dream.",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "It is in the script. I am expositioning the entire plot and objectives required so we can fulfill our literal MEANING IN LIFE while you bumble in here and wreck the entire–",
        characters: { left: { character: characters.Oscar, expression: "neutral" }, right: { character: characters.Kuro, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "So since everything is already screwed, I can come in too right?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen, 
        text: "...",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "What’s up with the windows?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
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
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "Oh, I know this one, actually. It’s because it was done by M instead of E.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "I Thought E did all the art?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "They were on a time crunch, I think M did the backgrounds.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },  
      { speaker: characters.Damen,
        text: "But doesn’t she… suck? At art?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "She tried her best man, at least she doesn't have all of E’s weird hang ups. ",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Damen,
        text: "Don’t even talk to me about E’s stupid–",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
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
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { jump: "coffeeshop-roses", index: 4 }
    ]
  },
  { id: "coffeeshop-introductions",
    background: coffeeShop,
    dialogue: [
      { speaker: characters.Kuro,
        text: "I’m Kuro 愛, but you can just call me Kuro. I don’t even know why there’s Kanji in here, I can’t even read it. The Devs didn’t leave any notes to say what it means, so don’t even ask.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Damen,
        text: "Damen, that’s me. I’m happy to meet you.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Damen,
        text: "... you can’t tell, because E refused to draw me with any actual emotion ever, but I am, in fact, ecstatic.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "The devs had some weird hang ups and… fights… during some of our development, so don’t worry if some things don’t make sense.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "As my aristocratic father, or maybe homeless-man slum mentor figure always used to say ‘life is full of contradiction, but… um… something about flower symbology’",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "...",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "... They didn’t finish writing what the quote was meant to be?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "That is literally what they put as a placeholder. The ‘...’ and everything.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "And then we segway into roses?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression
          : "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "We segway into roses.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { jump: "coffeeshop-roses", index: 4 }
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
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
        text: "um… I mean…"
      },
      { speaker: characters.Oscar,
        text: "Look, you are literally the only one doing what you are meant to here. So you are perfect where you are.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
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
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "Especially considering this mess. The devs really… they were very stressed.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "They didn’t know what they were doing and fought, literally the entire time.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
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
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "Let’s not air all our family drama out in front of our guest, hmm?",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Kuro,
        text: "Oh? You think we’re a fami–",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "ROSES.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      },
      { speaker: characters.Oscar,
        text: "Let’s talk about the roses.",
        characters: { 
          left: { character: characters.Oscar, expression: "neutral" }, 
          right: { character: characters.Kuro, expression: "neutral" },
          center: { character: characters.Damen, expression: "neutral" } },
      }
    ]
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
