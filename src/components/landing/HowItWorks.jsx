import "./HowItWorks.css";

import {
  FaSignInAlt,
  FaTh,
  FaQuestionCircle,
  FaTrophy,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how">

      <div className="how-heading">

        <span>GAME FLOW</span>

        <h2>How Tech Bingo Works</h2>

        <p>
          Complete four simple steps to participate in Tech Bingo Quest.
          Every correct answer brings you one step closer to victory.
        </p>

      </div>

      <div className="steps">

        <div className="step-card">

          <div className="step-number">1</div>

          <div className="step-icon">

            <FaSignInAlt />

          </div>

          <h3>Join Event</h3>

          <p>

            Login using your registration details
            and enter the competition.

          </p>

        </div>

        <div className="arrow">

            ➜

        </div>

        <div className="step-card">

          <div className="step-number">2</div>

          <div className="step-icon">

            <FaTh />

          </div>

          <h3>Get Unique Board</h3>

          <p>

            Receive your own randomized
            Bingo grid with hidden questions.

          </p>

        </div>

        <div className="arrow">

            ➜

        </div>

        <div className="step-card">

          <div className="step-number">3</div>

          <div className="step-icon">

            <FaQuestionCircle />

          </div>

          <h3>Answer Questions</h3>

          <p>

            Solve each technical question correctly
            to unlock the next cell.

          </p>

        </div>

        <div className="arrow">

            ➜

        </div>

        <div className="step-card">

          <div className="step-number">4</div>

          <div className="step-icon">

            <FaTrophy />

          </div>

          <h3>Complete Bingo</h3>

          <p>

            Finish the required Bingo pattern
            before everyone else and win.

          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;