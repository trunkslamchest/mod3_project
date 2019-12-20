import React from 'react'

import '../DBedit.css'

export default class DBeditUsersTable extends React.Component{

	onClickTableRowFunctions = () => {
		this.props.displaySwitchToUserInfo(this.props.user.attributes.user)
	}

	render(){

		const user = this.props.user.attributes.user

		const DBedit_table =
			<tr onClick={ this.onClickTableRowFunctions } className="DBedit_sub_row">
				<td>{user.id}</td>
				<td>{user.user_name}</td>
				<td>{user.email}</td>
				<td>{user.first_name}</td>
				<td>{user.last_name}</td>
				<td>{user.gender}</td>
				<td>{user.birth_day}</td>
				<td>{user.birth_month}</td>
				<td>{user.birth_year}</td>
				<td>{user.house_number}</td>
				<td>{user.street_name}</td>
				<td>{user.city_town}</td>
				<td>{user.state}</td>
				<td>{user.zip_code}</td>
			</tr>
		return(
			<>
				{ DBedit_table }
			</>
		)
	}
}