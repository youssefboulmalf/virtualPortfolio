import React, { Component } from 'react';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import css from './ContactSection.module.css';

export const ContactSection = (props) => {

    return (
        <div className={css.contactSection}>
            <div className={css.ContactSectionHead}>
                <h1 className={css.bigHead}>lets's talk business</h1>
            </div>
            <div className={css.contactInfo}>
                <div className={css.ContactForm}>
                    <ContactForm />
                </div>
                <div className={css.info}>
                    <h2 className={css.phoneNumber}>+(31)625202173</h2>
                    <h2 className={css.email}>
                        youssefboulmalf@gmail.com
                    </h2>
                </div>
            </div>
        </div>
    )

}
export default ContactSection
