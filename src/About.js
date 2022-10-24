function About() {
    return (
        <div className="text-slate-300 flex flex-col items-center content-center">
            <h1 className="text-5xl">FullStack Developer</h1>
            <div className="w-3/4 m-12">
                <p className="my-12 text-left">My <span className="animate-pulse text-red-300">dream</span> is turning ideas into <span className="italic text-red-300">real</span>, tangible digital experiences to create platforms that change people's lives.</p>
                <p className="my-12 text-left">Since first touching JS and grasping the capabilities of software development I can only see myself immersing more and more into this world.</p>
                <p className="my-12 text-left">Currently my favorite stack is:</p>
                <ul>
                    <li className="m-10 text-left">React for Front End</li>
                    <li className="m-10 text-left">Ruby On Rails for Back End</li>
                    <li className="m-10 text-left">Tailwind for Styling</li>
                </ul>
                <p className="my-12 text-left">Completely fascinated by code, I am constantly learning new technologies. Ask me about them!</p>
            </div>
        </div>
    );
  }
  
  export default About;
  