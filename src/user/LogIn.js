import React from 'react'
import { Redirect } from 'react-router'

import './Login.css'

export default class LogIn extends React.Component {

  state = {
    loggedIn: false,
    user_name: "",
    password: "",
    errors: []
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitLoginFunctions = async (event) => {
		try {
			await this.logInSubmitted(event)
		} catch(error) {
    		console.error("Error", error)
  		}
    this.props.updateLogin()
  }

  logInSubmitted = (event) => {
    event.preventDefault()
    event.persist()
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(res_obj => {
      if (res_obj.errors) {
        this.setState({
          errors: res_obj.errors
        })
      } else {
        this.onSubmitUpdateTrafficFunctions(event, res_obj)
        this.props.setToken(res_obj)
        this.setState({
          loggedIn: true
        })
      }
    })
  }

	onSubmitUpdateTrafficFunctions = (event, res_obj) => {
		this.props.update_traffic_data({
			user_id: res_obj.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}


  render(){
		return <>
      {
        (!!this.state.errors) ? (
  				<div className="default_error_report">
  					{
              this.state.errors.map( error =>
                <div className="default_error_item">
                  { error }
                </div>
              )
            }
  				</div>
        )
        :
        (
          ""
        )
      }
			{
				!(this.state.loggedIn) ?
					<div className="default_container">
						<form
            	name="login_form"
				      interaction="submit"
              className="default_form"
              onSubmit={ this.onSubmitLoginFunctions }
            >
						  <h2>Log In</h2>
						  <label htmlFor="log_in_user_name">User Name</label>
							<input id="log_in_user_name"
								type="text"
								name="user_name"
								onChange={ this.onChange }
								value={ this.state.user_name }
							/>
						  <label htmlFor="log_in_password">Password</label>
							<input id="log_in_password"
								type="password"
								name="password"
								onChange={ this.onChange }
								value={ this.state.password }
							/>
							<input className="default_button" type="submit" />
						</form>
					</div>
				:
				<Redirect to='/dashboard' />
			}
		</>
  }
}