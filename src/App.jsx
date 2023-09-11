import React from 'react'
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  )
}

export default App;