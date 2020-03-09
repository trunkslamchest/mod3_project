import React from 'react'
import { Redirect } from 'react-router-dom'

import { getScoreboard } from '../utility/scoreboardFunctions'

import Score from './Score.js'

import '../css/Home.css'
import '../css/Scoreboard.css'

export default class Home extends React.Component {

	state = {
		scoreboard: [],
		mounted: false,
		updated_scoreboard: false,
		initDismount: false,
		dismounted: false
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})

		getScoreboard()
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				scoreboard: res_obj.data,
				updated_scoreboard: true
			})
		)
	}

	componentDidUpdate(){
		if(this.state.initDismount && !this.state.dismounted){
			this.onDismount()
		}
	}

	// getScoreboard = () => {
	// 	fetch(`http://localhost:3001/scoreboards`)
	// 	.then(res => res.json())
	// 	.then(res_obj =>
	// 		this.setState({
	// 			scoreboard: res_obj.data,
	// 			updated_scoreboard: true
	// 		})
	// 	)
	// }

	onClickStartButtonFunctions = (event) => {
		this.setState({
			initDismount: true
		})
	}

	onDismount = () => {
		this.timerTimeout = setTimeout(() => { this.setState({ dismounted: true })}, 500)
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onPageLoadFunctions = () => {
		this.props.update_page_data({
			user_id: localStorage.user_id,
			page_name: "index",
		})
	}

	componentWillUnmount(){
	}

	render(){

		const blank = <></>

		const scores = this.state.scoreboard.map(score =>
			<Score
				key={score.id}
				score={score}
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
				{
					(() => {
						switch(this.state.dismounted) {
							case true: return <Redirect to='/game' />;
							case false: return home_page;
							default: return blank;
						}
					})()
				}
			</>
		)
	}
}