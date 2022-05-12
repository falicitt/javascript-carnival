// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let clothing = document.getElementsByClassName('dress-an-image')
console.log(clothing)

let clothingIndex = 0
let bodyIndex = 0

function checkBodyPart() {
  if (bodyIndex == 0) {
    wear = clothing[0]
    wear.src = `./images/head${clothingIndex}.png`
    //wear.style.backgroundcolor = 'white'
  } else if (bodyIndex == 1) {
    wear = clothing[1]
    wear.src = `./images/body${clothingIndex}.png`
  } else if (bodyIndex == 2) {
    wear = clothing[2]
    wear.src = `./images/shoes${clothingIndex}.png`
  }
}

function changeClothes(e) {
  if (e.key === 'ArrowDown') {
    if (bodyIndex == 2) {
      bodyIndex = -1
    }
    bodyIndex++
    console.log(bodyIndex)
    checkBodyPart()
  } else if (e.key === 'ArrowUp') {
    if (bodyIndex == 0) {
      bodyIndex = 3
    }
    bodyIndex--
    console.log(bodyIndex)
    checkBodyPart()
  } else if (e.key === 'ArrowRight') {
    if (clothingIndex == 5) {
      clothingIndex = -1
    }
    clothingIndex++
    checkBodyPart()
  } else if (e.key === 'ArrowLeft') {
    if (clothingIndex == 0) {
      clothingIndex = 6
    }
    clothingIndex--
    checkBodyPart()
  }
}

document.addEventListener('keydown', changeClothes)
