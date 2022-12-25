const ourBody = document.body;
// We can add color to our body too :) - done
ourBody.style.backgroundColor = 'black';
const nav = document.createElement('nav'); // can create all elements that we would create using HTML
ourBody.appendChild(nav)
// Style is an attribute 'style' where we can write anything we'd write in CSS file
nav.style.width = '100%';
nav.style.height = '60px'; // < need to check width in Figma to see what size it's there. I just added some random number - done
// If a style property's written like 'backgorund-color' in CSS then in JS it will be the same in camelCase
// (e.g backgorund - color => backgroudColor)
nav.style.backgroundColor = '#222222'; // 'black', 'rgb(0,0,0)', 'rgba(0,0,0,1)'

// plan thursday - 

/* const navFlex = () => {
nav.style.flex;
for (i = 0; i < 5; i++) {
    nav.style.flex = "1"; 
  };
};
*/
/*
Yulia's comments
const pizzaBanana = document.createElement('div');
pizzaBanana.setAttribute('pizza', 'banana') => 
  <h1 pizza="banana"></h1>
pizzaBanana.setAttribute('class', 'some-class') => 
  <h1 pizza="banana" class="some-class"></h1>
pizzaBanana.textContent = 'I am an H1!' => 
  <h1 pizza="banana" class="some-class">I am an H1!</h1>

*/


// NAV
//
// BAR

const navYulia = document.createElement('div');
navYulia.setAttribute('id', 'nvYulia');
navYulia.style.display = 'flex';
navYulia.style.position = 'absolute';
navYulia.style.left = '24px';
navYulia.style.top = '19px';
navYulia.style.color = 'white';
navYulia.style.fontSize = '16px';
let h3navYulia = document.createElement('h3');
    h3navYulia.innerText = 'YULIA TSERNANT';
    h3navYulia.style.fontFamily = 'Lato'; 
    navYulia.append(h3navYulia);
nav.append(navYulia);

const navInstagram = document.createElement('div');
navInstagram.setAttribute('id', 'nvInstagram');
navInstagram.style.display = 'flex';
navInstagram.style.position = 'absolute';
navInstagram.style.right = '271px';
navInstagram.style.top = '20px';
navInstagram.style.color = 'white';
navInstagram.style.fontSize = '16px';
let h3navInstagram = document.createElement('h3');
    h3navInstagram.innerText = 'INSTAGRAM';
    h3navInstagram.style.fontWeight = '400';
    h3navInstagram.style.fontFamily = 'Inter'; 
    navInstagram.append(h3navInstagram);
nav.append(navInstagram);

const navGallery = document.createElement('div');
navGallery.setAttribute('id', 'nvGallery');
navGallery.style.display = 'flex';
navGallery.style.position = 'absolute';
navGallery.style.right = '151px';
navGallery.style.top = '20px';
navGallery.style.color = 'white';
navGallery.style.fontSize = '16px';
let h3navGallery = document.createElement('h3');
    h3navGallery.innerText = 'GALLERY';
    h3navGallery.style.fontFamily = 'Inter'; 
    h3navGallery.style.fontWeight = '400';
    navGallery.append(h3navGallery);
nav.append(navGallery);

const navContact = document.createElement('div');
navContact.setAttribute('id', 'nvContact');
navContact.style.display = 'flex';
navContact.style.position = 'absolute';
navContact.style.right = '23px';
navContact.style.top = '20px';
navContact.style.color = 'white';
navContact.style.fontSize = '16px';
let h3navContact = document.createElement('h3');
    h3navContact.innerText = 'CONTACT';
    h3navContact.style.fontFamily = 'Inter'; 
    h3navContact.style.fontWeight = '400';
    navContact.append(h3navContact);
nav.append(navContact);

// PICS
//
// LAYERS

// pic 3 the bottom - the moon 

// figma pic
/* let img3 = document.createElement('img');
img3.src = '/Users/imju2q/Workspace/portfolio-js.github.io/img/cloudyMoon.png';
img3.style.display = 'flex';
img3.style.position = 'absolute';
img3.style.transform = 'rotate(20deg)';  
img3.style.left = '670px';
img3.style.height = '440px';
img3.style.width = '312px';
img3.style.top = '276px';
document.body.appendChild(img3);
*/

let img3 = document.createElement('img');
img3.src = '/Users/imju2q/Workspace/portfolio-js.github.io/img/Snitch.png';
img3.style.display = 'flex';
img3.style.position = 'absolute';
img3.style.transform = 'rotate(30deg)';  
img3.style.left = '670px';
img3.style.height = '440px';
img3.style.width = '312px';
img3.style.top = '276px';
document.body.appendChild(img3);



// pic 2 the middle - snitch 
/*
let img2 = document.createElement('img');
img2.src = "/Users/imju2q/Workspace/portfolio-js.github.io/img/Snitch.png";
img2.style.display = 'flex';
img2.style.position = 'absolute';
img2.style.transform = 'rotate(10deg)';  
img2.style.left = '670px';
img2.style.height = '440px';
img2.style.width = '312px';
img2.style.top = '276px';
document.body.appendChild(img2);
*/

