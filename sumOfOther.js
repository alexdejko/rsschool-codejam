function sumOfOther (arr){
	let suma = a=> a.reduce(((sum, current) =>sum + current), 0);
	let res=[];
	for (let i=0;i<arr.length;i++){
		b = arr.slice();
		b.splice(i,1)
		res.push(suma(b))
	}
	return res;
}