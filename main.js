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

function setDisplayAndPosition (element) {
    element.style.display = 'flex';
    element.style.position = 'absolute';
};

// NAV
//
// BAR
function setNavProps (element) {
    element.style.top = '19.5px';
    element.style.color = 'white';
    element.style.fontSize = '16px';
    element.style.fontFamily = 'Lato';
    element.style.fontWeight = '400'; 
    setDisplayAndPosition(element);
};

const navYulia = document.createElement('div');
navYulia.setAttribute('id', 'nvYulia');
setNavProps(navYulia);
navYulia.style.left = '24px';
let h3navYulia = document.createElement('h3');
    h3navYulia.innerText = 'YULIA TSERNANT';
    navYulia.append(h3navYulia);
nav.append(navYulia);

const navInstagram = document.createElement('div');
navInstagram.setAttribute('id', 'nvInstagram');
setNavProps(navInstagram);
navInstagram.style.right = '271px';
let h3navInstagram = document.createElement('h3');
    h3navInstagram.innerText = 'INSTAGRAM';
    navInstagram.append(h3navInstagram);
nav.append(navInstagram);

const navGallery = document.createElement('div');
navGallery.setAttribute('id', 'nvGallery');
setNavProps(navGallery);
navGallery.style.right = '151px';
let h3navGallery = document.createElement('h3');
    h3navGallery.innerText = 'GALLERY';
    navGallery.append(h3navGallery);
nav.append(navGallery);

const navContact = document.createElement('div');
navContact.setAttribute('id', 'nvContact');
setNavProps(navContact);
navContact.style.right = '23px';
let h3navContact = document.createElement('h3');
    h3navContact.innerText = 'CONTACT';
    navContact.append(h3navContact);
nav.append(navContact);

// PICS
//
// LAYERS

function imgProps (element, imgDeg) {
    element.style.left = '670px';
    element.style.height = '440px';
    element.style.width = '312px';
    element.style.top = '260px';
    element.style.transform = `rotate(${imgDeg}deg)`; 
    document.body.appendChild(element);
    setDisplayAndPosition(element);
};

// pic 3 the bottom - the moon 
let img3 = document.createElement('img');
img3.src = 'img/Snitch.png';
imgProps(img3, 30);


// pic 2 the middle - snitch
let img2 = document.createElement('img');
img2.src = "img/violetLandscape.png"
imgProps(img2, 15);

// pic 1 top - fire
let img1 = document.createElement('img');
img1.src = "img/fire.png";
imgProps(img1, 0);

// INTRO INFO
// 
// YULIA

function setProps (element, elementTop, elementLeft) {
    setDisplayAndPosition (element);
    element.style.color = 'white';
    element.style.fontSize = '50px';
    element.style.fontFamily = 'Poiret One'; 
    element.style.left = elementLeft;
    element.style.top = elementTop;
    document.body.appendChild(element);
};

const hello = document.createElement('div');
    hello.setAttribute('id', 'Hello');
    setProps(hello, '295px', '170px');
const h1Hello = document.createElement('h1');
    h1Hello.innerText = 'HELLO, I’M';
    h1Hello.style.fontFamily = 'Poiret One'; 
    hello.append(h1Hello);

const yulia = document.createElement('div');
    yulia.setAttribute('id', 'Yulia');
    setProps (yulia, '410px', '616px');
const h1yulia = document.createElement('h1');
    h1yulia.innerText = 'YULIA';
    h1yulia.style.fontFamily = 'Poiret One'; 
    yulia.append(h1yulia);

const tsernant = document.createElement('div');
    tsernant.setAttribute('id', 'Tsernant');
    setProps (tsernant, '524px', '352px');
const h1tsernant = document.createElement('h1');
    h1tsernant.innerText = 'TSERNANT';
    tsernant.style.fontFamily = 'Poiret One'; 
    tsernant.append(h1tsernant);

const frontDev = document.createElement('div');
    frontDev.setAttribute('id', 'FrontDev');
    setDisplayAndPosition(frontDev);
    frontDev.style.top = '770px';
    frontDev.style.left = '541px';
    frontDev.style.height = '24px';
    frontDev.style.color = '#b8b8b8';
    frontDev.style.fontSize = '20px';
const h3frontDev = document.createElement('h3');
    h3frontDev.innerText = 'FRONTEND DEVELOPER';
    frontDev.style.fontFamily = 'Poiret One'; 
    frontDev.append(h3frontDev);
ourBody.append(frontDev);



// CODING   
// 
// ART

function codiangArtInfo (element, elementLeft, elementTop)  {
    element.style.fontFamily = 'Lato'; 
    element.style.color = 'white';
    element.style.left = elementLeft;
    element.style.top = elementTop;
};

const coding = document.createElement('div');
coding.setAttribute('id', 'Coding');
setDisplayAndPosition(coding);
codiangArtInfo (coding, '24px', '926px');
let h2coding = document.createElement('h2');
    h2coding.innerText = 'CODING';
    coding .style.fontSize = '70px';
    coding.append(h2coding);
ourBody.append(coding);

