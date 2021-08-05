
const DOMAIN =
  "https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple";
const questionDiv = document.querySelector("#mc-questions");
const answerDiv = document.querySelector("#mc-answers");
let scoreContainer = document.querySelector(".players-score");

let n = 0;
let score = 0;
let numOfQuestions = 10

const getData = async () => {
  try {
    const data = await axios.get(DOMAIN);
    let dataInfo = data.data.results;
    console.log(dataInfo);
    displayQuestion(dataInfo);
    displayAnswers(dataInfo);
  } catch (error) {
    console.log(error);
  }
};

getData();

function displayQuestion(question) {
  questionDiv.innerHTML = `<h3>${question[n].question}</h3>`;
}

function displayAnswers(question) {
  const correctAnswer = question[n].correct_answer;
  const incorrectAnswer1 = question[n].incorrect_answers[0];
  const incorrectAnswer2 = question[n].incorrect_answers[1];
  const incorrectAnswer3 = question[n].incorrect_answers[2];

  const arrayAnswers = [
    correctAnswer,
    incorrectAnswer1,
    incorrectAnswer2,
    incorrectAnswer3,
  ];

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue = null;
    let randomIndex = null;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // switch with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const shuffledArray = shuffle(arrayAnswers);

  answerDiv.innerHTML = `
          <input type="radio" id="choice-1" name="answer" value="${shuffledArray[0]}">
          <label for="1">${shuffledArray[0]}</label><br><br>
          <input type="radio" id="choice-2" name="answer" value="${shuffledArray[1]}">
          <label for="2">${shuffledArray[1]}</label><br><br>
          <input type="radio" id="choice-3" name="answer" value="${shuffledArray[2]}">
          <label for="3">${shuffledArray[2]}</label><br><br>
          <input type="radio" id="choice-4" name="answer" value="${shuffledArray[3]}">
          <label for="4">${shuffledArray[3]}</label>
          <br><br>
          <button id= "submit-answer">Submit</button>
        `;
  //console.log(document.getElementsByTagName())

  const answerSubmit = document.querySelector("#submit-answer");
  
  answerSubmit.addEventListener("click", (event) => {
    n++;
    //let numOfQuestions = 10
    let radioChecked = document.getElementsByName("answer");

    for (let i = 0; i < radioChecked.length; i++) {
      if (radioChecked[i].checked) {
        
        if (radioChecked[i].value === correctAnswer) {
          numOfQuestions = numOfQuestions - 1
          alert(`Correct! ${numOfQuestions} questions to go!`)
          score++;
          scoreContainer.innerHTML = `<p>Score: ${score}</p>`;
          //console.log(score);  
        }else {
        numOfQuestions = numOfQuestions - 1
        alert(`Uh oh. Thats Incorrect! ${numOfQuestions} questions remaining.`)
      }

      }
      
    }
    // localStorage.setItem("highScores", [])
    // console.log(localStorage.getItem("highScores"))
    // let mostRecentScore = score

    //console.log(mostRecentScore)

    if (score === 10) {
      endGame();
    } else if (n < question.length) {
      displayQuestion(question);
      displayAnswers(question);
    } else {
      endGame();
    }
  });
}

function endGame() {
  // $(".question-form").html("The game is over");
  alert(`This game has ended. Your final score is ${score}`);
  window.location.assign("./index.html");
}






// // window.addEventListener("DOMContenetLoaded", (event)=> { 

// const DOMAIN = "https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple"



// // console.log(DOMAIN)

// //console.log(mcAnswers)
// //const mcQuestion = document.getElementById("mc-questions")
// //const newArray = []
// // let currQuestion = {};
// // //let acceptingAswers = false;
// //let score = 0;
// // let questionCount;
// // let questions = []
// //const currentQuestionIndex
// const getData = async () => {

//   try {
//     const dataArr = []
//     const data = await axios.get(DOMAIN)
//     let dataInfo = data.data.results
//     //console.log(dataInfo)
//     //console.log(dataInfo)
//     //eachQuestion = () => {
//      //console.log(data.question)
//       //let questions =
//     dataInfo.forEach((data, index => {
//       //console.log(data)
//       //onst { datauestion, dataincorrect_answers, correct_answer } = data
//       //console.log()
//       }))
//         //localStorage.setItem("dataInfo", "question") 
//       //console.log(questions)
//       //dataArr.push(data.question)
//       //console.log(newArray.length)
//       //const availableQuestions = [questions]
//       //console.log(availableQuestions)
//       //console.log(questions)
//       // for (let i = 0; i < questions.length; i++){
//       //   console.log(questions)
//       //newGame(questions[i])




//     //console.log(questions)
//     applyDataRetrieved(dataInfo)
//     //return formattedQuestion
//     // newGame(questions)


