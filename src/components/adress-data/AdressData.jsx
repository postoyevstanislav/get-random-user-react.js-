import React, {Component} from "react";

class AdressData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCountry: '',
            userCity: '',
            userStreet: ''

        }
        this.getUser()
    }

    async getUser() {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const myData = data.results[0]
        this.setState({

            userCountry: myData.location.country,
            userCity: myData.location.city,
            userStreet: myData.location.street.name
        })

    }

    render() {
        return (
            <div>
                <h4>{this.state.userCountry}, {this.state.userCity}, {this.state.userStreet} street</h4>
            </div>
        )
    }
}


export default AdressData