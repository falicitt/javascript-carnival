// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('td')
console.log(cells)

let randomCell = cells[Math.floor(Math.random() * cells.length)]
console.log(randomCell)

function showMole() {
  randomCell = cells[Math.floor(Math.random() * cells.length)]
  const mole = document.createElement('img')
  randomCell.appendChild(mole)
  mole.src = 'mole.png'
  mole.width = '75'
  console.log(randomCell)
  randomCell.addEventListener('click', whackMole)
}

function playAudio() {
  let myAudio = document.getElementById('myAudio')
  console.log(myAudio)
  myAudio.play()
}

function whackMole() {
  randomCell.innerHTML = ''
  playAudio()
  //randomCell = cells[Math.floor(Math.random() * cells.length)]
  showMole()
}

showMole()
randomCell.addEventListener('click', whackMole)
//randomCell.addEventListener('click', showMole)
console.log(randomCell)