//   } catch (error) {
//     console.log(error)
//   }
// }
// //newGame()
// getData()
// //console.log(dataArr)

// // const dataInfo = localStorage.getItem("dataInfo.question")
// // console.log(dataInfo)

// let highScore = []

// //console.log(newArray)
// //console.log(dataArray)
// let scoreContainer = document.querySelector(".players-score")
// //let numOfQuestions = newArray.length
// let correctAnswer = document.getElementById("choice4")
// newGame = () => {
//   let numOfQuestions = 10
//   let score = 0
//   //let clickCount = 11
//   //console.log(newArray)
//   //let acceptAnswers = false;

//   let currentScore = document.querySelector(".score")

//   //scoreContainer.append(currentScore)

//   const mcChoices = Array.from(document.querySelectorAll(".button"))
//   //console.log(mcChoices)

//   //console.log(dataInfo)

//   mcChoices.forEach(mcChoice => {

//     mcChoice.addEventListener("click", event => {

//       //acceptAnswers = true;

//         if (score === 10) {
//           alert("Coongratulations you won!")
//           window.location.assign("./index.html")
//         } else
//           if (numOfQuestions === 1) {
//             alert("Sorry. Game Over")
//             window.location.assign("./index.html")
//           } else
//             if (mcChoice === correctAnswer) {
//               numOfQuestions = numOfQuestions - 1
//               score++
//              //currentScore += score

//               //window.location.reload()
//               currentScore.innerHTML = `Score: ${score}`
//               alert(`Correct! ${numOfQuestions} questions to go!`)
//               window.location.reload()
//               currentQuestionCount++
//               //applyDataRetrieved(dataInfo)
//             } else
//               if (mcChoice !== correctAnswer) {
//                 numOfQuestions = numOfQuestions - 1
//                 alert(`Uh Oh, wrong answer! Only ${numOfQuestions} questions remaining`)
//                 window.location.reload()
//                 currentQuestionCount++

//                 //clickCount++
//                 //
//               }
//         //applyDataRetrieved(dataInfo)
//         //setNextQuestion()
//         // if (score >= 10) {
//         //   alert("Congratulations!!! You Win!")
//         // } else {
//         //   ("Maybe next time")
//         //} // }


//     })

//   })
//   for (let i = 0; i < highScore.length; i ++){
//     if (score > highScore[i])
//     highScore.push(score)
//   }
//   console.log(highScore)
// }

// newGame()



// // const mcAnswers = document.querySelectorAll(".button")
// // console.log(mcAnswers)
// // reset = (mcAnswers) => {

// // }



// //async function to fetch the data we need from API

// //}
// //eachQuestion()
// //console.log(data.data.results)
// //console.log(data.data.results)
// //console.log(questions)
// // function to access data we get back



// //const questions = newArray
// //console.log(questions) 





// saveHighScore = () => {
//   if (numOfQuestions.length === 0) {

//     localStorage.setItem("currentScore", score)
//   }
// }
// saveHighScore()
// //console.log(numOfQuestions)

// // shuffledQuestions = questions.sort(() => Math.floor(Math.random() * 3))
// // currentQuestionIdx = 0
// //const newArray = []

// function applyDataRetrieved(dataInfo) {

// //onsole.log(dataInfo)



//   for (let i = 0; i < dataInfo.length; i++) {

//     console.log(dataInfo[i].question)
//   }

//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[0].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[1].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[2].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[3].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[4].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[5].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[6].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[7].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[8].question}`
//   document.querySelector("#mc-questions").innerHTML = `${dataInfo[9].question}`



//   document.querySelector("#choice1").innerHTML = `${dataInfo[0].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[0].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[0].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[0].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[1].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[1].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[1].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[1].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[2].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[2].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[2].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[2].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[3].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[3].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[3].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[3].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[4].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[4].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[4].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[4].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[5].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[5].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[5].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[5].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[6].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[6].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[6].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[6].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[7].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[7].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[7].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[7].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[8].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[8].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[8].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[8].correct_answer}`

//   document.querySelector("#choice1").innerHTML = `${dataInfo[9].incorrect_answers[0]}`
//   document.querySelector("#choice2").innerHTML = `${dataInfo[9].incorrect_answers[1]}`
//   document.querySelector("#choice3").innerHTML = `${dataInfo[9].incorrect_answers[2]}`
//   document.querySelector("#choice4").innerHTML = `${dataInfo[9].correct_answer}`



// }
// applyDataRetrieved()

// //document.addEventListener("")
// // let correctButton = document.querySelector("#choice4")
// // correctButton.addEventListener("click", () => {
// //   alert("You are correct!")

// // })

// // const choice1 = document.getElementById("#choice1")
// // console.log(choice1)

