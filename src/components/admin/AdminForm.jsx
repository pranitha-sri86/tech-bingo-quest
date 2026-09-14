import "./AdminForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserShield,
} from "react-icons/fa";

function AdminForm() {

  const navigate = useNavigate();

  const ADMIN_PASSWORD = "ADMIN2026";

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (password !== ADMIN_PASSWORD) {

      setError("Invalid Admin Password");
      return;

    }

    setError("");

    navigate("/create-event");

  };

  return (

    <div className="admin-card">

      <h1>Tech Bingo Quest</h1>

      <h3>Administrator Login</h3>

      <p>
        Login to control the Tech Bingo Event.
      </p>

      <form onSubmit={handleSubmit}>

        <div className="input-group">

          <FaUserShield className="input-icon"/>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <span
            className="eye-icon"
            onClick={()=>setShowPassword(!showPassword)}
          >

            {showPassword ? <FaEyeSlash/> : <FaEye/>}

          </span>

        </div>

        {error && (

          <p className="error-message">

            {error}

          </p>

        )}

        <button className="admin-button">

          Login as Admin

        </button>

      </form>

    </div>

  );

}

export default AdminForm;