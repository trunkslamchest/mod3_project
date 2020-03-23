import React, { useEffect } from 'react'

import trafficFunctions from './utility/trafficFunctions'

import './css/Error.css'

let pageInfo = {
	user_id: localStorage.user_id,
	page_name: "404 Error",
}

const Error = (props) => {

	useEffect(() => { trafficFunctions('page', 'http://localhost:3001/pages', pageInfo) })

	return(
		<div className="error_container">
			<div className="error_wrapper">
				<h3>404 Error</h3>
			</div>
		</div>
	)
}

export default Error
