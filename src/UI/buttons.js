import React from 'react'
import { NavLink } from 'react-router-dom'

import './buttons.css'

const buttonBP = (props) => {
	return(
		<NavLink
			exact to={props.link}
			name={props.buttonName}
			interaction={props.interaction}
			className={props.classType}
		>
			{props.children}
		</NavLink>
	)
}

export default buttonBP