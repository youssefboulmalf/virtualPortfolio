import React, { Component } from 'react';
import css from './Footer.module.css';
export const Footer = (props) => {

    return (
        <div className={css.footerContainer}>
            <footer>
            <div className={css.footerText}>
                <div className={css.copy}><p>© Copyright. All rights reserved</p></div>
            </div>
            </footer>
        </div>

    )

}
export default Footer
