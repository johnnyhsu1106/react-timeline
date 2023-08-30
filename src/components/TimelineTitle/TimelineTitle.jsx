import style from './TimelineTitle.module.css';


const TimelineTitle = ({ title }) => {
  return (
    <h1 className={style.title}>
      {title}
    </h1>
  )
}

export default TimelineTitle;
