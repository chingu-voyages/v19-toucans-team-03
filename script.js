const fontInfo = [
  { fontFamily: 'Alegreya Sans', designer: 'Juan Pablo del Peral' },
  { fontFamily: 'Alegreya Sans SC', designer: 'Juan Pablo del Peral' },
  { fontFamily: 'Balsamiq Sans', designer: 'Michael Angeles' },
  { fontFamily: 'DM Mono', designer: 'Colophon Foundry' },
  { fontFamily: 'Lato', designer: 'Łukasz Dziedzic' },
  {
    fontFamily: 'Montserrat',
    designer:
      'Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral, Jacques Le Bailly',
  },
  { fontFamily: 'Open Sans', designer: 'Steve Matteson' },
  { fontFamily: 'Roboto', designer: 'Christian Robertson' },
  { fontFamily: 'Roboto Mono', designer: 'Christian Robertson' },
  { fontFamily: 'Roboto Slab', designer: 'Christian Robertson' },
]

// Creating font cards
const main = document.querySelector('main')
const selectedSize = document.getElementById('fontSize')

for (let i = 0; i < fontInfo.length; i++) {
  let info = document.createTextNode(`${fontInfo[i].fontFamily}`)
  const div = document.createElement('div')
  let p = document.createElement('p')
  p.appendChild(info)
  div.appendChild(p)

  info = document.createTextNode(`${fontInfo[i].designer}`)
  p = document.createElement('p')
  p.appendChild(info)
  div.appendChild(p)

  const icon = document.createElement('i')
  const iconClass = document.createAttribute('class')
  iconClass.value = 'fas fa-plus'
  icon.setAttributeNode(iconClass)
  div.appendChild(icon)

  sampleText = 'Then came the night of the first falling star.'
  info = document.createTextNode(`${sampleText}`)
  p = document.createElement('p')
  p.appendChild(info)
  let sampleStyle = document.createAttribute('style')
  sampleStyle.value = `font-family: ${fontInfo[i].fontFamily}; font-size: ${selectedSize.value}px`
  p.setAttributeNode(sampleStyle)
  console.log(p)
  div.appendChild(p)

  main.appendChild(div)
}

// Changes sample text to provided input
sampleP = document.querySelectorAll('p:nth-child(4)')
const selectedInput = document.getElementById('sampleInput')
function setSampleText(string) {
  if (selectedInput.value === 'Type something' || selectedInput.value === '') {
    sampleText = 'Then came the night of the first falling star.'
  } else {
    sampleText = string
  }
  for (let i = 0; i < sampleP.length; i++) {
    sampleP[i].textContent = sampleText
  }
}
selectedInput.addEventListener('input', (event) => {
  setSampleText(event.target.value)
})

// Changes sample text to selected size
function setSize(num) {
  for (i = 0; i < sampleP.length; i++) {
    let sampleStyle = sampleP[i].getAttributeNode('style')
    sampleStyle.value = `font-family: ${fontInfo[i].fontFamily}; font-size: ${num}px`
  }
}
selectedSize.addEventListener('change', (event) => {
  setSize(event.target.value)
})

//Toggle dark theme
function darkTheme() {
  document.querySelector('body').style.backgroundColor = 'black'
  document.querySelector('body').style.color = 'white'
}

//Toggle light theme
function lightTheme() {
  document.querySelector('body').style.backgroundColor = 'white'
  document.querySelector('body').style.color = 'black'
}

// Reset all input fields
const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', () => {
  selectedInput.value = ''
  setSampleText()

  setSize(32)
  document.getElementById('fontSize').selectedIndex = 2

  lightTheme()
})
