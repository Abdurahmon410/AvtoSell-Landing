import React from 'react'
import "./About.scss"
import AutoSellaboutlogo from "../../assets/icons/AutoSell-about-logo.svg"
const About = () => {
  return (
    <>
      <section className='about'>
        <div className="container">
          <div className='wrapper'>
            <img src={AutoSellaboutlogo} alt="" />
          <div className='about-end'>
            <h2>
              About
              <span>Us</span>
            </h2>
            <p>Our ERP system helps you to manage warehouse and sales system of your organization, and track business processes with lots of features for free.
              New ERP solution for the businesses that are oriented at automobile sales</p>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About