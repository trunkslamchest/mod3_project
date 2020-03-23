import React from 'react'

import { Link, Redirect } from 'react-router-dom'

import { Scoreboard } from '../utility/scoreboardFunctions'
import { trafficUpdate } from '../utility/trafficFunctions'

import '../css/SubmitScore.css'

var sendTraffic = new trafficUpdate()
var scoreboard = new Scoreboard()

export default class SubmitScore extends React.Component {

	state = {
		display: 'submit_score',
		player: '',
		playerScore: {},
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
		initDismount: false,
		dismounted: false
	}

	componentDidMount(){

		this.headerTimeout = setTimeout(() => { this.setState({ showHeader: true })}, 500)
		this.scoreTimeout = setTimeout(() => { this.setState({ showScore: true })}, 500)
		this.rankTimeout = setTimeout(() => { this.setState({ showRank: true })}, 500)
		this.powerTimeout = setTimeout(() => { this.setState({ showPower: true })}, 500)
		this.formTimeout = setTimeout(() => { this.setState({ showForm: true })}, 500)
		this.bottomButtonsTimeout = setTimeout(() => { this.setState({ showBottomButtons: true })}, 500)

		sendTraffic.pageUpdate({
			user_id: localStorage.user_id,
			page_name: "submit_score",
		})

	}

	componentDidUpdate(){
		if(this.state.updatedScoreboard && !this.state.updatedDisplay){
			this.onDismount()
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

		let broArr =	[
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

		let name = event.target[0].value.trim()
		let randomBroName = broArr[Math.floor(Math.random() * broArr.length)]

		if (name === "") {

			alert(`Enter Your Name, ${randomBroName}`)

		} else {

			scoreboard.addScore(this.state.player, this.props.count, this.props.power)
			.then((playerObj) => {
				this.setState({
					playerScore: playerObj,
					updatedScoreboard: true
				})

				sendTraffic.elementUpdate({
					user_id: localStorage.user_id,
					interaction: event.target.attributes.interaction.value,
					element: event.target.name
				})
			})
		}

	}

	onClickMainMenuButtonFunctions = (event) => {

		this.setState({ initDismount: true })

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

		sendTraffic.elementUpdate({
			user_id: localStorage.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})

	}

	onClickTryAgainButtonFunctions = (event) => {

		this.setState({ initDismount: true })

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

		this.resetTimeout = setTimeout(() => { this.setState({ display: "game", dismounted: true }, this.props.resetGame())}, 1000 )

		sendTraffic.elementUpdate({
			user_id: localStorage.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})

	}

	onDismount = () => {
		this.props.getPlayer(this.state.player)
		this.setState({ initDismount: true, updatedDisplay: true })
		this.dismountedTimeout = setTimeout(() => { this.setState({ dismounted: true, display: "scoreboard" })}, 500)
	}

	componentWillUnmount(){
		clearTimeout(this.headerTimeout)
		clearTimeout(this.scoreTimeout)
		clearTimeout(this.rankTimeout)
		clearTimeout(this.powerTimeout)
		clearTimeout(this.formTimeout)
		clearTimeout(this.initDismountTimeout)
		clearTimeout(this.dismountTimeout)
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
				<div className={{
							false: "blank",
							true: this.state.initDismount ? "dismount_submit_score_header" : "submit_score_header"
						}[this.state.showHeader]}
				>
					<h1>OUTTA TIME!</h1>
				</div>

				<div className={{
							false: "blank",
							true: this.state.initDismount ? "dismount_submit_score_counter" : "submit_score_counter"
						}[this.state.showScore]}
				>
					<h2>SMASHES</h2>
					{ this.state.showScore ? score : blank }
				</div>

				<div className={{
							false: "blank",
							true: this.state.initDismount ? "dismount_submit_score_rank" : "submit_score_rank"
						}[this.state.showRank]}
				>
					<h2>RANK</h2>
					{ this.state.showRank ? rank : blank }
				</div>

				<div className={{
							false: "blank",
							true: this.state.initDismount ? "dismount_submit_score_power" : "submit_score_power"
						}[this.state.showPower]}
				>
					<h2>POWER</h2>

					<div className={this.state.showPower ? "game_power_bar": "blank"}>
						<meter value={this.props.power} min="0.0" low="0.5" optimum="1.0" high="2.0" max="3.0">
						</meter>
					</div>

				</div>

				<div className={{
							false: "blank",
							true: this.state.initDismount ? "dismount_submit_score_form" : "submit_score_form"
						}[this.state.showForm]}
				>
					<h2>Submit Score</h2>

					<form
						name="submit_score_form"
						interaction="submit"
						onSubmit={ this.onSubmitScoreFunctions }
					>
						<input
							id="player"
							name="player"
							type="text"
							className="submit_score_text_box"
							placeholder="Enter Your Name"
							autoComplete="off"
							value={ this.state.player }
							onChange={ this.onSubmitScoreChange }
						/>
						<input
							className="submit_score_button"
							type="submit"
							value="Confirm"
						/>
					</form>

				</div>

				<div className={{
							false: "blank",
							true: this.state.initDismount ? "dismount_submit_score_bottom_buttons_container" : "submit_score_bottom_buttons_container"
						}[this.state.showBottomButtons]}
				>
					<Link
						key={ "main_menu_button" }
						to='/'
						name="main_menu_button"
						interaction="click"
						className="main_menu_button"
						onClick={ this.onClickMainMenuButtonFunctions }
					>
						Main Menu
					</Link>
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