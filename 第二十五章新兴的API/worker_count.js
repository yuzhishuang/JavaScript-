self.onmessage = function (event) {
	var data = event.data;

	//  别忘了，偶人的sort()方法只比较字符串
	data.sort(function (a, b) {
		return a - b;
	});
	self.postMessage(data);
}