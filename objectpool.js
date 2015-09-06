function ObjectPool(size, initFunction) {
	this.objects = [];
	this.initFunction = initFunction;
	
	for (i = 0; i < size; i++) {
		var poolObject = initFunction();
		poolObject.isFree = true;
		this.objects.push(poolObject);
	}
}

ObjectPool.prototype.constructor = ObjectPool;

ObjectPool.prototype.getFirstFree = function () {
	for (i = 0; i < this.objects.length; i++) {
		if (this.objects[i].isFree) {
			this.objects[i].isFree = false;
			return this.objects[i];
		}
	}
	
	var poolObject = this.initFunction();
	this.objects.push(poolObject);
	poolObject.isFree = false;
	
	return poolObject;
};

ObjectPool.prototype.getFreeCount = function () {
	var count = 0;
	
	for (i = 0; i < this.objects.length; i++) {
		if (this.objects[i].isFree)
			count++;
	}
	
	return count;
}