Array.prototype.max = function() {
	return Math.max.apply(null, this);
};

Array.prototype.min = function() {
	return Math.min.apply(null, this);
};

function arrayUnique(a) {
	return a.reduce(function(p, c) {
		if (p.indexOf(c) < 0) p.push(c);
		return p;
	}, []);
};

isIntersecting = function(r1, r2) {
	return !(r2.x > (r1.x + r1.width) || 
		   (r2.x + r2.width) < r1.x || 
		   r2.y > (r1.y + r1.height) ||
		   (r2.y + r2.height) < r1.y);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}