import React, { Fragment, useState } from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {

  // appointments
  const [appointments, setAppointments] = useState([]);

  const createAppointment = (appointment) => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  }

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
          <h2>Appointments management</h2>
          { appointments.map(appointment => (
            <Appointment 
              key={appointment.id}
              appointment={appointment}
            />
          )) }
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
