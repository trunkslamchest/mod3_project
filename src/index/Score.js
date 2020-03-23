import React from 'react'

export default class Score extends React.Component {

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
		const player = this.props.score.attributes.player
		const score = this.props.score.attributes.score
		const power = this.props.score.attributes.power_level
		const submitted_player = this.props.player

		const score_row =
			<tr className={ submitted_player === player ? "highlighted" : "scoreboard_sub_row" }>
				<td>
					{player}
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
				<td>
					{score}
				</td>
			</tr>

		return(
			<>
				{ score_row }
			</>
		)
	}
}