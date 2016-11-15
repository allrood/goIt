var num = 123;

var obj = {
	test: 123

};
function updateObj(a) {
	a.test = 5;
}

function updateNum(a) {
	a = 5;
}
updateNum(num);
updateObj(obj);
console.log('obj', obj);
console.log('num', num);