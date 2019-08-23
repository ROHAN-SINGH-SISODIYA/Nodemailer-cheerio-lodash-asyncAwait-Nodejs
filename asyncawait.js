function message1(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Resolved one!!");
		},5000);
	})
}


function message2(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Resolved Two!!");
		},2000);
	})
}

async function resolvePromise(){
	console.log("Initializing!!!");
	let m2 = await message2();
	console.log(m2);
	let m1 = await message1();
	console.log(m1); 
}

resolvePromise();