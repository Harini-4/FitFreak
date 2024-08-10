// MoodCard.js
import React from 'react';

const MoodCard = ({ consecutiveDays }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#e0f2f1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <div style={{ fontSize: '20px', marginBottom: '10px', fontWeight: 'bold' }}>
        DID YOU LOG YOUR MOODS TODAY?
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#26a69a',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
          }}
        >
          <span style={{ color: 'white', fontSize: '30px' }}>✓</span>
        </div>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' ,marginBottom:'8px'}}>Nice work!</div>
          <div style={{ fontSize: '16px' }}>
            Including today, you have logged your moods for{' '}
            <span style={{ fontWeight: 'bold' }}>{consecutiveDays}</span> consecutive
            {consecutiveDays > 1 ? ' days' : ' day'}!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodCard;
