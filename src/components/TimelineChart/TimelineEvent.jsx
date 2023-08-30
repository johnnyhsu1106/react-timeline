import { useTimelineContext } from '../../context/TimelineContext';
import utils from '../../utils';
import style from './TimelineChart.module.css';
const { DAY_IN_SECONDS, getformattedDate } = utils;


const TimelineEvent = ({ 
  id,
  name,
  start,
  end
}) => {
  const {
    timelineData,
    selectedTimelineEventId,
    handleTimelineEventSelect
  } = useTimelineContext();
  
  const {
    minFilteredDate,
    axisRangeInDay
  } = timelineData;

  const formattedStartDate = getformattedDate(start);
  const formattedEndDate = getformattedDate(end);

  const caculateEventStyle = (start, end) => {
    const startOffset = Math.round((start - minFilteredDate) / DAY_IN_SECONDS);
    const eventWidth = Math.round((end - start) / DAY_IN_SECONDS);

    return {
      left: `${(startOffset / axisRangeInDay) * 100}%`,
      width: `${(eventWidth / axisRangeInDay) * 100}%`,
    };
  };

  const isSelected = id === selectedTimelineEventId;

  return (
    <div
      className={`${style.event} ${isSelected ? `${style.selected}` : ''}`}
      style={caculateEventStyle(start, end)}

      onClick={(e) => {
        e.stopPropagation();
        handleTimelineEventSelect(id);
      }}
    >
      <div className={style['event-name']}>
        {name}
      </div>

      <div className={style['event-range']}>
        <time>{`${formattedStartDate.md}`}</time> 
          ~ <time>{`${formattedEndDate.md}`}</time>
      </div>
    </div>

  )
}

export default TimelineEvent;
