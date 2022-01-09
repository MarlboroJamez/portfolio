import React from 'react'
import Avatar from '../../assets/gif/avatar.gif'

function EmailSucces({setShowContactModal}) {
    return (
        <>
          <div
            className="hidden md:mt-0 mt-136 md:ml-0 -ml-112 justify-center items-center  overflow-x-hidden overflow-y-auto md:flex fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative md:w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="bg-matt-900 border border-cyan-600 rounded-lg shadow-lg shadow-cyan-500 relative flex flex-col w-72 md:w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-12 flex-auto">
                    <img className="-mt-5 ml-11 md:ml-24 align-center h-24 w-24" src={Avatar} alt="" />
                    <p className="font-light text-gray-300 my-4 text-blueGray-500 text-lg leading-relaxed">
                        Thank you for contacting me, I'll get in touch. 
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-35 md:block fixed hidden inset-0 z-40 bg-black"></div>
        </>
    )
}

export default EmailSucces
