import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import socket from "../../socket/socket";
import { FaPause } from "react-icons/fa";

function AdminDashboard() {

    const [students, setStudents] = useState([]);
    const [event, setEvent] = useState(null);

    useEffect(() => {

        loadStudents();
        loadEvent();

        socket.on("studentJoined", loadStudents);
        socket.on("leaderboardUpdated", loadStudents);

        return () => {

            socket.off("studentJoined");
            socket.off("leaderboardUpdated");

        };

    }, []);

    const loadStudents = async () => {

        try {

            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/students`
            );

            setStudents(
                res.data.students.sort((a, b) => {
                    if (b.bingoLines !== a.bingoLines) {
                        return b.bingoLines - a.bingoLines;
                    }
                    return b.score - a.score;
                })
            );

        } catch (err) {
            console.log(err);
        }

    };

    const loadEvent = async () => {

        try {

            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/events`
            );

            setEvent(res.data.event);

        } catch (err) {
            console.log(err);
        }

    };

    const startEvent = async () => {

        try {

            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/events/start`
            );

            alert("✅ Event Started");

            loadEvent();

        } catch (err) {
            console.log(err);
        }

    };

    const pauseEvent = async () => {

        console.log("Pause button clicked");

        try {

            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/events/pause`
            );

            console.log(res.data);

            alert("Competition Paused");

            loadEvent();

        } catch (err) {

            console.log(err);

        }

    };

    const resumeEvent = async () => {

        try {

            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/events/resume`
            );

            alert("▶ Competition Resumed");

            loadEvent();

        } catch (err) {

            console.log(err);

        }

    };

    const stopEvent = async () => {

        try {

            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/events/stop`
            );

            alert("🛑 Event Stopped");

            loadEvent();

        } catch (err) {

            console.log(err);

        }

    };

    const resetGame = async () => {

        if (!window.confirm("Reset Entire Game?"))
            return;

        try {

            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/events/reset`
            );

            alert("♻ Game Reset Successfully");

            setStudents([]);

            loadEvent();

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="admin-page">

            <h1>Tech Bingo Admin Dashboard</h1>

            <div className="event-box">

                <h2>{event?.eventName}</h2>

                <p>
                    <strong>Event Code :</strong> {event?.eventCode}
                </p>

                <p>
                    <strong>Duration :</strong> {event?.duration} Minutes
                </p>

                <p>
                    <strong>Winning Lines :</strong> {event?.winningLines}
                </p>

                <h3>
                    Status :
                    {event?.isActive
                        ? " 🟢 Active"
                        : " 🔴 Stopped"}
                </h3>

                <div className="button-group">

                    <button onClick={startEvent}>
                        ▶ Start Event
                    </button>

                    <button
                        className="pause-btn"
                        onClick={
                            event?.isPaused
                                ? resumeEvent
                                : pauseEvent
                        }
                    >
                        <FaPause />

                        {event?.isPaused
                            ? " Resume Competition"
                            : " Pause Competition"}
                    </button>

                    <button onClick={stopEvent}>
                        ⏹ Stop Event
                    </button>

                    <button
                        className="reset-btn"
                        onClick={resetGame}
                    >
                        ♻ Reset Game
                    </button>

                </div>

            </div>

            <h2>
                Students ({students.length})
            </h2>

            <table>

                <thead>

                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Department</th>
                        <th>Score</th>
                        <th>Lines</th>
                    </tr>

                </thead>

                <tbody>

                    {students.map((student, index) => (

                        <tr key={student._id}>

                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.rollNo}</td>
                            <td>{student.department}</td>
                            <td>{student.score}</td>
                            <td>{student.bingoLines}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default AdminDashboard;