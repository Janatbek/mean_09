function personConstructor(name){
	return {
		name: 'name',
		distance_traveled: 0,
		say_name: function(){
			console.log(this.name);
		},
		say_something(word){
			console.log(word);
		},
		walk: function(){
			alert(this.name + ' is walking');
			this.distance_traveled += 3;
		},
		run: function(){
			alert(this.name + ' is running');
			this.distance_traveled += 10;
		},
		crawl: function(){
			alert(this.name + ' is crawling');
			this.distance_traveled += 1;
		}
	}
}

function ninjaConstructor(name, cohort, belt-level){
	var ninja = {};
	var belts = ['yellow', 'red', 'black'];
	ninja.name = name,
	ninja.cohort = cohort,
	ninja.belt-level = "yellow-belt",
	ninja.levelUp =  function(belt){
		ninjaConstructor.belt-level = belt;
	}
}