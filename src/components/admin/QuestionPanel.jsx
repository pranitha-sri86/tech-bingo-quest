import "./QuestionPanel.css";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaFileImport,
} from "react-icons/fa";

function QuestionPanel() {

  return (

    <div className="question-panel">

      <h2>Question Management</h2>

      <div className="question-buttons">

        <button className="add-btn">

          <FaPlus />

          Add Question

        </button>

        <button className="edit-btn">

          <FaEdit />

          Edit Question

        </button>

        <button className="delete-btn">

          <FaTrash />

          Delete Question

        </button>

        <button className="import-btn">

          <FaFileImport />

          Import CSV

        </button>

      </div>

    </div>

  );

}

export default QuestionPanel;