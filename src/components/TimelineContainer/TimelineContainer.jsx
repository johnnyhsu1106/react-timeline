import { useTimelineContext } from '../../context/TimelineContext'
import style from './TimelineContainer.module.css'

const TimelineContainer = ({ children }) => {
  const { handleModalToggle } = useTimelineContext();
  
  return (
    <div 
      className={style.container} 
      onClick={handleModalToggle}
    >
      {children}
    </div>
  )
}

export default TimelineContainer
