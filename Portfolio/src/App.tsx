import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  SectionSpacer,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <SectionSpacer />
        <About />
        <SectionSpacer />
        <Experience />
        <SectionSpacer />
        <Tech />
        <SectionSpacer />
        <Works />
        <SectionSpacer />
        <Feedbacks />
        <SectionSpacer />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
