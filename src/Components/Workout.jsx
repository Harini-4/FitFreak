import React, { useState, useEffect } from 'react';
import '../Assets/css/nav.css';
import '../Assets/css/workout.css';
import { fetchData, exerciseOptions } from './API';

export default function Workout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [exercises, setExercises] = useState([]);
  const [todaysWorkout, setTodaysWorkout] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch Today's Workout when the component loads
    const fetchTodaysWorkout = async () => {
      try {
        const response = await fetch('http://localhost:8080/Workout/get');
        const data = await response.json();
        console.log('Fetched data:', data); // Log the raw data

        if (Array.isArray(data)) {
          const workoutsWithBase64 = await Promise.all(data.map(async (workout) => {
            const base64Gif = await convertArrayBufferToBase64(workout.gif); // Convert GIF to Base64
            return {
              ...workout,
              gifUrl: `data:image/gif;base64,${base64Gif}` // Embed Base64 directly
            };
          }));
          setTodaysWorkout(workoutsWithBase64);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching today\'s workout:', error);
        setError('Error fetching today\'s workout.');
      }
    };

    fetchTodaysWorkout();
  }, []);

  // Function to convert ArrayBuffer to Base64
  const convertArrayBufferToBase64 = (arrayBuffer) => {
    return new Promise((resolve, reject) => {
      const blob = new Blob([arrayBuffer], { type: 'image/gif' });
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchWithRetry = async (url, options, retries = 3, delayTime = 1000) => {
    try {
      const response = await fetchData(url, options);
      return response;
    } catch (error) {
      if (retries > 0 && error.response?.status === 429) {
        await delay(delayTime);
        return fetchWithRetry(url, options, retries - 1, delayTime * 2);
      } else {
        throw error;
      }
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }
    setLoading(true);
    setError('');
    try {
      const data = await fetchWithRetry(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchQuery}?limit=100&offset=0`,
        exerciseOptions
      );
      console.log('API response:', data); // Log the API response for debugging
      setExercises(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching exercises:', error); // Log any errors
      setError('Error fetching exercises. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="workout-page">
        <h2>Today's Workout Challenge</h2>
        <div className="exercise-results">
          {todaysWorkout.length > 0 ? (
            todaysWorkout.map((workout, index) => (
              <div key={index} className="exercise-item">
                <img src={`data:image/gif;base64,${workout.gif}`} alt={workout.name} className="exercise-gif" />
                <h3>{workout.name}</h3>
                <p>Body Part: {workout.bodyPart}</p>
                <p>Description: {workout.description}</p>
              </div>
            ))
          ) : (
            <p>No workout found for today.</p>
          )}
        </div>

        <div className="search-box">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for exercises"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="exercise-results">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : exercises.length > 0 ? (
            exercises.map((exercise, index) => (
              <div key={index} className="exercise-item">
                <img src={exercise.gifUrl} alt={exercise.name} className="exercise-gif" />
                <h3>{exercise.name}</h3>
                <p>Body Part: {exercise.bodyPart}</p>
              </div>
            ))
          ) : (
            <h1 className="search-help">
              Search for back, shoulders, chest, waist, neck, cardio, lower arms, lower legs, upper arms, upper legs
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
