import "./BingoBoard.css";
import checkBingo from "../../utils/checkBingo";

function BingoBoard({ student, onCellClick }) {

  if (!student) return null;

  const board = student.board || [];

  // =====================================================
  // BINGO PROGRESS
  // =====================================================

  const completedCells = (student.completedCells || []).map(Number);

  const completedLines = checkBingo(completedCells);


  // =====================================================
  // CAN OPEN CELL?
  // =====================================================

  const canOpen = (cellNumber) => {
   const closedCells = (student.closedCells || []).map(Number);
   if (closedCells.includes(Number(cellNumber))) {
  return false;
}
    // Already completed
    if (completedCells.includes(cellNumber)) {
      return false;
    }

    // -------------------------------------------------
    // FIRST QUESTION
    // Any cell can be opened
    // -------------------------------------------------

    if (!student.gameStarted) {
      return true;
    }

    // -------------------------------------------------
    // QUESTION CURRENTLY OPEN
    // Only current question can be interacted with
    // -------------------------------------------------

    if (
      student.currentQuestionCell !== null &&
      student.currentQuestionCell !== undefined
    ) {
      return (
        Number(student.currentQuestionCell) ===
        Number(cellNumber)
      );
    }

    // -------------------------------------------------
    // AFTER ANSWERING
    // Only unlocked adjacent cells can be opened
    // -------------------------------------------------

    return (student.unlockedCells || [])
      .map(Number)
      .includes(Number(cellNumber));
  };


  // =====================================================
  // CELL CLICK
  // =====================================================

  const handleCellClick = (cellNumber) => {

    // Already completed
    if (completedCells.includes(cellNumber)) {
      return;
    }

    // Cell cannot currently be opened
    if (!canOpen(cellNumber)) {

      if (
        student.currentQuestionCell !== null &&
        student.currentQuestionCell !== undefined &&
        Number(student.currentQuestionCell) !==
          Number(cellNumber)
      ) {

        alert("🔒 Finish current question first");
      }

      return;
    }

    onCellClick(cellNumber);
  };


  // =====================================================
  // BOARD
  // =====================================================

  return (
    <>

      {/* =================================================
          BINGO PROGRESS
      ================================================= */}

      <div className="progress-card">

        <h2>⭐ Bingo Progress</h2>

        <h3>
          {completedLines.length} / 5 Lines
        </h3>

      </div>


      {/* =================================================
          COMPLETED LINES
      ================================================= */}

      <div className="line-status">

        <h3>Completed Lines</h3>

        {completedLines.length === 0 ? (

          <p>No Bingo Yet</p>

        ) : (

          completedLines.map((line, index) => (

            <p key={index}>
              ✅ Line {index + 1}
            </p>

          ))

        )}

      </div>


      {/* =================================================
          BINGO BOARD
      ================================================= */}

      <div className="board-container">

        <div className="bingo-title">

          <span>B</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>O</span>

        </div>


        <div className="bingo-grid">

          {board.map((row, rowIndex) =>

            row.map((number, colIndex) => {

              const cellNumber =
                rowIndex * 5 + colIndex + 1;


              const completed =
                completedCells.includes(cellNumber);


              let cellClass = "cell";


              // -------------------------------------------------
              // COMPLETED
              // -------------------------------------------------

              if (completed) {

                cellClass += " completed";

              }


              // -------------------------------------------------
              // ACTIVE
              // -------------------------------------------------

              else if (canOpen(cellNumber)) {

                cellClass += " active";

              }


              // -------------------------------------------------
              // LOCKED
              // -------------------------------------------------

              else {

                cellClass += " locked";

              }


              return (

                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={cellClass}
                  onClick={() =>
                    handleCellClick(cellNumber)
                  }
                >

                  {number}

                </div>

              );

            })

          )}

        </div>

      </div>

    </>
  );
}

export default BingoBoard;