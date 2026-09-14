import "./CreateEvent.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import generateEventCode from "../../utils/generateEventCode";
import { createEvent as createEventAPI } from "../../api/eventApi";
import EventDetails from "../../components/admin/EventDetails";
import GameSettings from "../../components/admin/GameSettings";
import EventSummary from "../../components/admin/EventSummary";

function CreateEvent(){

  const [eventName,setEventName]=useState("");
  const [startTime,setStartTime]=useState("");

  const [duration,setDuration]=useState(30);
  const [questions,setQuestions]=useState(25);
  const [winningLines,setWinningLines]=useState(5);

  const [eventCode,setEventCode]=useState("");
  const navigate = useNavigate();
async function createEvent() {

  try {

    const code = generateEventCode();

    const eventData = {
      eventName,
      eventCode: code,
      duration,
      winningLines,
      startTime,
    };

    const result = await createEventAPI(eventData);

    setEventCode(result.event.eventCode);

     alert("✅ Event Created Successfully");

      navigate("/admin-dashboard");

  } catch (error) {

    console.error(error);

    alert("Failed to create event");

  }

}

  return(

    <div className="create-event-page">

      <div className="event-card">

        <h1>Create Event</h1>

        <EventDetails

          eventName={eventName}
          setEventName={setEventName}

          startTime={startTime}
          setStartTime={setStartTime}

        />

        <GameSettings

          duration={duration}
          setDuration={setDuration}

          questions={questions}
          setQuestions={setQuestions}

          winningLines={winningLines}
          setWinningLines={setWinningLines}

        />

        <button onClick={createEvent}>

          Create Event

        </button>

        <EventSummary

          eventCode={eventCode}

          eventName={eventName}

          duration={duration}

          questions={questions}

          winningLines={winningLines}

          startTime={startTime}

        />

      </div>

    </div>

  );

}

export default CreateEvent;