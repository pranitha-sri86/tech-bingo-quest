import "./ControlPanel.css";
import {
  FaPlay,
  FaPause,
  FaStop,
  FaRedo,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ControlPanel() {

  const navigate = useNavigate();

  const startCompetition = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/events/start`
      );

      alert("Competition Started");

      navigate("/game");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="control-panel">

      <h2>
        Event Controls
      </h2>

      <div className="control-buttons">

        <button
          className="start-btn"
          onClick={startCompetition}
        >
          <FaPlay />
          Start Competition
        </button>

        <button className="pause-btn">
          <FaPause />
          Pause Competition
        </button>

        <button
          className="reset-btn"
          onClick={() => navigate("/create-event")}
        >
          <FaRedo />
          Create Event
        </button>

        <button
          className="reset-btn"
          onClick={() => navigate("/question-bank")}
        >
          📚 Question Bank
        </button>

        <button className="end-btn">
          <FaStop />
          ⏹ End Competition
        </button>

      </div>

    </div>
  );
}

export default ControlPanel;