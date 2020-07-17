//e stands for encryption
//d stands for decryption
//n stands for output/input
dec_to_bho = (n) => {
	return parseInt(n, 10).toString(2);
};
main = (n, e, m) => {
	expo = [];
	let res = [];
	let str = reverseString(dec_to_bho(e));
	for (let i = 0; i < str.length; i++) {
		if (str[i] == 1) {
			if (pow(2, i) == 32) {
				res.push(
					((pow(n, pow(2, i) / 4) % m) *
						(pow(n, pow(2, i) / 4) % m) *
						(pow(n, pow(2, i) / 4) % m) *
						(pow(n, pow(2, i) / 4) % m)) %
						m
				);
			}
			if (pow(2, i) == 16) {
				res.push(
					((pow(n, pow(2, i) / 2) % m) * (pow(n, pow(2, i) / 2) % m)) % m
				);
			} else {
				res.push(pow(n, pow(2, i)) % m);
			}
		}
	}
	let val = 1;
	for (let j = 0; j < res.length; j++) {
		val *= res[j];
	}
	console.log(res);
	return val % m;
};

pow = (num, e) => {
	let res = 1;
	for (let k = 0; k < e; k++) {
		res *= num;
	}
	return res;
};

reverseString = (str) => {
	return str.split("").reverse().join("");
};
console.log(main(71, 29, 91));
