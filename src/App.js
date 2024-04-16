import './App.css';
import Header from './components/header/Header';
import Increment from './components/incerment/Increment';
import Decerment from './components/decerment/Decerment';
import { useSelector } from 'react-redux';
import Loading from './components/Loading';


function App() {
  let count = useSelector(state => state.counter.value)

  return (
    <div className="App">
      <Loading />
      <Header />
      <div className="conts container">
        <h2>counter <span className='counter__span'>{count}</span></h2>
        <div className="app__section">
          <Increment />
          <Decerment />
        </div>
      </div>
    </div>
  );
}

export default App;
