const DOMAIN = 'https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple&encode=url3986'

// const API_KEY = '61af40b2'
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&s=`;



const newGame = document.getElementsByClassName("new-game-button")
newGame.addEventListener("click", (event) => {
  alert("Good Luck!")
  //window.location.assign("./index2.html")
})


const highScore = document.getElementsByClassName("highest-score")

highScore.addEventListener("click", event => {
const score = localStorage.getItem('currentScore')
  alert(score)
  //console.log(score)
})
// questions = dataQuestions.map(dataQuestion => {
      
//   const formattedQuestion = {
//     question: dataQuestion.question
//   }
//     //console.log(foromattedQuestion)

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