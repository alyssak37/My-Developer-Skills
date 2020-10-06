// Cache Element References 
const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
// Event Listeners
button.addEventListener('click', handleClick);
ul.addEventListener('click', handleAddBgColor);


// Functions

function handleAddBgColor(evt){
const element = evt.target;
if(element.tagName = 'LI'){
element.style.backgroundColor = 'yellow';
}
}

function handleClick(evt){
    // we need to create a piece of UI to hold a user's comment
    //console.log('this: ', this.textContent);
    //console.log('evt.target:', evt.target.textContent);
    const li = document.createElement('li');
    // we aasign the text value from the input tag to the li textContent property
    if (input.value) {
        li.textContent = input.value;
        ul.appendChild(li);
    } else {
        return;
    }
    // we need to add the li tag to the DOM
   
    // we need to reset the input element after submission
    input.value = '';
};