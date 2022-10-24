import {useEffect} from 'react'

function NavBar(props) {
  const {setActivePage, activePage} = props

  useEffect(() => {
     const setter = () => setActiveTitle(document.querySelector(`#${activePage}`))
     return setter
  },[]);

  const handlePageNav = (e) => {
    setActivePage(e.target.textContent)
    setActiveTitle(e.target)
  }

  const setActiveTitle = (el) => {
    const li = el
    const theRest = [...document.querySelectorAll('li')].filter(el => el.textContent !== li.textContent)
    li.classList.add('active')
    theRest.forEach(el => el.classList.remove('active'))
  }
    return (
      <div className="Nav bg-gray-800 h-28 w-screen border-b-8 border-slate-900 flex items-center justify-center bg-opacity-40">
        <ul className="flex text-slate-400 opacity-100">
          <li className="mx-20 hover:text-red-300 hover:cursor-pointer transition-all" onClick={handlePageNav} id="About">About</li>
          <li className="mx-20 hover:text-red-300 hover:cursor-pointer transition-all" onClick={handlePageNav} id="Projects">Projects</li>
          <li className="mx-20 hover:text-red-300 hover:cursor-pointer transition-all" onClick={handlePageNav} id="Contact">Contact</li>
        </ul>
      </div>
    );
  }
  
  export default NavBar;