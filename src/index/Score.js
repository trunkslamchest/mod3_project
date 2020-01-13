import React from 'react'

export default class Score extends React.Component {

	state = {
		// score: [],
		mounted: false
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})
	}

	componentDidUpdate(){
	}

	componentWillUnmount(){
	}

	render(){

		// console.log(this.props.score.attributes)

		const player = this.props.score.attributes.player.name
		const score = this.props.score.attributes.score

		console.log(player)
		console.log(score)


		const score_row =
			<tr className="scoreboard_sub_row">
				<td>{player}</td>
				<td>{score}</td>
			</tr>

		return(
			<>
				{ score_row }
			</>
		)
	}
}