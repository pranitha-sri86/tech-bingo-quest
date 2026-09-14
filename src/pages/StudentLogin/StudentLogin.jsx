import "./StudentLogin.css";
import StudentForm from "../../components/student/StudentForm";

function StudentLogin() {
  return (
    <div className="student-login-page">

      {/* Background Effects */}

      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>
      <div className="bg-circle bg3"></div>

      <StudentForm />

    </div>
  );
}

export default StudentLogin;