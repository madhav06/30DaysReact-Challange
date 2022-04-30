import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Faqbar from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
     <Header />
     <Feature />
     <About image={aboutimage} title='lorem ipsum' button='lorem ipsum' />
     <About image={aboutimage1} title='lorem ipsum elit' button='lorem ipsum elit' />
     <Presentation />
     <Contact />
     <Faqbar />
     <Footer />

    </div>
  );
}

export default App;
