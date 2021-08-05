
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
  //eachQuestion = () => {
    dataInfo.forEach(data => {
      //console.log(data.question)
      let questions = data.question
      newArray.push(questions)
      //const availableQuestions = [questions]
      //console.log(availableQuestions)
      //console.log(questions)
    })
   applyDataRetrieved(dataInfo)

   
  
  } catch (error) {
     console.log(error)
   }
}
  
getData()
//console.log(newArray)


// newGame = () => {
//   const mcChoices = Array.from(document.getElementsByClassName("button"))
//   console.log(mcChoices)
//   mcChoices.forEach(mcChoice => {
//     mcChoice.addEventListener("click", event => {
//       console.log("hello")
   
  
    // shuffledQuestions = questions.sort(() => Math.floor(Math.random() * 3))
    // currentQuestionIdx = 0

  //     if (mcChoice === correctAnswer) {
  //       numOfQuestions--
  //       alert(`Correct! ${numOfQuestions} to go!`)
  //       window.location.reload()
  //       score++
  //       currentQuestionCount ++
  //     } else
  //       numOfQuestions --
  //       alert(`UhOh, wrong answer! Only${numOfQuestions} questions remaining`)
  //       window.location.reload()
  //       currentQuestionCount ++
  //    //setNextQuestion()
  //     if (score >= 10) {
  //       alert("Congratulations!!! You Win!")
  //     } else {
  //       ("Maybe next time")
  //     }
     
  //    })
  // })
  
  //return score
// }
// newGame()

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
  


const questions = newArray
console.log(questions) 
 let acceptAmswers = true;
// currentQuestionCount = 0
// numOfQuestions = 10
let score = 0

// getNextQuestion = () => {
//   if (questions.length === 0 {
//     localStorage.setItem()
    
//   }
// }


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

