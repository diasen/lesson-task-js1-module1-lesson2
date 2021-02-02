//q1 Select the `h3` element and change its value to `Hello` instead of `Welcome`.
const changeHeading = document.querySelector("h3");
changeHeading.innerHTML = " Hello";

//q2 Select all the `h4` elements on the page and change their `margin-bottom` style to `-20px`.
const changeMargin = document.querySelectorAll("h4");
for (let i = 0; i < changeMargin.length; i++) {
  changeMargin[i].style.marginBottom = "-20px";
}

//q3 Set the background colour of the second `h4` element to `red`.
const changeColor = document.querySelector(".two");
changeColor.style.backgroundColor = "red";

//q4 Set the font size of the first paragraph element on the page to `24px` and its color to `blue`.
const styleP = document.querySelector("p");
styleP.style.fontSize = "24px";
styleP.style.color = "Blue";

//q5 Add `span` tags around the content of the third paragraph element on the page.
const addSpan = document.querySelector(".section three");
maineE.innerHTML += `
<p class="section three">Three: Nunc a quam tincidnt</p>
`;
