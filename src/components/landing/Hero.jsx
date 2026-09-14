import "./Hero.css";
import { FaArrowRight, FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Hero() {

    const navigate = useNavigate();
  return (
    <section className="hero">

      {/* Background Glow */}

      <div className="hero-circle hero-circle1"></div>
      <div className="hero-circle hero-circle2"></div>
      <div className="hero-circle hero-circle3"></div>

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <span className="hero-tag">
            TECH FORGE PRESENTS
          </span>

          <h1>
            TECH BINGO
            <span> QUEST</span>
          </h1>

          <h3>
            Think • Solve • Compete • Win
          </h3>

          <p>

            Experience an exciting technical challenge where every participant
            receives a unique Bingo board filled with hidden technical
            questions. Answer correctly, complete your Bingo pattern,
            and climb the live leaderboard.

          </p>

          <div className="hero-buttons">

            <button
                   className="join-btn"
                    onClick={() => navigate("/student-login")}
>
                       Join Event
                       <FaArrowRight />
             </button>

            <button
                 className="admin-btn"
                  onClick={() => navigate("/admin-login")}
>
                 <FaUserShield />
                   Admin Login
            </button>
          </div>

          <div className="hero-stats">

            <div className="stat-box">

              <h2>25+</h2>

              <p>Questions</p>

            </div>

            <div className="stat-box">

              <h2>200+</h2>

              <p>Participants</p>

            </div>

            <div className="stat-box">

              <h2>Live</h2>

              <p>Leaderboard</p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="bingo-card">

            <div className="bingo-title">

              BINGO

            </div>

            <div className="grid">

              {Array.from({ length: 25 }).map((_, index) => (

                <div
                  key={index}
                  className={
                    index % 6 === 0
                      ? "cell active"
                      : "cell"
                  }
                >

                  ?

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;