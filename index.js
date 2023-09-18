const express = require('express')

const app = express()
const PORT = 3000
app.listen(PORT,()=>{
    
})

function synchronousFunction() {
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        const result = "2. This is a synchronous function.";
        resolve(result);
       },2000)
      
    });
  }
  
  async function main() {
    try {
      const result = await synchronousFunction();
      console.log(result);
      console.log('3. Synchronous function is completed.');
    } catch (error) {
      console.error('1. Error:', error);
    }
  }

function asynchronousFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "B. Asynchronous Data." };
        resolve(data);
      }, 5000); // Delaying 5-sec
    });
  }
  
  function fetchData() {
    asynchronousFunction()
      .then(data => {
        console.log(data.message);
        console.log('C. Data fetched successfully.');
      })
      .catch(error => {
        console.error('A. Error:', error);
      });
  }
  

  console.log('1. Performing synchronous operation...');
  main();

  
  console.log('A. Fetching data asynchronously...');
  fetchData();