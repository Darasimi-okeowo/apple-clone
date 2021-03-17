import React from 'react'
import './Nav.css'
import { AiFillApple } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';


const Nav = () => {
    return (
        <div className='nav'>
            <ul className='nav-items'>
                <li className='apple'><AiFillApple /></li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>TV</li>
                <li>Music</li>
                <li>Support</li>
                <li className='search'><AiOutlineSearch /></li>
                <li className='product'><BsFillBagFill /></li>
            </ul>
        </div>
    )
}

export default Nav
