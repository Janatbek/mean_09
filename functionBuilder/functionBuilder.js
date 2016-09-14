function runningLogger(){
	console.log('I am running!');
}

function multiplyByTen(num){
	return num * 10;
}
multiplyByTen(5);

function stringReturnOne(){
	console.log("I am coding") ;
}
function stringReturnTwo(){
	console.log("I am coding again");
}
function caller(arg){
	console.log(typeof(arg));
}
function myDoubleConsoleLog(arg1, arg2){
	if (typeof(arg1)=== 'function' || typeof(arg2) === 'function') {
		console.log(arg1);
		console.log(arg2);
	}
}
function caller2(arg){
	console.log('Starting');
	setTimeout(arg, 2000);
	setTimeout(console.log('ending?'), 3000);
	return "interesting";
}
caller2(myDoubleConsoleLog(stringReturnTwo(), stringReturnOne()));