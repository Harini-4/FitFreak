import React, { useState, useEffect } from 'react';
import Calendar from './Calendar.jsx';
import MoodSlider from './Slider';
import MoodCard from './MoodCard';
import axios from 'axios';

const Mood = () => {
  const [sleepHours, setSleepHours] = useState(0);
  const [depressedMood, setDepressedMood] = useState(0);
  const [elevatedMood, setElevatedMood] = useState(0);
  const [irritability, setIrritability] = useState(0);
  const [anxiety, setAnxiety] = useState(0);
  const [isMoodLogged, setIsMoodLogged] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState('');
  const [moodData, setMoodData] = useState({});

  useEffect(() => {
    const fetchMoodData = async () => {
      try {
        const date = formatDate(selectedDate);
        const response = await axios.get(`http://localhost:8080/api/mood/log?date=${date}`);
        if (response.data) {
          setMoodData(prevData => ({ ...prevData, [date]: response.data }));
        } else {
          setMoodData(prevData => ({ ...prevData, [date]: null }));
        }
      } catch (error) {
        console.error('Error fetching mood data:', error);
      }
    };

    fetchMoodData();
  }, [selectedDate]);

  const handleLogMood = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/mood/log', {
        date: formatDate(selectedDate),
        sleepHours: sleepHours.toString(),
        depressedMood: depressedMood.toString(),
        elevatedMood: elevatedMood.toString(),
        irritability: irritability.toString(),
        anxiety: anxiety.toString()
      });

      console.log('Mood data logged:', response.data);
      setIsMoodLogged(true);
      setError(''); // Clear any previous errors
      setMoodData(prevData => ({ ...prevData, [formatDate(selectedDate)]: response.data }));
    } catch (error) {
      console.error('Error logging mood:', error);
      setError('Failed to log mood: ' + error.message);
    }
  };

  const formatDate = (date) => date.toISOString().split('T')[0];

  const tileStyles = {
    base: {
      padding: '15px',
      borderRadius: '8px',
      margin: '5px',
      textAlign: 'center',
      fontSize: '16px',
      color: 'black',
    },
    highlight: {
      backgroundColor: '#f0f8ff',
      color: '#000',
      border: '1px solid #add8e6',
    },
    currentDate: {
      backgroundColor: '#ff5722',
      color: '#fff',
      border: '2px solid #ff7043',
      fontWeight: 'bold',
      borderRadius: '60%',
    },
  };

  const tileClassName = ({ date }) => {
    const dateString = formatDate(new Date(date));
    const todayString = formatDate(new Date());
    const isMoodLoggedForDate = dateString in moodData;

    return [
      isMoodLoggedForDate ? 'highlight' : '',
      dateString === todayString ? 'currentDate' : ''
    ].filter(Boolean).join(' ');
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
      {error && (
        <div style={{ color: 'red', marginBottom: '20px' }}>
          {error}
        </div>
      )}

      {isMoodLogged && <MoodCard />}

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
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#ff5722',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Log Mood
        </button>
      )}

      <Calendar
        onDateClick={(date) => setSelectedDate(date)}
        tileClassName={tileClassName}
        tileStyle={tileStyles.base}
        moodData={moodData} // Pass mood data to the Calendar component
      />
    </div>
  );
};

export default Mood;
