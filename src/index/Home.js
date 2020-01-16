import React from 'react'
import { Redirect } from 'react-router-dom'

import Score from './Score.js'

import '../css/Home.css'
import '../css/Scoreboard.css'

export default class Home extends React.Component {

	state = {
		scoreboard: [],
		mounted: false,
		updated_scoreboard: false,
		initUnload: false,
		unloaded: false
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})
		this.getScoreboard()
		// this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if(this.state.initUnload && !this.state.unloaded){
			this.unloadFunctions()
		}
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

	onClickStartButtonFunctions = (event) => {
		this.setState({
			initUnload: true
		})
	}

	unloadFunctions = () => {
		this.timerTimeout = setTimeout(() => { this.setState({ unloaded: true })}, 500)
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

		const header = <h3>SPACEBAR SMASHER</h3>

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
			className={this.state.initUnload ? "unload_scoreboard_table" : "scoreboard_table" }
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
		<button
			key={ "start_button" }
			to='/game'
			name="start_button"
			interaction="click"
			className={this.state.initUnload ? "unload_start_button" : "start_button"}
			onClick={ this.onClickStartButtonFunctions }
		>
			Start
		</button>

			const home_page =
			<div className="home_wrapper">
				<div className={this.state.initUnload ? "unload_home_header" : "home_header"}>
					{ header }
				</div>
				<div className="start_button_container">
					{ start_button }
				</div>
				<div className={this.state.initUnload ? "unload_scoreboard_header" : "home_scoreboard_header"}>
					{ scoreboard_header }
				</div>
				{ scoreboard_table }
			</div>

		return(
			<>
				{
					(() => {
						switch(this.state.unloaded) {
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