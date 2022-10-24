function Nav_bar(props) {
  const setActivePage = props.setActivePage
  const handlePageNav = (e) =>{
    setActivePage(e.target.textContent)
  }

    return (
      <div className="Nav bg-gray-800 h-24 w-screen border-b-8 border-slate-900 flex items-center justify-center font-mono bg-opacity-40">
        <ul className="flex text-slate-200 opacity-100 text-xl">
          <li className="mx-20" onClick={handlePageNav}>About</li>
          <li className="mx-20" onClick={handlePageNav}>Projects</li>
          <li className="mx-20" onClick={handlePageNav}>Contact</li>
        </ul>
      </div>
    );
  }
  
  export default Nav_bar;
  