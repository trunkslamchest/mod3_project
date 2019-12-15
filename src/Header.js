import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default class Header extends React.Component {

	onClickFunctionsHome = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickFunctionsSignUp = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickFunctionsLogIn = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickFunctionsLogOut = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.props.logOut(this.props.token)
	}

	onClickFunctionsDashboard = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickFunctionsBackroom = (event) => {

	}

	onClickTestFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	render(){

		const test_buttons = [
			<button
				key={"t1"}
				name="test_button1"
				interaction="click"
				className="default_button"
				onClick={ this.onClickTestFunctions }
			>
				Test Button 1
			</button>,
			<button
				key={"t2"}
				name="test_button2"
				interaction="click"
				className="default_button"
				onClick={ this.onClickTestFunctions }
			>
				Test Button 2
			</button>
		]

		const home_link = [
			<NavLink
				exact to="/"
				key={"h1"}
				name="home_button"
				interaction="click"
				className="default_button"
				onClick={this.onClickFunctionsHome }
			>
				Home
			</NavLink>
		]

		const user_greeting = [
			<span
				className="header_greeting"
			>
				Logged In As: { this.props.user_name }
			</span>
		]

		const logged_in_links = [
			<NavLink
				to="/dashboard"
				name="dashboard_button"
				interaction="click"
				className="default_button"
				onClick={ this.onClickFunctionsDashboard }
			>
				Dashboard
			</NavLink>,
			<NavLink
				to="/"
				name="logged_out"
				interaction="click"
				className="default_button"
				onClick={this.onClickFunctionsLogOut }
			>
				Log Out
			</NavLink>
		]

		const logged_out_links = [
			<NavLink
				key={"h2"}
				to="/login"
				name="log_in_button"
				interaction="click"
				className="default_button"
				onClick={this.onClickFunctionsLogIn }
			>
				Login
			</NavLink>,
			<NavLink
				key={"h3"}
				to="/signup"
				name="sign_up_button"
				interaction="click"
				className="default_button"
				onClick={this.onClickFunctionsSignUp }
			>
				Sign Up
			</NavLink>
		]

		const guest_header = [
			logged_out_links
		]

		const normal_header = [
			user_greeting,
			// test_buttons,
			logged_in_links
		]

		const admin_header = [
			user_greeting,
			// test_buttons,
			<NavLink
				key={"h4"}
				to="/backroom"
				className="default_button"
				onClick={ this.onClickFunctionsBackroom }
			>
				Admin Panel
			</NavLink>,
			logged_in_links
		]

		return(
			<>
				<div className="header_left">
					{ home_link }
				</div>
				<div className="header_right">
					{
						{
							false: logged_out_links,
							true: (() => {
								switch(this.props.access) {
									case 'guest': return guest_header;
									case 'normal': return normal_header;
									case 'admin': return admin_header;
									default: return null;
								}
							})()
						}[!!this.props.token]
					}
				</div>
			</>
		)
	}
}