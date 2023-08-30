import TimelineDatePicker from '../TimelineDatePicker/TimelineDatePicker';
import { useTimelineContext } from '../../context/TimelineContext';
import style from './TimelineSearch.module.css';

const TimelineSearchDate = () => {
  const {
    timelineData,
    filteredStartDate,
    filteredEndDate,
    handleFilteredStartDateSelect,
    handleFilteredEndDateSelect
  } = useTimelineContext();

  const {
    minDate, 
    maxDate 
  } = timelineData; 
  
  return (
    <div 
    className={style['search-date']}
      onClick={(e) => {e.stopPropagation()}}
    >
      <TimelineDatePicker
        label='Start Date'
        minDate={minDate}
        maxDate={filteredEndDate || maxDate}
        selectedDate={filteredStartDate || minDate}
        handleDateChange={handleFilteredStartDateSelect}
      />
      <TimelineDatePicker
        label='End Date'
        minDate={filteredStartDate ||minDate}
        maxDate={maxDate}
        selectedDate={filteredEndDate || maxDate}
        handleDateChange={handleFilteredEndDateSelect}
      />
    </div>
  )
}

export default TimelineSearchDate;
