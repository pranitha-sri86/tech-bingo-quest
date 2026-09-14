import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CompetitionEnded() {

    const navigate = useNavigate();

    const [phase, setPhase] = useState(1);
    const [count, setCount] = useState(3);

    useEffect(() => {

        // Show "Competition Ended" for 2 seconds
        const phaseTimer = setTimeout(() => {
            setPhase(2);
        }, 2000);

        return () => clearTimeout(phaseTimer);

    }, []);

    useEffect(() => {

        if (phase !== 2) return;

        const interval = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        const timer = setTimeout(() => {
            navigate("/winner");
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };

    }, [phase]);

    return (

        <div className="competition-ended">

            {phase === 1 ? (

                <>
                    <h1>🏁 Competition Ended</h1>
                    <h3>Thank you for participating!</h3>
                </>

            ) : (

                <>
                    <h1>Calculating Final Results...</h1>
                    <h2>{count}</h2>
                </>

            )}

        </div>

    );
}

export default CompetitionEnded;