import { useSelector } from 'react-redux';
import { inputs } from './assets/data/inputs';
import Screen from './components/Screen';
import Form from './components/Form';
import './App.css';

function App() {
  const stateObject = inputs.reduce((object, key) => {
    object[key] = useSelector((state) => state[key]);
    return object;
  }, {});

  return (
    <div className='main-container'>
      <Screen state={stateObject} />
      <Form state={stateObject} />
    </div>
  );
}

export default App;
