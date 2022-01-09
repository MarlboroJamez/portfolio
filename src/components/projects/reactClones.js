import React, { useEffect, useRef, useState } from 'react'
import styled from "@emotion/styled"
import ReactCardFlip from 'react-card-flip'

//Projects GIF's
import Facebook from '../../assets/gif/facebook.gif'
import LinkedIn from '../../assets/gif/linkedin.gif'
import Netflix from '../../assets/gif/netflix.gif'
import Disney from '../../assets/gif/disney.gif'
import AmazonClone from '../../assets/gif/amazon.gif'
import Covid from '../../assets/gif/covid.gif'
import WhatsApp from '../../assets/gif/whatsapp.gif'

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

function ReactClones() {
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
                <svg onClick={handleClicked} xmlns="http://www.w3.org/2000/svg" class="hidden md:flex transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <a href="https://github.com/MarlboroJamez/Golang-Projects/tree/main/prototype-pollution">
                    <svg xmlns="http://www.w3.org/2000/svg"  class="md:hidden flex -mt-2 text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute right-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <h1 className="mt-4 md:mt-0 font-semibold lg:text-3xl md:text-2xl sm:text-xl">📌 ReactJS Clones</h1>

                <div className="flex mt-8 ml-2 md:ml-6">
                    <p className="text-xs mr-1 mt-1">📣</p>
                    <p className="font-base md:text-base text-xs font-base inline-block text-left">ReactJS has been one of my all time favorite frontend platforms, where it had all started with creating clones and jumping into more complex projects. It still
                    amazes me how ReactJS can be supported across different platforms as a frontend role and the flexibility it provides today.
                    </p>
                </div>

                <div className="mt-8 block md:flex">
                    <div>
                        <ul className="w-52 ml-6">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-green-900 opacity-80 bg-green-100 border border-green-700">Completed</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-sky-900 opacity-80 bg-sky-100 border border-sky-700">Covered</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-red-900 opacity-80 bg-red-100 border border-red-700">Exceptional Performance</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="ml-6 justify-around flex-wrap w-fit flex">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">ReactJS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">MongoDB</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Firebase</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">ContextAPI</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Redux</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Covid 19 API</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">API Handling</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Taiwindcss</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">ExpressJS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Google Authentication</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">NextJS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">ChartJS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Stripe</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{'resize':'both','overflow':'auto'}} className="hidden md:block bg-matt-900 p-4 border lg:w-110 md:w-96 w-96 border border-gray-300 shadow-lg rounded-lg">
                <div className="flex">
                    <svg onClick={handleClicked} xmlns="http://www.w3.org/2000/svg" class="text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

                    <a href="https://github.com/MarlboroJamez/ReactJS-Clones">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="-mt-2 text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute right-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>

                <div class="p-6">
                    <StyleWrapper>
                        <div className="shadow-md shadow-cyan-400 ">
                            <Slider {...settings}>
                                <img className="rounded-lg w-92 h-48 md:w-auto md:h-auto" src={Facebook} alt="" />
                                <img className="rounded-lg w-92 h-48 md:w-auto md:h-auto" src={LinkedIn} alt="" />
                                <img className="rounded-lg w-92 h-48 md:w-auto md:h-auto" src={Netflix} alt="" />
                                <img className="rounded-lg w-92 h-48 md:w-auto md:h-auto" src={Disney} alt="" />
                                <img className="rounded-lg w-92 h-48 md:w-auto md:h-auto" src={AmazonClone} alt="" />
                                <img className="rounded-lg w-92 h-48 md:w-auto md:h-auto" src={Covid} alt="" />
                                <img className="rounded-lg w-92 h-48 md:w-auto md:h-auto" src={WhatsApp} alt="" />
                            </Slider>
                        </div>
                    </StyleWrapper>
                </div>
            </div>
        </ReactCardFlip>
        </div>
    )
}

export default ReactClones
