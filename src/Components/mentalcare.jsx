import React from 'react';
import '../Assets/css/nav.css';
import '../Assets/css/mentalcare.css';
import Appointment from './Appointment';
import Mood from './Mood';



export default function Mentalcare() {
  return (
    <div className="mentalcare-container">
      <div className="mentalcare-page">
        <h1 style={{textAlign:'center'}}>How are you feeling today?</h1>
        <Mood/>
        <Appointment/>
      </div>
    </div>
  );
}
