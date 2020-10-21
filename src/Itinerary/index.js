import React from 'react';
import PropTypes from 'prop-types';

const Itinerary = ({ tripPreferences }) => {
  return (
    <div>
      <p>Your trip preferences:</p>
      <p>{JSON.stringify(tripPreferences)}</p>
      <p>Refresh to take the survey again</p>
    </div>
  );
};

Itinerary.propTypes = {
  tripPreferences: PropTypes.object,
};

export default Itinerary;
