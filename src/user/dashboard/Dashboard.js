import React from 'react'

import DashboardIndex from './DashboardIndex'
import DashboardUserInfo from './DashboardUserInfo'

import { Redirect } from 'react-router-dom'

import '../../css/Dashboard.css'

export default class Dashboard extends React.Component{

	state = {
		display: '',
		all_questions: [],
		user: [],
		user_answers: [],
		user_votes: [],
		user_comments: [],
		mounted: false,
		updated_user: false,
		updated_all_questions: false,
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && this.props.user_id && !this.state.updated_user){
			this.getUser(this.props.user_id)
		}
	}

	getUser = (user_id) => {
		fetch(`http://localhost:3001/users/${user_id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				user: res_obj.data.attributes.user,
				user_answers: res_obj.data.attributes.answers,
				user_votes: res_obj.data.attributes.votes,
				user_comments: res_obj.data.attributes.comments,
				updated_user: true
			})
		)
	}

	displaySwitchToDashboard = () => {
		this.setState({
			display: 'dashboard'
		})
	}

	displaySwitchToUserInfo = (event) => {
		this.setState({
			display: 'user_info'
		}, this.onClickUpdateTrafficFunctionsLI(event))
	}

	onClickEditProfileFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickDeleteProfileFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onClickUpdateTrafficFunctionsLI = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.attributes.name.value
		})
	}

	onPageLoadFunctions = () => {
		this.props.update_page_data({
			user_id: localStorage.user_id,
			page_name: "dashboard_index",
		})
	}

	render(){

		const dashboard_tabs = [
			<li
				key={"dashboard_info"}
				name="dashboard_user_info_button"
				interaction="click"
				onClick={ this.displaySwitchToUserInfo }
			>
				Info
			</li>
		]

		const loading =
			<div className="loading_container">
				<div className="loading_animation_container">
					<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				</div>
			</div>

		const dashboard =
			<>
				<div className="dashboard_tabs">
					<ul>
						{ dashboard_tabs }
					</ul>
				</div>
				{
					{
						true: <Redirect to='/' />,
						false: 	(() => {
							switch(this.state.display) {
								case 'dashboard': return <DashboardIndex
															first_name={ this.state.user.first_name }
														/>;
								case 'user_info': return <DashboardUserInfo
															update_traffic_data={ this.props.update_traffic_data }
															update_page_data={ this.props.update_page_data }
															// ~~~~~~~~~~~~~~~~~~~~
															user={ this.state.user }
														/>;
								default: return <DashboardIndex
												first_name={ this.state.user.first_name }
											/>;
							}
						})()
					}[localStorage.length === 0]
				}
			</>

		return(
			<div className="dashboard_wrapper">
				{ this.state.updated_user ? dashboard : loading }
			</div>
		)
	}
}
