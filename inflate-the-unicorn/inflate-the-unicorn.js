// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByTagName('img')

counter = [
  {
    name: 'unicorn1',
    position: unicorns[0],
    counter: 0,
  },
  {
    name: 'unicorn2',
    position: unicorns[1],
    counter: 0,
  },
  {
    name: 'unicorn3',
    position: unicorns[2],
    counter: 0,
  },
]

for (let i = 0; i < unicorns.length; i++) {
  function clicked(e) {
    counter[i].position = e.target

    if (counter[i].counter == 0) {
      counter[i].position.src = './images/unicorn-1.png'
      counter[i].counter++
    } else if (counter[i].counter == 1) {
      counter[i].position.src = './images/unicorn-2.png'
      counter[i].counter++
    } else if (counter[i].counter == 2) {
      counter[i].position.src = './images/unicorn-3.png'
      counter[i].counter++
    } else if (counter[i].counter == 3) {
      alert(`Unicore Number ${i + 1} says thank you!`)
      counter[i].position.src = './images/unicorn-0.png'
      counter[i].counter = 0
    }
    console.log(counter[i])

    /*if (unicorn.src = `./images/unicorn-${i}.jpg`) {
      unicorn.src = `./images/unicorn-${i + 1}.jpg`*/
  }
  counter[i].position.onclick = clicked
}
