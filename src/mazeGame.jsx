import './maze.css';
import coffeeShop from './assets/coffee-shop.png';
import lustigNeutral from './assets/lustig.png';
import { locations } from './mazeOptions';
import { useEffect, useState } from 'react';

export default function MazeGame({ onFinish }) {
  // console.log(locations)
  // console.log(locations.find(location => location.space === "0, 0"))
  
  const [playerLocation, setPlayerLocation] = useState({});
  const [currImage, setCurrImage] = useState(null);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const start = async () => {
    setPlayerLocation(locations.find(location => location.space === "0, 0"));
    setCurrImage(playerLocation.img);
    console.log("started")
    setStarted(true);
  }
  useEffect(() => {
    if (playerLocation.img) {
      setCurrImage(playerLocation.img);
    }
  }
  , [playerLocation]);


  const movePlayer = (direction) => {
    console.log("moving", direction)
    console.log(playerLocation) 
    let newLocationSpace = playerLocation[direction];
    console.log(newLocationSpace)
    if (newLocationSpace) {
      if (newLocationSpace === "win") {
        setFinished(true);
      }
      setPlayerLocation(locations.find(location => location.space === newLocationSpace));
      setCurrImage(playerLocation.img);
      console.log(playerLocation)
    }
  }


  return (
    <div className="game-container">
      { currImage? 
      <div className="maze-container">
        <img className='maze-background' src={currImage} alt="maze"/> 
      </div>
      : null }

      <div className="controls">
      {started && !finished?
        <>
          <button id="leftBtn" onClick={() => movePlayer("left")}>Left</button>
          <button id="rightBtn" onClick={() => movePlayer("right")}>Right</button>
          <button id="upBtn" onClick={() => movePlayer("up")}>Up</button>
          <button id="downBtn" onClick={() => movePlayer("down")}>Down</button>
        </>
        : finished?
        <button id="start" onClick={onFinish}>finish</button>
        :
        <button id="start" onClick={start}>start</button>

        }
      </div>
  </div>

  );
}