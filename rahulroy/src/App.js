import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import ExperienceAchivment from './components/ExperienceAchivment';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
     <Home></Home>
     <About></About>
     <Skill></Skill>
     <Project></Project>
     <ExperienceAchivment></ExperienceAchivment>
     <Contact></Contact>
    </div>
  );
}

export default App;
