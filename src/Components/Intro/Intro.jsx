import React from 'react'
import './Intro.css'

export default function Intro() {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My Name is</h2>
                <h1 className="i-name">Raghoottam Katti</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                    </div>
                </div>
                <div className="i-desc">
                    
                </div>
            </div>
        </div>
        <div className="i-right">Right</div>
    </div>
  )
}
