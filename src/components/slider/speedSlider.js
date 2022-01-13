import React from 'react'


function Slider({animationSpeed, setAnimationSpeed}) {
    return (
        <div className="mr-3">
            <p className="mt-1.5 text-cyan-700 flex font-bold">{animationSpeed}ms <p className="ml-2 font-light text-black">Animated speed</p></p>
            <input type="range" min={1} max={50} value={animationSpeed} onChange={(e) => setAnimationSpeed(e.target.value)}/>
        </div>
    )
}

export default Slider
