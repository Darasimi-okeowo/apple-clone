import React from 'react'
import './Section2.css'
const Section2 = () => {
    return (
        <div className='hero iphone-11'>
            <div className='container'>
                <div className='title title-dark'>
                    <h2 className='title-heading'>iPhone 11 Pro</h2>
                    <h3 className='title-sub-heading'>From twenty nine dollars and twelve cents per month for twenty four months or six hundred ninety nine. <br />
                        Buy directly from Apple with special carrier offers.</h3>
                    <p className='title-price'>From $29.12/mo. for 24 mo. or $699 before trade‑in.</p>
                </div>
                <div className='cta'>
                    <p className='cta-link cta-link-darker'>Learn more</p>
                    <p className='cta-link cta-link-darker'>Buy</p>
                </div>
            </div>
        </div>
    )
}

export default Section2