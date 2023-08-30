import style from './TimlineModal.module.css';

const TimelineModalButton = ({
  isShown=true,
  classNames,
  type='button',
  handleButtonClick=() => {},
  text
}) => {
  
  const styles = classNames.map((className) => {
    return style[className];
  }).join(' ');
  
  return (
    isShown && (
      <button
        className={styles}
        type={type}
        onClick={handleButtonClick}
    >
      {text}
    </button>
    )
  )
}

export default TimelineModalButton;
