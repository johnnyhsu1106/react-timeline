import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { useTimelineContext } from './TimelineContext';
import { v4 as uuidv4 } from 'uuid';

const TimlineModalContext = createContext();

const useTimelineModalContext = () => {
  return useContext(TimlineModalContext);
};


const TimelineModalProvider = ({children}) => {
  const {
    selectedTimelineEventId,
    filteredEvents,
    timelineData,
    handleTimelineEventAdd,
    handleTimelineEventUpdate,
    handleModalClose,
    handleModalToggle
  } = useTimelineContext();
  
  const { minDate, maxDate } = timelineData;
  const [startDate, setStartDate] = useState(minDate);
  const [endDate, setEndDate] = useState(maxDate);
  const [name, setName] = useState('');

  const isEditable = selectedTimelineEventId !== null;


  const selectedTimelineEvent = useMemo(() => {
    return filteredEvents?.find((filteredEvent) => {
      return filteredEvent.id === selectedTimelineEventId;
    });
  }, [selectedTimelineEventId]);

  // handle user wants to edit event or create event
  useEffect(() => {
    if (!isEditable) {
      setStartDate(minDate);
      setEndDate(maxDate);
      setName('');
      return;
    }

    const { name, start, end } = selectedTimelineEvent;
    setStartDate(start);
    setEndDate(end);
    setName(name);

  }, [selectedTimelineEventId]);

  // Handle ESC key is pressed
  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode !== 27) {
        return;
      };
      handleModalClose();  
    }

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    }
  }, []);

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    handleModalToggle(e);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const newTimelineEvent = {
      id: uuidv4(),
      name: name,
      start: startDate,
      end: endDate
    };

    if (isEditable) {
      handleTimelineEventUpdate(selectedTimelineEventId, newTimelineEvent);
    } else {
      handleTimelineEventAdd(newTimelineEvent);
    }

    setName('');
    setStartDate(minDate);
    setEndDate(maxDate);
    handleModalClose();
  };

  const handleStartDateSelect = (date) => {
    setStartDate(date);
  };

  const handleEndDateSelect = (date) => {
    setEndDate(date);
  };

  const context = {
    name,
    isEditable,
    startDate, 
    endDate,
    handleStartDateSelect,
    handleEndDateSelect,
    // setStartDate,
    // setEndDate,
    handleInputChange,
    handleFormSubmit,
    handleOverlayClick
  };

  return (
    <TimlineModalContext.Provider value={context}>
      {children}
    </TimlineModalContext.Provider>
  )
}

export { useTimelineModalContext, TimelineModalProvider};
