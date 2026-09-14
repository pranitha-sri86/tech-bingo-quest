import "./DashboardCards.css";
import {
  FaUsers,
  FaQuestionCircle,
  FaPlayCircle,
  FaTrophy,
} from "react-icons/fa";

function DashboardCards() {

  const cards = [
    {
      icon: <FaUsers />,
      title: "Participants",
      value: "18",
    },
    {
      icon: <FaQuestionCircle />,
      title: "Questions",
      value: "75",
    },
    {
      icon: <FaPlayCircle />,
      title: "Game Status",
      value: "Waiting",
    },
    {
      icon: <FaTrophy />,
      title: "Winner",
      value: "Not Yet",
    },
  ];

  return (

    <div className="dashboard-cards">

      {cards.map((card, index) => (

        <div className="dashboard-card" key={index}>

          <div className="card-icon">

            {card.icon}

          </div>

          <h3>{card.title}</h3>

          <h2>{card.value}</h2>

        </div>

      ))}

    </div>

  );

}

export default DashboardCards;