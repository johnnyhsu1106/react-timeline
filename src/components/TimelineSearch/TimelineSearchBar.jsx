import { useTimelineContext } from '../../context/TimelineContext';
import style from './TimelineSearch.module.css';
import { memo } from 'react';


const TimelineSearchBar = () => {
  const {
    query,
    handleInputSearch,
    handleClearSearch
  } = useTimelineContext();
  

  const DeleteBtn = memo(({ query }) => {
    if (query.trim() === '') {
      return null;
    }
    return (
      <div 
        className={style['delete-btn']}
        onClick={handleClearSearch}
      >
        &times;
      </div> 
    )
  })


  return (
    <div className={style['search-bar']}>
      <input 
        tabIndex={0}
        className={style['search-input']}
        type="text"
        placeholder='Search by keyword'
        value={query}
        onClick={(e) => {e.stopPropagation()}}
        onChange={(e) => {handleInputSearch(e.target.value)}} 
      />
      <DeleteBtn query={query} />
    </div>
  )
}

export default TimelineSearchBar;
