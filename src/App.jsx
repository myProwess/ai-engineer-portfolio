import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import resumeData from './data/resumeData';

function App() {
  return (
    <div className="app">
      <Hero data={resumeData} />
      <About data={resumeData} />
      <Experience data={resumeData} />
      <Skills data={resumeData} />
      <Certifications data={resumeData} />
      <Contact data={resumeData} />
    </div>
  );
}

export default App;
