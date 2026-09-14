function GameSettings({

  duration,
  setDuration,

  questions,
  setQuestions,

  winningLines,
  setWinningLines

}){

  return(

    <div>

      <h2>🎮 Game Settings</h2>

      <input
        type="number"
        value={duration}
        onChange={(e)=>setDuration(e.target.value)}
      />

      <input
        type="number"
        value={questions}
        onChange={(e)=>setQuestions(e.target.value)}
      />

      <input
        type="number"
        value={winningLines}
        onChange={(e)=>setWinningLines(e.target.value)}
      />

    </div>

  );

}

export default GameSettings;