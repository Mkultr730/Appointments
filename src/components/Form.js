import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({createAppointment}) => {

    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    });

    const [error, setError] = useState(false);

    const updateState = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    }

    const { pet, owner, date, time, symptoms } = appointment;

    const submitAppointmet = (e) => {
        e.preventDefault();

        // Validations
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // ID
        appointment.id = uuidv4();

        // Create Appointment
        createAppointment(appointment);

        //Refresh Form
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        });
    }


    return (
        <Fragment>
            <h2>Book appointment</h2>

            { error ? <p className="alerta-error">All fields are requiered</p> : null }

            <form
                onSubmit={submitAppointmet}
            >
                <label>Pet's Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's name"
                    onChange={updateState}
                    value={ pet }
                />

                <label>Owner's Name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's name"
                    onChange={updateState}
                    value={ owner }
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={updateState}
                    value={ date }
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={updateState}
                    value={ time }
                />
                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={updateState}
                    value={ symptoms }
                ></textarea>
                
                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >Make appointment</button>

            </form>
        </Fragment>
    );
}

Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}

export default Form;