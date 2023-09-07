import { inputs } from '../../assets/data/inputs';
import './index.css';

const Screen = ({ state }) => {
  return (
    <div className='screen'>
      {inputs.map((input, index) => (
        <p key={index} className={input == 'name' ? 'screen-key' : 'false'}>
          <strong className='screen-key'>{input}:</strong> {state[input]}
        </p>
      ))}
    </div>
  );
};

export default Screen;