const art = document.createElement('div');
art.setAttribute('id', 'Art');
setDisplayAndPosition(art);
codiangArtInfo(art, '415px', '1025px');
let h2art = document.createElement('h2');
    h2art.innerText = 'ART';
    art.style.fontSize = '70px';
    art.append(h2art);
ourBody.append(art);

const createdUsing = document.createElement('div');
createdUsing.setAttribute('id', 'createdUsingCode');
setDisplayAndPosition(createdUsing);
createdUsing.style.left = '265px';
createdUsing.style.top = '1140px';
createdUsing.style.color = '#b8b8b8';
let h3createdUsing = document.createElement('h3');
    h3createdUsing.innerText = 'CREATED USING CODE ONLY';
    createdUsing.style.fontFamily = 'Poiret One'; 
    createdUsing.style.fontSize = '40px';
    createdUsing.append(h3createdUsing);
ourBody.append(createdUsing);

// PHOTO 
// 
// DISPLAY

function photoDisplayProps (element) {
    element.style.top = '1238px';
    element.style.width = '264px';
    element.style.height = '276px';
    document.body.appendChild(element);
    setDisplayAndPosition(element);
};

let downImg4 = document.createElement('img');
downImg4.src = 'img/violetLandscape.png';
downImg4.style.left = '952px';
photoDisplayProps(downImg4);

let downImg3 = document.createElement('img');
downImg3.src = 'img/Snitch.png';
downImg3.style.left = '648px';
photoDisplayProps(downImg3);

let downImg2 = document.createElement('img');
downImg2.src = 'img/cloudyMoon.png';
downImg2.style.left = '344px';
photoDisplayProps(downImg2);

let downImg1 = document.createElement('img');
downImg1.src = 'img/fire.png';
downImg1.style.left = '40px';
photoDisplayProps(downImg1);

// INFO
// UNDER
// PHOTOS

function propsUnderPhoto (element, elementTop, elementColor, elementFontSize) {
    element.style.fontFamily = 'Poiret One'; 
    element.style.color = elementColor;
    element.style.top = elementTop;
    element.style.fontSize = elementFontSize;
    document.body.appendChild(element);
    setDisplayAndPosition (element);
};

const seeMore = document.createElement('div');
    seeMore.setAttribute('id', 'SeeMore');
    propsUnderPhoto (seeMore, '1520px', 'white', '20px');
    seeMore.style.left = '196px';
const h1seeMore = document.createElement('h1');
    h1seeMore.innerText = 'SEE MORE ON CODE PEN';
    seeMore.append(h1seeMore);

const work = document.createElement('div');
    work.setAttribute('id', 'Work');
    propsUnderPhoto (work, '1530px', 'white', '60px');
    work.style.right = '24px';
const h1work = document.createElement('h1');
    h1work.innerText = 'WORK';
    work.append(h1work);

const experience = document.createElement('div');
    experience.setAttribute('id', 'Experience');
    propsUnderPhoto (experience, '1640px', '#b8b8b8', '60px');
    experience.style.right = '24px';
const h1experience = document.createElement('h1');
    h1experience.innerText = 'EXPERIENCE';
    experience.append(h1experience);   

// 
// ACCORDION
//

function accordionStyle (element)  {
    element.style.display = 'flex';
    element.style.position = 'relative';
    element.style.justifyContent = 'space-between';
    element.style.fontFamily = 'Poiret One'; 
    element.style.fontSize = '20px'
    element.setAttribute('class', 'accordionItemHeading');
    element.style.color = 'white';
    element.style.borderTop = 'thin solid white'
    document.body.appendChild(element);
};

const experienceAcc = {
    1: {
        title: 'O1   FRONTEND DEVELOPER AT IBM',
        year: '2021',
        paragraph: 'par1'
    },
    2: {
        title: 'O2 COMMUNITY ENGINEER AT ANAPLAN',
        year: '2020',
        paragraph: 'par2'
    },
    3: {
        title: 'O3   SOFTWARE ENGINEERING INSTRUCTOR AT GENERAL ASSEMBLY',
        year: '2020',
        paragraph: 'par3'
    }
};

function hideOrExpandAccord (p, pizza) {
    console.log('here')
    if (p.textContent === '') {
        p.textContent = experienceAcc[pizza].paragraph;
    } else {
        p.textContent = '';
    };
};

for (const key in experienceAcc) {
//    console.log(`${key}: ${experienceAcc[key].title}`);
    let acc = document.createElement('div');
    acc.setAttribute('class', 'accordionDiv');
    ourBody.append(acc)
    let accHeading = document.createElement('div');
    accHeading.setAttribute('class', 'accordionItemHeading');
    accordionStyle (accHeading);
    acc.append(accHeading);
    let title = document.createElement('h2');
    title.textContent = experienceAcc[key].title;
    accHeading.append(title);
    let year = document.createElement('h2');
    year.textContent = experienceAcc[key].year;
    accHeading.append(year);
    let paragraph = document.createElement('p');
    acc.append(paragraph);
    accHeading.addEventListener('click', () => hideOrExpandAccord (paragraph, key)); 
};  
