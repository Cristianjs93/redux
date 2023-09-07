import { useDispatch } from 'react-redux';
import { inputs } from '../../assets/data/inputs';
import './index.css';

const Form = ({ state }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_FORM',
      payload: { name, value },
    });
  };

  return (
    <form className='form'>
      {inputs.map((input, index) => (
        <div key={index} className='form-box'>
          <label htmlFor={input} className='form-label'>
            {input}
          </label>
          <input
            type={
              input == 'email'
                ? 'email'
                : input == 'password'
                ? 'password'
                : 'text'
            }
            id={input}
            name={input}
            className={input == 'name' ? 'form-input-name' : 'form-input'}
            value={state[input]}
            placeholder={`Type your ${input}...`}
            autoComplete='off'
            onChange={onChange}
          />
        </div>
      ))}
    </form>
  );
};

export default Form;
