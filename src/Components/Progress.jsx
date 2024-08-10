import React, { useState } from 'react';
import '../Assets/css/nav.css';
import '../Assets/css/progress.css'
import ProgressForm from './ProgressForm';
import ProgressDisplay from './ProgressDisplay';

import NutritionAdvice from './AI-API';


export default function Progress() {

  const [progressData, setProgressData] = useState([]);

  const handleSaveProgress = (newProgress) => {
    setProgressData([...progressData, newProgress]);
  };

  return (
    <div>
      <div className="progress-page">
        <h1>Track your Progress</h1>
        <div className="progress-container">
          <ProgressForm onSaveProgress={handleSaveProgress} />
          <ProgressDisplay progressData={progressData} />
      </div>
      <NutritionAdvice/>
      </div>
    </div>
  );
}


