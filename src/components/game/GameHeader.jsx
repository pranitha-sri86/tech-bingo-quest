import "./GameHeader.css";

function GameHeader() {
  return (
    <div className="game-header">
          <GameTimer minutes={30}/>
      <div className="player-info">
        <h2>Player : Pranitha</h2>
        <p>Score : 120</p>
      </div>

      <div className="game-info">
        <div className="timer">
          ⏱ 05:00
        </div>

        <div className="bingo-progress">
          Bingo : 0 / 5
        </div>
      </div>

    </div>
  );
}

export default GameHeader;