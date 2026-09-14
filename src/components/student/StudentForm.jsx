import "./StudentForm.css";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { joinEvent } from "../../api/studentApi";

function StudentForm() {

    const [name, setName] = useState("");
  
    const [rollNo, setRollNo] = useState("");
       const [department, setDepartment] = useState("");
      const navigate = useNavigate();
        const [eventCode, setEventCode] = useState("");
   

      const [error, setError] = useState("");

 const handleSubmit = async (e) => {

  e.preventDefault();

  if (
    name.trim() === "" ||
    rollNo.trim() === "" ||
    department.trim() === "" ||
    eventCode.trim() === ""
  ) {
    setError("Please fill all fields.");
    return;
  }

  try {

    const res = await joinEvent({
  name,
  rollNo,
  department,
  eventCode,
});

console.log("JOIN RESPONSE =", res);

localStorage.setItem(
  "student",
  JSON.stringify(res.student)
);

console.log(
  "LOCAL STORAGE =",
  localStorage.getItem("student")
);

navigate("/event-lobby");

  } catch (error) {

    setError(
      error.response?.data?.message ||
      "Unable to join event."
    );

  }

};

    return (

        <div className="student-card">

            <h1>Tech Bingo Quest</h1>

            <h3>Student Login</h3>

            <p>
                Enter your details to participate in the event.
            </p>

            <form onSubmit={handleSubmit}>

                <div className="input-group">

                    <FaUser className="input-icon"/>

                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                    />
                             <input
                                type="text"
                                 placeholder="Event Code"
                                 value={eventCode}
                                onChange={(e) => setEventCode(e.target.value)}
                                />
                </div>

                <input
  type="text"
  placeholder="Roll Number"
  value={rollNo}
  onChange={(e) => setRollNo(e.target.value)}
/>

<input
  type="text"
  placeholder="Department"
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
/>
                    {error && (

                     <p className="error-message">

                           {error}

                            </p>

                            )}


                <button className="join-button">

                    Join Event

                </button>

            </form>

        </div>

    );

}

export default StudentForm;