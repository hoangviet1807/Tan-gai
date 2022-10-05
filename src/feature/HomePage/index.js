import React from 'react'
import './style.scss'

export const HomePage = () => {
    return (
        <div className='container'>
            <div className='header'>
                <nav className='action_header'>
                    <ul className='menu'>
                        <li className='item'>Sign in</li>
                        <li className='item'>Product support</li>
                        <li className='item'>Company</li>
                        <li className='item'>Contact us</li>
                        <li className='item'>English</li>
                    </ul>
                </nav>
                <div className='tab_header'>
                    {/* <div className='tab_header logo'>Zendesk</div>
                    <div className='tab_header item'>Products</div>
                    <div className='tab_header item'>Pricing</div>
                    <div className='tab_header item'>Solution</div>
                    <div className='tab_header item'>Demo</div>
                    <div className='tab_header item'>Services</div>
                    <div className='tab_header item'>Resources</div>
                    <div className='tab_header button'>Free trial</div> */}
                    <ul className='tab_menu'>
                        <div className='tab_menu logo'>Zendesk</div>
                        <li className='tab_menu item'>Products</li>
                        <li className='tab_menu item'>Pricing</li>
                        <li className='tab_menu item'>Solution</li>
                        <li className='tab_menu item'>Demo</li>
                        <li className='tab_menu item'>Resources</li>
                        <li className='tab_menu button'>
                            <a>Free trial</a>
                        </li>

                    </ul>

                </div>
            </div>


        </div>
    )
}
