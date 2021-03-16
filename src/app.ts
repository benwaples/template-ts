// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw'
const usersOptions = document.querySelector('#users-options')
const playButton = document.querySelector('#play')
const resultsSpan = document.querySelector('#results')
const tallySpan = document.querySelector('#tally')

// initialize state
let computersThrow = getRandomThrow()
let wins = 0;
let losses = 0;
let games = 0;

// set event listeners to update state and DOM 
playButton.addEventListener('click', () => {
  const usersPlay: HTMLInputElement = usersOptions.querySelector('input:checked')

  
})

