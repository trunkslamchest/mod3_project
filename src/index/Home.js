import React from 'react'
import { Redirect } from 'react-router-dom'

import { trafficUpdate } from '../utility/trafficFunctions'

import scoreboardFunctions from '../utility/scoreboardFunctions'

import Score from './Score.js'

import '../css/Home.css'
import '../css/Scoreboard.css'
import '../UI/buttons.css'

var sendTraffic = new trafficUpdate()

export default class Home extends React.Component {

	state = {
		scoreboard: [],
		initDismount: false,
		dismounted: false
	}

	componentDidMount(){
		// scoreboard.get()
		// .then(res_obj =>
		// 	this.setState({ scoreboard: res_obj.data })
		// )

		scoreboardFunctions('get', 'http://localhost:3001/scoreboards')
		.then(res_obj =>
			this.setState({ scoreboard: res_obj.data })
		)

		sendTraffic.pageUpdate({
			user_id: localStorage.user_id,
			page_name: "index",
		})

	}

	componentDidUpdate(){
		if(this.state.initDismount && !this.state.dismounted){
			this.onDismount()
		}
	}

	onClickStartButtonFunctions = (event) => {

		this.setState({ initDismount: true})

		sendTraffic.elementUpdate({
			user_id: localStorage.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onDismount = () => {
		this.timerTimeout = setTimeout(() => { this.setState({ dismounted: true })}, 500)
	}

	componentWillUnmount(){
		clearTimeout(this.timerTimeout)
	}

	render(){
		const scores = this.state.scoreboard.map(score =>
			<Score
				key={score.id}
				score={score}
				player={this.props.player}
			/>
		)

		const scoreboard_table =
			<>
				<div className={this.state.initDismount ? "dismount_scoreboard_header" : "home_scoreboard_header"}>
					<h4>HIGH SCORES</h4>
				</div>

				<table
					key={"scoreboard_table"}
					className={this.state.initDismount ? "dismount_scoreboard_table" : "scoreboard_table" }
				>
					<tbody>
						<tr className="scoreboard_head_row">
							<th>NAME</th>
							<th>POWER</th>
							<th>SCORE</th>
						</tr>
							{ scores }
					</tbody>
				</table>
			</>

		const home_page =
			<div className="home_wrapper">
				<div className={this.state.initDismount ? "dismount_home_header" : "home_header" } >
					<h3>SPACEBAR SMASHER</h3>
				</div>
				<div className="start_button_container">
					<button
						key={ "start_button" }
						to='/game'
						name="start_button"
						interaction="click"
						className={this.state.initDismount ? "dismount_start_button" : "start_button"}
						onClick={ this.onClickStartButtonFunctions }
					>
						START
					</button>
				</div>

				{ scoreboard_table }

			</div>

		return(
			<>
				{ this.state.dismounted ? <Redirect to='/game' /> : home_page }
			</>
		)
	}
}