
import { useMemo } from 'react';
import { useTimelineContext } from '../../context/TimelineContext';
import utils from '../../utils';
import style from './TimelineAxis.module.css';

const { 
  DAY_IN_SECONDS, 
  getformattedDate 
} = utils;

const TimelineAxis = () => {
  const { timelineData } = useTimelineContext();
  const { minFilteredDate, axisRangeInDay } = timelineData;

  const axisUnit = 7; // show date every 7 days
  const numOfAxisUnit = axisRangeInDay / axisUnit;

  const axisUnitWidth = 100 / numOfAxisUnit;

  const ticks = useMemo(() => {
    const ticks = [];
    
    for (let i = 0; i <= numOfAxisUnit; i++) {
      const currDate = new Date(new Date(minFilteredDate).getTime() + i * axisUnit * DAY_IN_SECONDS);
      const { ymd='' } = getformattedDate(currDate);
      const dateLabel = ymd;
      const tickStyle = {left: `${axisUnitWidth * i}%`};

      ticks.push(
        <div 
          key={i}
          className={style.tick} 
          style={tickStyle}
        >
          {dateLabel}
        </div>
      );
    }

    return ticks;

  }, [minFilteredDate, axisRangeInDay]);

  return (
    <div className={style.axis}>
      {ticks}
      <div className='axis-line' />
    </div>
  )
}

export default TimelineAxis;
