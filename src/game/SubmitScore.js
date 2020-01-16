import React from 'react'

import {
	 Link,
	 Redirect,
} from 'react-router-dom'

import '../css/SubmitScore.css'

export default class SubmitScore extends React.Component {

	state = {
		display: 'submit_score',
		player: {},
		player_name: '',
		newScoreboard: [],
		showHeader: false,
		showScore: false,
		showRank: false,
		showPower: false,
		showForm: false,
		showBottomButtons: false,
		addedScore: false,
		updatedScoreboard: false,
		gotNewScoreboard: false,
		updatedDisplay: false,
		mounted: false,
		initUnload: false,
		unloaded: false
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})

		this.headerTimeout = setTimeout(() => { this.setState({ showHeader: true })}, 500)
		this.scoreTimeout = setTimeout(() => { this.setState({ showScore: true })}, 500)
		this.rankTimeout = setTimeout(() => { this.setState({ showRank: true })}, 500)
		this.powerTimeout = setTimeout(() => { this.setState({ showPower: true })}, 500)
		this.formTimeout = setTimeout(() => { this.setState({ showForm: true })}, 500)
		this.bottomButtonsTimeout = setTimeout(() => { this.setState({ showBottomButtons: true })}, 500)
	}

	componentDidUpdate(){
		if(this.state.addedScore && !this.state.updatedScoreboard){
			this.updateScoreboard()
		}
		if(this.state.updatedScoreboard && !this.state.gotNewScoreboard){
			this.getNewScoreboard()
		}
		if(this.state.gotNewScoreboard && !this.state.updatedDisplay){
			// this.displaySwitchToScoreboard()
			this.unloadFunctions()
		}
	}

	onSubmitScoreChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitScoreFunctions = (event) => {
		event.persist()

		this.addScore(event)
	}

	addScore = (event) => {
		event.preventDefault()

		let name = event.target[0].value.trim()

		let bro_array =	[
			"Bromato",
			"Bronado",
			"Brostrodamus",
			"Brozo the Clown",
			"Angelina Brolie",
			"Marco Brolo",
			"Vincent Van Brogh",
			"Brosef Stalin",
			"Brometheus",
			"Fidel Castbro",
			"Brolden Caulfield",
			"Edgar Allen Bro",
			"Brofessor X",
			"Bromer Simpson",
			"Zambroni",
			"Mr. Brojangles",
			"Brohammed",
			"G.I. Bro",
			"Ringbro Starr",
			"Shaquille Bro’Neal"
		]

		let random_bro_name = bro_array[Math.floor(Math.random() * bro_array.length)]

		if (name === "") {
			alert(`Enter Your Name, ${random_bro_name}`)
		} else {
			fetch("http://localhost:3001/players", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					name: this.state.player_name
				})
			})
			.then(res => res.json())
			.then((player_obj) => {
				this.setState({
					player: player_obj,
					addedScore: true
				})
			})
		}
	}

	updateScoreboard = () => {
		fetch("http://localhost:3001/scoreboards", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					player_id: this.state.player.id,
					score: this.props.count,
					power_level: this.props.power
				})
			})
		.then(
			this.setState({
				updatedScoreboard: true
			})
		)
	}

	getNewScoreboard = () => {
		fetch(`http://localhost:3001/scoreboards`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				newScoreboard: res_obj.data,
				gotNewScoreboard: true
			})
		)
	}

	displaySwitchToScoreboard = () => {
		this.setState({
			// display: "scoreboard",
			updatedDisplay: true
		}, this.props.getPlayerID(this.state.player.id))
	}

	onClickMainMenuButtonFunctions = () => {

		this.setState({
			initUnload: true
		})

		this.initResetTimeout = setTimeout(() => {
			this.setState({
				showHeader: false,
				showScore: false,
				showRank: false,
				showPower: false,
				showForm: false,
				showBottomButtons: false,
			})
		}, 250)

		this.mainMenuTimeout = setTimeout(() => { this.setState({ display: "main_menu" })}, 500 )

	}

	onClickTryAgainButtonFunctions = () => {

		this.setState({
			initUnload: true
		})

		this.initResetTimeout = setTimeout(() => {
			this.setState({
				showHeader: false,
				showScore: false,
				showRank: false,
				showPower: false,
				showForm: false,
				showBottomButtons: false,
			})
		}, 500)

		this.resetTimeout = setTimeout(() => { this.setState({ display: "game", unloaded: true }, this.props.resetGame())}, 1000 )
	}

	// resetFunctions = () => {
	// 	// this.unloadFunctions()
	// 	this.props.resetGame()
	// }

	unloadFunctions = () => {
		this.setState({ initUnload: true, updatedDisplay: true })

		this.unloadTimeout = setTimeout(() => { this.setState({ unloaded: true, display: "scoreboard" })}, 500)

		this.props.getPlayerID(this.state.player.id)
	}

	componentWillUnmount(){
		clearTimeout(this.headerTimeout)
		clearTimeout(this.scoreTimeout)
		clearTimeout(this.rankTimeout)
		clearTimeout(this.powerTimeout)
		clearTimeout(this.formTimeout)
		clearTimeout(this.initUnloadTimeout)
		clearTimeout(this.unloadTimeout)
		clearTimeout(this.initResetTimeout)
		clearTimeout(this.resetTimeout)
		clearTimeout(this.mainMenuTimeout)
	}

	render(){

		const blank = <></>

		const score = <h1>{ this.props.count }</h1>

		const rank = <h1>{ this.props.rank }</h1>

		const submit_score =
			<div className="submit_score_wrapper">
				<div className=
					{{
						false: "blank",
						true: (() => {
							switch(this.state.initUnload) {
								case true: return "unload_submit_score_header";
								case false: return "submit_score_header";
								default: return "blank";
								}
							})()
						}[this.state.showHeader]}
				>
					<h1>OUTTA TIME!</h1>
				</div>
				<div className=
					{{
						false: "blank",
						true: (() => {
							switch(this.state.initUnload) {
								case true: return "unload_submit_score_counter";
								case false: return "submit_score_counter";
								default: return "blank";
								}
							})()
						}[this.state.showScore]}
				>
					<h2>Spacebar Smashes</h2>
					{ this.state.showScore ? score : blank }
				</div>
				<div className=
					{{
						false: "blank",
						true: (() => {
							switch(this.state.initUnload) {
								case true: return "unload_submit_score_rank";
								case false: return "submit_score_rank";
								default: return "blank";
								}
							})()
						}[this.state.showRank]}
				>
					<h2>Rank</h2>
					{ this.state.showRank ? rank : blank }
				</div>
				<div className=
					{{
						false: "blank",
						true: (() => {
							switch(this.state.initUnload) {
								case true: return "unload_submit_score_power";
								case false: return "submit_score_power";
								default: return "blank";
								}
							})()
						}[this.state.showPower]}
				>
					<h2>Power Level</h2>
					<meter className="power_bar" value={this.props.power} min="0.0" max="2.5" low="0.5" optimum="1.0" high="1.5">
					</meter>
				</div>
				<div className=
					{{
						false: "blank",
						true: (() => {
							switch(this.state.initUnload) {
								case true: return "unload_submit_score_form";
								case false: return "submit_score_form";
								default: return "blank";
								}
							})()
						}[this.state.showForm]}
				>
					<h2>Submit Score</h2>
					<form
						name="submit_score_form"
						interaction="submit"
						onSubmit={ this.onSubmitScoreFunctions }
					>
						<div className="submit_score_div">
							<input
								id="player_name"
								name="player_name"
								type="text"
								className="submit_score_text_box"
								placeholder="Enter Your Name"
								value={ this.state.player_name }
								onChange={ this.onSubmitScoreChange }
							/>
							<input
								className="submit_score_button"
								type="submit"
								value="Confirm"
							/>
						</div>
					</form>
				</div>
				<div className=
					{{
						false: "blank",
						true: (() => {
							switch(this.state.initUnload) {
								case true: return "unload_submit_score_bottom_buttons_container";
								case false: return "submit_score_bottom_buttons_container";
								default: return "blank";
								}
							})()
						}[this.state.showBottomButtons]}
				>
					<button
						key={ "main_menu_button" }
						to='/'
						name="main_menu_button"
						interaction="click"
						className="main_menu_button"
						onClick={ this.onClickMainMenuButtonFunctions }
					>
						Main Menu
					</button>
					<Link
						key={ "try_again_button" }
						to='/game'
						name="try_again_button"
						interaction="click"
						className="try_again_button"
						onClick={ this.onClickTryAgainButtonFunctions }
					>
						Try Again
					</Link>
				</div>
			</div>

		return(
			<>
				{
					(() => {
						switch(this.state.display) {
							case 'submit_score': return submit_score;
							case 'main_menu': return <Redirect to="/" />
							case 'scoreboard': return <Redirect to="/scoreboard" />;
							default: return blank;
						}
					})()
				}
			</>
		)
	}
}