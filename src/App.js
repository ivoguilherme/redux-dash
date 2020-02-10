import React from 'react';
import './styles/index.scss';
import { Provider } from 'react-redux';
import store from './store';

import { Sidebar, Wrapper } from './components';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Sidebar />
        <Wrapper />
      </Provider>
    </div>
  );
}

export default App;
