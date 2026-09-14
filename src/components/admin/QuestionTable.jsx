import "./QuestionTable.css";
import questionBank from "../../data/questionBank";

function QuestionTable() {

  return (

    <div className="question-table">

      <h2>Question Bank</h2>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Type</th>
            <th>Points</th>

          </tr>

        </thead>

        <tbody>

          {questionBank.map((q) => (

            <tr key={q.id}>

              <td>{q.id}</td>
              <td>{q.category}</td>
              <td>{q.difficulty}</td>
              <td>{q.type}</td>
              <td>{q.points}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default QuestionTable;