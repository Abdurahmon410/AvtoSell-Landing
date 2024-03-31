import React from 'react'
import "./Hero.scss"
const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className='wrapper'>
                        <h1><span className='hero-title-span'>DRIVE</span> YOUR BUSINESS</h1>
                        <p className='hero-subtitle'>With our <span className='hero-title-span'>ERP system</span> that helps You to manage warehouse and sales, and track the process with lots of features for free</p>
                        <div className='hero-end'>
                            <a href='https://avto-sell.vercel.app/' className='hero-create-btn'>CREATE A COMPANY</a>
                            <button className='hero-join-btn'>JOIN US NOW</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero