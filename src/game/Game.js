import React from 'react'

import SubmitScore from './SubmitScore.js'

import '../css/Game.css'

export default class Game extends React.Component {

	state = {
		display: 'game',
		time: 1.01,
		count: 0,
		rank: "SUPER BABY FINGERS",
		power: 0,
		showTimer: false,
		startTimer: false,
		showCounter: false,
		showRank: false,
		showPower: false,
		spacebar_pressed: false,
		updated_rank: false,
		mounted: false
	}

	constructor(props) {
		super(props);
		this.spacebarDown = this.spacebarDown.bind(this);
		this.spacebarUp = this.spacebarUp.bind(this);
		this.updateSpacebarDownState = this.updateSpacebarDownState.bind(this);
		this.updateSpacebarUpState = this.updateSpacebarUpState.bind(this);
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})

		this.startGame()

		this.timerFunctions()
	}

	startGame = () => {
		this.spacebarDownListener = setTimeout(() => { document.addEventListener('keydown', this.spacebarDown) }, 1000)
		this.spacebarUpListener = setTimeout(() => { document.addEventListener('keyup', this.spacebarUp) }, 1000)

		this.timerTimeout = setTimeout(() => { this.setState({ showTimer: true })}, 500)
		this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 10)}, 1000)
		this.counterTimeout = setTimeout(() => { this.setState({ showCounter: true })}, 500)
		this.rankTimeout = setTimeout(() => { this.setState({ showRank: true })}, 500)
		this.powerTimeout = setTimeout(() => { this.setState({ showPower: true })}, 500)
		this.startPower = setTimeout(() => { this.powerInterval = setInterval(this.powerFunctions, 25)}, 1000)
	}

	spacebarDown(event){
		event.preventDefault()
		if(event.keyCode === 32) {
			this.updateSpacebarDownState()
		}
		this.getRank()
	}

	spacebarUp(event){
		event.preventDefault()
		if(event.keyCode === 32) {
			this.updateSpacebarUpState()
		}
	}

	updateSpacebarDownState(){
		this.setState({
			spacebar_pressed: true,
			count: this.state.count + 1,
			power: this.state.power + 0.02
		}, document.removeEventListener('keydown', this.spacebarDown))
	}

	updateSpacebarUpState(){
		this.setState({
			spacebar_pressed: false
		}, document.addEventListener('keydown', this.spacebarDown))
	}

	componentDidUpdate(){
	}

	timerFunctions = () => {
		if (this.state.time <= 0) {
			this.setState({
				time: 0.0,
				display: 'submit_score'
			}, this.clearTimers())
		} else {
			this.setState({
				time: (this.state.time - 0.01).toFixed(2),
			})
		}
	}

	getRank = () => {
		if (this.state.count >= 0 && this.state.count < 25) {
			this.setState({ rank: "SUPER BABY FINGERS" })
		} else if (this.state.count >= 25 && this.state.count < 50) {
			this.setState({ rank: "SLOW HANDS McOLD PERSON" })
		} else if (this.state.count >= 50 && this.state.count < 75) {
			this.setState({ rank: "CEMENT WRISTS" })
		} else if (this.state.count >= 75 && this.state.count < 100) {
			this.setState({ rank: "BIG MEATY CLAWS" })
		} else if (this.state.count >= 100 && this.state.count < 125) {
			this.setState({ rank: "HAIRY KNUCKLES" })
		} else if (this.state.count >= 125 && this.state.count < 150) {
			this.setState({ rank: "EDWARD SCISSOR HANDS" })
		} else if (this.state.count >= 150 && this.state.count < 175) {
			this.setState({ rank: "UNTRUSTABLE ALI" })
		} else if (this.state.count >= 175 && this.state.count < 200) {
			this.setState({ rank: "FURIOUS TIGER" })
		} else if (this.state.count >= 200 && this.state.count < 225) {
			this.setState({ rank: "JACKY FENG" })
		} else if (this.state.count >= 225 && this.state.count < 250) {
			this.setState({ rank: "RUSSIAN SPY" })
		} else if (this.state.count >= 250 && this.state.count < 275) {
			this.setState({ rank: "FROG" })
		} else if (this.state.count >= 275 && this.state.count < 300) {
			this.setState({ rank: "SUPER FROG" })
		}
	}

	powerFunctions = () => {
		if (this.state.power <= 0){
			this.setState({
				power: 0
			})
		} else {
			this.setState({
				power: this.state.power - 0.00225
			})
		}

		if (this.state.time === 0){
			this.setState({
				power: this.state.power - 0.00225
			}, clearInterval(this.powerInterval))
		}
	}

	clearTimers = () => {
		clearTimeout(this.timerTimeout)
		clearInterval(this.startTimer)
		clearInterval(this.timerInterval)
		clearTimeout(this.counterTimeout)
		clearTimeout(this.rankTimeout)
		clearTimeout(this.powerTimeout)
		clearInterval(this.powerInterval)

		document.removeEventListener('keydown', this.spacebarDown)
		document.removeEventListener('keyup', this.spacebarUp)
	}

	resetGame = () => {
		this.setState({
			display: 'game',
			time: 5.00,
			count: 0,
			rank: "SUPER BABY FINGERS",
			power: 0,
		}, this.startGame())
	}

	componentWillUnmount(){
		clearTimeout(this.timerTimeout)
		clearInterval(this.startTimer)
		clearInterval(this.timerInterval)
		clearTimeout(this.counterTimeout)
		clearTimeout(this.rankTimeout)
		clearTimeout(this.powerTimeout)
		clearInterval(this.powerInterval)

		document.removeEventListener('keydown', this.spacebarDown)
		document.removeEventListener('keyup', this.spacebarUp)
	}

	render(){

		const blank = <></>

		const time = <h1>{ this.state.time ? this.state.time : blank }</h1>

		const counter = <h1>{ this.state.count ? this.state.count : 0 }</h1>

		const rank = <h1>{ this.state.rank }</h1>

		const power = <h1>{ (this.state.power).toFixed(5) }</h1>

		const game =
			<div className="game_wrapper">
				<div className={ !this.state.showTimer ? "blank" : "game_timer" } >
					<h2>Time Left</h2>
					{ this.state.showTimer ? time : blank }
				</div>
				<div className={ !this.state.showCounter ? "blank" : "game_counter" }>
					<h2>Spacebar Smashes</h2>
					{ this.state.showCounter ? counter : blank }
				</div>
				<div className={ !this.state.showRank ? "blank" : "game_rank" }>
					<h2>Rank</h2>
					{ this.state.showRank ? rank : blank }
				</div>
				<div className={ !this.state.showPower ? "blank" : "game_power" }>
					<h2>Power Level</h2>
					{ this.state.showPower ? power : blank }
					<meter className="power_bar" value={this.state.power} min="0.0" max="2.5" low="0.5" optimum="1.0" high="1.5">
					</meter>
				</div>
			</div>

		return(
			<>
				{
					(() => {
						switch(this.state.display) {
							case 'game': return game;
							case 'submit_score': return <SubmitScore
															resetGame={ this.resetGame }
															getPlayerID={ this.props.getPlayerID }
															count={ this.state.count }
															rank={ this.state.rank }
															power={ (this.state.power).toFixed(5) }
														/>;
							default: return blank;
						}
					})()
				}
			</>
		)
	}
}