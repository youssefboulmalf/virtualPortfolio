import React, { Component } from 'react';
import css from './AboutSection.module.css';
import Crossword from '../Crossword/Crossword';
import img from '../../img/me.jpg';

export const AboutSection = (props) => {

    function breaklineDescription(description) {
        const newText = description.split('\n').map((str,index) => <p key={index}>{str}</p>);
        return newText;
      }
      const aboutMessage = "Hello, I am Youssef and I am a 22-years-old driven guy who is currently following a sports education at the ALO in Amsterdam.\nApart from my love for sports, I also have a huge passion for IT and ICT. From an early age I have been busy acquiring new knowledge in these areas in my spare time.\nI work as a Lead Developer at a start-up company in the center of Amsterdam and I am extremely grateful that I can fill my days doing the things I love.";


    return (
        <div className={css.aboutSection}>
            <div className={css.aboutSectionText}>
                <h1 className={css.aboutTitle}>About me</h1>
                <img className={css.image} src={img.src}/>
                <div className={css.aboutText}>{breaklineDescription(aboutMessage)}</div>
            </div>
            <div className={css.crossWord}>
                <Crossword />
            </div>
        </div>
    )

}
export default AboutSection
