import React from 'react'

import '../DBedit.css'

export default class DBeditDeleteUser extends React.Component {

	state = {
	}

	onClickYes = () => {
		let user = this.props.user
		fetch(`http://localhost:3001/users/${user.id}`, {
			method: "DELETE"
		})
		.then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.props.displaySwitchToIndex()
			}
		})
	}

	onClickNo = () => {
		let user = this.props.user
		this.props.displaySwitchToUserInfo(user)
	}

	render(){

		const confirm_buttons = [
			<button
				key={"DBe_delete_user_yes"}
				name="delete_profile_form"
				interaction="submit"
				className="alt_button"
				onClick={ this.onClickYes }
			>
				Yes
			</button>,
			<button
				key={"DBe_delete_user_no"}
				name="delete_profile_form"
				interaction="cancel"
				className="alt_button"
				onClick={ this.onClickNo }
			>
				No
			</button>
		]

		return(
			<div className="DBedit_default_wrapper">
				<h3>Are you sure you want to delete {this.props.user.user_name}'s account?</h3>
				{
					(!!this.state.errors) ?
						( <div className="default_error_report">
								{ this.state.errors.map( error =>
									<div className="default_error_item">
										{ error }
									</div>
								)}
						  </div> )
					:
						( "" )
				}
				<div className="delete_profile_buttons_container">
					{ confirm_buttons }
				</div>
			</div>
		)
	}
}