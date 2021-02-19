import React from 'react';

const CalendarEvent = ({ event }) => {
  const {title, user} = event
  return (
    <div>
      <strong>{title}</strong>
    </div>
  );
}
 
export default CalendarEvent;