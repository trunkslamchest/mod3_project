import React from 'react'
import { Link } from 'react-router-dom'

import Score from './Score.js'

import '../css/Home.css'
import '../css/Scoreboard.css'

export default class Home extends React.Component {

	state = {
		scoreboard: [],
		mounted: false,
		updated_scoreboard: false
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})
		this.getScoreboard()
		// this.onPageLoadFunctions()
	}

	componentDidUpdate(){
	}

	getScoreboard(){
		fetch(`http://localhost:3001/scoreboards`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				scoreboard: res_obj.data,
				updated_scoreboard: true
			})
		)
	}

	onClickStartButtonFunctions(event){
		// this.onClickUpdateTrafficFunctions(event)
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

		// console.log(this.state)

		const header = <h3>Spacebar Smasher</h3>

		const scoreboard_header = <h4>High Scores</h4>

		const scores = this.state.scoreboard.map(score =>
			<Score
				key={score.id}
				score={score}
			/>
		)

		const scoreboard_table =
		<table
			key={"scoreboard_table"}
			className="scoreboard_table"
		>
			<tbody>
				<tr className="scoreboard_head_row">
					<th>Name</th>
					<th>Power</th>
					<th>Score</th>
				</tr>
					{ scores }
			</tbody>
		</table>

		const start_button =
		<Link
			key={ "start_button" }
			to='/game'
			name="start_button"
			interaction="click"
			className="start_button"
			onClick={ this.onClickStartButtonFunctions }
		>
			Start Game
		</Link>

		return(
			<div className="home_wrapper">
				{ header }
				<div className="start_button_container">
					{ start_button }
				</div>
				{ scoreboard_header }
				{ scoreboard_table }
			</div>
		)
	}
}