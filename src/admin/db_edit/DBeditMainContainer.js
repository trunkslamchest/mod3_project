import React from 'react'

import DBeditIndex from './DBeditIndex'
import DBeditUsersContainer from './users/DBeditUsersContainer'

import '../../css/DBedit.css'

export default class DBeditMainContainer extends React.Component{

	state = {
		display: 'index',
	}

	componentDidMount(){
		this.setState({
			display: 'index'
		})
	}

	showDBIndex = () => {
		this.setState({
			display: 'index'
		})
	}

	showDBusers = (signal) => {
		if(signal !== "signal") {
			this.setState({
				display: 'users',
			})
		}
	}

	render(){
		return(
			<>
				<div className="DBedit_navbar">
					<div className="DBedit_navbar_item" onClick={ this.showDBusers }>
						<p>Users</p>
					</div>
				</div>
				{
					(() => {
						switch(this.state.display) {
							case 'index': return <DBeditIndex />;
							case 'users': return <DBeditUsersContainer showDBusers={ this.showDBusers } />;
							default: return <DBeditIndex />;
						}
					})()
				}
			</>
		)
	}
}