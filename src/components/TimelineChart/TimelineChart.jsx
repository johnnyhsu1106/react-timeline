import TimelineEventGroup from './TimelineEventGroup';
import { useTimelineContext } from '../../context/TimelineContext';
import style from './TimelineChart.module.css';


const TimelineChart = () => {
  const { timelineEventGroups } = useTimelineContext();

  return (
    <div className={style.chart}>
      {timelineEventGroups?.map((timelineEventGroup, index) => {
        return (
          <TimelineEventGroup 
            key={index} 
            timelineEventGroup={timelineEventGroup}
          />) 
      })}
    </div>
  )
}

export default TimelineChart;
