import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import StudentLogin from "../pages/StudentLogin/StudentLogin";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import CompetitionEnded from "../pages/CompetitionEnded/CompetitionEnded";
// Pages not ready yet
import WaitingLobby from "../pages/WaitingLobby/WaitingLobby";
 import EventLobby from "../pages/EventLobby/EventLobby";
import Game from "../pages/Game/Game";
 import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Winner from "../pages/Winner/Winner";
 import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
 import QuestionBank from "../pages/QuestionBank/QuestionBank";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/student-login" element={<StudentLogin />} />
       
       <Route
       path="/game"
      element={<Game />}
     />


      <Route

path="/leaderboard"

element={<Leaderboard/>}

/>

<Route
    path="/winner"
    element={<Winner />}
/>
       <Route
       path="/question-bank"
       element={<QuestionBank />}
         />
         <Route
    path="/competition-ended"
    element={<CompetitionEnded />}
/>

      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
           path="/event-lobby"
          element={<EventLobby />}
       />
       <Route
    path="/admin-dashboard"
    element={<AdminDashboard />}
      />
      <Route path="/create-event" element={<CreateEvent />} />
    </Routes>
  );
}

export default AppRoutes;