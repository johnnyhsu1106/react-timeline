import TimelineModalOverlay from './TimelineModalOverlay';
import TimelineModalForm from './TimelineModalForm';
import { TimelineModalProvider } from '../../context/TimelineModalContext';


const TimelineModal = () => {
  return (
    <TimelineModalProvider>
      <TimelineModalOverlay>
        <TimelineModalForm 
        />
      </TimelineModalOverlay>
    </TimelineModalProvider>
  )
}

export default TimelineModal
