import React from 'react';

const Footer = () => {
    return (
        <footer
            className='content-footer flex-column center-items'
            id='contact'>
            <h3>Contact.</h3>
            <div>
                <ul className='icons'>
                    <li>
                        <a href='mailto:rcdurazo@gmail.com'>
                            <img src='/envelope-regular.svg' alt='envelope-icon-email' />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/richdurazo' target='_blank'>
                            <img src='/github-brands.svg' alt='github-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com/trickydick' target='_blank'>
                            <img src='/instagram-brands.svg' alt='instagram-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/rdurazo/' target='_blank'>
                            <img src='/linkedin-in-brands.svg' alt='linkedin-icon' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
