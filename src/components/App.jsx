import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addCount = key => {
    if (key === 'good') return setGood(good + 1);
    if (key === 'neutral') return setNeutral(neutral + 1);
    if (key === 'bad') return setBad(bad + 1);
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  return (
    <div style={{ marginLeft: '50px' }}>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={{ good, neutral, bad }} addCount={addCount} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
export { App };
