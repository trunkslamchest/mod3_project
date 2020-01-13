import React from 'react'

import { Link } from 'react-router-dom'

import PostGameScore from './PostGameScore'

import '../css/PostGame.css'

export default class PostGameScoreContainer extends React.Component {

	state = {
		scoreboard: [],
		updatedScoreboard: false,
		mounted: false
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})
	}

	componentDidUpdate(){
		if(this.state.mounted && !this.state.updatedScoreboard){
			this.getScoreboard()
		}
	}

	getScoreboard(){
		fetch(`http://localhost:3001/scoreboards`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				scoreboard: res_obj.data,
				updatedScoreboard: true
			})
		)
	}

	onClickMainMenuButtonFunctions = () => {

	}

	onClickPlayAgainButtonFunctions = () => {

	}


	componentWillUnmount(){
	}

	render(){

		// const blank = <></>

		const header = <h3>High Scores</h3>

		const scores = this.state.scoreboard.map(score =>
			<PostGameScore
				key={score.id}
				score={score}
				player_id={this.props.player_id}
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

		const scoreboard_buttons = [
			<Link
				key={ "main_menu_button" }
				to='/'
				name="main_menu_button"
				interaction="click"
				className="alt_button"
				onClick={ this.onClickMainMenuButtonFunctions }
			>
				Main Menu
			</Link>,
			<Link
				key={ "play_again_button" }
				to='/game'
				name="play_again_button"
				interaction="click"
				className="alt_button"
				onClick={ this.onClickPlayAgainButtonFunctions }
			>
				Play Again
			</Link>
		]

		return(
			<>
			<div className="post_game_wrapper">
				{ header }
				{ scoreboard_table }
				<div className="post_game_buttons_container">
					{ scoreboard_buttons }
				</div>
			</div>
			</>
		)
	}
}