function pow() {

	var n, ext;
	n = prompt("Число");
	ext = prompt("Степень");
	
	var value = n;
		if (ext < 0 ){
			for (var i = 1; i <= Math.abs(ext); i++) {
				value =  value * n
				n = 1/value;}
			}	
		else if (ext > 1){
			for (var i = 2; i <= ext; i++){
				value = value*n;
				console.log('step = '+ i);
				console.log('n = '+ n);
				console.log('value = '+ value);
			}
				n = value;
		}
		else if (ext==1){
		 n *= 1;
		} 
		else n = 1;	
alert('result: '+ n);
	
}
function aut(){

	var nameList = [];
	for (var i = 0; i < 5; i++) {
		var str = " "; 
		str = prompt("Log in", "name");
		nameList[i] = str; 
	}
	var control = '';
	control = prompt("test", "login");
	var isCorrect = false;
	var nameIndex = 0;

	for (var j = 0; j < nameList.length; j++) {
			if (nameList[j] === control){
				isCorrect = true;
				nameIndex = j;
			}
	}
		if (isCorrect)	alert('Hi, '+ control);
		else alert('wrong!!!');
}
