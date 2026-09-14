import "./WaitingLobby.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function WaitingLobby() {

    const [event, setEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        checkEvent();

        const interval = setInterval(checkEvent, 2000);

        return () => clearInterval(interval);

    }, []);

    const checkEvent = async () => {

        try {

          
                const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/events`

            );

            setEvent(res.data.event);

            if (res.data.event?.isActive) {

                navigate("/waiting");

            }

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="waiting-page">

            <div className="waiting-card">

                <div className="waiting-header">

                    <div className="waiting-icon">
                        🎯
                    </div>

                    <h1>Tech Bingo Quest</h1>

                    <span className="waiting-badge">
                        WAITING LOBBY
                    </span>

                </div>


                <div className="waiting-status">

                    <div className="loader"></div>

                    <h2>Waiting for Admin...</h2>

                    <p>
                        The event will begin shortly.
                    </p>

                    <small>
                        Please stay on this page. The game will start automatically.
                    </small>

                </div>


                <div className="quick-rules">

                    <h3>⚡ Quick Rules</h3>

                    <div className="quick-rule-grid">

                        <div className="quick-rule">
                            <span>🎲</span>
                            <p>
                                <strong>25 Questions</strong>
                                <br />
                                Your board is uniquely assigned.
                            </p>
                        </div>


                        <div className="quick-rule">
                            <span>🔓</span>
                            <p>
                                <strong>Unlock & Play</strong>
                                <br />
                                Correct answers unlock nearby cells.
                            </p>
                        </div>


                        <div className="quick-rule">
                            <span>💻</span>
                            <p>
                                <strong>Coding</strong>
                                <br />
                                Wrong coding answers can be retried.
                            </p>
                        </div>


                        <div className="quick-rule">
                            <span>❓</span>
                            <p>
                                <strong>MCQ & Text</strong>
                                <br />
                                Follow the rules shown for each question.
                            </p>
                        </div>


                        <div className="quick-rule">
                            <span>⭐</span>
                            <p>
                                <strong>Earn Points</strong>
                                <br />
                                Correct answers increase your score.
                            </p>
                        </div>


                        <div className="quick-rule">
                            <span>🏆</span>
                            <p>
                                <strong>5 Bingo Lines</strong>
                                <br />
                                Complete 5 lines to reach the main winning target.
                            </p>
                        </div>

                    </div>

                </div>


                <div className="waiting-note">

                    <span>💡</span>

                    <p>
                        <strong>Be ready!</strong>
                        <br />
                        Once the admin starts the event, your Bingo board will become available.
                    </p>

                </div>

            </div>

        </div>

    );

}

export default WaitingLobby;