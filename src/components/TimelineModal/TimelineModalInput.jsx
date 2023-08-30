import React from 'react'
import { useTimelineModalContext } from '../../context/TimelineModalContext'
import style from './TimlineModal.module.css';


const TimelineModalInput = () => {
  const {
    name,
    handleInputChange
  } = useTimelineModalContext();

  return (
    <>
      <label
        htmlFor='modal-event-name'
        className={style['event-name']}> 
        Name
      </label>
      <input
        id='modal-event-name'
        value={name}
        placeholder='Please enter your event name'
        onChange={handleInputChange} 
        required
      />
    </>
  )
}

export default TimelineModalInput;
