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

// ACCORDION
//
//

// Yulia's hints
//div with border (top)
// display flex 
// flex justify content space between 
// event lister on the whole space 
// hint: append empty div 
// if text exist - 

function accordionStyle (element, color, backColor)  {
    element.style.display = 'flex';
    element.style.position = 'relative';
    element.style.justifyContent = 'space-between';
    element.style.height = '64px';
    element.style.fontFamily = 'Poiret One'; 
    element.style.fontSize = '20px'
    element.setAttribute.className = "accordionItemHeading";
    element.style.color = color;
    element.style.backgroundColor = backColor;
    element.style.borderTop = 'thin solid white'
    document.body.appendChild(element);
};

// what is in common?
// flex
// position
// class
// text style

const accordion1 = document.createElement('div');
accordionStyle (accordion1, 'white', 'black');
accordion1.style.top = '2064px';
const accordion1Text = document.createElement('h2');
    accordion1Text.innerText = 'O1   FRONTEND DEVELOPER AT IBM';
    accordion1Text.style.left = '24px';
    accordion1.append(accordion1Text);
const accordion1Year = document.createElement('h2');
    accordion1Year.innerText = '2021';
    accordion1Year.style.right = '24px';
    accordion1.append(accordion1Year);
const accordionOpen1 = document.createElement('p'); 
    accordionOpen1.setAttribute('id', 'accordionOpen1');
    accordion1.append(accordionOpen1);  

const accordion2 = document.createElement('div');
accordionStyle (accordion2, 'black', 'white');
accordion2.style.top = '2128px';
const accordion2Text = document.createElement('h2');
    accordion2Text.innerText = 'O2 COMMUNITY ENGINEER AT ANAPLAN';
    accordion2.append(accordion2Text);   
const accordion2Year = document.createElement('h2');
    accordion2Year.innerText = '2020';
    accordion2Year.style.right = '24px';
    accordion2.append(accordion2Year);
const accordionOpen2 = document.createElement('p');   
    accordionOpen2.setAttribute('id', 'accordionOpen2');
    accordion2.append(accordionOpen2);    

const accordion3 = document.createElement('div');
accordionStyle (accordion3, 'white', 'black');
accordion3.style.top = '2192px';
const accordion3Text = document.createElement('h2');
    accordion3Text.innerText = 'O3   SOFTWARE ENGINEERING INSTRUCTOR AT GENERAL ASSEMBLY';
    accordion3.append(accordion3Text);  
const accordion3Year = document.createElement('h2');
    accordion3Year.innerText = '2020';
    accordion3Year.style.right = '24px';
    accordion3.append(accordion3Year);     
const accordionOpen3 = document.createElement('p'); 
    accordionOpen3.setAttribute('id', 'accordionOpen3');
    accordion3.append(accordionOpen3);  


