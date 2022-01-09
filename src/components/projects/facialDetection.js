import React, { useEffect, useRef, useState } from 'react'
import styled from "@emotion/styled"
import ReactCardFlip from 'react-card-flip'

//Projects GIF's
import facialDetection from '../../assets/gif/facialdetection.gif'


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


function FacialDetection() {
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
                <a href="https://github.com/MarlboroJamez/machine-learning/tree/main/facial-detection">
                    <svg xmlns="http://www.w3.org/2000/svg"  class="md:hidden flex -mt-2 text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute right-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <h1 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl">👁️‍🗨️ Facial Detection</h1>

                <div className="flex mt-8 ml-2 md:ml-6">
                    <p className="text-xs mr-1 mt-1">📣</p>
                    <p className="md:text-base text-xs font-base inline-block text-left">I've started jumping into a new area of studies with machine learning, so here are my projects on my current progression in this area.
                    </p>
                </div>

                <div className="mt-8 block md:flex">
                    <div>
                        <ul className="w-52 ml-6">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-yellow-900 opacity-80 bg-yellow-100 border border-yellow-700">Current Studies</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-blue-900 opacity-80 bg-blue-100 border border-blue-700">Machine Learning</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="ml-6 justify-around flex-wrap w-fit flex">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Python</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">OpenCV</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{'resize':'both','overflow':'auto'}} className="md:block hidden bg-matt-900 p-4 border lg:w-110 md:w-96 w-96 border border-gray-300 shadow-lg rounded-lg">
                <div className="flex justify-between">
                    <svg onClick={handleClicked} xmlns="http://www.w3.org/2000/svg" class="text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

                    <a href="https://github.com/MarlboroJamez/machine-learning/tree/main/facial-detection">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="-mt-2 text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute right-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>

                <div class="p-6">
                    <StyleWrapper>  
                        <div className="shadow-md shadow-cyan-400 ">
                            <Slider {...settings}>
                                <img className="rounded-lg border-gray-300 shadow-lg border-2 w-92 h-48 md:w-auto md:h-auto" src={facialDetection} alt="" />
                            </Slider>
                        </div>
                    </StyleWrapper>
                </div>
            </div>
        </ReactCardFlip>
       </div>
    )
}

export default FacialDetection
