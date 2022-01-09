import React, { useRef } from 'react'
import Header from '../components/header/header'
import About from './about'
import Skills from './skill'
import Projects from './projects'
import Contact from './contact'
import Sidebar from '../components/sidebar/sidebar'

//Partciles
import Particles from 'react-particles-js'

//Animated Icon
import Scroll from '../assets/gif/scroll.gif'

function Home() {
    const handleScroll = e => {
        e.preventDefault();
        const main = this.main.current;
        window.scrollTo({
            top: main.offsetTop,
            left: 0,
            behavior: "instant"
        });
    };

    
    
    return (
        <div className="w-full h-116 md:h-auto bg-gray-100 overflow-scroll md:overflow-visible">
            <div className="relative -mb-14">
                {/* Home */}
                <div className="h-118 md:h-132 w-full bg-zinc-900" id="home">
                    <h1 className="ml-6 md:ml-106 mt-72 md:mt-98 absolute flex text-white text-2xl md:text-5xl font-semibold text-gray-100">James Williams 
                    <p className="text-cyan-400 font-bold text-6xl md:text-8xl">|</p> 
                    <mark className="pl-2 pt-11 md:pt-16 bg-transparent text-cyan-800 font-medium text-2xl md:text-5xl">Marlboro_jamez</mark></h1>
                    <Particles className="hidden md:flex" params={{
                        "particles":{
                            "color": {
                                "value": "#18181b"
                            },
                            "number":{
                                "value": 150,
                            },
                            "size":{
                                "value": 3
                            },
                            "line_linked": {
                                "shadow": {
                                    "enable": true,
                                    "color": "#06b6d4",
                                    "bar": 5
                                }, 
                                "color": "#06b6d4"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": { "enable": true, "mode": "repulse" },
                                "onclick": { "enable": true, "mode": "push" },
                                "resize": true
                            },
                            "modes": {
                                "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
                                "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                                "repulse": { "distance": 100, "duration": 0.4 },
                                "push": { "particles_nb": 4 },
                                "remove": { "particles_nb": 2 }
                            }
                        }
                    }}/>
                </div>
                <Header handleScroll={handleScroll}/>
                <div className="z-50 absolute sticky top-4 md:hidden">
                    <Sidebar/>
                </div>

                {/* About */}
                <div className="h-fit md:h-130 w-full border-b border-gray-300" id="about">
                    <About/>
                </div>
                {/* Skills */}
                <div className="h-fit md:h-132 w-full border-b border-gray-300" id="skills">
                    <Skills/>
                </div>
                {/* Projects */}
                <div  className="h-fit pb-20 w-full border-b border-gray-300" id="projects">
                    <Projects/>
                </div>
                {/* Contact */}
                <div className="h-fit md:h-120 w-full bg-zinc-900" id="contact">
                    <Contact/>
                </div>
                {/* Footer */}
                <div className="pt-12 justify-center flex h-52 w-full bg-matt-900">
                    <a href="https://github.com/MarlboroJamez">
                        <img className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 mr-6 h-13 w-13" src="https://img.icons8.com/color/48/000000/github--v1.png" alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/james-williams-mdl/">
                        <img className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 mr-6 h-13 w-13" src="https://img.icons8.com/color-glass/48/000000/linkedin.png" alt=""/>
                    </a>
                    <a href="tel:+27-082-048-2044">
                        <img className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 mr-6 h-13 w-13" src="https://img.icons8.com/fluency/48/000000/phone-disconnected.png" alt=""/>
                    </a>
                </div>
            </div>

            <img className="ml-46 md:ml-126 h-14 w-14 sticky bottom-4 z-50" src={Scroll} alt="" />
        </div>
    )
}

export default Home
