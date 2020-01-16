import React from 'react'

export default class PostGameScore extends React.Component {

	state = {
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

		const player_name = this.props.score.attributes.player.name
		const player_id = this.props.score.attributes.player.id
		const score = this.props.score.attributes.score
		const power = this.props.score.attributes.power_level
		const submitted_player_id = this.props.player_id

		const score_row =
			<tr className={ submitted_player_id === player_id ? "highlighted" : "scoreboard_sub_row" }>
				<td>
					{player_name}
				</td>
				<td className=	{{
						true: "scoreboard_power_low",
						false: (() => {
							switch(this.props.score.attributes.power_level > 2) {
								case true: return "scoreboard_power_high";
								case false: return "scoreboard_power";
								default: return "blank";
								}
							})()
						}[this.props.score.attributes.power_level < 1]}
					>

					<meter value={power} min="0.0" low="0.5" optimum="1.0" high="2.0" max="3.0"></meter>
				</td>
				<td>{score}</td>

			</tr>

		return(
			<>
				{ score_row }
			</>
		)
	}
}