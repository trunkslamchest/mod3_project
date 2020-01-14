import React from 'react'

import Game from './Game.js'

import '../css/Countdown.css'

export default class Countdown extends React.Component {

	state = {
		display: 'countdown',
		time: 5,
		showHeader: false,
		showTimer: false,
		showGo: false,
		showTutorial: false,
		initGame: false,
		mounted: false
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})

		this.headerTimeout = setTimeout(() => { this.setState({ showHeader: true })}, 500)
		this.timerTimeout = setTimeout(() => { this.setState({ showTimer: true })}, 1000)
		this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 1000)}, 1500)
		this.tutorialTimeout = setTimeout(() => { this.setState({ showTutorial: true })}, 1000)

	}

	componentDidUpdate(){
		if(this.state.time === 0 && !this.state.initGame){
			this.initGame()
		}
	}

	timerFunctions = () => {

		if (this.state.time <= 0) {
			this.setState({
				time: 0,
				showTimer: false,
				showGo: true,
			}, clearInterval(this.timerInterval))
		} else {
			this.setState({
				time: (this.state.time - 1),
			})
		}
	}

	initGame(){
		this.initGameTimeout = setTimeout(() => { this.setState({ initGame: true, display: 'game' })}, 1500)
	}

	componentWillUnmount(){
		clearTimeout(this.headerTimeout)
		clearTimeout(this.timerTimeout)
		clearInterval(this.startTimer)
		clearTimeout(this.tutorialTimeout)
		clearTimeout(this.initGameTimeout)

	}

	render(){

		const blank = <></>

		const countdown_header = <h3>Prepare to Smash...</h3>
		const countdown_timer_header = <h2>Get Ready</h2>
		const countdown_timer = <h1>{ this.state.time }</h1>
		const countdown_go = <h1>GO!</h1>
		const countdown_tutorial = <p>Press the spacebar as many times as you can in 30 seconds!</p>

		const countdown =
			<div className={ this.state.display === "countdown" ? "countdown_wrapper": "blank" }>
				<div className={ this.state.showHeader ? "countdown_header" : "blank" }>
					{ this.state.showHeader ? countdown_header : blank }
				</div>
				<div className={ (this.state.time === 5 || this.state.time === 4) && this.state.showTimer ? "countdown_timer_five" : "blank" } >
					{ this.state.time ? countdown_timer_header : blank }
					{ this.state.time ? countdown_timer : blank }
				</div>
				<div className={ (this.state.time === 3 || this.state.time === 2) && this.state.showTimer ? "countdown_timer_three" : "blank" } >
					{ this.state.time ? countdown_timer_header : blank }
					{ this.state.time ? countdown_timer : blank }
				</div>
				<div className={ (this.state.time === 1) && this.state.showTimer ? "countdown_timer_one" : "blank" } >
					{ this.state.time ? countdown_timer_header : blank }
					{ this.state.time ? countdown_timer : blank }
				</div>
				<div className={ this.state.time ? "blank" : "countdown_go" } >
					{ this.state.time ? blank : countdown_go }
				</div>
				<div className={ this.state.showTutorial ? "countdown_tutorial" : "blank" }>
					{ this.state.showTutorial ? countdown_tutorial : blank }
				</div>
			</div>

		return(
			<>
				{
					(() => {
						switch(this.state.display) {
							case 'countdown': return countdown;
							case 'game': return <Game getPlayerID={this.props.getPlayerID} />;
							default: return blank;
						}
					})()
				}
			</>
		)
	}
}