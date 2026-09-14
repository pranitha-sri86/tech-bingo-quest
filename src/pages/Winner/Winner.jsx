import "./Winner.css";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import axios from "axios";

function Winner() {

    const [winners, setWinners] = useState([]);

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    // =========================
    // Screen Resize
    // =========================

    useEffect(() => {

        const handleResize = () => {

            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });

        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);


    // =========================
    // Load Winners From Backend
    // =========================

    useEffect(() => {

        const loadWinners = async () => {

            try {

               const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/leaderboard/winners`
);
                console.log(
                    "🏆 WINNERS FROM BACKEND:",
                    res.data.winners
                );

                setWinners(res.data.winners || []);

            } catch (err) {

                console.error(
                    "❌ Failed to load winners:",
                    err
                );

            }

        };

        loadWinners();

    }, []);


    // =========================
    // Loading
    // =========================

    if (winners.length === 0) {

        return (

            <div className="winner-page">

                <div className="winner-container">

                    <div className="trophy">
                        🏆
                    </div>

                    <h1 className="winner-title">
                        COMPETITION COMPLETED
                    </h1>

                    <h2>
                        Loading Winners...
                    </h2>

                </div>

            </div>

        );

    }


    // =========================
    // Winner Page
    // =========================

    return (

        <>

            <Confetti
                width={size.width}
                height={size.height}
                recycle={false}
                numberOfPieces={500}
            />

            <div className="winner-page">

                <div className="winner-container">

                    <div className="trophy">
                        🏆
                    </div>

                    <h1 className="winner-title">
                        FINAL WINNERS
                    </h1>

                    <p className="winner-subtitle">
                        Tech Bingo Quest
                    </p>


                    {/* =========================
                        ALL WINNERS
                    ========================= */}

                    {winners.map((winner) => (

                        <div
                            key={winner._id}
                            className={`winner-card rank-${winner.winnerRank}`}
                        >

                            <div className="rank-icon">

                                {winner.winnerRank === 1 && "🥇"}

                                {winner.winnerRank === 2 && "🥈"}

                                {winner.winnerRank === 3 && "🥉"}

                                {winner.winnerRank > 3 &&
                                    `#${winner.winnerRank}`
                                }

                            </div>


                            <div className="winner-info">

                                <h2>
                                    {winner.name}
                                </h2>

                                <h3>

                                    {winner.winnerRank === 1 &&
                                        "CHAMPION"
                                    }

                                    {winner.winnerRank === 2 &&
                                        "RUNNER-UP"
                                    }

                                    {winner.winnerRank === 3 &&
                                        "THIRD PLACE"
                                    }

                                    {winner.winnerRank > 3 &&
                                        `${winner.winnerRank}th PLACE`
                                    }

                                </h3>

                                <p>
                                    Score: {winner.score}
                                </p>

                                <p>
                                    Bingo Lines: {winner.bingoLines}
                                </p>

                            </div>

                        </div>

                    ))}


                    <div className="winner-message">

                        🎉 Congratulations to all the winners! 🎉

                        <br />

                        You made it to the top of

                        <br />

                        <strong>
                            Tech Bingo Quest
                        </strong>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Winner;