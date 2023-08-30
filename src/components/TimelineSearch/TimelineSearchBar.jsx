import { useTimelineContext } from '../../context/TimelineContext';
import style from './TimelineSearch.module.css';


const TimelineSearchBar = () => {
  const {
    query,
    handleInputSearch
  } = useTimelineContext();
  
  return (
    <input 
      tabIndex={0}
      className={style['search-bar']}
      type="text"
      placeholder='Search by keyword'
      value={query}
      onClick={(e) => {e.stopPropagation()}}
      onChange={(e) => {handleInputSearch(e.target.value)}} 
    />
  )
}

export default TimelineSearchBar;
