import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {

  // Local storage
  let initAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initAppointments) {
    initAppointments = [];
  }

  // appointments
  const [appointments, setAppointments] = useState(initAppointments);

  useEffect(() => {
    if (initAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments, initAppointments]);

  const createAppointment = (appointment) => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  }

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter( appointment => {
      return appointment.id !== id;
    }));
  }

  const title = appointments.length === 0 ? 'There is no appointments yet' : 'Appointments management'

  return (
    <Fragment>
    <h1>Patients Managements</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form 
            createAppointment={createAppointment}
          />
        </div>
        <div className="one-half column">
          <h2>{title}</h2>
          { appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          )) }
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
