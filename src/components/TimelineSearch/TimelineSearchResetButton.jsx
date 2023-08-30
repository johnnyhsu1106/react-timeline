import React from 'react'
import { useTimelineContext } from '../../context/TimelineContext';
import style from './TimelineSearch.module.css'

const TimelineSearchResetButton = () => {
  const { handleFilteredDateReset } = useTimelineContext();

  return (
    <button
      className={style.btn} 
      tpye='reset'
      onClick={handleFilteredDateReset}
    >
      Reset
    </button>
  )
}

export default TimelineSearchResetButton;
