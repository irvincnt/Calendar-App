import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-modal';
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2'
import { uiCloseModal } from '../../actions/ui';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const now = moment().minutes(0).seconds(0).add(1, 'hours')
const finish = now.clone().add(3, 'hours')


const CalendarModal = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector(state => state.ui)
  const [startDate, setStartDate] = useState(now.toDate());
  const [endDate, setEndDate] = useState(finish.toDate());
  const [titleValidate, setTitleValidate] = useState(true);
  const [formValues, setFormValues] = useState({
    title: 'Evento',
    notes: '',
    start: now.toDate(),
    end: finish.toDate()
  });

  const {title, notes, start, end} = formValues;

  const closeModal = () => {
    dispatch( uiCloseModal() );
  }

  const handlerStartDateChange = (e) => {
    setStartDate(e)
    setFormValues({
      ...formValues,
      start: e
    })
  }
  
  const handlerEndDateChange = (e) => {
    setEndDate(e)
    setFormValues({
      ...formValues,
      end: e
    })
  }

  const handlerInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    console.log(formValues)

    const momentStart = moment(start)
    const momentEnd = moment(end)

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire('Error', 'La fecha fin debe ser mayor a la fecha inicio', 'error')
    }

    if (title.trim().length < 2) {
      return setTitleValidate(false)
    }
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      style={customStyles}
      contentLabel="Example Modal"
      className='modal'
      overlayClassName='modal-fondo'
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={handlerSubmitForm}>

          <div className="form-group">
              <label>Fecha y hora inicio</label>
              <DateTimePicker
                onChange={handlerStartDateChange}
                value={startDate}
                className='form-control'
              />
          </div>

          <div className="form-group">
              <label>Fecha y hora fin</label>
              <DateTimePicker
                onChange={handlerEndDateChange}
                value={endDate}
                className='form-control'
                minDate={startDate}
              />
          </div>

          <hr />
          <div className="form-group">
              <label>Titulo y notas</label>
              <input 
                  type="text" 
                  className={`form-control ${!titleValidate && 'is-invalid'}`}
                  placeholder="Título del evento"
                  name="title"
                  autoComplete="off"
                  value={title}
                  onChange={handlerInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>

          <div className="form-group">
              <textarea 
                  type="text" 
                  className="form-control"
                  placeholder="Notas"
                  rows="5"
                  name="notes"
                  value={notes}
                  onChange={handlerInputChange}
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>

          <button
              type="submit"
              className="btn btn-outline-primary btn-block"
          >
              <i className="far fa-save"></i>
              <span> Guardar</span>
          </button>

      </form>
    </Modal>
  );
}
 
export default CalendarModal;