var markov = { //this code was stolen from this lovely website: http://blog.javascriptroom.com/2013/01/21/markov-chains/
	memory: {},
	separator: '',
	order: 2,
 
	learn: function(txt) {
		var mem = this.memory;
		this.breakText(txt, learnPart);
 
		function learnPart(key, value) {
			if (!mem[key]) {
				mem[key] = [];
			}
			mem[key].push(value);
 
			return mem;
		}
	},
 
	ask: function(seed) {
		if (!seed) {
			seed = this.genInitial();
		}
 
		return seed.concat(this.step(seed, [])).join(this.separator);
	},
 
	step: function(state, ret) {
		var nextAvailable = this.memory[state] || [''],
			next = nextAvailable.random();
 
		//we don't have anywhere to go
		if (!next) {
			return ret;
		}
 
		ret.push(next);
 
		var nextState = state.slice(1);
		nextState.push(next);
		return this.step(nextState, ret);
	},
 
	breakText: function(txt, cb) {
		var parts = txt.split(this.separator),
			prev = this.genInitial();
 
		parts.forEach(step);
		cb(prev, '');
 
		function step(next) {
			cb(prev, next);
			prev.shift();
			prev.push(next);
		}
	},
 
	genInitial: function() {
		var ret = [];

		for (
			var i = 0;
			i < this.order;
			ret.push(''), i++
		);
 
		return ret;
	}
};

function encodeHtmlEntity(str) {
	var buf = [];
	for (var i=str.length-1;i>=0;i--) {
		buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
	}
	return buf.join('');
}
 
Array.prototype.random = function() {
	return this[Math.floor(Math.random() * this.length)];
};

function generate() {
	document.getElementById("text").innerHTML = encodeHtmlEntity(markov.ask());
}

ikeas.forEach(function(input) {
	markov.learn(input);
});

generate();