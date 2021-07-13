import React from 'react';

import './App.css';
import Header from './components/HeaderNav';
import Main from './components/Main';
import ChannelList from './components/LeftChannelList';

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
