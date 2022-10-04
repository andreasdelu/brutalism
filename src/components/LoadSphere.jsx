import React from 'react'
import './LoadSphere.css'

export default function LoadSphere({ percent }) {

    let sphereSteps = 6;
    let sphereDivs = [];

    for (let i = 0; i < sphereSteps; i++) {
        sphereDivs.push(<div key={i} className='sphereLine' style={{transform: `rotateY(${i*(180/sphereSteps)}deg)`}}></div>)
    }

    return (
        <div className="loadingContainer">
            <div className="bg-h"></div>
            <div className="bg-v"></div>
            <div id='loadSphere'>
                {sphereDivs}
            </div>
            <p>Loading...</p>
            <div className='progress'>
                <div className="prog-val"></div>
            </div>
        </div>
    )
}
