var readlineSync = require('readline-sync')

var userName = readlineSync.question('Hey bhai! Whats your name? ')

console.log('Ok Bhai! Welcome to DO YOU KNOW Prantik!')

var score = 0

if (readlineSync.keyInYN('Now, ' + userName + ' we will start the quiz are your ready?')) {
	// 'Y' key was pressed.
	var questions = [{
		question: 'Where does he live? \n a) Kolkata \n b) Bangalore \n c) Canada \n Answer:   ',
		answer: 'a'
	}, {
		question: 'What is the age of Prantik? \n a) 56 \n b) 19 \n c) 21 \n Answer:   ',
		answer: 'c'
	},{
		question: 'What is the best thing Prantik loves to eat? \n a) Pizza \n b) Mutton Biriyani and Coke \n c) Chicken Biriyani with 2 Gulab Jamun\'s \n Answer: ',
		answer: 'c'
	}]



	for (var i = 0; i < questions.length; i++) {
		var currentQuestion = questions[i]
		play(currentQuestion.question, currentQuestion.answer)
	}

	function play(question, answer) {
		var userAnswer = readlineSync.question(question)
		if (userAnswer === answer) {
			console.log('\nYou are right!')
			score += 1
			console.log('Your current score is', score)
			console.log("-------------------------")
		}
		else {
			console.log('\nYou are wrong!')
			score -= 1
			console.log('Your current score is', score)
			console.log("-------------------------")
		}
	}

	if(score <= 0){
		console.log("Kya yaar! I expected better from you!")
	} else {
		console.log('Great! Your final score is', score)
	}
}
else {
	console.log('Ok bhai, I thought u came for fun :(, anyways bye!!')
}