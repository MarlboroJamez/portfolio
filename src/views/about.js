import React from 'react'
import Eye from '../assets/gif/eye.gif'



//Animated icons
import Reading from '../assets/gif/reading.gif'
import Finger from '../assets/gif/finger.gif'
import Music from '../assets/gif/music.gif'
import Coding from '../assets/gif/coding.gif'

function About() {
    return (
        <div className="text-center p-6">
            <div className="flex mt-16">
                <img className="ml-16 md:ml-122 h-14 w-14 mr-3 rounded-full" src={Eye} alt="" />
                <h1 className="text-5xl font-medium text-gray-700">About</h1>
            </div>

            <div className="block md:flex mt-16">
                <div className="hover:border-cyan-700 cursor-pointer transition duration ease-in transform hover:scale-102 md:m-2 h-fit md:h-112 w-fit md:w-100 border border-cyan-100 bg-white shadow-lg rounded-lg">
                    <div className="mt-2 ml-32 md:ml-40">
                        <img className="h-28 w-28" src={Reading} alt="" />
                    </div>
                    <h1 className="mt-2 text-2xl font-semibold">Alway's Improving</h1>
                    <div className="md:p-0 p-3 mt-8 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">When I'm not working I spend my days studying and building new projects. 
                            This website is constantly evolving through out my journey, comeback in a 
                            few days and you might notice a few changes. Most nights
                            I can be found at my desk staying up far too late to solve that <mark className="bg-transparent text-red-400 font-normal">"last"</mark> floating error.</p>
                    </div>

                    <div className="md:p-0 p-3 mt-4 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">I'm based in South Africa and I'm currently working for <mark className="bg-transparent text-cyan-600 font-normal">NCWD</mark> as a <mark className="bg-transparent text-cyan-600 font-normal">Full Stack Devloper</mark>, where
                        you can find me building their new desktop application <mark className="bg-transparent text-green-500 font-normal">My Studio's Pro</mark> for dance studios across the globe, and making a change in the dance industry.
                        </p>
                    </div>
                </div>

                <div className="md:mt-0 mt-8 hover:border-cyan-700 cursor-pointer transition duration ease-in transform hover:scale-102 md:m-2 h-fit md:h-112 w-fit md:w-100 border border-cyan-100 bg-white shadow-lg rounded-lg">
                    <div className="mt-2 ml-32 md:ml-40">
                        <img className="h-28 w-28" src={Finger} alt="" />
                    </div>
                    <h1 className="mt-2 text-2xl font-semibold">Cyber Warrior</h1>
                    <div className="md:p-0 p-3 mt-8 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">I'd often take my time improving my cybersecurity skills to the next level through the most captivating, glamifield, hands-on training experience with
                        real-world simulating training labs, through<mark className="bg-transparent text-green-500 font-normal"> TryHackMe & HackTheBox</mark>.</p>
                    </div>
                    <div className="md:p-0 p-3 mt-4 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">I'd Take part in public and private <mark className="bg-transparent text-cyan-700 font-normal"> Buy Bounty</mark> programs, for earning and buidling a reputation at hackerOne and BugCrowd, my favorite bug would be <mark className="bg-transparent text-cyan-700 font-normal">Cache Poisining</mark>.</p>
                    </div>
                    <div className="md:p-0 p-3 mt-4 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">In my spare time, I'd try to compete in  <mark className="bg-transparent text-cyan-700 font-normal"> Capture The Flag </mark> holiday events, where the last one I've participated was 2019 Christmas CTF event hosted on TryHackMe.</p>
                    </div>
                    <div className="md:p-0 p-3 mt-4 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">My latest tool I've written, has been focused on <mark className="bg-transparent text-cyan-700 font-normal"> Prototype Pollution </mark> on vulnerable API end points across different Web Applications with the use of Golang.</p>
                    </div>
                </div>

                <div className="md:mt-0 mt-8 hover:border-cyan-700 cursor-pointer transition duration ease-in transform hover:scale-102 md:m-2 h-fit md:h-112 w-fit md:w-100 border border-cyan-100 bg-white shadow-lg rounded-lg">
                    <div className="mt-2 ml-32 md:ml-40">
                        <img className="h-28 w-28" src={Music} alt="" />
                    </div>
                    <h1 className="mt-2 text-2xl font-semibold">Fueled by Music</h1>
                    <div className="md:p-0 p-3 mt-8 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">I've been a musician for 17 years, with my main instrument being the <mark className="bg-transparent text-cyan-600 font-normal">Alto Saxophone</mark>.
                        </p>
                    </div>

                    <div className="md:p-0 p-3 mt-8 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs md:p-0 p-3 font-light">I'm currently holding 7 years South African colors with my High School Orchestra <mark className="bg-transparent text-cyan-600 font-normal">Hoërskool Waterkloof</mark>, where I've toured across South Africa with well known artists,
                        the <mark className="bg-transparent text-cyan-600 font-normal">South African Navy</mark> as well as the <mark className="bg-transparent text-cyan-600 font-normal">South African Airforce</mark>.
                        </p>
                    </div>

                    <div className="md:p-0 p-3 mt-8 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">I'm passionaite about <mark className="bg-transparent text-cyan-600 font-normal">Jazz</mark>, where I've taken part and performed at different master classes across different universities, with well known saxophonists nation wide and world wide.
                        </p>
                    </div>
                </div>

                <div className="md:mt-0 mt-8 hover:border-cyan-700 cursor-pointer transition duration ease-in transform hover:scale-102 md:m-2 h-fit md:h-112 w-fit md:w-100 border border-cyan-100 bg-white shadow-lg rounded-lg">
                    <div className="mt-2 ml-32 md:ml-40">
                        <img className="h-28 w-28" src={Coding} alt="" />
                    </div>
                    <h1 className="mt-2 text-2xl font-semibold">The Passionaite Coder</h1>
                    <div className="md:p-0 p-3 mt-8 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">I'm a programmer, because I'm inspired by the idea of being a better me today than I was yesterday.
                        To simply put it, I love to learn and this project is a great example of that! I picked up <mark className="bg-transparent text-cyan-600 font-normal">"Automated Integration Tests"</mark> with the use of CirclCI Dashboard, Docker and Ubuntu OS
                        for running tests across the <mark className="bg-transparent text-cyan-600 font-normal">My Studio's Pro - Desktop Application</mark>, by making use of Jest & Mocha for performing tests as well as test reports.
                        </p>
                    </div>

                    <div className="md:p-0 p-3 mt-4 flex w-fit md:w-82 md:ml-5 md:ml-10 text-left">
                        <p className="text-xs mt-1 mr-2">💠</p>
                        <p className="md:text-base text-xs font-light">If you'd like to learn more about what makes me tick, feel free to visit my contact section.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
