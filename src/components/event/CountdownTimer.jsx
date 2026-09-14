import { useEffect, useState } from "react";
import "./CountdownTimer.css";

function CountdownTimer() {

    const [seconds, setSeconds] = useState(30);

    useEffect(() => {

        if (seconds <= 0) return;

        const timer = setInterval(() => {

            setSeconds(prev => prev - 1);

        }, 1000);

        return () => clearInterval(timer);

    }, [seconds]);

    return (

        <div className="countdown-card">

            <h3>Competition Starts In</h3>

            <h1>{seconds}s</h1>

        </div>

    );

}

export default CountdownTimer;