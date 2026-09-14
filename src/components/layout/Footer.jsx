import "./Footer.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-about">

          <h2>Tech Bingo Quest</h2>

          <p>
            Tech Bingo Quest is an interactive technical competition
            organized by <strong>Tech Forge</strong> to help students
            improve problem-solving, programming, aptitude and technical
            knowledge through an engaging Bingo experience.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Rules</a>
          <a href="#">Leaderboard</a>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>

            <FaEnvelope />

            techforge@college.edu

          </p>

          <p>

            <FaMapMarkerAlt />

            Tech Forge Club

          </p>

        </div>

        {/* Social */}

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">

              <FaLinkedin />

            </a>

            <a href="#">

              <FaInstagram />

            </a>

            <a href="#">

              <FaGithub />

            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © 2026 Tech Bingo Quest | Designed & Developed by Tech Forge

        </p>

        <button onClick={scrollTop}>

          <FaArrowUp />

        </button>

      </div>

    </footer>
  );
}

export default Footer;