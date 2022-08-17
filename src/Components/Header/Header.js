import React, { Component } from 'react'
import css from './Header.module.css'
import KUTE from 'kute.js'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const morph = KUTE.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration: 3000, yoyo: true }
        )
        morph.start()
    }


    render() {

        return (
            <div className={css.header}>
                <div className={css.headerText}>
                    <h1 className={css.headTitle}>Welcome to my virtual porfolio</h1>
                    <p className={css.headText}>The perpose of this Virtual Porfolio is to introduce myself and to demonstrate my development skills.</p>
                </div>
                <div className={css.blob}>
                <svg id="visual" viewBox="0 0 350 350" width="350" height="350" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(215.55156067759805 216.21185655273715)">
                        <path id='blob1' d="M82.9 -149.1C99.8 -133.8 100.5 -96.2 98.2 -67.6C95.9 -39 90.4 -19.5 92.3 1.1C94.2 21.7 103.4 43.3 95.5 54.2C87.6 65 62.5 65 43.8 75.8C25 86.6 12.5 108.3 -6.2 119.1C-25 130 -50 129.9 -67.9 118.6C-85.8 107.3 -96.6 84.6 -108.1 63C-119.6 41.3 -131.8 20.7 -130.1 1C-128.3 -18.7 -112.7 -37.3 -105.3 -66.2C-98 -95.1 -99 -134.1 -82.8 -149.8C-66.7 -165.5 -33.3 -157.7 -0.2 -157.4C33 -157.2 66 -164.3 82.9 -149.1" fill="#297EA6"></path>
                    </g>
                    <g transform="translate(220.76897818522932 204.93209299448918)" style={{visibility: 'hidden'}}>
                        <path id='blob2' d="M35.8 -82.1C46.7 -55.8 55.8 -46.7 63.6 -35.8C71.3 -25 77.7 -12.5 79.5 1.1C81.4 14.7 78.8 29.3 81.5 58.2C84.1 87.1 92.1 130.1 79.4 140.3C66.7 150.5 33.3 127.7 7.4 114.9C-18.5 102 -37 99.1 -63.1 96.7C-89.3 94.3 -123 92.4 -127.4 76.4C-131.8 60.3 -106.9 30.2 -104 1.7C-101.1 -26.8 -120.3 -53.7 -113.5 -65.5C-106.6 -77.3 -73.8 -74.2 -50.6 -93.3C-27.3 -112.3 -13.7 -153.7 -0.6 -152.7C12.5 -151.7 25 -108.3 35.8 -82.1" fill="#297EA6"></path>
                    </g>
                </svg>
                </div>
            </div>
        )
    }
}
export default Header
