;(function(env) {

	var scoreboardFunctions = function(method, url, obj){
		var init = new scoreboardFunctions.init(method, url, obj)
		return init[method]
	}

	scoreboardFunctions.init = function(method, url, obj){
		this[method] = this[method](url, obj)
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
		}

	}

	scoreboardFunctions.init.prototype = scoreboardFunctions.prototype

	env.scoreboardFunctions = scoreboardFunctions

	module.exports = scoreboardFunctions

})(typeof window === "undefined" ? global : window)
