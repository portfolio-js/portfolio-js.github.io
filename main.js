const ourBody = document.body;
// We can add color to our body too :)

const nav = document.createElement('nav'); // can create all elements that we would create using HTML
ourBody.appendChild(nav)
// Style is an attribute 'style' where we can write anything we'd write in CSS file
nav.style.width = '100%';
nav.style.height = '60px'; // < need to check width in Figma to see what size it's there. I just added some random number
// If a style property's written like 'backgorund-color' in CSS then in JS it will be the same in camelCase
// (e.g backgorund - color => backgroudColor)
nav.style.backgroundColor = '#000'; // 'black', 'rgb(0,0,0)', 'rgba(0,0,0,1)'

/*
const pizzaBanana = document.createElement('div');
pizzaBanana.setAttribute('pizza', 'banana') => 
  <h1 pizza="banana"></h1>
pizzaBanana.setAttribute('class', 'some-class') => 
  <h1 pizza="banana" class="some-class"></h1>
pizzaBanana.textContent = 'I am an H1!' => 
  <h1 pizza="banana" class="some-class">I am an H1!</h1>
*/