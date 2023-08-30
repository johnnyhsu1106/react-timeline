import { useTimelineModalContext } from '../../context/TimelineModalContext';
import style from './TimlineModal.module.css';


const TimelineModalTitle = () => {
  const {
    isEditable
  } = useTimelineModalContext();
  return (
    <h2 className={style.title}>
      {`${isEditable ? 'Edit' : 'Create'} Event`}
    </h2>
  )
}

export default TimelineModalTitle;