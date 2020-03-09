import React, { useEffect } from 'react'

import { trafficUpdate } from './utility/trafficFunctions'

import './css/Error.css'

var sendTraffic = new trafficUpdate()

const Error = (props) => {

	useEffect(() => { sendTraffic.pageUpdate({
		user_id: localStorage.user_id,
		page_name: "404 Error",
	})})

	return(
		<div className="error_container">
			<div className="error_wrapper">
				<h3>404 Error</h3>
			</div>
		</div>
	)
}

export default Error
