import React, {Component} from "react";
import styles from './GetRandomUser.module.css'
import {Route} from "react-router-dom";
import ContactInfo from "../contact-info/ContactInfo";
import EmailData from "../email-data/EmailData";
import AdressData from "../adress-data/AdressData";
import PhoneData from "../phone-data/PhoneData";



class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPicture: null,
            userName: '',
            loading: true
        }
        this.getUser()
    }

    async getUser() {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const myData = data.results[0]
        this.setState({
            userName: myData.name,
            userPicture: myData.picture.large,
            loading: false
        })

    }

    render() {
        if(this.state.loading) {
            return (
                <>
                    <h1>Waiting for response from server..</h1>
                </>
            )
        }
        return (
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.personAvatar} src={this.state.userPicture} alt=""/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.name}>
                        <h2>{this.state.userName.first}</h2>
                        <h3>{this.state.userName.last}</h3>
                    </div>
                
                    <Route path='/' component={ContactInfo} />
                    <div className={styles.dataRes}>
                    <Route path='/email' component={EmailData} />
                    <Route path='/adress' component={AdressData} />
                    <Route path='/phone' component={PhoneData} />
                    </div>
                    
                
                </div>

            </div>
        )
    }
}


export default SingleUser