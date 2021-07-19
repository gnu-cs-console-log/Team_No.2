import React from 'react';

import './style.css'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import LeftChannelList from './components/LeftChannelList/LeftChannelList';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)

function App() {
  return (
    <div className="App">
      <Header/>
      <LeftChannelList/>
      <Main/>
    </div>
  );
}

export default App;
