import "./EventLobby.css";
import Rules from "../../components/landing/Rules";
import { useEffect, useState } from "react";
import { getCurrentEvent } from "../../api/eventApi";
import { getStudents } from "../../api/studentApi";
import socket from "../../socket/socket";
import { useNavigate } from "react-router-dom";
function EventLobby() {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [event, setEvent] = useState(null);
  const [students, setStudents] = useState([]);
  useEffect(() => {

    const studentData = JSON.parse(localStorage.getItem("student"));
    setStudent(studentData);

    loadEvent();
    loadStudents();
    
    socket.on("gameStarted", () => {

    console.log("🎮 Game Started");

    navigate("/game");

});

  socket.on("studentJoined", async () => {

  const studentRes = await getStudents();

  const eventStudents = studentRes.students.filter(
    (s) => s.eventCode === event?.eventCode
  );

  setStudents(eventStudents);

});

     return () => {

  socket.off("studentJoined");
  socket.off("gameStarted");
   };
  }, []);


   const loadStudents = async () => {

  try {

    const res = await getStudents();

    setStudents(
      res.students.filter(
        (s) => s.eventCode === event?.eventCode
      )
    );

  } catch (err) {

    console.log(err);

  }

};
   const loadEvent = async () => {
  try {
    const res = await getCurrentEvent();

    setEvent(res.event);

    const studentRes = await getStudents();

    const eventStudents = studentRes.students.filter(
      (s) => s.eventCode === res.event.eventCode
    );

    setStudents(eventStudents);

  } catch (err) {
    console.log(err);
  }
};
  if (!event) {

    return <h2 style={{ color: "white" }}>Loading Event...</h2>;

  }

  return (

    <div style={{ color: "white", padding: "40px" }}>

      <h1>Tech Bingo Quest</h1>

      <hr />

      <h2>{event.eventName}</h2>

      <p>Name : {student?.name}</p>

      <p>Roll No : {student?.rollNo}</p>

      <p>Department : {student?.department}</p>

      <p>Event Code : {event.eventCode}</p>

      <p>Duration : {event.duration} Minutes</p>

      <p>Winning Lines : {event.winningLines}</p>

      <h3>Waiting for Admin...</h3>
      <hr />

             <h3>Players Joined</h3>

<p>Total : {students.length}</p>

{students.map((s) => (
  <p key={s._id}>
    ✅ {s.name}
  </p>
))}

<Rules />
    </div>

  );

}

export default EventLobby;