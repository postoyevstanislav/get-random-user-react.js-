import React, {Component} from "react";

class PhoneData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPhone: ''

        }
        this.getUser()
    }

    async getUser() {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const myData = data.results[0]
        this.setState({
            userPhone: myData.phone
        })

    }

    render() {
        return (
            <div>
                <h4>{this.state.userPhone}</h4>
            </div>
        )
    }
}


export default PhoneData