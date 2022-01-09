import React, {  useState } from 'react'
import Eye from '../assets/gif/eye.gif'

//Project Imports
import MyStudiosPro from '../components/projects/mystudiospro'
import ReactClones from '../components/projects/reactClones.js'
import AutomatedWorkflow from '../components/projects/automatedIntegration'
import ProtoTypePollution from '../components/projects/prototypePollution'
import SubdomainEnumeration from '../components/projects/subdomainEnumeration'
import LaravelPhp from '../components/projects/laravelPhp'
import NCWDVoting from '../components/projects/ncwdVote'
import CyberBadges from '../components/projects/cyberBadges'
import TradingViewStrategy from '../components/projects/tradingViewStrategy'
import FacialDetection from '../components/projects/facialDetection'

function Projects() {

    return (
        <div className="text-center p-6">
            <div className="flex mt-20">
                <img className="ml-14 md:ml-122 h-14 w-14 mr-3 rounded-full" src={Eye} alt="" />
                <h1 className="text-5xl font-medium text-gray-700">Projects</h1>
            </div>

            <div className="flex flex-wrap justify-around mt-12 w-full">
                <MyStudiosPro/>
                <AutomatedWorkflow/>
                <ProtoTypePollution/>
                <SubdomainEnumeration/>
                <ReactClones/>
                <NCWDVoting/>
                <FacialDetection/>
                <LaravelPhp/>
                <TradingViewStrategy/>
                <CyberBadges/>
            </div>
        </div>
    )
}

export default Projects
