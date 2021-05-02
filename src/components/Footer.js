import React from 'react';

const Footer = () => {
    return (
        <footer className="content-footer flex-column center-items" id="contact">
            <h3>Contact.</h3>
            <div>
                <ul class='icons'>
                    <li>
                        <a href='https://github.com/richdurazo' target='_blank'>
                            <i class='fa fa-github fa-3x'></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.linkedin.com/in/rdurazo'
                            target='_blank'>
                            <i class='fa fa-linkedin fa-3x'></i>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:rcdurazo@gmail.com'>
                            <i class='fa fa-envelope fa-3x'></i>
                        </a>
                    </li>
                    <li>
                        <a href='tel:951-317-4973'>
                            <i class='fa fa-phone fa-3x'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
