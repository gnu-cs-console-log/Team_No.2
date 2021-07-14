import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main';
import ChannelList from './components/LeftChannelList';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <ChannelList/>
    </div>
  );
}

export default App;
