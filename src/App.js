
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './store/actions';




function App() {
  const count = useSelector((state) => state.counter.count);
  const isLogged = useSelector((state) => state.logging.log)
  const dispatch = useDispatch();


  return (
    <>
      <h3>hello redux</h3>
    
      <h1 id='count'>{count}</h1>
      <div className='btn'>
      {isLogged ? <button id='btn1' onClick={() => dispatch(logout())}>LOGOUT</button> : <button id='btn1' onClick={() => dispatch(login())}>LOGIN</button>}
        <button id='btn1' onClick={() => dispatch(increment())}>+</button>
        <button id='btn2' onClick={() => dispatch(decrement())} >-</button>


      </div>
    </>


  );
}

export default App;
