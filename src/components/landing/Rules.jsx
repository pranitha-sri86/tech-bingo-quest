import "./Rules.css";

import {
  FaCheckCircle,
  FaClock,
  FaLock,
  FaPuzzlePiece,
  FaTrophy,
  FaExclamationTriangle,
  FaGamepad,
  FaCode,
  FaListAlt,
  FaStar,
  FaBook,
  FaBolt,
} from "react-icons/fa";

const rules = [
  {
    icon: <FaGamepad />,
    title: "5 × 5 Bingo Board",
    description:
      "Each participant receives a 5 × 5 Bingo board containing 25 uniquely assigned questions. Every cell represents one question, and the center cell is a normal question like every other cell.",
  },

  {
    icon: <FaCheckCircle />,
    title: "Unique Board",
    description:
      "Every participant gets their own question arrangement. Boards are different between players, although the same questions may appear on different participants' boards.",
  },

  {
    icon: <FaLock />,
    title: "Unlock & Play",
    description:
      "You can open an unlocked cell and answer its question. After opening a question, finish that question before opening another cell.",
  },

  {
    icon: <FaBolt />,
    title: "Correct Answer",
    description:
      "A correct answer completes the cell, awards the points assigned to that question, and unlocks its adjacent cells.",
  },

  {
    icon: <FaCode />,
    title: "Coding Questions",
    description:
      "Coding questions require you to write and submit a solution using the allowed programming language. Your code is checked against the question's test cases.",
  },

  {
    icon: <FaPuzzlePiece />,
    title: "Coding Retry",
    description:
      "If a coding answer is incorrect, you do not lose the opportunity to solve it. The question remains incomplete and can be attempted again later.",
  },

  {
    icon: <FaListAlt />,
    title: "MCQ Questions",
    description:
      "For multiple-choice questions, carefully select the correct option. If your answer is wrong, that MCQ is closed and cannot be attempted again.",
  },

  {
    icon: <FaBook />,
    title: "Text Questions",
    description:
      "Text questions require you to enter the correct answer. If your answer is wrong, the question remains retryable.",
  },

  {
    icon: <FaStar />,
    title: "Scoring",
    description:
      "Every correctly answered question gives you the points assigned to that question. Wrong answers do not award points. Your score updates as you successfully complete questions.",
  },

  {
    icon: <FaTrophy />,
    title: "Complete 5 Bingo Lines",
    description:
      "The main winning target is to complete 5 Bingo lines. Horizontal, vertical, and the two diagonal patterns count toward your Bingo total.",
  },

  {
    icon: <FaTrophy />,
    title: "If Nobody Gets 5 Lines",
    description:
      "If no participant completes 5 Bingo lines before the competition ends, the participant with the highest score becomes the winner.",
  },

  {
    icon: <FaTrophy />,
    title: "Tie Between Winners",
    description:
      "If multiple participants complete 5 Bingo lines, their scores can be used as the tiebreaker to determine the higher-ranked winner.",
  },

  {
    icon: <FaClock />,
    title: "Race Against Time",
    description:
      "The competition is time-based. Use your time wisely, solve questions quickly, and build your Bingo lines before other participants.",
  },

  {
    icon: <FaExclamationTriangle />,
    title: "Fair Play",
    description:
      "Do not refresh the game unnecessarily, use multiple logins, or take external assistance during the competition. Play fairly and compete on your own skills.",
  },
];

