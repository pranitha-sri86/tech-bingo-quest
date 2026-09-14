import "./Features.css";
import FeatureCard from "./FeatureCard";

import {
  FaBrain,
  FaThLarge,
  FaBolt,
  FaTrophy,
  FaLock,
  FaBullseye
} from "react-icons/fa";

const featureData = [
  {
    icon: <FaBrain />,
    title: "Technical Challenges",
    description:
      "Solve questions from Programming, DSA, AI, Web Development, Computer Science, Aptitude and Logical Reasoning."
  },
  {
    icon: <FaThLarge />,
    title: "Unique Bingo Board",
    description:
      "Every participant gets a unique Bingo board generated randomly for a fair competition."
  },
  {
    icon: <FaBolt />,
    title: "Real-Time Gameplay",
    description:
      "Questions are verified instantly and your board updates automatically after every correct answer."
  },
  {
    icon: <FaTrophy />,
    title: "Live Leaderboard",
    description:
      "Watch rankings change in real time and compete against all participants."
  },
  {
    icon: <FaLock />,
    title: "One Question At A Time",
    description:
      "Only one grid remains active until the current question is answered correctly."
  },
  {
    icon: <FaBullseye />,
    title: "Skill-Based Competition",
    description:
      "Winning depends on knowledge, accuracy and speed—not luck."
  }
];

function Features() {
  return (
    <section className="features">

      <div className="features-heading">

        <span>FEATURES</span>

        <h2>
          Why Tech Bingo Quest?
        </h2>

        <p>
          An exciting technical competition designed to test
          your knowledge, speed and problem-solving ability.
        </p>

      </div>

      <div className="features-grid">

        {featureData.map((feature, index) => (

          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />

        ))}

      </div>

    </section>
  );
}

export default Features;