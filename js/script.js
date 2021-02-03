//q1 Select the `h3` element and change its value to `Hello` instead of `Welcome`.
const changeHeading = document.querySelector('h3');
changeHeading.innerHTML = ' Hello';

//q2 Select all the `h4` elements on the page and change their `margin-bottom` style to `-20px`.
const changeMargin = document.querySelectorAll('h4');
for (let i = 0; i < changeMargin.length; i++) {
	changeMargin[i].style.marginBottom = '-20px';
}

//q3 Set the background colour of the second `h4` element to `red`.
const changeColor = document.querySelector('.two');
changeColor.style.backgroundColor = 'red';

//q4 Set the font size of the first paragraph element on the page to `24px` and its color to `blue`.
const styleP = document.querySelector('p');
styleP.style.fontSize = '24px';
styleP.style.color = 'Blue';

//q5 Add `span` tags around the content of the third paragraph element on the page.
document.querySelector('.sectionthree').innerHTML = `
    <span>Three: Nunc a quam tincidnt</span>
`;

//q6 Add a new paragraph to the div with a class of `content`. Add the paragraph after the others.
document.querySelector('.content').innerHTML += `
    <p></p>
`;

//q7 Add a new class called `content-item` to each paragraph in the div with a class of `content`.
const pTags = document.querySelectorAll('.content p');
console.log(pTags);

for (let i = 0; i < pTags.length; i++) {
	pTags[i].classList.add('content-item');
}

//q8 Select the `ul` element on the page by its id and add a new list item to the beginning of the list.

let addList = document.getElementById('services');
addList.innerHTML += `
    <li>New list</li>
`;
