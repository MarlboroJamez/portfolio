import React, { useEffect, useRef, useState } from 'react'
import styled from "@emotion/styled"
import ReactCardFlip from 'react-card-flip'

//Projects GIF's
import Tradingview from '../../assets/gif/tradingview.gif'

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
function TradingViewStrategy() {
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
                <a href="https://github.com/MarlboroJamez/TradeTheMarket">
                    <svg xmlns="http://www.w3.org/2000/svg"  class="md:hidden flex -mt-2 text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute right-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <h1 className="mt-4 md:mt-0 font-semibold lg:text-3xl md:text-2xl sm:text-xl">📈 Tradingview - Algo Strategy</h1>

                <div className="flex mt-8 ml-2 md:ml-6">
                    <p className="text-xs mr-1 mt-1">📣</p>
                    <p className="md:text-base text-xs font-base inline-block text-left">I would from time to time take part in the Stock Markets myself, where I have written custom Calculators & Indicators in C#, but this time I've built custom Indicators as well as a Signal Indicated Strategy that has passed with a 65-100% accuracy rate.
                    Have a look at the custom Stock Screener I've made, which provides a three minute refresh rate with live Post & Pre marketed data.  
                    </p>
                </div>

                <div className="mt-8 block md:flex">
                    <div>
                        <ul className="w-52 ml-6">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-green-900 opacity-80 bg-green-100 border border-green-700">Completed</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-yellow-900 opacity-80 bg-yellow-100 border border-yellow-700">Stocks</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-gray-900 opacity-80 bg-gray-100 border border-gray-700">Tradingview</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="ml-6 justify-around flex-wrap w-fit flex">
                            <li className="m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Python</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Google Sheets</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Finviz</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Sheets.best</li>
                            <li className="mt-2 m-1 p-1 text-xs rounded-lg font-semibold text-cyan-900 opacity-80 bg-cyan-100 border border-cyan-700">Python Pine</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{'resize':'both','overflow':'auto'}} className="hidden md:block bg-matt-900 p-4 border lg:w-110 md:w-96 w-96 border border-gray-300 shadow-lg rounded-lg">
                <div className="flex">
                    <svg onClick={handleClicked} xmlns="http://www.w3.org/2000/svg" class="text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

                    <a href="https://github.com/MarlboroJamez/TradeTheMarket">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="-mt-2 text-cyan-500 transition duration-300 ease-in hover:text-cyan-500 transform hover:scale-103 cursor-pointer outline-none absolute right-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>

                <div class="p-6">
                    <StyleWrapper>
                        <div className="shadow-md shadow-cyan-400 ">
                            <Slider {...settings}>
                                <img className="w-92 h-48 md:w-auto md:h-auto rounded-lg border-gray-300 shadow-lg border-2" src={Tradingview} alt="" />
                            </Slider>
                        </div>
                    </StyleWrapper>
                </div>
            </div>
        </ReactCardFlip>
       </div>
    )
}

export default TradingViewStrategy
