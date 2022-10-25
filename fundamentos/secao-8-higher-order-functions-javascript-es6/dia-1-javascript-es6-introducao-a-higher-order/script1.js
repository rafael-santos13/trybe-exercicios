const numberChecker = (myNumber, number) => myNumber === number;
const lotterResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
			return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try again!';
};
console.log(lotterResult(3, numberChecker));
