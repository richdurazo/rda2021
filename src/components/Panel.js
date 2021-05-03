import React from 'react';

const Panel = (props) => {
    return (
        <section className='panel'>
            <div className='panel-copy flex-column'>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.copy}</p>
                </div>
            </div>
            <div className='panel-square flex-column center-items'>
                <img src={props.image} alt={props.imageAlt}/>
            </div>
        </section>
    );
};

export default Panel;
