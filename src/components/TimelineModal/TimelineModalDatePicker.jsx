import TimelineDatePicker from '../TimelineDatePicker/TimelineDatePicker';
import { useTimelineModalContext } from '../../context/TimelineModalContext';
import style from './TimlineModal.module.css';
import { useTimelineContext } from '../../context/TimelineContext';


const TimelineModalDatePicker = () => {
  const {
    startDate, 
    endDate,
    handleStartDateSelect,
    handleEndDateSelect
  } = useTimelineModalContext();

  return (
    <div className={style['date-picker-container']}>
      <TimelineDatePicker
        label='Start Date'
        maxDate={endDate}
        selectedDate={startDate}
        handleDateChange={handleStartDateSelect}
      />

      <TimelineDatePicker
        label='End Date'
        minDate={startDate}
        selectedDate={endDate}
        handleDateChange={handleEndDateSelect}
      />
  </div>
  )
}

export default TimelineModalDatePicker;
