import "./Game.css";
import { useEffect, useState } from "react";
import axios from "axios";
import socket from "../../socket/socket";
import { useNavigate } from "react-router-dom";

import BingoBoard from "../../components/game/BingoBoard";
import QuestionModal from "../../components/game/QuestionModal";

function Game() {
  const [student, setStudent] = useState(null);
  const [question, setQuestion] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const navigate = useNavigate();

  // =====================================================
  // LOAD STUDENT
  // =====================================================

  useEffect(() => {
    const saved = localStorage.getItem("student");

    if (saved) {
      try {
        const studentData = JSON.parse(saved);

        console.log("STUDENT FROM LOCAL STORAGE");
        console.log(studentData);

        setStudent(studentData);
      } catch (error) {
        console.error("Invalid student data:", error);

        localStorage.removeItem("student");
      }
    }
  }, []);

  // =====================================================
  // SOCKET EVENTS
  // =====================================================

  useEffect(() => {
    const handleWinner = (winner) => {
      console.log("🏆 Winner Received");

      localStorage.setItem(
        "winner",
        JSON.stringify(winner)
      );

      navigate("/competition-ended");
    };

    const handleCompetitionEnded = () => {
      console.log("🛑 Competition Ended");
    };

    const handleGamePaused = () => {
      console.log("⏸ Game Paused");

      setPaused(true);
    };

    const handleGameResumed = () => {
      console.log("▶ Game Resumed");

      setPaused(false);
    };

    socket.on("winner", handleWinner);
    socket.on(
      "competitionEnded",
      handleCompetitionEnded
    );
    socket.on("gamePaused", handleGamePaused);
    socket.on("gameResumed", handleGameResumed);

    return () => {
      socket.off("winner", handleWinner);

      socket.off(
        "competitionEnded",
        handleCompetitionEnded
      );

      socket.off(
        "gamePaused",
        handleGamePaused
      );

      socket.off(
        "gameResumed",
        handleGameResumed
      );
    };
  }, [navigate]);

  // =====================================================
  // OPEN QUESTION
  // =====================================================

  const openQuestion = async (cell) => {
    if (!student) {
      alert("Student information not available.");
      return;
    }

    // Prevent opening another question
    // while current question is open
    if (modalOpen) {
      return;
    }

    try {
      console.log("Opening cell:", cell);

      // =================================================
      // LOCK QUESTION
      // =================================================

      const lockRes = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/game/open-question`,
        {
          studentId: student._id,
          cell: Number(cell),
        }
      );

      if (!lockRes.data.success) {
        alert(
          lockRes.data.message ||
            "Unable to open this question."
        );

        return;
      }


      // =================================================
      // UPDATE STUDENT
      // =================================================

      const updatedStudent =
        lockRes.data.student;

      if (updatedStudent) {
        setStudent(updatedStudent);

        localStorage.setItem(
          "student",
          JSON.stringify(updatedStudent)
        );
      }

    

      // =================================================
      // GET QUESTION
      // =================================================

      const questionRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/game/question/${student._id}/${cell}`
      );

      console.log(
        "QUESTION FROM SERVER:",
        questionRes.data
      );

      if (!questionRes.data.success) {
        alert(
          questionRes.data.message ||
            "Unable to load question."
        );

        return;
      }

      // =================================================
      // STORE QUESTION
      // =================================================

      setQuestion(questionRes.data);

      setSelectedCell(Number(cell));

      setModalOpen(true);

    } catch (err) {
      console.error(
        "OPEN QUESTION ERROR:",
        err
      );

      alert(
        err.response?.data?.message ||
          "Unable to open question."
      );
    }
  };

  // =====================================================
  // HANDLE GAME UPDATE
  // =====================================================

  const handleGameUpdate = (data) => {
    console.log("GAME UPDATE:", data);

    if (!student) {
      return;
    }

    const updatedStudent = {
      ...student,

      score:
        data.score ?? student.score,

      completedCells:
        data.completedCells ??
        student.completedCells,

      unlockedCells:
  data.unlockedCells ??
  student.unlockedCells,

closedCells:
  data.closedCells ??
  student.closedCells ??
  [],

currentQuestionCell:
  data.currentQuestionCell ?? null,

      gameStarted:
        data.gameStarted ??
        student.gameStarted,

      bingoLines:
        data.bingoLines ??
        student.bingoLines,

      isWinner:
        data.isWinner ??
        student.isWinner,

      winnerRank:
        data.winnerRank ??
        student.winnerRank,
    };

    console.log(
      "UPDATED STUDENT:",
      updatedStudent
    );

    setStudent(updatedStudent);

    localStorage.setItem(
      "student",
      JSON.stringify(updatedStudent)
    );

    // Close question
    setQuestion(null);

    setSelectedCell(null);

    setModalOpen(false);
  };

  // =====================================================
  // PAUSED SCREEN
  // =====================================================

  if (paused) {
    return (
      <div className="game-page">

        <h1>⏸ Competition Paused</h1>

        <h2>Please wait...</h2>

        <p>
          The admin has temporarily paused
          the competition.
        </p>

        <p>
          The game will resume automatically.
        </p>

      </div>
    );
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (!student) {
    return <h2>Loading...</h2>;
  }

  // =====================================================
  // GAME UI
  // =====================================================

  return (
    <div className="game-page">

      <h1>Tech Bingo Quest</h1>

      <h2>{student.name}</h2>

      <h3>
        Score : {student.score || 0}
      </h3>

      <BingoBoard
        student={student}
        onCellClick={openQuestion}
      />

      <QuestionModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setQuestion(null);
          setSelectedCell(null);
        }}
        question={question}
        studentId={student._id}
        cell={selectedCell}
        onCorrect={handleGameUpdate}
      />

    </div>
  );
}

export default Game;