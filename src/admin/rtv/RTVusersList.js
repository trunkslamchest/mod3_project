import React from 'react'
import RTVusersRow from './RTVusersRow'

export default class RTVusersList extends React.Component{
	render(){
		const distribute_RTV_data = this.props.RTV_users_data.map( RTV_users_obj =>
			<RTVusersRow
				key={RTV_users_obj.id}
				RTV_users_obj={RTV_users_obj}
			/>
		)

		const RTVusers_table =
		<table className="RTVusers_table">
			<tbody>
				<tr>
					<th>User ID</th>
					<th>Interaction</th>
					<th>Element</th>
					<th>Timestamp</th>
				</tr>
					{ distribute_RTV_data }
			</tbody>
		</table>

		return(
			<>
				{ RTVusers_table }
			</>
		)
	}
}