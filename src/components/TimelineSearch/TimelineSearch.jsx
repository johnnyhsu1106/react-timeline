import TimelineSearchBar from './TimelineSearchBar';
import TimelineSearchDate from './TimelineSearchDate';
import TimelineSearchResetButton from './TimelineSearchResetButton';

import style from './TimelineSearch.module.css';

const TimelineSearch = () => {
  return (
    <div
      onClick={(e) => {e.stopPropagation()} } 
      className={style.container}>
      <TimelineSearchBar />
      <TimelineSearchDate />
      <TimelineSearchResetButton />
    </div>
  )
}

export default TimelineSearch;
