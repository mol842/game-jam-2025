import { useState } from "react";
import { scenes } from "./scenes";
import "./novel.css";
import { useEffect } from "react";
import MazeGame from "./mazeGame";


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
    "c": false,
    "test1": false,
    "test2": false,
    "test3": false,
  }); 
  const [replacements, setReplacements] = useState([]);

  const [accessoriesOscar, setAccessoriesOscar] = useState([]);

  const addAccessory = (accessory) => {
    setAccessoriesOscar([...accessoriesOscar, accessory]);
  };


  useEffect(() => {
    console.log(currentScene)
    
    scene = scenes.find(s => s.id === currentScene);
  }, [currentScene]);

  useEffect(() => {
    // check if all are done, to end.

    if (currentLine.checkPaths) {
      console.log("CHECKING PATHS COMPLETE?", currentLine.checkPaths);
      console.log(paths)
      const pathStatus = currentLine.checkPaths.map((p) => { console.log(p); return paths[p]; });
      console.log(pathStatus);
      if (pathStatus.every(val => val === true)) {
        console.log("ALL PATHS DONE");
        setCurrentScene(currentLine.else);
        // remove Oscars stupid hats etc
        setAccessoriesOscar([]);

        if (!replacements.length){
          setReplacements(
            {
              "$HAPPY": ":)",
              "$SAD": ":(",
              "$MOURN": ":((("
            }
          );
          console.log("DEFAULT REPLACEMENTS");
        }
          
      } else {
        console.log("NOT ALL PATHS DONE");
        nextDialogue();
      }
    }


    console.log(dialogIndex)
    
    currentLine = scene.dialogue[dialogIndex];
  }, [dialogIndex]);

  useEffect(() => {
    if (currentLine.characters) {
      setSceneCharacters(currentLine.characters);
    }

    if (currentLine.textInput) {
      setTextInput(currentLine.textInput);
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
      replacements.forEach((x) => {
        console.log(x.key, x.value);
        text = text.replaceAll(x.key, x.value);
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
    }, text.length / 20);
    console.log(sceneCharacters);
  }, [dialogIndex, currentScene]);
  
  const nextDialogue = () => {
    console.log("CHARCATERS:" , sceneCharacters);
    // if (displayedText != currentLine.text) {
    //   setSkip(true);
    //   return;
    // }
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

  // adds text to be replaced when replace is true
  // wow... that was a sentence.
  const addReplacement = () => {
    const val = document.getElementById("replacementValue").value;
    if (val === ""){
      return;
    };
    console.log(textInput, val);
    setReplacements([...replacements, {key: textInput, value: val}]);

    setTextInput("");
    console.log(replacements);
    nextDialogue();
  }
  return (
    <div className="game-container" >
      <img className="background" src={scene.background} />

      {/* character images */}
      {sceneCharacters && Object.entries(sceneCharacters).map(([position, details]) => (
        console.log(position, details),
        <>
        <div key={details.name} className={`character-container-${position}`}>
          { 
            (details.character.name === "Oscar") && (
              accessoriesOscar.map((accessory) => (
                console.log("ACCESSORY", accessory),
                <img className={`accessory-${accessory.type}-${position}`}
                src={accessory.img} />
            )))
            }

          <img className="character" src={details.character.expressions[details.expression]}/>
        </div>

        </>
      ))}


      {/* object above */}
        {currentLine.item && (
        <img className="item" src={currentLine.item} alt="Item" />
      )}


      {/* dialog */}
      {currentLine.text && !textInput && !currentLine.accessoryOptions && (
        <div style={{"background": (currentLine.speaker && currentLine.speaker.colour ? currentLine.speaker.colour : "rgba(0, 0, 0, 0.7)")}} className="dialog-box" onClick={nextDialogue}>
          <div style={{"text-align": "center"}}>
          <strong>{currentLine.speaker ? currentLine.speaker.name : ""}</strong>
          </div>
          <p style={{"margin-left": "5%"}}>{displayedText}</p>
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
              setShowChoices(false);
            }}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
      {
        currentLine.accessoryOptions && (
          <>

          <div className="accessory-container">
          <strong>{currentLine?.text? currentLine.text : "choose an accessory"}</strong>
            <div className="accessory-grid">

              {currentLine.accessoryOptions.map(choice => (
                <img className="accessory-choice" src={choice.option} key={choice.option} onClick={() => {
                  addAccessory({type: choice.position, img: choice.option});
                  nextDialogue();
                }}>
                  {choice.text}
                </img>
              ))}
            </div>
        </div>
        </>

        )

      }
      
      {/* text input */}
      {textInput && (
        <div className="choices-box">
          {currentLine.text && 
            <p>{currentLine.text}</p>
          }
          <strong>Enter text:</strong>
          <input type="text" id="replacementValue" />
          <button onClick={addReplacement}>Submit</button>
        </div>
      )}
      
      { 
        currentLine.maze &&
        <MazeGame onFinish={nextDialogue}/>
      }

    </div>
  );
}