let img2 = document.createElement('img');
img2.src = "/Users/imju2q/Workspace/portfolio-js.github.io/img/violetLandscape.png";
img2.style.display = 'flex';
img2.style.position = 'absolute';
img2.style.transform = 'rotate(15deg)';  
img2.style.left = '670px';
img2.style.height = '440px';
img2.style.width = '312px';
img2.style.top = '276px';
document.body.appendChild(img2);

// pic 1 top - fire

let img1 = document.createElement('img');
img1.src = "/Users/imju2q/Workspace/portfolio-js.github.io/img/fire.png";
img1.style.display = 'flex';
img1.style.position = 'absolute';
img1.style.left = '670px';
img1.style.height = '440px';
img1.style.width = '312px';
img1.style.top = '276px';
document.body.appendChild(img1);

/* did not work

const img = document.querySelectorAll("img"); 
function createPic1 () {
    for (let i = 0; i < img.length; i++) {
        let picElement1 = document.createElement('img');
        picElement1.setAttribute('src', 'img/cloudyMoon.png');
        picElement1.setAttribute('id', 'cloudyMoon');
        document.appendChild(picElement1);
    };
};
*/

// INTRO INFO
// 
// YULIA

const hello = document.createElement('div');
hello.setAttribute('id', 'Hello');
hello.style.display = 'flex';
hello.style.position = 'absolute';
hello.style.left = '170px';
hello.style.top = '328px';
//hello.style.width = '652px';
//hello.style.height = '144px';
hello.style.color = 'white';
hello.style.fontSize = '50px';
let h1Hello = document.createElement('h1');
    h1Hello.innerText = 'HELLO, I’M';
    h1Hello.style.fontFamily = 'Poiret One'; 
    hello.append(h1Hello);
ourBody.append(hello);

const yulia = document.createElement('div');
yulia.setAttribute('id', 'Yulia');
yulia.style.display = 'flex';
yulia.style.position = 'absolute';
yulia.style.top = '456px';
yulia.style.left = '616px';
yulia.style.color = 'white';
yulia.style.fontSize = '50px';
let h1yulia = document.createElement('h1');
    h1yulia.innerText = 'YULIA';
    h1yulia.style.fontFamily = 'Poiret One'; 
    yulia.append(h1yulia);
ourBody.append(yulia);

const tsernant = document.createElement('div');
tsernant.setAttribute('id', 'Tsernant');
tsernant.style.display = 'flex';
tsernant.style.position = 'absolute';
tsernant.style.top = '584px';
tsernant.style.left = '352px';
tsernant.style.color = 'white';
tsernant.style.fontSize = '50px';
let h1tsernant = document.createElement('h1');
    h1tsernant.innerText = 'TSERNANT';
    tsernant.style.fontFamily = 'Poiret One'; 
    tsernant.append(h1tsernant);
ourBody.append(tsernant);

const frontDev = document.createElement('div');
frontDev.setAttribute('id', 'FrontDev');
frontDev.style.display = 'flex';
frontDev.style.position = 'absolute';
frontDev.style.top = '800px';
frontDev.style.left = '541px';
//frontDev.style.width = '184px';
frontDev.style.height = '24px';
frontDev.style.color = '#b8b8b8';
frontDev.style.fontSize = '20px';
let h3frontDev = document.createElement('h3');
    h3frontDev.innerText = 'FRONTEND DEVELOPER';
    frontDev.style.fontFamily = 'Poiret One'; 
    frontDev.append(h3frontDev);
ourBody.append(frontDev);



// CODING   
// 
// ART
const coding = document.createElement('div');
coding.setAttribute('id', 'Coding');
coding.style.display = 'flex';
coding.style.position = 'absolute';
coding.style.left = '24px';
//coding.style.width = '480px';
coding.style.top = '976px';
//coding.style.height = '112px';
coding.style.color = 'white';
coding.style.fontSize = '50px';
let h2coding = document.createElement('h2');
    h2coding.innerText = 'CODING';
    coding.style.fontFamily = 'Lato'; 
    coding.append(h2coding);
ourBody.append(coding);


const art = document.createElement('div');
art.setAttribute('id', 'Art');
art.style.display = 'flex';
art.style.position = 'absolute';
art.style.left = '332px';
art.style.top = '1060px';
//art.style.width = '480px';
//art.style.height = '112px';
art.style.color = 'white';
art.style.fontSize = '50px';
let h2art = document.createElement('h2');
    h2art.innerText = 'ART';
    art.style.fontFamily = 'Lato'; 
    art.append(h2art);
ourBody.append(art);

const createdUsing = document.createElement('div');
createdUsing.setAttribute('id', 'createdUsingCode');
createdUsing.style.display = 'flex';
createdUsing.style.position = 'absolute';
createdUsing.style.left = '265px';
createdUsing.style.top = '1160px';
//createdUsing.style.width = '480px';
//createdUsing.style.height = '112px';
createdUsing.style.color = '#b8b8b8';
createdUsing.style.fontSize = '50px';
let h3createdUsing = document.createElement('h3');
    h3createdUsing.innerText = 'CREATED USING CODE ONLY';
    createdUsing.style.fontFamily = 'Poiret One'; 
    createdUsing.append(h3createdUsing);
ourBody.append(createdUsing);