/*
Глобально, аккордеон это div на всю длину экрана,  котором есть цифра, заголовок и год.
Так же, в этом div-е есть описание, которое пропадает и появляется при нажатии на div.
Что из этого мы можем сделать?
1. Мы можем сделать div на весь экран и добавить его в дом, где будет аккордеон? 
Это уже неплохое начало.
-done
2. Так же мы можем сделать, чтобы div-а был стиль с добавлением белого border-top 
(мы вроде top решили, я не помню)
-done
3. Теперь ему надо добавить стиль, чтобы на hover он становился белый:
для упрощения, давай сделаем это пока через CSS файл: 
придумаем название класса или id и скажем, 
что на hover фон должен становиться белым.
Посмотри как добавить css hover, если не помнишь.
В CSS файле мы написали класс или id, но элемент пока о нем не знает, 
потому что мы не связали элемент с классом.
4. Вернемся в JS и добавим нашему div-у аттрибут “класс” или “id” с 
тем названием, которое мы придумали в СSS файле.
-done
5. У этого div-а должен быть текст. 
Давай подумаем, можно ли просто записать ему textContent или 
нам в этот div нужно отдельно создать элементы с текстом? 
Не можем мы просто сделать divName.textContent = ‘01 Blahblah 2021’,
потому что “01 Blahblah” и “2021" стоят в разных концах экрана.
Размер экрана мы не можем угадать, чтобы напихать туда пробелов, 
значит расстановкой контента должен заниматься сам div.
-done
6. Для этого, мы добавим ему стиль display: flex. Flex занимается расстановкой 
“детей“, значит давай ему их добавим.:
-done
7. Для этого нам нужно создать два текстовых элемента, например, 
<h4> c контентом “01 Blahblah” и второй с контентом “2021"
-done
8. Так как эти элементы будут детьми div-а, то их нужно в него положить, 
чтобы структура была:
<div>
    <h4>01 Blahblah</h4>
    <h4>2021</h4>
</div> 
-done
9. Flex пока не сделал так, чтобы элементы были расставлены по разным углам, 
для этого нам нужно добавить justify-content: space-between нашему div-у
Теперь самое интересное, надо сделать так, чтобы при клике на div добавлялся 
или исчезал текст с описанием.
-done
10. Опять, начинаем с того, что мы уже знаем. А знаем мы то, что 
это должно происходить на клик:
99.9% это означает, что нам нужно eventListener, который вызывает какую-то 
функцию на клик.
-done
11. К какому элементу мы его добавим? - Ко всему div-у, потому что мы не хотим, 
чтобы пользователю нужно было кликать на какой-то конкретный элемент для того, 
чтобы появился текст. Пользователь должен иметь возможность кликнуть на весь 
заголовок или на год, чтобы увидеть текст. Посмотри или погугли 
how to add an eventListener to an HTML element
-done
12. Функцию, которая будет вызываться на клик нужно назвать,
 чтобы понятно было, что она делает.
Она показывает или скрывает описание на клик.
-done
13. Внутри функции мы хотим проверить есть ли текст на странице или нет, 
но мы пока не создали элемент, где будет отображаться текст.
-done
14. Вероятно, мы хотим, чтобы текст с описанием отображался внутри div-а. 
Давай вернемся к шагу 7, где мы создавали h с текстом и сделаем внутри 
нашего div-а еще один элемент, например, <p>
-done
15. Нужно ли в него добавлять текст? 
- Вероятно нет, потому что мы не хотим, чтобы в нем был текст, пока на него 
не кликнули.
-done
16. Хорошо, у нас есть placeholder элемент, куда мы будем добавлять текст, 
но как наша функция о нем узнает? - у нас есть два решения, либо внутри 
функции искать getElemebtById (и присвоить этому <p> id для упрощения поиска), 
либо при создании этого <p> элемента сохранить его в память JS, то есть 
сохранить его в переменную, как ты сохраняла все созданные элементы до 
этого и просто обращаться к этой переменной.
-done
///////////////////////////////////

17. Я опишу вариант, когда ты сохранила элемент в переменную при создании, 
например const accordeonDesc = document.createElement('p');
Теперь в функции, которая вызывается на клик, мы можем посмотреть 
пустой ли у нее текст контент или нет. Мы не можем сказать 
accordeonDesc.textContent === "Blahblah" потому что там может быть другой текст, 
но мы можем посмотреть, записано ли хоть что-либо в textContent. 
Для этого нам нужно знание структур данных.
мы помним, что в “” пишутся строки и значение textContent это строка. 
У строк и arrays есть возможность посмотреть их “наполненность”

const a = [1,2,3,4];
console.log(a.length) // 4

const s = "Hello Cris";
console.log(s.length) // 10

Давай проверим “наполненность” textContent элемента
18. Теперь давай подумаем что мы хотим сделать
если “наполненность” textContent элемента равна нулю, то мы хотим присвоить 
какой-то текст else (если textContent НЕ равен нулю), то мы хотим текст убрать, 
то есть хотим, чтобы textContent элемента равнялся пустой строке 
(accordeonDesc.textContent = "")
*/

//WIP
//document.getElementsByClassName("accordionItemHeading").addEventListener("click", hideOrExpandAcc); 