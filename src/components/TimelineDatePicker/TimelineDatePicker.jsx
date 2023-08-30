
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './TimelineDatePicker.module.css'

const TimelineDatePicker = ({
  label,
  minDate,
  maxDate,
  selectedDate,
  handleDateChange=() => {}
}) => {

  return (
    <div className={style['date-picker']}>
      <label>{label}</label>
      <DatePicker
        required
        minDate={minDate}
        maxDate={maxDate}
        dateFormat='yyyy/MM/dd'
        selected={selectedDate} 
        onChange={(date) => { handleDateChange(date) }} 
        onClick={(e) => {e.stopPropagation()}}
      />
    </div>
  )
}

export default TimelineDatePicker;
