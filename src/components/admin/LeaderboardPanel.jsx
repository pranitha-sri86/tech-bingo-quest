import "./LeaderboardPanel.css";
import { FaTrophy, FaMedal } from "react-icons/fa";

function LeaderboardPanel() {

  const players = [

    {
      rank: 1,
      name: "Pranitha",
      score: 120
    },

    {
      rank: 2,
      name: "Rahul",
      score: 110
    },

    {
      rank: 3,
      name: "Kiran",
      score: 95
    },

    {
      rank: 4,
      name: "Akash",
      score: 80
    }

  ];

  return (

    <div className="leaderboard-panel">

      <h2>

        <FaTrophy />

        Live Leaderboard

      </h2>

      {

        players.map((player)=>(

          <div
            className="leaderboard-row"
            key={player.rank}
          >

            <div className="rank">

              <FaMedal />

              #{player.rank}

            </div>

            <div className="player-name">

              {player.name}

            </div>

            <div className="player-score">

              {player.score} pts

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default LeaderboardPanel;