import React, { useEffect, useState } from 'react'
import Phone from '../assets/gif/phone.gif'
import emailjs from 'emailjs-com';
import EmailModal from '../components/modals/emailSucces'

function Contact({history}) {
    emailjs.init('user_3zZd1p10DZUEhiAxGrsQT')
    
    const delay = 5;
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [showContactModal, setShowContactModal] = useState(false)

    useEffect(() => {
        if(showContactModal === true){
            setTimeout(() => setShowContactModal(false), delay * 600)
        }
    }, [showContactModal])

    useEffect(() => {
        const btn = document.getElementById('button');
        document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();
        
        btn.value = 'Sending...';
        
        const serviceID = 'service_4y7o1qt';
        const templateID = 'template_4y0r5hv';
        
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            btn.value = 'Sent';
            setTimeout(() => {
                setName("")
                setEmail("")
                setMessage("")
                history.push('/')
            },1000)
            setShowContactModal(true)
            }, (err) => {
            btn.value = 'Failed';
            alert(JSON.stringify(err));
        })
        
    });
    }, [])

    return (
        <div className="text-center md:p-6 pb-20 p-2">
            {showContactModal ? (
                <EmailModal setShowContactModal={setShowContactModal}/>
            ):null}

            <div className="flex mt-10 md:mt-28">
                <img className="ml-9 md:ml-116 h-20 -mt-5 w-20 mr-3 rounded-full" src={Phone} alt="" />
                <h1 className="text-5xl font-medium text-cyan-500">Contact</h1>
            </div>
            <div className="flex justify-center">
                <p className="text-lg mt-2 w-100 text-gray-100">Enough about me, learn more about what keeps me driven, feel free to contact me</p>
            </div>

            <form id="form">
                <div className="md:ml-108 mt-10 w-full md:w-110">
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" className="focus:border-cyan-600 transition-shadow duration-300 ease-linear transition-transform focus:scale-102 w-full md:w-full outline-none bg-matt-900 text-white text-lg p-2 rounded-lg border border-gray-700 focus:shadow-cyan-900 focus:shadow-md" type="text" placeholder="Name"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="focus:border-cyan-600 mt-8 transition-shadow duration-300 ease-linear transition-transform focus:scale-102 w-full md:w-full outline-none bg-matt-900 text-white text-lg p-2 rounded-lg border border-gray-700 focus:shadow-cyan-900 focus:shadow-md" type="text" placeholder="Email"/>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" id="message" className="focus:border-cyan-600 mt-8 h-48 transition-shadow duration-300 ease-linear transition-transform focus:scale-102 w-full md:w-full outline-none bg-matt-900 text-white text-lg p-2 rounded-lg border border-gray-700 focus:shadow-cyan-900 focus:shadow-md" type="text" placeholder="Enter Message..."/>

                    <input type="submit" id="button" className="md:ml-0 -ml-28 md:mt-0 mt-60 md:block absolute bg-matt-900 hover:text-gray-300 hover:border-cyan-500 transition-shadow duration-300 ease-linear transition-transform hover:scale-103 border border-cyan-800 rounded-lg text-white text-xl font-regular pl-4 pr-4 pt-2 pb-2 w-26 cursor-pointer mt-6 float-right hover:shadow-cyan-900 hover:shadow-md" placeholder="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default Contact
