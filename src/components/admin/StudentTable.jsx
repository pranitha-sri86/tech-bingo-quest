import "./StudentTable.css";
import { useEffect, useState } from "react";
import { getStudents } from "../../api/studentApi";
import socket from "../../socket/socket";
function StudentTable() {

  const [students, setStudents] = useState([]);

 useEffect(() => {

    loadStudents();

    socket.on("studentJoined", (student) => {

        setStudents((prev) => [...prev, student]);

    });

    return () => {

        socket.off("studentJoined");

    };

}, []);
  async function loadStudents() {

    try {

      const data = await getStudents();

      setStudents(data.students);

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <div className="student-table">

      <h2>Joined Students</h2>

      <table>

        <thead>

          <tr>

            <th>Name</th>
            <th>Score</th>
            <th>Bingo</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student._id}>

              <td>{student.name}</td>

              <td>{student.score}</td>

              <td>{student.bingoLines}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default StudentTable;