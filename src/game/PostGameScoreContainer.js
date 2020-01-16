import React from 'react'

import { Redirect } from 'react-router-dom'

import PostGameScore from './PostGameScore'

import '../css/PostGame.css'

export default class PostGameScoreContainer extends React.Component {

	state = {
		display: "scoreboard",
		scoreboard: [],
		updatedScoreboard: false,
		mounted: false,
		initDismount: false,
		dismounted: false
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

		this.setState({
			initDismount: true
		})

		this.mainMenuTimeout = setTimeout(() => { this.setState({ display: "main_menu" })}, 500 )

	}

	onClickPlayAgainButtonFunctions = () => {
		this.setState({
			initDismount: true
		})

		this.playAgainTimeout = setTimeout(() => { this.setState({ display: "game" })}, 500 )
	}

	componentWillUnmount(){
		clearTimeout(this.mainMenuTimeout)
		clearTimeout(this.playAgainTimeout)
	}

	render(){

		const blank = <></>

		const scores = this.state.scoreboard.map(score =>
			<PostGameScore
				key={score.id}
				score={score}
				player_id={this.props.player_id}
			/>
		)

		const scoreboard_table =
			<>
				<div className={this.state.initDismount ? "dismount_scoreboard_header" : "home_scoreboard_header"}>
					<h4>High Scores</h4>
				</div>
				<table
					key={"scoreboard_table"}
					className={this.state.initDismount ? "dismount_scoreboard_table" : "scoreboard_table" }
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
			</>

		const scoreboard_buttons =
			<div className="post_game_buttons_container">
				<button
					key={ "main_menu_button" }
					name="main_menu_button"
					interaction="click"
					className={this.state.initDismount ? "dismount_post_game_main_menu_button" : "post_game_main_menu_button" }
					onClick={ this.onClickMainMenuButtonFunctions }
				>
					Main Menu
				</button>
				<button
					key={ "play_again_button" }
					name="play_again_button"
					interaction="click"
					className={this.state.initDismount ? "dismount_post_game_play_again_button" : "post_game_play_again_button" }
					onClick={ this.onClickPlayAgainButtonFunctions }
				>
					Play Again
				</button>
			</div>

		const scoreboard =
			<div className="post_game_wrapper">
				{ scoreboard_table }
				{ scoreboard_buttons }
			</div>

		return(
			<>

			{
					(() => {
						switch(this.state.display) {
							case 'scoreboard': return scoreboard;
							case 'main_menu': return <Redirect to="/" />
							case 'game': return <Redirect to="/game" />;
							default: return blank;
						}
					})()
				}
			</>
		)
	}
}