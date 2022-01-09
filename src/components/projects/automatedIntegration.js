import React, { useEffect, useRef, useState } from 'react'
import styled from "@emotion/styled"
import ReactCardFlip from 'react-card-flip'

//Projects GIF's
import AutomatedTests from '../../assets/gif/automatedtests.gif'


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

function AutomatedIntegration() {
    const [isFlipped, setIsFlipped] = useState(false);

    const settings = {
        data: true,
        dots:true,
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
                <svg onClick={handleClicked} xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none hidden md:flex absolute float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <p className="md:hidden flex text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 -mt-2 transform hover:scale-103 cursor-pointer outline-none absolute right-14 h-6 w-6">
                    Private
                </p>
                <h1 className="mt-4 md:mt-0 font-semibold lg:text-3xl md:text-2xl sm:text-xl">〽️ Automated Integration Testing</h1>

                <div className="flex mt-8 ml-2 md:ml-6">
                    <p className="text-xs mr-1 mt-1">📣</p>
                    <p className="font-base md:text-base text-xs font-base inline-block text-left">I've recently started integrating a automated testing pipeline to my recent projects, specifically against My Studio's Pro. Not only am I performing tests but I'm checking for newly packaged versions as well as performing auto updates to the desktop application itself 
                    across Windows and Mac users.</p>
                </div>

                <div className="mt-8 block md:flex">
                    <div>
                        <ul className="w-52 md:ml-6">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-green-900 opacity-80 bg-green-100 border border-green-700">Completed</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-sky-900 opacity-80 bg-sky-100 border border-sky-700">Covered</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-red-900 opacity-80 bg-red-100 border border-red-700">Exceptional Performance</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="ml-6 justify-around flex-wrap w-fit flex">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">ElectronJS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Mocha</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">CircleCI</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Mocha - Visual Reporting</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Jest</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Docker</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Ubuntu</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Headless Chromedrivers</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Git</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Github</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Electron Packager</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Electron Build</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Chromedriver Logging</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{'resize':'both','overflow':'auto'}} className="md:block hidden p-4 bg-matt-900 border lg:w-110 md:w-96 w-96 border border-gray-300 shadow-lg rounded-lg">
                <div className="flex">
                    <svg onClick={handleClicked} xmlns="http://www.w3.org/2000/svg" class="text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

                    <p className="-mt-2 text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute right-10 h-6 w-6">
                        Private
                    </p>
                </div>

                <div class="p-6">
                    <StyleWrapper>
                        <div className="shadow-md shadow-cyan-400 ">
                            <Slider {...settings}>
                                <img className="rounded-lg border-cyan-700 border-2 w-92 h-48 md:w-auto md:h-auto" src={AutomatedTests} alt="" />
                            </Slider>
                        </div>
                    </StyleWrapper>
                </div>
            </div>
        </ReactCardFlip>
       </div>
    )
}

export default AutomatedIntegration
