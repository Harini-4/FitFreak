import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moodLogs, setMoodLogs] = useState([
    { date: new Date(2024, 7, 11), moods: ['DEPRESSED', 'IRRITABLE', 'ANXIOUS'] },
    // Add more mood log entries here if needed
  ]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const generateCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const days = daysInMonth(year, month);
    const startDay = new Date(year, month, 1).getDay();
    const today = new Date();

    const calendarDays = [];
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} style={styles.emptyDay}></div>);
    }
    for (let i = 1; i <= days; i++) {
      const currentDate = new Date(year, month, i);
      const isToday = currentDate.toDateString() === today.toDateString();
      const log = moodLogs.find(log => log.date.toDateString() === currentDate.toDateString());

      calendarDays.push(
        <div
          key={`day-${i}`}
          style={{
            ...styles.day,
            ...(isToday ? styles.today : {}),
          }}
          onClick={() => setSelectedDate(currentDate)}
        >
          {i}
          {log && (
            <div style={styles.moodIndicator}>
              {log.moods.map((mood, index) => (
                <div key={index} style={styles.moodItem}>
                  <div style={{ ...styles.mood, ...styles[mood.toLowerCase()] }}></div>
                  <span style={styles.moodText}>{mood}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    return calendarDays;
  };

  return (
    <div style={styles.calendarContainer}>
      <div style={styles.calendarHeader}>
        <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}>&lt;</button>
        <span>{selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}>&gt;</button>
      </div>
      <div style={styles.dayLabels}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} style={styles.dayLabel}>
            {day}
          </div>
        ))}
      </div>
      <div style={styles.calendarGrid}>{generateCalendar()}</div>
    </div>
  );
};

const styles = {
  calendarContainer: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '20px',
  },
  dayLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  dayLabel: {
    width: '14.28%',
    textAlign: 'center',
    padding: '10px 0',
  },
  calendarGrid: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  emptyDay: {
    width: '14.28%',
    height: '60px',
    padding: '10px',
    boxSizing: 'border-box',
  },
  day: {
    width: '14.28%',
    height: '80px',
    padding: '5px',
    marginBottom: '10px',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  today: {
    backgroundColor: '#ff5722',
    color: '#ffffff',
    border: '2px solid #ff7043',
    fontWeight: 'bold',
  },
  moodIndicator: {
    marginTop: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2px',
  },
  mood: {
    width: '8px',
    height: '8px',
    marginRight: '4px',
    borderRadius: '50%',
  },
  moodText: {
    fontSize: '10px',
  },
  depressed: {
    backgroundColor: '#d32f2f',
  },
  elevated: {
    backgroundColor: '#1976d2',
  },
  irritable: {
    backgroundColor: '#ff9800',
  },
  anxious: {
    backgroundColor: '#ffeb3b',
  },
};

export default Calendar;
