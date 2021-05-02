import React from 'react';
import Layout from '../components/Layout/Layout';
import GalleryHero from '../components/GalleryHero/GalleryHero';
import Banner from '../components/Banner';
import Panel from '../components/Panel';
import Footer from '../components/Footer';

const index = () => {
    return (
        <Layout>
            <GalleryHero
                imagePath={'/modra-me.JPG'}
                altText={'hero image me'}
            />
            <Banner>
                <div className='landing-banner__container center-items flex-column'>
                    <h3>Software Engineer</h3>
                    <p>Los Angeles</p>
                    <p className='landing-banner__copy'>
                        Senior Font End Software Engineer at Actv8 | Full Stack
                        Engineer | Front End Specialist | Freelance Web
                        Developer
                    </p>
                </div>
            </Banner>
            <Panel
                title={'About.'}
                copy={
                    "I am extremely passionate about coding. Currently I spend most of my waking hours improving my skill and learning new concepts in coding. I have a knack for design and working with front-end frameworks such as React, Nodejs, and Angular."
                }></Panel>
                <Footer></Footer>
        </Layout>
    );
};

export default index;
