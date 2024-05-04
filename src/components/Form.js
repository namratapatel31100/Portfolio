import "./FormStyle.css";

import React from 'react';

const Form = () => {
  return (
    <div className="form">
        <form>
        <label>Your Name</label>
            <input type="text"></input>

            <label> Email</label>
            <input type="Email"></input>

            <label>Your Subject</label>
            <input type="text"></input>

            <label>Massage</label>
            <textarea rows="6" placeholder="Type your massage here"></textarea>
            <button className="btn">Submit</button>

        </form>
      
    </div>
  );
  
};

export default Form;