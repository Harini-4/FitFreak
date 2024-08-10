import React, { useState } from 'react';
import MoodSlider from './Slider';
import MoodCard from './MoodCard';

const Mood = () => {
  const [sleepHours, setSleepHours] = useState(0);
  const [depressedMood, setDepressedMood] = useState(0);
  const [elevatedMood, setElevatedMood] = useState(0);
  const [irritability, setIrritability] = useState(0);
  const [anxiety, setAnxiety] = useState(0);
  const [isMoodLogged, setIsMoodLogged] = useState(false);
  const [consecutiveDays, setConsecutiveDays] = useState(1);

  const handleLogMood = () => {
    setIsMoodLogged(true);
    setConsecutiveDays(consecutiveDays + 1);
  };

  return (
    <div
      className="mood-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        minHeight: '500px',
      }}
    >
      {isMoodLogged && <MoodCard consecutiveDays={consecutiveDays} />}

      <div
        className="slider-container"
        style={{ width: '100%', maxWidth: '800px', marginBottom: '30px' }}
      >
        <MoodSlider
          label="Hours slept last night:"
          min={0}
          max={10}
          value={sleepHours}
          color="blue"
          onChange={setSleepHours}
        />
      </div>
      <div
        className="grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <MoodSlider
          label="Today's most extreme depressed mood:"
          min={0}
          max={3}
          value={depressedMood}
          options={['NONE', 'MILD', 'MODERATE', 'SEVERE']}
          onChange={setDepressedMood}
        />
        <MoodSlider
          label="Today's most extreme elevated mood:"
          min={0}
          max={3}
          value={elevatedMood}
          options={['NONE', 'MILD', 'MODERATE', 'SEVERE']}
          onChange={setElevatedMood}
        />
        <MoodSlider
          label="Today's most extreme irritability:"
          min={0}
          max={3}
          value={irritability}
          options={['NONE', 'MILD', 'MODERATE', 'SEVERE']}
          onChange={setIrritability}
        />
        <MoodSlider
          label="Today's most extreme anxiety:"
          min={0}
          max={3}
          value={anxiety}
          options={['NONE', 'MILD', 'MODERATE', 'SEVERE']}
          onChange={setAnxiety}
        />
      </div>

      {!isMoodLogged && (
        <button
          onClick={handleLogMood}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: 'rgb(255, 83, 83)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Log Mood
        </button>
      )}
    </div>
  );
}

export default Mood;
