import React, { useState } from 'react';
import Navbar from '../ui/Navbar';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar'


import { messages } from '../helpers/calendar.messages';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es-mx'

import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import AddNewFab from '../ui/AddNewFab';

import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';

moment.locale('es-mx')
const localizer = momentLocalizer(moment)

const CalendarPage = () => {
  const dispatch = useDispatch();
  const {events} = useSelector(state => state.calendar);

  const [currentView, setCurrentView] = useState(localStorage.getItem('lastView' || 'month'));

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  }

  const onSelectEvent = (event) => {
    dispatch(eventSetActive(event))
    dispatch(uiOpenModal());
  }

  const eventStyleGetter = () => {
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
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={changeView}
          view={currentView}
          components={{
            event: CalendarEvent
          }}
        />
        <AddNewFab />
        <CalendarModal />
    </div>
   );
}
 
export default CalendarPage;