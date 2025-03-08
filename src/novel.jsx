import { useState } from "react";
import { scenes } from "./scenes";
import "./novel.css";
import { useEffect } from "react";

export default function VisualNovel() {
  const [currentScene, setCurrentScene] = useState("start");
  const [dialogIndex, setDialogIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [sceneCharacters, setSceneCharacters] = useState({}); 

  const [displayedText, setDisplayedText] = useState("");

  const scene = scenes.find(s => s.id === currentScene);
  const currentLine = scene.dialogue[dialogIndex];

  useEffect(() => {    
    if (currentLine.characters) {
      console.log("SETTING CHARACTYERS")
      setSceneCharacters(currentLine.characters);
    }
    // dpnt show slowly if its a choice box
    if (currentLine.choices) {
      setShowChoices(true);
      return;
    }
    // making the text display one letter at a time like its being typed
    let text = currentLine.text || "";
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    console.log(sceneCharacters);
  }, [dialogIndex, currentScene]);


  const nextDialogue = () => {
    console.log("CLICK")

    if (dialogIndex < scene.dialogue.length - 1) {
      setDialogIndex(dialogIndex + 1);
      console.log("NEXT")
    } else {
      setShowChoices(true);
    }

    // adding the characters to the scene
    // if (currentLine.characters) {
    //   console.log("SQETTING CHARACTYERS")
    //   setSceneCharacters(currentLine.characters);
    // }
    if (currentLine.choices) {
      console.log("CHOICES");
      setShowChoices(true);
    }
    console.log("LIIINE", currentLine);

  };

  return (
    <div className="game-container">
      <img className="background" src={scene.background} />

      {/* character image */}
      {/* {currentLine.character && (
        <img
          className="character center"
          src={currentLine.character.expressions[currentLine.expression]}
          alt={currentLine.character.name}
        />
      )} */}

      {currentLine.characters && Object.entries(currentLine.characters).map(([position, details]) => (
        console.log(position, details),
        <div key={details.name} className={`character-container ${position}`}>
          <img className="character" src={details.character.expressions[details.expression]}/>
        </div>
      ))}

      {/* object above */}
        {currentLine.item && (
        <img className="item" src={currentLine.item} alt="Item" />
      )}


      {/* dialog */}
      {currentLine.text && (
        <div className="dialog-box" onClick={nextDialogue}>
          <strong>{currentLine.speaker ? currentLine.speaker.name : ""}</strong>
          <p>{displayedText}</p>
        </div>
      )}

      {/* chocies */}
      {showChoices && currentLine?.choices && (
        console.log("asking", currentLine.choices),
        <div className="choices-box">
          {currentLine.choices.map(choice => (
            <button key={choice.text} onClick={() => {
              setCurrentScene(choice.next);
              setDialogIndex(0);
              setSceneCharacters({});
              setShowChoices(false);
            }}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
