import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

export class Logintbygoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // this.signup = this

    //   .signup

    //   .bind(this);

  }

  signup(res) {
    const googleresponse = {

      // emp_id: 1,
      empId: res.profileObj.googleId,
      first_name: res.profileObj.givenName,
      last_name: res.profileObj.familyName,
      emp_email: res.profileObj.email,


      image_url: res.profileObj.imageUrl,

      provider_name: 'Google'
    };



    axios.post('http://localhost:8081/employee', googleresponse)

      .then((result) => {

        let responseJson = result;

        sessionStorage.setItem("userData", JSON.stringify(result));

        this.props.history.push('/Dashboard')

      });

  };

  render() {

    const responseGoogle = (response) => {

      console.log(response);

      var res = response.profileObj;

      console.log(res);

    //   debugger;

      this.signup(response);

    }

    return (

      <div className="App">

        <div className="row">

<div className="col-sm-12 btn btn-info">

            Login With Google Using ReactJS

</div>

        </div>

        <div className="row">

          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">

            <div className="col-sm-4"></div>

            <div className="col-sm-4">

              <GoogleLogin

                clientId="487050070331-10md2t0pdqe7qtus6ig1ju6jtrdk22f4.apps.googleusercontent.com"

                buttonText="Login with Google"

                onSuccess={responseGoogle}

                onFailure={responseGoogle} ></GoogleLogin>

            </div>

            <div className="col-sm-4"></div>

          </div>

        </div>

      </div>

    )

  }

}


export default Logintbygoogle