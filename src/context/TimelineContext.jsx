import { createContext, useContext, useState, useMemo, useEffect } from 'react'
import timelineItems from '../timelineItems';
import utils from '../utils';

const { DAY_IN_SECONDS } = utils;
const TimelineContext = createContext({});

const useTimelineContext = () => {
  return useContext(TimelineContext);
}

const TimelineProvider = ({ children }) => {
  const [timelineEvents, setTimelineEvents] = useState(() => {
    // Initalize time string to time object
    return timelineItems.map((timelineItem) => {
      const { start, end } = timelineItem;
      return {...timelineItem, start: new Date(start), end: new Date(end)};
    })
  }); 

  const [isModalOpen, setIsModalOpen] = useState();
  const [query, setQuery] = useState('');
  const [selectedTimelineEventId, setSelectedTimelineEventId] = useState(null);
  const [filteredStartDate, setFilteredStartDate] = useState(null);
  const [filteredEndDate, setFilteredEndDate] = useState(null);


  // Group each timeline event and no overlapping
  const filteredEvents = useMemo(() => {
    if (timelineEvents.length === 0) {
      return [];
    }
  
    const filteredEvents = timelineEvents.filter((timelineEvent) => {      
      if (filteredStartDate !== null) {
        if (timelineEvent.start < filteredStartDate) {
          return false;
        }
      }

      if (filteredEndDate !== null) {
        if (timelineEvent.end > filteredEndDate) {
          return false;
        }
      }

      if (query.trim() !== '') {
        return timelineEvent.name.toLowerCase().includes(query.toLowerCase());
      }

      return true;
    });

    filteredEvents.sort((event1, event2) => {
      if (event1.start < event2.start ) {
        return -1;
      }

      if (event1.start > event2.start) {
        return 1;
      }

      if (event1.end < event2.end) {
        return -1;
      }

      return 1;
    });

    return filteredEvents;

  }, [filteredStartDate, filteredEndDate, timelineEvents, query]);

  const timelineEventGroups = useMemo(() => {  
    const timelineEventGroups = [];
    // Greedy Algorithm
    for (const filteredEvent of filteredEvents) {
      let hasAddedInGroup = false;
  
      for (const timelineEventGroup of timelineEventGroups) {
        const lasttimelineEventInGroup = timelineEventGroup[timelineEventGroup.length - 1];
        // If the lasttimelineEvent in this group is not overlapping with this timelineEvent, 
        // add this timelineEvent to group
        if (lasttimelineEventInGroup.end < filteredEvent.start) {
          timelineEventGroup.push(filteredEvent);
          hasAddedInGroup = true;
          break;
        }
      }

      // If the timelineEvent cannot be added in any existing group, create a new group
      if (!hasAddedInGroup) { 
        timelineEventGroups.push([filteredEvent]);
      }
    }

    return timelineEventGroups;
  
  }, [filteredEvents]);
  

  const timelineData = useMemo(() => {
    const minFilteredDate = new Date(Math.min(...filteredEvents.map((filteredEvent) => {
      return filteredEvent.start;
    })));

    const maxFilteredDate = new Date(Math.max(...filteredEvents.map((filteredEvent) => {
      return filteredEvent.end;
    })));

    const minDate = new Date(Math.min(...timelineEvents.map((timelineEvent) => {
      return timelineEvent.start;
    })));

    const maxDate = new Date(Math.max(...timelineEvents.map((timelineEvent) => {
      return timelineEvent.end;
    })));

    const axisRangeInDay = Math.round((maxFilteredDate - minFilteredDate) / (DAY_IN_SECONDS));

    return {
      minDate,
      maxDate,
      minFilteredDate,
      maxFilteredDate,
      axisRangeInDay
    }; 
  
  }, [filteredEvents, timelineEvents]);

  const handleTimelineEventAdd = (timelineEvent) => {  
    setTimelineEvents((prevTimelineEvents) => {
      return [...prevTimelineEvents, timelineEvent];
    })
  };

  const handleModalToggle = (e) => {
    e.stopPropagation();
    setIsModalOpen((isPrevModalOpen) => {
      return !isPrevModalOpen;
    })
    setSelectedTimelineEventId(null);
  }

  const handleModalClose = () => { 
    setIsModalOpen(false);
    setSelectedTimelineEventId(null);
  };

  const handleTimelineEventSelect = (timelineEventid) => {
    setSelectedTimelineEventId(timelineEventid);
    setIsModalOpen(true);
  };

  const handleTimelineEventUpdate = (selectedTimelineEventId, newTimelineEvent) => {
    setTimelineEvents((prevTimelineEvents) => {
      return prevTimelineEvents.map((prevTimelineEvent) => {
        return prevTimelineEvent.id === selectedTimelineEventId ? newTimelineEvent : prevTimelineEvent
      });
    })
  };

  const handleTimelineEventDelete = (selectedTimelineEventId) => {
    setTimelineEvents((prevTimelineEvents) => {
      return prevTimelineEvents.filter((prevTimelineEvent) => {
        return prevTimelineEvent.id !== selectedTimelineEventId;
      })
    })
    handleModalClose();
  };

  const handleInputSearch = (inputValue) => {
    setQuery(inputValue);
  };

  const handleFilteredStartDateSelect = (date) => {
    setFilteredStartDate(date);
  };

  const handleFilteredEndDateSelect = (date) => {
    setFilteredEndDate(date);
  };

  const handleFilteredDateReset = () => {
    setQuery('');
    setFilteredStartDate(null);
    setFilteredEndDate(null);
  };


  const context = {
    isModalOpen,
    query,
    filteredEvents,
    timelineEvents,
    timelineEventGroups,
    timelineData,
    selectedTimelineEventId,
    filteredStartDate,
    filteredEndDate,
    handleTimelineEventAdd,
    handleTimelineEventUpdate,
    handleTimelineEventDelete,
    handleTimelineEventSelect,
    handleModalToggle,
    handleModalClose,
    handleInputSearch,
    handleFilteredStartDateSelect,
    handleFilteredEndDateSelect,
    handleFilteredDateReset
  };

  return (
    <TimelineContext.Provider value={context}>
      {children}
    </TimelineContext.Provider>
  )
};

export { useTimelineContext, TimelineProvider };
