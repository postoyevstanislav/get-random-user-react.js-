import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import SingleUser from "./components/main-view/GetRandomUser";



function App() {
    return (
        <div>
            <Router>
                <SingleUser/>
            </Router>
        </div>

    );
}

export default App;


// constructor(props) {
//     super(props);
//     this.state = {
//         userPicture: null,
//         userName: '',
//         userEmail: '',
//         userCountry: '',
//         userCity: '',
//         userStreet: '',
//         userPhone: ''
//
//     }
//     this.getUser()
// }
//
// async getUser() {
//     const response = await fetch('https://randomuser.me/api/')
//     const data = await response.json()
//     const myData = data.results[0]
//     this.setState({
//         userName: myData.name,
//         userPicture: myData.picture.large,
//         userEmail: myData.email,
//         userCountry: myData.location.country,
//         userCity: myData.location.city,
//         userStreet:myData.location.street.name,
//         userPhone: myData.phone
//     })
//
// }
