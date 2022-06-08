function findFactorialInterative(number) { // 0(n)
	let answer = 1;
 
	if (number == 2) {
		answer = 2;
	}
	for (let i = 2; i <= number; i++) {
		answer = answer * i;
	}
    console.log(answer)
	return answer;
}


function findFactorialRecursive(number){  // 0(n)
    if(number === 2){
        return 2;
    }

    return number * findFactorialRecursive(number - 1)
}

//findFactorialInterative(5)
findFactorialRecursive(5)