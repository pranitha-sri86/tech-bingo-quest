import { useEffect, useState } from "react";
import { getQuestions } from "../../api/questionApi";

function QuestionBank() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const data = await getQuestions();
      setQuestions(data.questions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Question Bank</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((q) => (
            <tr key={q._id}>
              <td>{q.category}</td>
              <td>{q.difficulty}</td>
              <td>{q.question}</td>
              <td>{q.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuestionBank;