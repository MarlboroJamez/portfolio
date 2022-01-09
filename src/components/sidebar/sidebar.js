import React, { useEffect, useRef, useState } from 'react'
import Mouse from '../../assets/gif/mouse.gif'
import { Link as Sroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import coding from '../../assets/images/coding.png'

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

function Sidebar({myRef}) {
    const [show, setShow] = useState(false);

    let node = useClickOutside(() => {
        setShow(false)
    })


    return (
        <div ref={node} className="z-50 absolute sticky top-4">
            <div onClick={() => setShow(prev => !prev)} className="shadow-md shadow-cyan-700 bg-matt-900 border-2 border-cyan-600 rounded-full m-4 h-14 w-14">
                <img className="h-10 w-10 mt-2 ml-2" src={Mouse} alt="" />
            </div>

            {show ? (
                <div className="mt-6 w-52 h-fit bg-matt-900 border-2 border-cyan-600 rounded-lg">
                    <div>
                        <ul className="text-center flex p-2 mr-4">
                            <Link to="/stock/screener">
                                <li className="ml-3 pt-2 cursor-pointer outline-none transform hover:scale-102 transition duration-400 ease-linear hover:text-sky-700 p-2 font-medium text-xl text-cyan-500">Stocks Screener</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            ):null}
        </div>
    )
}

export default Sidebar
