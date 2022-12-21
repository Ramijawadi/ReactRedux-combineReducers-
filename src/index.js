import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux"
import Reducers from './store/reducers';
import { Provider } from 'react-redux';



const store = createStore(Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
// store.subscribe(() => console.log(store.getState()))


// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);
