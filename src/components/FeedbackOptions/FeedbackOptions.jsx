import PropTypes from 'prop-types';
import s from './feedbackOptions.module.scss';

const FeedbackOptions = ({ options, addCount }) => {
  const optionsKeys = [...Object.keys(options)];

  return (
    <div>
      {optionsKeys.map(key => {
        return (
          <button
            key={key}
            type="button"
            onClick={addCount}
            name={key}
            className={s.btn}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

PropTypes.propTypes = {
  options: PropTypes.objectOf({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
