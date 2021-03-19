import React, {useState} from 'react'
import './Nav.css'
import { AiFillApple } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';


const Nav = () => {
    const[toggle,setToggle] = useState(true);

    const togglehandler = () => {
        console.log(!toggle)
        setToggle(!toggle)
    }

    return (
        <header>
            <div className='container'>
                <div className='nav'>
                    <ul className='nav-list nav-list-mobile'>
                        <li className='nav-item'>
                            <div onClick={togglehandler} className='mobile-menu'>
                                <span className='line line-top'></span>
                                <span className='line line-bottom'></span>
                            </div>
                        </li>
                        <li className='nav-item nav-link nav-link-apple'><AiFillApple /></li>
                        <li className='nav-item nav-link nav-link-bag'><BsFillBagFill /></li>
                    </ul>
                    <ul className='nav-list nav-list-larger'>
                        <li className='nav-item nav-item-hidden nav-link nav-link-apple'><AiFillApple /></li>
                        <li className='nav-item nav-link'>Mac</li>
                        <li className='nav-item nav-link'>iPad</li>
                        <li className='nav-item nav-link'>iPhone</li>
                        <li className='nav-item nav-link'>Watch</li>
                        <li className='nav-item nav-link'>TV</li>
                        <li className='nav-item nav-link'>Music</li>
                        <li className='nav-item nav-link'>Support</li>
                        <li className='nav-item nav-link nav-link nav-link-search'><AiOutlineSearch /></li>
                        <li className='nav-item nav-item-hidden nav-link nav-link-bag'><BsFillBagFill /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Nav
