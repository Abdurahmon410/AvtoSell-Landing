import React from 'react'
import "./Header.scss"
import { MdLanguage } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import AutoSell from "../../assets/icons/AutoSell.svg"
const Header = () => {
  return (
    <>
        <header className='header'>
            <div className="container">
                <div className='wrapper'>
                    <img src={AutoSell} alt="" />
                    <nav>
                        <ul>
                            <li>About us</li>
                            <li>How to use</li>
                            <li>FAQ</li>
                        </ul>
                    </nav>
                    <div className='header-end'>
                        <MdLanguage size={30}/>
                        <FaRegUserCircle size={30} />
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header