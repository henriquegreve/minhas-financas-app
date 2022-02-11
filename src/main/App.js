import React from 'react';

import Rotas from './rotas';
import Navbar from '../componentes/navbar';

import 'bootswatch/dist/lux/bootstrap.css'
import '../custom.css'

class App extends React.Component {
  
  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <Rotas />
        </div>
      </>
    )
  }

}

export default App