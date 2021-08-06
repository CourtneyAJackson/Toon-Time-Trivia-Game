# Toon-Time


## Project Name


Toon Time!
"The worlds most whackiest cartoon trivia game!"

The name of your project with deployed URL.

## Project Description

Toon Time is a cartoon enthuists dream! It tests your cartoon knowledge over the corse of 10 multiple choice questions. Each question you get correct, you earn a point! Can you beat the highest score to date?

## API and Data Sample


Api URL : https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple&encode=url3986

```javascript
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment%3A%20Cartoon%20%26%20Animations",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which%20%22Toy%20Story%22%20character%20was%20voiced%20by%20Don%20Rickles%3F",
      "correct_answer": "Mr.%20Potato%20Head",
      "incorrect_answers": [
        "Slinky%20Dog",
        "Hamm",
        "Rex"
      ]
    },
```
## Wireframes


![wireframe](https://whimsical.com/toon-time-trivia-game-6McUEGduAAU1mRV1dawXT3)



#### MVP
- Creating functional new game button 
- Implement function trivia questions questions that link to the correct answer
- Incrementing the players score with every correct answer 
- Implementing functional multiple choice possibilities for answers
- Creating highest score button  that keeps track of the most recent highest score
- Reflect highest score on the page
- Keep track of players score and reflect it on the page
- Compare players score to highest score at end of game to see if highest score needs to be updated
- Reset every time new game button is clicked

#### PostMVP  
- Create functional high score log
- Add user sign up functionality 
- let users have the ablitlity to create a simple profile to keep track of their gaming history and communicate with other players
- make it a two player game 
- have usuers be able to submit questions to be possibly added to the game

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|August 3| Pseudocode / actual code | Complete
|August 4| Initial Clickable Model  | Complete
|August 5| MVP | Complete
|August 6| Presentations | Incomplete

## Priority Matrix

https://whimsical.com/priority-matrix-trivia-game-P9LU55eNcG3dcBfB1BkJDm


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Reasearching Api for Topic | H | 2hr | 1.5hrs | 1.5hrs |
| Adding Form | H | 3hrs| 2hrs | 2hrs |
| Working with API | H | 3hrs| 6hrs | 6hrs |
| Pseudocoding | H | 4hr | 3hrs | 3hrs |
| Flexbox Implementation | H | 4hr | 3.5hrs | 3.5hrs |
| JS Implementation | H | 4hr | 8hrs | 8hrs |
| Linking correct input to output | H | 2hr | 4hrs | 4hrs |
| Implementing Random Questions and Answers | H | 3hr | 4hrs | 4hrs |
| Basic Css | H | 3hr | 3hrs | 3hrs |
| HTML Implementation | H | 2hr | 1.5hrs | 1.5hrs |
| Implementing Reset New Game | H | 2hr | .5hrs | .5hrs |
| Start Button Creation & Functionality | H | 1hr | 1hrs | 1hrs |
| Keep Track of Players Score |  H | 1hr | 2hrs | 2hrs |
| Reflect Players Score | H | 1hr | 1hrs | 1hrs |
| Keep track of Highest Score | H | 1hr | 1hrs | 1hrs |
| Reflect Highest Score | H | 1hr | 0hrs | 0hrs |
| Compare and Update Highest Score | H | 1hr | 0hrs | 0hrs |
| Highest Score Button creation |  H | 1hr | .5hrs | .5hrs |
| Total | H | 39hrs| 43hrs | 43hrs |

## Code Snippet

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



## Change Log
Had so much trouble trying to get random questions to continue to generate without expiring the current game session.

Had to change my approach of how to generate correct answer randomly instead of hard coding the same correct answer for each question. 
