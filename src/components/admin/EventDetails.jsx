function EventDetails({

  eventName,
  setEventName,
  startTime,
  setStartTime

}){

  return(

    <div>

      <h2>📋 Event Details</h2>

      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e)=>setEventName(e.target.value)}
      />

      <input
        type="time"
        value={startTime}
        onChange={(e)=>setStartTime(e.target.value)}
      />

    </div>

  );

}

export default EventDetails;