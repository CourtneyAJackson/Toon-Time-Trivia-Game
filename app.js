const DOMAIN = 'https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple&encode=url3986'

// const API_KEY = '61af40b2'
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&s=`;



  
document.addEventListener("click", (event) => {
  alert("Good Luck!")
})


// questions = dataQuestions.map(dataQuestion => {
      
//   const formattedQuestion = {
//     question: dataQuestion.question
//   }
//     //console.log(formattedQuestion)

//     const answers = [...dataQuestion.incorrect_answers]
//     formattedQuestion.answer = Math.floor(Math.random() * 3) + 1
//     answers.splice(formattedQuestion.answer - 1,
//       0,
//       dataQuestion.correct_answer
//     )
//     //console.log(answers)
//     answers.forEach((answer, i) => {
//       formattedQuestion["answer" + (i + 1)] = answer;
//     })
//     return formattedQuestion  
//  })