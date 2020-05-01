import React, {Component} from "react";

import {Link} from "react-router-dom";
import EmailLogo from '../icons/email.png'
import AdressLogo from '../icons/adress.png'
import PhoneLogo from   '../icons/phone.png'


class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userCountry: '',
            userCity: '',
            userStreet: '',
            userPhone: ''

        }
        this.getUser()
    }

    async getUser() {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const myData = data.results[0]
        this.setState({
            userEmail: myData.email,
            userCountry: myData.location.country,
            userCity: myData.location.city,
            userStreet: myData.location.street.name,
            userPhone: myData.phone
        })

    }

    render() {
        return (
            <div>

                {/*<h4>Email: {this.state.userEmail}</h4>*/}
                {/*<h4>Adress: {this.state.userCountry}, {this.state.userCity}, {this.state.userStreet} street</h4>*/}
                {/*<h4>Phone: {this.state.userPhone}</h4>*/}

                <Link to='/email'><img src={EmailLogo} alt=""/>Email</Link>
                <Link to='/phone'><img src={PhoneLogo} alt=""/>Phone</Link>
                <Link to='/adress'><img src={AdressLogo} alt=""/>Adress</Link>



            </div>
        )
    }
}


export default ContactInfo