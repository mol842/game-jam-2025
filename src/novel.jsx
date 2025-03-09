import { useState } from "react";
import { scenes } from "./scenes";
import "./novel.css";
import { useEffect } from "react";
import { consoleLogger } from "@influxdata/influxdb-client";

export default function VisualNovel() {
  const [currentScene, setCurrentScene] = useState("start");
  const [dialogIndex, setDialogIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [sceneCharacters, setSceneCharacters] = useState({}); 

  const [displayedText, setDisplayedText] = useState("");
  const [skip, setSkip] = useState(false);
  

  const [textInput, setTextInput] = useState("");

  let scene = scenes.find(s => s.id === currentScene);
  let currentLine = scene.dialogue[dialogIndex];
  // const [currLine, setCurrLine] = useState("");

  const [paths, setPaths] = useState({
    "a": false,
    "b": false,
    "c": false
  }); 

  const replacements = new Map();
  replacements.set("$SMILE", ":))");

  useEffect(() => {
    console.log(currentScene)
    
    scene = scenes.find(s => s.id === currentScene);
  }, [currentScene]);

  useEffect(() => {
    console.log(dialogIndex)
    
    currentLine = scene.dialogue[dialogIndex];
  }, [dialogIndex]);

  useEffect(() => {    
    if (currentLine.characters) {
      setSceneCharacters(currentLine.characters);
    }

    if (currentLine.textInput) {
      setTextInput(currentLine.textInput.key);
    }

    // dpnt show slowly if its a choice box
    if (currentLine.choices) {
      setShowChoices(true);
      return;
    }
    // making the text display one letter at a time like its being typed
    let text = currentLine.text || "";

    // replace text 
    if (currentLine.replace) {
      replacements.forEach((value, key) => {
        console.log(key, value);
        text = text.replace(key, value);
      } 
    );

    }
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (skip) { 
        console.log("SKIPPING");
        clearInterval(interval);
        setDisplayedText(text);
      }
      else if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    console.log(sceneCharacters);
  }, [dialogIndex, currentScene]);
  
  const nextDialogue = () => {
    console.log("CHARCATERS:" , sceneCharacters);
    if (displayedText != currentLine.text) {
      setSkip(true);
      return;
    }
    console.log("CLICK")


    if (dialogIndex < scene.dialogue.length - 1) {
      setDialogIndex(dialogIndex + 1);
      console.log("NEXT")
    } 
    if (dialogIndex < scene.dialogue.length - 1) {
      let nextLine = scene.dialogue[dialogIndex + 1];
      console.log("NEXT LINE", nextLine);

      if (nextLine.jump) {
        console.log("JOMPING", nextLine.jump);
        setCurrentScene(nextLine.jump);
        console.log("what")
        setDialogIndex(nextLine.index? nextLine.index: 0);
        console.log("JUMPING");
      }
  
    }

    if (currentLine.jump) {
      console.log("JOMPING", currentLine.jump);
      setCurrentScene(currentLine.jump);
      console.log("what")

      setDialogIndex(currentLine.index? currentLine.index - 1: 0);
      console.log("JUMPING");
      nextDialogue();
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

  const nextScene = (choice) => {
    console.log(paths);
    if (!choice.path) {
      setCurrentScene(choice.next);
    }
    else if (paths[choice.path] === false) {
      setCurrentScene(choice.next);
      console.log("SETTING PATH", choice.path);
      setPaths({...paths, [choice.path]: true});
    }
    else {
      setCurrentScene(choice.else);
    }
  };

  const addReplacement = () => {
    const val = document.getElementById("replacementValue").value;
    replacements.set(textInput, val);
    setTextInput("");
    console.log(replacements);
  }
  return (
    <div className="game-container" >
      <img className="background" src={scene.background} />

      {/* character image */}
      {/* {currentLine.character && (
        <img
          className="character center"
          src={currentLine.character.expressions[currentLine.expression]}
          alt={currentLine.character.name}
        />
      )} */}

      {sceneCharacters && Object.entries(sceneCharacters).map(([position, details]) => (
        // console.log(position, details),
        <div key={details.name} className={`character-container-${position}`}>
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
              nextScene(choice);
              setDialogIndex(choice.index? choice.index : 0);
              // setSceneCharacters({});
              setShowChoices(false);
            }}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
      
      {/* text input */}
      {textInput && (
        <div className="choices-box">
          <input type="text" id="replacementValue" />
          <button onClick={addReplacement()}>Submit</button>
        </div>
      )}
      

    </div>
  );
}
