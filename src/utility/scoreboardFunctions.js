;(function(env) {

	var scoreboardFunctions = function(method, url, userObj){
		var init = new scoreboardFunctions.init(method, url, userObj)
		return init[method]
	}

	scoreboardFunctions.init = function(method, url, userObj){
		this[method] = this[method](url, userObj)
	}

	scoreboardFunctions.prototype = {
		get: function(url) {
			return fetch(url)
			.then(res => res.json())
		},

		post: function(url, playerObj) {
			return fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					player: playerObj.player,
					score: playerObj.score,
					power_level: playerObj.power_level,
				})
			})
			.then(res => res.json())
		},

		edit: function(url, userObj) {
			return fetch(url, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					first_name: userObj.first_name,
					last_name: userObj.last_name,
					age: userObj.age,
					current_state: userObj.current_state,
				})
			})
			.then(res => res.json())
		},

		delete: function(url) {
			return fetch(url, {
				method: "DELETE"
			})
		}
	}

	scoreboardFunctions.init.prototype = scoreboardFunctions.prototype

	env.scoreboardFunctions = scoreboardFunctions

	module.exports = scoreboardFunctions

})(typeof window === "undefined" ? global : window)