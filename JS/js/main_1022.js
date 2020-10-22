  "use strict";

{
	// setInterval()


	// let i = 0;

	// function showTime(){
	// 	console.log(new Date());
	// 	i++;
	// 	if(i > 2){
	// 		clearInterval(intervalId)
	// 	}
	// }

	// const intervalId = setInterval(showTime, 1000);


	// setTimeout()


	// let i = 0;

	// function showTime(){
	// 	console.log(new Date());
	// 	const timeoutId = setTimeout(showTime, 1000);
	// 	i++;
	// 	if(i > 4){
	// 		clearTimeout(timeoutId);
	// 	}
	// }

	// showTime();


	// 例外処理

	const name = 5;

	try{
		console.log(name.toUpperCase());
	}catch(e){
		console.log(e);
	}
	
	console.log("Finish");

}