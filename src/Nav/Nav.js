import React, {useState} from 'react'
import './Nav.css'
import { AiFillApple } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';
// import { ImCross } from 'react-icons/im';
// import { CgMathEqual } from 'react-icons/cg';


const Nav = () => {

    const[toggle,setToggle] = useState(false);

    const togglehandler = () => {
        setToggle(!toggle)
    }

    return (
        <header className={`${toggle && 'active-header'}`}>
            <div className='container'>
                <div className='nav'>
                    <ul className='nav-list nav-list-mobile'>
                        <li className='nav-item'>
                            <div onClick={togglehandler} className={`mobile-menu `}>
                                {/* I think you want to achieve this */}
                                {/* {toggle && <span className=''><ImCross /></span>} */}
                                {/* {!toggle && <span className=''><ImCross /></span>} */}
                                {/* above is also the same as  */}
                                {/* {toggle 
                                    ? <span className=''><ImCross /></span> 
                                    : <span className=''><CgMathEqual /></span>
                                } */}
                                {/* Using class to achieve it would look like this */}
                                <span className={`line line-top ${toggle && 'active-top'}`}></span>
                                <span className={`line line-bottom ${toggle && 'active-bottom'}`}></span>
                            </div>
                        </li>
                        <li className='nav-item nav-link nav-link-apple'><AiFillApple /></li>
                        <li className={`nav-item nav-link nav-link-bag ${toggle && 'active-nav-link-bag'}`}><BsFillBagFill /></li>
                    </ul>
                    <ul className={`nav-list nav-list-larger ${toggle && 'active-nav-list-larger'}`}>
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
