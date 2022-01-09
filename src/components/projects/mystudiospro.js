import React, { useEffect, useRef, useState } from 'react'
import styled from "@emotion/styled"
import ReactCardFlip from 'react-card-flip'

//Projects GIF's
import MyStudiosPro from '../../assets/gif/mystudiospro.gif'
import Studio from '../../assets/gif/studio.gif'
import SecondBrain from '../../assets/gif/secondbrain.gif'

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


function Mystudiospro() {
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
                <p className="md:hidden flex -mt-2 text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute right-14 h-6 w-6">
                    Private
                </p>
                <h1 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl">🩰 My Studio's Pro</h1>

                <div className="flex mt-8 ml-2 md:ml-6">
                    <p className="text-xs mr-1 mt-1">📣</p>
                    <p className="md:text-base text-xs font-base inline-block text-left">My Studio's Pro is being developed around the idea, on helping dance studios to reach their fullest potential as a business and as a cultural industry.
                    Giving dance teachers the accessibility to marketing analytics, financial management, website analytics and a the ability to broadcast events and to provide virtual classes around the globe as a dance studio owner.
                    </p>
                </div>

                <div className="mt-8 block md:flex">
                    <div>
                        <ul className="w-52 ml-6">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-yellow-900 opacity-80 bg-yellow-100 border border-yellow-700">Currently Working on</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-blue-900 opacity-80 bg-blue-100 border border-blue-700">NCWD - Non Profit Orginisation</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-orange-900 opacity-80 bg-orange-100 border border-orange-700">7 Months</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="ml-6 justify-around flex-wrap w-fit flex">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">ElectronJS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">ReactJS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Express</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Redux</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">TailwindCSS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Webpack, PostCSS, Babel</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Redux</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">ExpressJS</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Firebase</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Jest</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Tailwindcss</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Mocha</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Google Analytics API</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Facebook Analytics API</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Stripe</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">CircleCI</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{'resize':'both','overflow':'auto'}} className="md:block hidden bg-matt-900 p-4 border lg:w-110 md:w-96 w-96 border border-gray-300 shadow-lg rounded-lg">
                <div className="flex justify-between">
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
                                <img className="rounded-lg border-gray-300 shadow-lg border-2 w-92 h-48 md:w-auto md:h-auto" src={MyStudiosPro} alt="" />
                                <img className="rounded-lg border-gray-300 shadow-lg border-2 w-92 h-48 md:w-auto md:h-auto" src={Studio} alt="" />
                                <img className="rounded-lg border-gray-300 shadow-lg border-2 w-92 h-48 md:w-auto md:h-auto" src={SecondBrain} alt="" />
                            </Slider>
                        </div>
                    </StyleWrapper>
                </div>
            </div>
        </ReactCardFlip>
       </div>
    )
}

export default Mystudiospro
