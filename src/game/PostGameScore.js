import React from 'react'

const PostGameScore = (props) => {
	const player_name = props.score.attributes.player.name
	const player_id = props.score.attributes.player.id
	const score = props.score.attributes.score
	const power = props.score.attributes.power_level
	const submitted_player_id = props.player_id

	const score_row =
		<tr className={ submitted_player_id === player_id ? "highlighted" : "scoreboard_sub_row" }>
			<td>
				{player_name}
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