function Rules() {
  return (
    <section className="rules">

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <div className="rules-header">

        <span>GAME RULES</span>

        <h2>Rules of Tech Bingo Quest</h2>

        <p>
          Understand how the game works, how questions are answered,
          how points are scored, and how the winner is decided.
        </p>

      </div>


      {/* ========================= */}
      {/* HOW TO PLAY */}
      {/* ========================= */}

      <div className="rules-subsection">

        <div className="rules-subtitle">
          <FaGamepad />
          <h2>🎯 How to Play</h2>
        </div>

        <div className="how-to-play">

          <div className="play-step">
            <span>1</span>
            <div>
              <h3>Start the Game</h3>
              <p>
                Once the event starts, your personal 5 × 5 Bingo board
                will be available.
              </p>
            </div>
          </div>

          <div className="play-step">
            <span>2</span>
            <div>
              <h3>Choose an Unlocked Cell</h3>
              <p>
                Click any cell that is currently unlocked and open
                its assigned question.
              </p>
            </div>
          </div>

          <div className="play-step">
            <span>3</span>
            <div>
              <h3>Answer the Question</h3>
              <p>
                Solve the coding, MCQ, or text question shown to you.
              </p>
            </div>
          </div>

          <div className="play-step">
            <span>4</span>
            <div>
              <h3>Earn Points</h3>
              <p>
                A correct answer completes the cell and awards its
                assigned points.
              </p>
            </div>
          </div>

          <div className="play-step">
            <span>5</span>
            <div>
              <h3>Unlock Nearby Cells</h3>
              <p>
                Successfully completed cells unlock their adjacent
                cells so you can continue playing.
              </p>
            </div>
          </div>

          <div className="play-step">
            <span>6</span>
            <div>
              <h3>Build Your Bingo</h3>
              <p>
                Complete cells strategically and try to complete
                5 Bingo lines before the competition ends.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* ========================= */}
      {/* QUESTION TYPES */}
      {/* ========================= */}

      <div className="rules-subsection">

        <div className="rules-subtitle">
          <FaPuzzlePiece />
          <h2>🧩 Question Types</h2>
        </div>

        <div className="question-types-grid">

          <div className="question-type-card">
            <FaCode />
            <h3>Coding</h3>
            <p>
              Write and submit a programming solution.
              Coding questions can be retried if your first
              submission is incorrect.
            </p>
          </div>

          <div className="question-type-card">
            <FaListAlt />
            <h3>MCQ</h3>
            <p>
              Select the correct option from the given choices.
              A wrong MCQ answer closes that question permanently.
            </p>
          </div>

          <div className="question-type-card">
            <FaBook />
            <h3>Text</h3>
            <p>
              Type the required answer. If your answer is wrong,
              you can attempt the question again.
            </p>
          </div>

        </div>

      </div>


      {/* ========================= */}
      {/* CATEGORIES */}
      {/* ========================= */}

      <div className="rules-subsection">

        <div className="rules-subtitle">
          <FaBook />
          <h2>📚 Question Categories</h2>
        </div>

        <div className="categories">

          <span>🧠 DSA</span>
          <span>🗄️ DBMS</span>
          <span>🛢️ SQL</span>
          <span>🌐 Web Development</span>
          <span>🤖 AI / ML</span>
          <span>📊 Aptitude</span>
          <span>🧩 Logical Reasoning</span>
          <span>🔧 Git / GitHub</span>
          <span>💡 Technology</span>

        </div>

      </div>


      {/* ========================= */}
      {/* KEY POINTS */}
      {/* ========================= */}

      <div className="rules-subsection">

        <div className="rules-subtitle">
          <FaBolt />
          <h2>⭐ Key Points</h2>
        </div>

        <div className="key-points-grid">

          <div>🎲 25 questions on every player's board</div>

          <div>🔀 Every player gets a different board</div>

          <div>🧠 At least 8 coding questions</div>

          <div>🔓 Correct answers unlock adjacent cells</div>

          <div>❌ Wrong coding answers can be retried</div>

          <div>🚫 Wrong MCQ answers are closed</div>

          <div>✍️ Wrong text answers can be retried</div>

          <div>⭐ Correct answers earn points</div>

          <div>🎯 Cell 13 is a normal DSA coding question</div>

          <div>🏆 5 completed Bingo lines is the main winning target</div>

        </div>

      </div>


      {/* ========================= */}
      {/* SCORING */}
      {/* ========================= */}

      <div className="rules-subsection scoring-rules">

        <div className="rules-subtitle">
          <FaStar />
          <h2>🏆 Scoring</h2>
        </div>

        <div className="scoring-content">

          <p>
            ⭐ Each question has its own assigned point value.
          </p>

          <p>
            ✅ Points are awarded only when the question is answered correctly.
          </p>

          <p>
            ❌ Incorrect answers do not award points.
          </p>

          <p>
            📈 Your total score increases as you successfully complete questions.
          </p>

          <p>
            🥇 If nobody completes 5 Bingo lines, the highest score wins.
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* WINNING */}
      {/* ========================= */}

      <div className="rules-subsection winning-rules">

        <div className="rules-subtitle">
          <FaTrophy />
          <h2>🥇 Winning Rules</h2>
        </div>

        <div className="winning-box">

          <h3>Complete 5 Bingo Lines 🏆</h3>

          <p>
            A Bingo line can be completed horizontally,
            vertically, or diagonally.
          </p>

          <p>
            The player who reaches 5 completed Bingo lines
            achieves the main winning condition.
          </p>

          <p>
            If nobody reaches 5 lines, the player with the
            highest score wins the competition.
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* FAIR PLAY */}
      {/* ========================= */}

      <div className="rules-subsection fair-play">

        <div className="rules-subtitle">
          <FaExclamationTriangle />
          <h2>⚠️ Fair Play</h2>
        </div>

        <p>
          Play honestly and follow the event instructions.
          Multiple logins, unnecessary refreshing, or external
          assistance during the competition may affect fair play.
        </p>

      </div>


      {/* ========================= */}
      {/* EXISTING RULE CARDS */}
      {/* ========================= */}

      <div className="rules-header existing-rules-header">

        <span>REMEMBER</span>

        <h2>Important Game Rules</h2>

      </div>


      <div className="rules-grid">

        {rules.map((rule, index) => (

          <div className="rule-card" key={index}>

            <div className="rule-icon">
              {rule.icon}
            </div>

            <h3>{rule.title}</h3>

            <p>{rule.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Rules;