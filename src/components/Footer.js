import React from 'react';

const Footer = () => {
    return (
        <footer className="content-footer flex-column center-items" id="contact">
            <h3>Contact.</h3>
            <div>
                <ul className='icons'>
                    <li>
                        <a href='https://github.com/richdurazo' target='_blank'>
                            <i className='fa fa-github fa-3x'></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.linkedin.com/in/rdurazo'
                            target='_blank'>
                            <i className='fa fa-linkedin fa-3x'></i>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:rcdurazo@gmail.com'>
                            <i className='fa fa-envelope fa-3x'></i>
                        </a>
                    </li>
                    <li>
                        <a href='tel:951-317-4973'>
                            <i className='fa fa-phone fa-3x'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
