import React, { Fragment } from 'react';
import NavBar from '../NavBar/NavBar';
import Head from 'next/head'

const Layout = props => {
    return (
        <Fragment>
            <Head>
                <title>R Durazo</title>
                <meta name='description' content='Richard Durazo freelance Web Developer, software engineer living out of los angeles. Now accepting new clients for freelance work'/>
            </Head>
            <NavBar />
            {props.children}
        </Fragment>
    );
}

export default Layout;
