import React, {useState} from 'react';
import './App.css';
import TravelQuiz from './TravelQuiz';
import Itinerary from './Itinerary';

const quizConfig = {
  surveyId: process.env.REACT_APP_SURVEY_ID
}

const App = () => {
  const [tripPreferences, setTripPreferences] = useState(null);

  const handleSubmit = (quizAnswer) => {
    console.log('quizAnswer', quizAnswer);
    setTripPreferences(quizAnswer);
  };

  return tripPreferences ? (
    <Itinerary tripPreferences={tripPreferences} />
  ) : (
    <TravelQuiz
      quizConfig={quizConfig}
      onSubmit={handleSubmit}
    />
  );
};

export default App;
