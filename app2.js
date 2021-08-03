


const DOMAIN = 'https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple&encode=url3986'

//console.log(DOMAIN)

// const triviaData = async () => {
//   try {
//     const response = await axios.get(DOMAIN)
//     console.log(response)
//   }
//   catch (error) {
//     console.log("error", error)
//   }
// }

// axios.get(DOMAIN).then(response => {
//    console.log(response)
//  })
    
  
//window.onload = getData

// async function to fetch the data we need from API
const getData = async () => {
  try{
    const response = await axios.get(DOMAIN)
    console.log(response)
    //applyDataRetrieved(response)
  } catch (error) {
    console.log(error)
 }

}
getData()


//function applyDataRetrieved(response) {
 // document.querySelectorAll("#mc-questions").innerHTML = `Question: ${response.result[0].question}`
//}
//applyDataRetrieved()