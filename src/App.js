import Nav_bar from "./Nav_bar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import {useState} from 'react'
function App() {
  const [activePage, setActivePage] = useState('About')

  return (
    <div className="App bg-gray-900 h-screen flex items-center justify-start flex-col flex-grow">
      <Nav_bar setActivePage={setActivePage}/>
      <div>
      if(activePage == 'About'){
        <About/>
      }else if(activePage == 'Contact'){
        <Contact/>
      }else{
        <Projects/>
      }
      </div>
    </div>
  );
}

export default App;
