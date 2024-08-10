import '../Assets/css/moodtracker.css'
import { useState } from 'react';
const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the selected mood value
    console.log('Selected Mood:', selectedMood);
  };

  return (
    <div className="mood-tracker">
      <form onSubmit={handleSubmit}>
        <p>How do you feel today?</p>
        <div>
          <label>
            <input type="radio" name="mood" value="Happy" checked={selectedMood === 'Happy'} onChange={handleMoodChange} />
            Happy
          </label>
          <label>
            <input type="radio" name="mood" value="Sad" checked={selectedMood === 'Sad'} onChange={handleMoodChange} />
            Sad
          </label>
          <label>
            <input type="radio" name="mood" value="Angry" checked={selectedMood === 'Angry'} onChange={handleMoodChange} />
            Angry
          </label>
          <label>
            <input type="radio" name="mood" value="Anxious" checked={selectedMood === 'Anxious'} onChange={handleMoodChange} />
            Anxious
          </label>
          <label>
            <input type="radio" name="mood" value="Relaxed" checked={selectedMood === 'Relaxed'} onChange={handleMoodChange} />
            Relaxed
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default MoodTracker;