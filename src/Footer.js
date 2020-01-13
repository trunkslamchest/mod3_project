import React from 'react'

import './css/Footer.css'

import flatiron_logo from './assets/footer_logo_flatiron.png'
import postgres_logo from './assets/footer_logo_postgres.png'
import rails_logo from './assets/footer_logo_rails.png'
import react_logo from './assets/footer_logo_react.png'

export default class Footer extends React.Component {

	state={
		hover: false
	}

	onClickHomeFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickFooterLinksFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickUpdateTrafficFunctions = (event) => {

		if (localStorage.access) {
			this.props.update_traffic_data({
				user_id: localStorage.user_id,
				interaction: event.target.attributes.interaction.value,
				element: event.target.name
			})
		} else {
			this.props.update_traffic_data({
				user_id: this.props.user_id,
				interaction: event.target.attributes.interaction.value,
				element: event.target.name
			})
		}
	}

	render(){

	const footer_logos = [
		<a
			key={"flatiron_logo"}
			href="https://flatironschool.com/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ flatiron_logo }
				className="logo_rectangle"
				alt="The Flatiron School"
				name="footer_flatiron_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"postgres_logo"}
			href="https://www.postgresql.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ postgres_logo }
				className="logo_rectangle"
				alt="PostgreSQL"
				name="footer_postgres_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"rails_logo"}
			href="https://rubyonrails.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ rails_logo }
				className="logo_rectangle"
				alt="Ruby On Rails"
				name="footer_rails_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"react_logo"}
			href="https://reactjs.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ react_logo }
				className="logo_rectangle"
				alt="React"
				name="footer_react_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,

	]

	const fine_print = <> © 2019 Created by Jamal Farah & Austin Smith. All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and the respective employees and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises, L.P. © Spacebar Smasher 2019. All Rights Reserved. The Zamboni word mark and configuration of the Zamboni ice resurfacing machine are registered trademarks of Frank J. Zamboni & Co., Inc.© Frank J. Zamboni & Co., Inc. 2019.All Rights Reserved. Any other third party trademarks or copyrights are the property of their respective owners. All rights reserved. </>

		return(
			<>
				<div className="footer_wrapper">
					<div className="logos">
						<>{ footer_logos }</>
					</div>
					<div className="fine_print">
						{ fine_print }
					</div>
				</div>
			</>
		)
	}
}