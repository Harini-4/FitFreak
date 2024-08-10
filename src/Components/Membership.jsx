// src/components/MembershipPlans.js
import React from 'react';
import '../Assets/css/membership.css';

const plans = [
  {
    name: 'Basic',
    price: '₹260',
    duration: '12 months',
    trainer: '00 person',
    amountOfPeople: '01 person',
    visits: 'Unlimited'
  },
  {
    name: 'Standard',
    price: '₹457',
    duration: '12 months',
    trainer: '01 person',
    amountOfPeople: '01 person',
    visits: 'Unlimited'
  },
  {
    name: 'Premium',
    price: '₹790',
    duration: '12 months',
    trainer: '01 person',
    amountOfPeople: '01 person',
    visits: 'Unlimited'
  }
];

const MembershipPlans = () => {
  return (
    <div className="membership-plans">
      <h2>Membership Plans</h2>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-price">{plan.price}<span>/01 mo</span></div>
            <div className="plan-details">
              <p>Duration<br /><strong>{plan.duration}</strong></p>
              <p>Personal trainer<br /><strong>{plan.trainer}</strong></p>
              <p>Amount of people<br /><strong>{plan.amountOfPeople}</strong></p>
              <p>Number of visits<br /><strong>{plan.visits}</strong></p>
            </div>
            <button className="start-now-btn">Start Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
