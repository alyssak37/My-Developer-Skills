//selecting Dom elements - first step in making web pages interactive


// selecting and caching an element reference
//grabs first matching element
// if no match, it returns null

// using getElementById
const titleEl = document.getElementById('title');


//using querySelector
// give it any value: class, id , etc

const titleEl2 = document.querySelector('.main-title');


//using querySelector to select 'p' element by class name
const pEl = document.querySelector('.cool');


// using innerHTML to change the html content of an element 
pEl.innerHTML = 'Comments for <strong>Today</strong>';

// using textContent to change the text content
//pEl.textContent = 'Comments for <strong>Today</strong>';

// changing the style of an element
// we use the element's style property to change style
titleEl.style.textAlign = 'center';
pEl.style.color = 'pink';

// select the a tag and change it's href attribute 

const aEl = document.querySelector('a');
aEl.setAttribute( 'href',  'https://www.google.com');



// how to select multiple elements at onceusing JS

// getElementsByTagName
//console.log(document.getElementsByTagName('li'));

// getElementByClassname
const liEls1 = document.getElementsByTagName('comment');


// the recommended approach with querySelectorAll
const liEls2 = document.querySelectorAll('li');