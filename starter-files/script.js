/////////////////////////////////////////////////////////////////VERSION1///////////////////////////////////////////
/*
// API
const API_ENDPOINT = 'https://yesno.wtf/api';

// DOM elements
const input = document.getElementById('input');
const button = document.getElementById('button');
const answer = document.getElementById('answer');
const error = document.getElementById('error');

//get question from input
const question = input.value;

// Send GET request to API endpoint
async function fetchAnswer() {
  let response = await fetch(`${API_ENDPOINT}?q=${question}`);
  let data = await response.json();

    // Output API's response
  answer.innerHTML = data.answer;
  }
// Add event listener to button
button.addEventListener('click', fetchAnswer);
*/

////////////////////////////////////////////////////////////Version 2.0/////////////////////////////////////////////
  // API
  const API_ENDPOINT = 'https://yesno.wtf/api';

  // DOM elements
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const answer = document.getElementById('answer');
  const error = document.getElementById('error');
  
  // Add event listener to button
  button.addEventListener('click', fetchAnswer);
  
  
  // Fetch answer from API
  function fetchAnswer() {
    // Clear previous output
    answer.innerHTML = '';
    error.innerHTML = '';
  
    // Get question from input
    const question = input.value;
    
    // Send GET request to API endpoint
    fetch(`${API_ENDPOINT}?q=${question}`)
      .then(response => response.json())
      .then(data => {
        // Output API's response
        answer.innerHTML = data.answer;
      })
      .catch(error => {
        // Output error message
        error.innerHTML = 'Error';
      });
  
    // Clear output after 3 seconds
    setTimeout(() => {
      input.value = '';
      answer.innerHTML = '';
      error.innerHTML = '';
    }, 3000);
  }
  
  
  