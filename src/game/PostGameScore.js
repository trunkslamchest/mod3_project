import React from 'react'

const PostGameScore = (props) => {
	console.log(props.player)

	const player = props.score.attributes.player
	const score = props.score.attributes.score
	const power = props.score.attributes.power_level
	const submitted_player = props.player

	const score_row =
		<tr className={ submitted_player === player ? "highlighted" : "scoreboard_sub_row" }>
			<td>
				{player}
			</td>
			<td className={{
						true: "scoreboard_power_low",
						false: props.score.attributes.power_level > 2 ? "scoreboard_power_high" : "scoreboard_power"
					}[props.score.attributes.power_level < 1]}
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

export default PostGameScore