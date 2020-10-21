import React from 'react';
import * as Survey from 'survey-react';
import PropTypes from 'prop-types';

Survey.StylesManager.applyTheme('modern');

const TravelQuiz = ({ onSubmit, quizConfig }) => {
  return (
    <Survey.Survey json={quizConfig} onComplete={survey => onSubmit(survey.data)}/>
  );
};

TravelQuiz.propTypes = {
  onSubmit: PropTypes.func,
  quizConfig: PropTypes.object,
};

export default TravelQuiz;
