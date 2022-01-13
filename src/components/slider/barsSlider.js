import React from 'react'


function Slider({numberBars, setNumberBars}) {
    return (
        <div className="ml-3">
            <p className="font-bold mt-1.5 text-cyan-700 flex">{numberBars} <p className="ml-2 font-light text-black">Number of bars</p></p>
            <input type="range" min={0} max={420} value={numberBars} onChange={(e) => setNumberBars(e.target.value)}/>
        </div>
    )
}

export default Slider
