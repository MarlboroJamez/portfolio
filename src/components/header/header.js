import React from 'react'
import coding from '../../assets/images/coding.png'
import { Link as Sroll } from 'react-scroll'
import { Link } from 'react-router-dom'

function Header({handleScroll}) {
    return (
        <div className="hidden sticky top-0 z-50 md:flex justify-between w-full h-16 bg-neutral-900 border-b-4 border-cyan-700">
            <div>
                <ul className="flex p-2">
                    <Sroll onClick={() => handleScroll} to="home" activeClass="active" spy={true} smooth={true}>
                        <li className="pt-4 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-gray-200">Home</li>
                    </Sroll>
                    <Sroll onClick={() => handleScroll} to="about" activeClass="active" spy={true} smooth={true}>
                        <li className="pt-4 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-gray-200">About</li>
                    </Sroll>
                    <Sroll onClick={() => handleScroll} to="skills" activeClass="active" spy={true} smooth={true}>
                        <li className="pt-4 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-gray-200">Skills</li>
                    </Sroll>
                    <Sroll onClick={() => handleScroll} to="projects" activeClass="active" spy={true} smooth={true}>
                        <li className="pt-4 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-gray-200">Projects</li>
                    </Sroll>
                    <Sroll onClick={() => handleScroll} to="contact" activeClass="active" spy={true} smooth={true}>
                        <li className="pt-4 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-gray-200">Contact</li>
                    </Sroll>
                </ul>
            </div>
            <div className="flex">
                <ul className="flex p-2 mr-4">
                    <a href="https://onedrive.live.com/download?cid=57834CF800BE01C8&resid=57834CF800BE01C8%211240&authkey=AFnsiVl-g43VB8U&em=2">
                        <li className="md:mr-6 mr-0 pt-4 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-cyan-500">Resume</li>
                    </a>
                    <Link to="/algorithms/sorting">
                        <li className="pt-4 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-cyan-500">Visual Algorithms</li>
                    </Link>
                    <Link to="/stock/screener">
                        <li className="pt-4 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-cyan-500">Stocks Screener</li>
                    </Link>
                </ul>
                <div className="animate-bounce pt-4 pr-3">
                    <img className="w-12 h-12 rounded-full" src={coding} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
