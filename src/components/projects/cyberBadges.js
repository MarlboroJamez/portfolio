import React, { useEffect, useRef, useState } from 'react'
import styled from "@emotion/styled"
import ReactCardFlip from 'react-card-flip'

//Projects GIF's
import Robot from '../../assets/images/robot.PNG'
import Linux from '../../assets/images/linux.PNG'
import Burp from '../../assets/images/BURP.PNG'
import Web from '../../assets/images/web.PNG'
import Owasp from '../../assets/images/owasp.PNG'
import Streak from '../../assets/images/streak.PNG'

//Carousel Slick Import
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyleWrapper = styled.div`
* {
    border-radius: 10px;
}
.slick-prev:before,
.slick-next:before {
    font-family:initial!important;
    color:white; 
}`

//Outside modal click
let useClickOutside = (handler, title) => {
    let ref = useRef()
  
    useEffect(() => {
        let handle = (event) => {
            if(!ref.current.contains(event.target)){
                handler()       
            }
        }
  
        document.addEventListener("mousedown", handle)
  
        return () => {
            document.removeEventListener("mousedown", handle)
        }
    }, [])
    return ref
}

function CyberBadges() {
    const [isFlipped, setIsFlipped] = useState(false);

    const settings = {
        data: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1
    }

    const handleClicked = () => {
        setIsFlipped(!isFlipped);
    }

    let node = useClickOutside(() => {
        setIsFlipped(false)
    })

    return (
        <div ref={node}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div style={{'resize':'both','overflow':'auto'}} className="m-3 p-4 border lg:w-110 md:w-96 sm:w-72 border-gray-300 shadow-lg rounded-lg">
                <svg onClick={handleClicked} xmlns="http://www.w3.org/2000/svg" class="hidden md:flex transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <h1 className="mt-4 md:mt-0 font-semibold lg:text-3xl md:text-2xl sm:text-xl">🔰 Security Badges I earned</h1>

                <div className="flex mt-8 ml-2 md:ml-6">
                    <p className="text-xs mr-1 mt-1">📣</p>
                    <p className="font-base md:text-base text-xs font-base inline-block text-left">Here are some of the badges I've earned so far, with my practices on HackTheBox & TryHackMe against real-time labs.</p>
                </div>

                <div className="mt-8 block md:flex">
                    <div>
                        <ul className="w-52 ml-6">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-green-900 opacity-80 bg-green-100 border border-green-700">Completed</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-sky-900 opacity-80 bg-sky-100 border border-sky-700">Cyber Security</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-red-900 opacity-80 bg-red-100 border border-red-700">Pen-testing</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="ml-6 justify-around flex-wrap w-fit flex">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">TryHackMe</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">HackTheBox</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  style={{'resize':'both','overflow':'auto'}} className="hidden md:block bg-matt-900 h-48 md:h-60 p-2 md:p-6 border lg:w-110 md:w-96 w-98 border border-gray-300 shadow-lg rounded-lg">
                <div className="flex">
                    <svg onClick={handleClicked} xmlns="http://www.w3.org/2000/svg" class="text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>

                <div class="p-6 md:w-auto w-96">
                    <StyleWrapper>
                        <Slider {...settings}>
                            <div className="flex p-4 md:p-3 pb-4 md:pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/hashcracker.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">The Hash Cracker</h1>
                                    <p className="text-gray-400">Cracking all the Hashes</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/mrrobot.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Mr. Robot</h1>
                                    <p className="text-gray-400">Completing the Mr.Robot room</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/actofkindness.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Act of Kindness</h1>
                                    <p className="text-gray-400">To those who have shown to be truly kind</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/mrrobot.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Burp-ed</h1>
                                    <p className="text-gray-400">Completing the Burp Suite module</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/ohsint.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">OhSINT</h1>
                                    <p className="text-gray-400">Completing the OhSINT room</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/linux.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">cat linux.txt</h1>
                                    <p className="text-gray-400">Being competent in Linux</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/metasploit.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Metasploitable</h1>
                                    <p className="text-gray-400">Contains the knowledge to use Metasploit</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/ice.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Ice</h1>
                                    <p className="text-gray-400">Exploiting Windows via a media server</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/adventofcyber.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Christmas 2019</h1>
                                    <p className="text-gray-400">Taking part in the Christmas CTF!</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/blue.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Blue</h1>
                                    <p className="text-gray-400">Hacking into Windows via EternalBlue</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/windowsprivesc.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Windows Priv Esc</h1>
                                    <p className="text-gray-400">Mastering Windows Privilege Escalation</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/streak7.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">7 Day Streak</h1>
                                    <p className="text-gray-400">Achieving a 7 day hacking streak</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/streak30.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">30 Day Streak</h1>
                                    <p className="text-gray-400">Achieving a 30 day hacking streak</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/linuxprivesc.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Linux Priv Esc</h1>
                                    <p className="text-gray-400">Mastering Linux Privilege Escalation</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/owasptop10.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">OWASP Top 10</h1>
                                    <p className="text-gray-400">Understanding every OWASP vulnerability</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/pentestingtools_badge.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Pentester Tools</h1>
                                    <p className="text-gray-400">Completing the Petesting Tolls series</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/wireshark.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Wireshark</h1>
                                    <p className="text-gray-400">Competent with Wireshark & Packer Analysis</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/docker.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Docker</h1>
                                    <p className="text-gray-400 ml-10">Breaking out of Docker container in 7 different ways</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/streak90.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">90 Day Streak</h1>
                                    <p className="text-gray-400 ml-10">Hacking for 90 days in a row</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/howthewebworks.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">World Wide Web</h1>
                                    <p className="text-gray-400 ml-10">Completing the 'How The Web Works' module</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/networkfundamentals.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Networking Nerd</h1>
                                    <p className="text-gray-400 ml-10">Completing the 'Networking fundamentals' module</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/introtooffensivesecurity.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Pentesting Principles</h1>
                                    <p className="text-gray-400 ml-10">Completing tthe 'Introduction to Pentesting' module</p>
                                </div>                           
                            </div>

                            <div className="flex p-3 pb-10">
                                <img className="shadow-md shadow-cyan-400 absolute h-20 w-20 rounded-lg border-cyan-700 shadow-lg border-2" src="https://tryhackme.com/img/badges/introtowebsecurity.svg" alt="" />
                                <div className="md:ml-0 ml-28">
                                    <h1 className="text-white font-semibold text-center">Intro to Web Hacking</h1>
                                    <p className="text-gray-400 ml-10">Completing the 'Introduction to Web Hacking' module</p>
                                </div>                           
                            </div>
                        </Slider>
                    </StyleWrapper>
                </div>
            </div>
        </ReactCardFlip>
        </div>
    )
}

export default CyberBadges
