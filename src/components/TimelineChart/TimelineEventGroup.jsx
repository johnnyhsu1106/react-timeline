import TimelineEvent from './TimelineEvent';
import style from './TimelineChart.module.css';


const TimeEventGroup = ({ timelineEventGroup }) => {  
  return (
    <div className={style.group}> 
      {timelineEventGroup?.map((timelineEvent, index) => {
        return (
          <TimelineEvent 
            key={index} 
            {...timelineEvent} 
          />
        )
      })}
    </div>
  )
}

export default TimeEventGroup;
