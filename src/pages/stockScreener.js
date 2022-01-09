import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Screener Views
import ShortSqueeze from '../views/screeners/shortSqueeze'
import GapUps from '../views/screeners/gapUps'
import BounceUps from '../views/screeners/bounceUps'
import PotentialBreakouts from '../views/screeners/potentialBreakouts'
import HighRelativeVolume from '../views/screeners/highRelativeVolume'
import NewHighs from '../views/screeners/newHighs'
import BreakingOut from '../views/screeners/breakingOut'
import OverSold from '../views/screeners/oversold'
import OverSoldWithEarnings from '../views/screeners/oversoldWithEarnings'
import OversoldReversals from '../views/screeners/oversoldReversals'
import BounceMovingAverage from '../views/screeners/bounceMovingAverage'
import WeeklyEarningGapUps from '../views/screeners/weeklyEarningGapUps'
import HighVolumeVolatility from '../views/screeners/highVolumeVolatility'
import BuyingDips from '../views/screeners/buyingDips'

function StockScreener() {
    const [selected, setSelected] = useState('short-squeeze');
    const [active, setActive] = useState(false);

    return (
        <div className="overflow-hidden md:overflow-visible h-fit md:h-screen bg-gray-100 p-2 md:p-6">
            <Link to="/">
                <h1 className="text-sky-500 text-lg font-semibold transition duration-400 transition-transform hover:scale-101 ease-in-out hover:text-cyan-700 cursor-pointer">Go Back</h1>
            </Link>
            <p className="mt-6 text-xl">Get a live market view on <mark className="text-cyan-600 bg-transparent font-medium">pre-market</mark> stocks & <mark className="text-cyan-600 bg-transparent font-medium">post-market</mark> data.</p>
            
            {/* Menu Options */}
            <div className="md:block flex">
                <div className="h-fit md:h-14 rounded-lg shadow-lg bg-white border border-cyan-600 mt-7 w-fit">
                    <ul className="md:flex flex-wrap p-2">
                        <li onClick={() => setSelected('short-squeeze')} className={selected === 'short-squeeze' && active === true ? "md:text-normal text-sm cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Short Squeeze</li>
                        <li onClick={() => setSelected('Gap Ups')} className={selected === 'Gap Ups' && active === true ? "md:text-normal text-sm cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Gap Ups</li>
                        <li onClick={() => setSelected('Bounce Ups')} className={selected === 'Bounce Ups' && active === true ? "md:text-normal text-sm cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Bounce Ups</li>
                        <li onClick={() => setSelected('Potential Breakouts')} className={selected === 'Potential Breakouts' && active === true ? "md:text-normal text-sm cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Potential Breakouts</li>
                        <li onClick={() => setSelected('High Relative Volume')} className={selected === 'High Relative Volume' && active === true ? "md:text-normal text-sm cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>High Relative Volume</li>
                        <li onClick={() => setSelected('New Highs')} className={selected === 'New Highs' && active === true ? "md:text-normal text-sm cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>New Highs</li>
                        <li onClick={() => setSelected('Breaking Out')} className={selected === 'Breaking Out' && active === true ? "md:text-normal text-sm cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Breaking Out</li>
                        <li onClick={() => setSelected('Oversold')} className={selected === 'Oversold' && active === true ? "md:text-normal text-sm cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium hover:text-cyan-500 md:text-base text-sm"}>Oversold</li>
                    </ul>
                </div>

                <div className="md:ml-0 ml-6 h-fit md:h-14 rounded-lg shadow-lg bg-white border border-cyan-600 mt-7 md:mt-4 w-fit">
                    <ul className="md:flex flex-wrap p-2">
                        <li onClick={() => setSelected('Oversold With Upcoming Earnings') + setActive(true)} className={selected === 'Oversold With Upcoming Earnings' && active === true ? "cursor-pointer md:text-base text-sm transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Oversold with Upcoming Earnings</li>
                        <li onClick={() => setSelected('Oversold Reversals') + setActive(true)} className={selected === 'Oversold Reversals' && active === true ? "cursor-pointer md:text-base text-sm transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Oversold Reversals</li>
                        <li onClick={() => setSelected('Bounce Moving Average') + setActive(true)} className={selected === 'Bounce Moving Average' && active === true ? "cursor-pointer md:text-base text-sm transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Bounce at Moving Average</li>
                        <li onClick={() => setSelected('Weekly Earnings Gap Ups') + setActive(true)} className={selected === 'Weekly Earnings Gap Ups' && active === true ? "cursor-pointer md:text-base text-sm transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>Weekly Earnings Gap Up</li>
                        <li onClick={() => setSelected('High Volume & High Volatility') + setActive(true)} className={selected === 'High Volume & High Volatility' && active === true ? "cursor-pointer md:text-base text-sm transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium border-r border-gray-200 hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium border-r border-gray-200 hover:text-cyan-500 md:text-base text-sm"}>High Volume & High Volatility</li>
                        <li onClick={() => setSelected('Buying Dips') + setActive(true)} className={selected === 'Buying Dips' && active === true ? "cursor-pointer md:text-base text-sm transition duration-100 ease-out transform hover:scale-103 text-sky-500 p-2 font-medium hover:text-cyan-500": "cursor-pointer transition duration-100 ease-out transform hover:scale-103 text-sky-900 p-2 font-medium  hover:text-cyan-500 md:text-base text-sm"}>Buying The Dips</li>
                    </ul>
                </div>
            </div>

            {/* Views */}
            <div className="md:h-fit h-screen mt-24 md:mt-6">
                {selected === "short-squeeze" && <ShortSqueeze/>}
                {selected === "Gap Ups" && <GapUps/>}
                {selected === "Bounce Ups" && <BounceUps/>}
                {selected === "Potential Breakouts" && <PotentialBreakouts/>}
                {selected === "High Relative Volume" && <HighRelativeVolume/>}
                {selected === "New Highs" && <NewHighs/>}
                {selected === "Breaking Out" && <BreakingOut/>}
                {selected === "Oversold" && <OverSold/>}
                {selected === "Oversold With Upcoming Earnings" && <OverSoldWithEarnings/>}
                {selected === "Oversold Reversals" && <OversoldReversals/>}
                {selected === "Bounce Moving Average" && <BounceMovingAverage/>}
                {selected === "Weekly Earnings Gap Ups" && <WeeklyEarningGapUps/>}
                {selected === "High Volume & High Volatility" && <HighVolumeVolatility/>}
                {selected === "Buying Dips" && <BuyingDips/>}
            </div>
        </div>
    )
}

export default StockScreener
