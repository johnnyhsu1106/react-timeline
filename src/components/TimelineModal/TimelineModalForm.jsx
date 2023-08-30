
import TimelineModalTitle from './TimelineModalTitle';
import TimelineModalInput from './TimelineModalInput';
import TimelineModalDatePicker from './TimelineModalDatePicker';
import TimelineModalButton from './TimelineModalButton';
import { useTimelineModalContext } from '../../context/TimelineModalContext';
import { useTimelineContext } from '../../context/TimelineContext';
import style from './TimlineModal.module.css';


const TimelineModalForm = () => {
  const {
    isEditable,
    handleFormSubmit
  } = useTimelineModalContext();

  const {
    selectedTimelineEventId,
    handleTimelineEventDelete,
    handleModalClose
  } = useTimelineContext();

  return (
    <form
      onClick={(e) => {e.stopPropagation()}}
      onSubmit={handleFormSubmit} 
      className={style['modal']} 
    >
      <TimelineModalButton
        classNames={['close-btn']}
        type='button'
        text='&times;'
        handleButtonClick={handleModalClose}
      />

      <TimelineModalTitle />
      <TimelineModalDatePicker />
      <TimelineModalInput/>

      <div className={style.btns}>
        <TimelineModalButton
          classNames={['btn', 'submit-btn']}
          type='submit'
          text='Apply' 
        />

        <TimelineModalButton
          classNames={['btn', 'cancel-btn']}
          type='button'
          text='Cancel'
          handleButtonClick={handleModalClose} 
        />
      </div>

      <TimelineModalButton
        isShown={isEditable}
        classNames={['delete-btn']}
        type='button'
        text='Delete'
        handleButtonClick={()=> {handleTimelineEventDelete(selectedTimelineEventId)}} 
      />
    </form>
  )
}

export default TimelineModalForm;
