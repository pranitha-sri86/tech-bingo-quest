function EventSummary({

  eventCode,
  eventName,
  duration,
  questions,
  winningLines,
  startTime

}){

  if(!eventCode) return null;

  return(

    <div>

      <h2>✅ Event Created</h2>

      <p>Event : {eventName}</p>

      <p>Code : {eventCode}</p>

      <p>Duration : {duration} mins</p>

      <p>Questions : {questions}</p>

      <p>Winning Lines : {winningLines}</p>

      <p>Start Time : {startTime}</p>

    </div>

  );

}

export default EventSummary;