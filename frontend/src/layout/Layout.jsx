import React, { Children } from 'react'
import Main from './Main'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}
