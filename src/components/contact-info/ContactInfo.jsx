import React, {Component} from "react";
import styles from './ContactInfo.module.css'
import {Link} from "react-router-dom";
import EmailLogo from '../icons/email.png'
import AdressLogo from '../icons/adress.png'
import PhoneLogo from   '../icons/phone.png'


class ContactInfo extends Component {

    render() {
        return (
            <div className={styles.contactContainer}>


                <div className={styles.contactItem}>
                    <Link to='/email'><img src={EmailLogo} alt=""/></Link>
                </div>
                <div className={styles.contactItem}>
                    <Link to='/phone'><img src={PhoneLogo} alt=""/></Link>
                </div>
                <div className={styles.contactItem}>
                    <Link to='/adress'><img src={AdressLogo} alt=""/></Link>
                </div>



            </div>
        )
    }
}


export default ContactInfo