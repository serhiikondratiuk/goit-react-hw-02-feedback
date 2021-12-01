import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      type="button"
      key={option}
      option={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
  //   {/* <button type="button" onClick={onLeaveFeedback}>
  //     Good
  //   </button>
  //   <button type="button" onClick={onLeaveFeedback}>
  //     Neutral
  //   </button>
  //   <button type="button" onClick={onLeaveFeedback}>
  //     Bad
  //   </button> */}
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
