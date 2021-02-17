import React from 'react';
import Navbar from '../ui/Navbar';
import moment from 'moment'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../helpers/calendar.messages';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es-mx'

moment.locale('es-mx')
const localizer = momentLocalizer(moment)

const event = [{
  title: 'Cumpleaños de ',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
  notes: 'Comprar pastel'
}]

const CalendarPage = () => {
  return ( 
    <div className="calendar-view">
      <Navbar />
        <Calendar
          localizer={localizer}
          events={event}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
        />
    </div>
   );
}
 
export default CalendarPage;