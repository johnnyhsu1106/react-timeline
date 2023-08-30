import React from 'react'
import { useTimelineContext } from '../../context/TimelineContext';
import style from './TimlineModal.module.css';


const TimelineModalOverlay = ({ children }) => {
  const {
    isModalOpen,
    handleOverlayClick, 
  } = useTimelineContext();

  return (
    isModalOpen && (
      <div
        onClick={handleOverlayClick} 
        className={`${style.overlay} ${isModalOpen ? `${style.open}` : ''}`}
      >
        {children}
      </div>
    )
  )
}

export default TimelineModalOverlay;
