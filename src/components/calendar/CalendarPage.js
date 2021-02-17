import React, { useState } from 'react';
import Navbar from '../ui/Navbar';
import moment from 'moment'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../helpers/calendar.messages';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es-mx'
import CalendarEvent from './CalendarEvent';

moment.locale('es-mx')
const localizer = momentLocalizer(moment)

const event = [{
  title: 'Cumpleaños de ',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
  notes: 'Comprar pastel',
  user: {
    _id: '123',
    name: 'Irvincnt'
  }
}]

const CalendarPage = () => {
  const [currentView, setCurrentView] = useState(localStorage.getItem('lastView' || 'month'));
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'while'
    }
    
    return {
      style
    }
  }

  const changeView = (view) => {
    setCurrentView(view)
    localStorage.setItem('lastView', view)
  }

  return ( 
    <div className="calendar-view">
      <Navbar />
        <Calendar
          localizer={localizer}
          events={event}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
          onView={changeView}
          view={currentView}
          components={{
            event: CalendarEvent
          }}
        />
    </div>
   );
}
 
export default CalendarPage;