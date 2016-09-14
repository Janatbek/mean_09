var _ = {
	map: function (value, callback){
		if (value instanceof Array) {
			for (var i = 0; i < value.length; i++){
				array[i] = callback(value[i]);
			}
		} 
		else if (value instanceof Object){ 
			for(var prop in value){
				array[i] = callback(value[prop])
			}
		}
	},

	reduce: function(value, callback) { 
		var el = 0;
		if(!memo){
			memo = array[i];
			el = 1;
		}
		for (var i = 0; i < value.length; i++){
			callback(memo, value[i]);
			function(memo, num){ return memo + num; }
		}
		console.log(memo);
	},
	find: function() {  },
	filter: function() { },
	reject: function() { }
}
// _.map({one: 1, two: 2, three: 3}, function(num, key){ console.log(num * 3) ; });
_.reduce([1, 2, 3], function(memo, num){ return memo + num; });