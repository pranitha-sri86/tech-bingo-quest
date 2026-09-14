import "./CTA.css";
import { FaArrowRight, FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CTA() {

  const navigate = useNavigate();

  return (
    <section className="cta">

      <div className="cta-glow glow1"></div>
      <div className="cta-glow glow2"></div>

      <div className="cta-container">

        <span className="cta-tag">
          READY TO PLAY?
        </span>

        <h2>
          Join the Ultimate
          <span> Tech Bingo Challenge</span>
        </h2>

        <p>
          Put your technical knowledge to the test. Solve exciting questions,
          unlock your Bingo board, compete against other participants,
          and become the Tech Bingo Champion.
        </p>

        <div className="cta-buttons">

          <button
            className="cta-primary"
            onClick={() => navigate("/student-login")}
          >
            Join Event
            <FaArrowRight />
          </button>

          <button
            className="cta-secondary"
            onClick={() => navigate("/admin-login")}
          >
            <FaUserShield />
            Admin Login
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;