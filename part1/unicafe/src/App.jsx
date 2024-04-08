import React, { useState } from 'react';

// handles the functionality of each feedback submission button.
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

//for displaying a single statistic, e.g. the average score.
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  );
};

// stats component
const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
  // display statistics only once feedback has been gathered
  if (allClicks === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    );
  }
  // show ratings statistics
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={allClicks} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive}%`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button on its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allClicks = good + neutral + bad;
  const average = (good - bad) / allClicks || 0;
  const positive = (good / allClicks) * 100 || 0;

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad}
        allClicks={allClicks} average={average} positive={positive} />
    </div>
  );
};

export default App;
