import TimelineContainer from './components/TimelineContainer/TimelineContainer';
import TimelineTitle from './components/TimelineTitle/TimelineTitle';
import TimelineSearch from './components/TimelineSearch/TimelineSearch';
import TimelineChart from './components/TimelineChart/TimelineChart';
import TimelineAxis from './components/TimelineAxis/TimelineAxis';
import TimelineModal from './components/TimelineModal/TimelineModal';
import { TimelineProvider } from './context/TimelineContext';


const App = () => {
  return (
    <TimelineProvider>
      <TimelineContainer>
        <TimelineTitle title='Timeline'/>
        <TimelineSearch />
        <TimelineChart />
        <TimelineAxis /> 
        <TimelineModal />
      </TimelineContainer>
    </TimelineProvider>
  )
}

export default App;
