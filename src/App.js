/*Created by Sudha Prathyusha Jakkaladiki//
  Project :IGRA
  Created on : 10 th Novermber
*/
import React from 'react';
import { Footer, Blog, possibility, Features, WhatDSS,Header} from './containers';
import { CTA, Brand, Navbar} from './components';
import Possibility from "./containers/possibility/Possibility";
import './App.css';

const App = () => {
  return (
      <div className="App">
          <div className="gradient__bg">
              <Navbar />
              <Header />
          </div>
          <Brand />
          <WhatDSS />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
      </div>
  )
}

export default App



