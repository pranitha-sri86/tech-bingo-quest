import { useEffect, useState } from "react";
import "./GameTimer.css";

function GameTimer({ minutes }) {

  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(prev => {

        if (prev <= 1) {

          clearInterval(timer);

          alert("⏰ Time's Up!");

          return 0;

        }

        return prev - 1;

      });

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  const mins = Math.floor(timeLeft/60);

  const secs = timeLeft%60;

  return (

    <div className="game-timer">

      ⏱ {String(mins).padStart(2,"0")}:
      {String(secs).padStart(2,"0")}

    </div>

  );

}

export default GameTimer;