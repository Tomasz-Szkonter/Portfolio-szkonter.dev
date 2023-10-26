import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';

import Modal from './components/utils/Modal'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const turnModalOff = () => {
    setIsModalOpen(false);
  };


  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Modal title={'Welcome to '} titleAlt={'szkonter.dev'} text={'The latest version of my portfolio website features 3D models. For the best experience, please access the site on a desktop device.'} buttonText={'Enter website'} isOpen={isModalOpen} onClose={turnModalOff}/>
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
