import "./QuestionModal.css";
import { useState, useEffect } from "react";
import axios from "axios";

function QuestionModal({
  open,
  onClose,
  question,
  studentId,
  cell,
  onCorrect,
}) {
  const [answer, setAnswer] = useState("");
  const [language, setLanguage] = useState("C");
  const [loading, setLoading] = useState(false);

  // =====================================================
  // RESET WHEN QUESTION CHANGES
  // =====================================================

  useEffect(() => {
    setAnswer("");
    setLoading(false);

    if (
      question?.allowedLanguages &&
      question.allowedLanguages.length > 0
    ) {
      setLanguage(question.allowedLanguages[0]);
    } else {
      setLanguage("C");
    }
  }, [question]);

  // =====================================================
  // DON'T RENDER
  // =====================================================

  if (!open || !question) {
    return null;
  }

  // =====================================================
  // QUESTION TYPE
  // =====================================================

  const questionType = String(
    question.type || ""
  ).toLowerCase();

  const isCoding = questionType === "coding";

  const isMCQ = questionType === "mcq";

  const isText = questionType === "text";

  // =====================================================
  // SUBMIT CODING QUESTION
  // =====================================================

  const submitCode = async () => {
    if (loading) return;

    if (!answer || answer.trim() === "") {
      alert("⚠️ Please write your code before submitting.");
      return;
    }

    try {
      setLoading(true);

      console.log("=================================");
      console.log("CODING SUBMISSION");
      console.log("Student:", studentId);
      console.log("Cell:", cell);
      console.log("Language:", language);
      console.log("=================================");

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/game/submit-code`,
        {
          studentId,
          cell: Number(cell),
          language,
          code: answer,
        }
      );

      console.log("CODE RESULT:", res.data);

      // =================================================
      // CODING CORRECT
      // =================================================

      if (res.data.success) {
        alert(
          res.data.message ||
            "✅ All test cases passed!"
        );

        // Update Game.jsx
        if (onCorrect) {
          onCorrect(res.data);
        }

        // Winner
        if (res.data.isWinner) {
          alert("🏆 Congratulations! You won!");
        }

        // Close modal
        onClose();

        setAnswer("");

        return;
      }

      // =================================================
      // CODING WRONG
      // =================================================

      // =================================================
// CODING WRONG
// =================================================

alert(
  res.data.message ||
    "❌ Incorrect. This question is closed for now. Adjacent cells have been unlocked."
);

// Backend returns updated:
// - unlockedCells
// - completedCells
// - currentQuestionCell
// - score
// etc.
// Pass that state to Game.jsx

if (onCorrect) {
  onCorrect(res.data);
}

// Close current question
onClose();

setAnswer("");

return;

      alert(
        err.response?.data?.message ||
          "Unable to submit code."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // SUBMIT TEXT / MCQ
  // =====================================================

  const submitAnswer = async () => {
    if (loading) return;

    if (!answer || answer.trim() === "") {
      alert(
        isMCQ
          ? "⚠️ Please select an option."
          : "⚠️ Please enter an answer before submitting."
      );

      return;
    }

    try {
      setLoading(true);

      console.log("=================================");
      console.log("ANSWER SUBMISSION");
      console.log("Student:", studentId);
      console.log("Cell:", cell);
      console.log("Type:", questionType);
      console.log("Answer:", answer);
      console.log("=================================");

      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/game/answer`,
  {
    studentId,
    cell: Number(cell),
    answer: answer.trim(),
  }
);

      console.log(
        "ANSWER RESULT:",
        res.data
      );

      // =================================================
      // MCQ
      // =================================================

      if (isMCQ) {

        // Correct OR wrong:
        // Both move to next adjacent question.

        if (res.data.correct) {
          alert("✅ Correct Answer!");
        } else {
          alert(
            "❌ Wrong Answer!\n\nMoving to an adjacent question."
          );
        }

        // IMPORTANT:
        // Backend already decides whether the cell
        // is completed and which adjacent cells unlock.

        if (onCorrect) {
          onCorrect(res.data);
        }

        // Close current question
        onClose();

        setAnswer("");

        return;
      }

      // =================================================
      // NORMAL TEXT QUESTION
      // =================================================

      if (isText) {

        // -----------------------------------------------
        // TEXT CORRECT
        // -----------------------------------------------

        if (res.data.success) {

          alert("✅ Correct!");

          if (onCorrect) {
            onCorrect(res.data);
          }

          if (res.data.isWinner) {
            alert(
              "🏆 Congratulations! You won!"
            );
          }

          onClose();

          setAnswer("");

          return;
        }

        // -----------------------------------------------
        // TEXT WRONG
        // -----------------------------------------------

        alert(
          res.data.message ||
            "❌ Wrong Answer. Please try again."
        );

        // IMPORTANT:
        // Keep modal open.
        // Don't call onCorrect().
        // Don't unlock another cell.
        return;
      }

      // =================================================
      // FALLBACK
      // =================================================

      if (res.data.success) {

        alert("✅ Correct!");

        if (onCorrect) {
          onCorrect(res.data);
        }

        onClose();

        setAnswer("");

      } else {

        alert(
          res.data.message ||
            "❌ Wrong Answer."
        );
      }

    } catch (err) {

      console.error(
        "ANSWER SUBMISSION ERROR:",
        err
      );

      alert(
        err.response?.data?.message ||
          "Unable to submit answer."
      );

    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // OPTION SELECTION
  // =====================================================

  const handleOptionSelect = (option) => {

    // Don't allow changing answer while submitting
    if (loading) return;

    setAnswer(option);
  };

  // =====================================================
  // MAIN SUBMIT
  // =====================================================

  const handleSubmit = () => {

    if (loading) return;

    // Coding → submit-code endpoint
    if (isCoding) {
      submitCode();
      return;
    }

    // MCQ / Text → answer endpoint
    submitAnswer();
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="modal-overlay">

      <div className="modal">

        <div className="question-overlay">

          <div className="question-modal">

            {/* ========================================= */}
            {/* HEADER */}
            {/* ========================================= */}

            <div className="question-header">

              <div>

                <div className="question-category">
                  {question.category}
                </div>

                <div className="question-points">
                  {question.points || 10} Points
                </div>

              </div>

              <div className="question-difficulty">
                {question.difficulty}
              </div>

            </div>

            {/* ========================================= */}
            {/* QUESTION */}
            {/* ========================================= */}

            <div className="question-text">
              {question.question}
            </div>

            {/* ========================================= */}
            {/* CODING QUESTION */}
            {/* ========================================= */}

            {isCoding && (

              <>

                <div className="coding-controls">

                  <label htmlFor="language">
                    Programming Language
                  </label>

                  <select
                    id="language"
                    value={language}
                    onChange={(e) =>
                      setLanguage(e.target.value)
                    }
                    disabled={loading}
                    className="language-select"
                  >

                    {(
                      question.allowedLanguages &&
                      question.allowedLanguages.length > 0
                        ? question.allowedLanguages
                        : [
                            "C",
                            "C++",
                            "Python",
                            "Java",
                          ]
                    ).map((lang) => (

                      <option
                        key={lang}
                        value={lang}
                      >
                        {lang}
                      </option>

                    ))}

                  </select>

                </div>

                <textarea
                  className="code-editor"
                  placeholder={`Write your ${language} code here...`}
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                  disabled={loading}
                  spellCheck="false"
                />

              </>

            )}

            {/* ========================================= */}
            {/* MCQ QUESTION */}
            {/* ========================================= */}

            {isMCQ && (

              <div className="mcq-options">

                {(question.options || []).map(
                  (option, index) => {

                    const selected =
                      answer === option;

                    return (

                      <button
                        key={`${option}-${index}`}
                        type="button"
                        className={`mcq-option ${
                          selected
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleOptionSelect(option)
                        }
                        disabled={loading}
                      >

                        <span className="mcq-letter">
                          {String.fromCharCode(
                            65 + index
                          )}
                        </span>

                        <span className="mcq-text">
                          {option}
                        </span>

                      </button>

                    );
                  }
                )}

              </div>

            )}

            {/* ========================================= */}
            {/* TEXT QUESTION */}
            {/* ========================================= */}

            {isText && (

              <textarea
                className="question-input"
                placeholder="Enter your answer..."
                value={answer}
                onChange={(e) =>
                  setAnswer(e.target.value)
                }
                disabled={loading}
              />

            )}

            {/* ========================================= */}
            {/* SELECTED MCQ */}
            {/* ========================================= */}

            {isMCQ && answer && (

              <div className="selected-answer">

                Selected answer:{" "}

                <strong>
                  {answer}
                </strong>

              </div>

            )}

            {/* ========================================= */}
            {/* BUTTONS */}
            {/* ========================================= */}

            <div className="question-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>

              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
                disabled={loading}
              >

                {loading
                  ? "Submitting..."
                  : isCoding
                  ? "Submit Code"
                  : "Submit Answer"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default QuestionModal;