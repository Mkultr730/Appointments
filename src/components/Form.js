import React, { Fragment } from "react";

const Form = () => {
    return (
        <Fragment>
            <h2>Book appointment</h2>

            <form>
                <label>Pet's Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's name"
                />

                <label>Owner's Name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's name"
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                />
                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                ></textarea>
                
                <button 
                    type="submit" 
                    onClick="" 
                    className="u-full-width button-primary"
                >Make appointment</button>

            </form>
        </Fragment>
    );
}

export default Form;