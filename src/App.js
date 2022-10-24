import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import {useState} from 'react'
import './app.css'

function App() {
  const [activePage, setActivePage] = useState('About')

  const renderActivePage = () =>{
    if(activePage === 'About'){
      return <About/>
    }else if(activePage === 'Contact'){
      return <Contact/>
    }else{
      return <Projects/>
    }
  }

  return (
    <div className="App bg-gray-900 h-screen flex items-center justify-start flex-col flex-grow text-2xl font-mono">
      <NavBar setActivePage={setActivePage} activePage={activePage} />
      <div className="my-16">
        { renderActivePage() }
      </div>
      
    </div>
  );
}

export default App;
