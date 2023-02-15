function alternateDigitSum(n: number): number {

	const arr:Array<string> = String(n).split('');

	let result:number = 0;

	for(let i = 0;i < arr.length;i++){
		if(i % 2 !== 0){
			result += -(Number(arr[i]))
		} else {
			result += Number(arr[i])
		}
	}

	return result
};
