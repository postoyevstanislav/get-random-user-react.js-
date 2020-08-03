import React, {Component} from "react";
import Spinner from "../spinner/spinner";

class EmailData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            loading: true


        }
        this.getUser()
    }

    async getUser() {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const myData = data.results[0]
        this.setState({
            userEmail: myData.email,
            loading: false
        })

    }

    render() {
        if (this.state.loading) {
            return  <Spinner/>
        }
        return (
            <div>
                <h4>{this.state.userEmail}</h4>
            </div>
        )
    }
}


export default EmailData