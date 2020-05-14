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
];

// Creating font cards
const main = document.querySelector('main');

let info, p;

for (let i = 0; i < fontInfo.length; i++) {
  info = document.createTextNode(`${fontInfo[i].fontFamily}`);
  const div = document.createElement('div');
  p = document.createElement('p');
  p.appendChild(info);
  div.appendChild(p);

  info = document.createTextNode(`${fontInfo[i].designer}`);
  p = document.createElement('p');
  p.appendChild(info);
  div.appendChild(p);

  const icon = document.createElement('i');
  const iconClass = document.createAttribute('class');
  iconClass.value = 'fas fa-plus';
  icon.setAttributeNode(iconClass);
  div.appendChild(icon);

  sampleText = 'Then came the night of the first falling star.';
  info = document.createTextNode(`${sampleText}`);
  p = document.createElement('p');
  p.appendChild(info);
  let sampleStyle = document.createAttribute('style');
  sampleStyle.value = `font-family: ${fontInfo[i].fontFamily}`;
  p.setAttributeNode(sampleStyle);
  div.appendChild(p);

  main.appendChild(div);
}

// Changes sample text to provided input
const selectedInput = document.getElementById('sampleInput');
selectedInput.addEventListener('input', (event) => {
  if (selectedInput.value === 'Type something' || selectedInput.value === '') {
    sampleText = 'Then came the night of the first falling star.';
  } else {
    sampleText = event.target.value;
  }
  sampleP = document.querySelectorAll('p:nth-child(4)');
  for (let i = 0; i < sampleP.length; i++) {
    sampleP[i].textContent = sampleText;
  }
});
