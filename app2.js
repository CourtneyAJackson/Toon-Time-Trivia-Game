
// window.addEventListener("DOMContenetLoaded", (event)=> { 

const DOMAIN = "https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple"



// console.log(DOMAIN)

//console.log(mcAnswers)
//const mcQuestion = document.getElementById("mc-questions")
let newArray = []
// let currQuestion = {};
// //let acceptingAswers = false;
//let score = 0;
// let questionCount;
// let questions = []
//const currentQuestionIndex
const getData = async () => {
  try {
    const data = await axios.get(DOMAIN)
    const dataInfo = data.data.results
    //console.log(dataInfo)
    //console.log(dataInfo)
    //eachQuestion = () => {
    dataInfo.forEach(data => {
      //console.log(data.question)
      //let questions =
        //localStorage.setItem("dataInfo", "question") 
      //console.log(questions)
      newArray.push(data.question)
      //console.log(newArray.length)
      //const availableQuestions = [questions]
      //console.log(availableQuestions)
      //console.log(questions)
      // for (let i = 0; i < questions.length; i++){
      //   console.log(questions)
      //newGame(questions[i])



    })
    //console.log(questions)
    applyDataRetrieved(dataInfo)

    // newGame(questions)


  } catch (error) {
    console.log(error)
  }
}

getData()
//console.log(newArray)
// const dataInfo = localStorage.getItem("dataInfo.question")
// console.log(dataInfo)

console.log(newArray.length)
//console.log(newArray)
//console.log(dataArray)
let scoreContainer = document.querySelector(".players-score")
//let numOfQuestions = newArray.length
let correctAnswer = document.getElementById("choice4")
newGame = () => {
  let currentQuestionCount = 0
  let score = 0
  let clickCount = 11
  //console.log(newArray)



  let currentScore = document.querySelector(".score")

  scoreContainer.append(currentScore)

  const mcChoices = Array.from(document.querySelectorAll(".button"))
  console.log(mcChoices)



  mcChoices.forEach(mcChoice => {

    mcChoice.addEventListener("click", event => {
      if (score === 10) {
        alert("Coongratulations you won!")
        window.location.assign("./index.html")
      } else
        if (numOfQuestions === 1) {
          alert("Sorry. Game Over")
          window.location.assign("./index.html")
        } else
        if (mcChoice === correctAnswer) {
          numOfQuestions = numOfQuestions - 1
          score++
          
          //window.location.reload()
          currentScore.innerHTML = `Score: ${score}`
          alert(`Correct! ${numOfQuestions} questions to go!`)
          //window.location.reload()
          currentQuestionCount++
          
        } else
          if (mcChoice !== correctAnswer) {
            numOfQuestions = numOfQuestions - 1
            alert(`Uh Oh, wrong answer! Only ${numOfQuestions} questions remaining`)
            currentQuestionCount++
            clickCount++
          }

      //setNextQuestion()
      // if (score >= 10) {
      //   alert("Congratulations!!! You Win!")
      // } else {
      //   ("Maybe next time")
      //} // }


    })

  })



  //return score
}
newGame()

// const mcAnswers = document.querySelectorAll(".button")
// console.log(mcAnswers)
// reset = (mcAnswers) => {

// }



//async function to fetch the data we need from API

//}
//eachQuestion()
//console.log(data.data.results)
//console.log(data.data.results)
//console.log(questions)
// function to access data we get back



//const questions = newArray
//console.log(questions) 
let acceptAmswers = true;
let currentQuestionCount = 0
let numOfQuestions = 10
let currentQuestionIndex = 0



getNextQuestion = () => {
  if (numOfQuestions.length === 0 || numOfQuestions === 10) {
    localStorage.setItem("mostRecentScore", score)


    //return window.location.assign("/.index.html")
  }
  numOfQuestions--

  currentQuestionIndex = Math.floor(Math.random() * numOfQuestions.length)
  currentQuestion = numOfQuestions[currentQuestionIndex]
}
getNextQuestion()
//console.log(numOfQuestions)

// shuffledQuestions = questions.sort(() => Math.floor(Math.random() * 3))
// currentQuestionIdx = 0

function applyDataRetrieved(dataInfo) {
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[0].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[1].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[2].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[3].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[4].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[5].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[6].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[7].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[8].question}`
  document.querySelector("#mc-questions").innerHTML = `${dataInfo[9].question}`


  document.querySelector("#choice1").innerHTML = `${dataInfo[0].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[0].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[0].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[0].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[1].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[1].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[1].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[1].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[2].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[2].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[2].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[2].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[3].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[3].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[3].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[3].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[4].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[4].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[4].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[4].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[5].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[5].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[5].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[5].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[6].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[6].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[6].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[6].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[7].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[7].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[7].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[7].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[8].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[8].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[8].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[8].correct_answer}`

  document.querySelector("#choice1").innerHTML = `${dataInfo[9].incorrect_answers[0]}`
  document.querySelector("#choice2").innerHTML = `${dataInfo[9].incorrect_answers[1]}`
  document.querySelector("#choice3").innerHTML = `${dataInfo[9].incorrect_answers[2]}`
  document.querySelector("#choice4").innerHTML = `${dataInfo[9].correct_answer}`

}
applyDataRetrieved()

//document.addEventListener("")
// let correctButton = document.querySelector("#choice4")
// correctButton.addEventListener("click", () => {
//   alert("You are correct!")

// })

// const choice1 = document.getElementById("#choice1")
// console.log(choice1)

