// //1. get all elements on the page you will be working with.

// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const output = document.getElementById('output');
// const addBtn = document.getElementById('add')


// //2. create your event handler (which is just a function)

// const add = (e) => { output.innerHTML = Number(input1.value) + Number(input2.value) }

// //3. attach event handler to the element you want to preform the action

// addBtn.addEventListener('click', add)


const add = (e) => { output.innerHTML = Number(input1.value) + Number(input2.value) };
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output = document.getElementById('output');
const addBtn = document.getElementById('add').addEventListener('click', add);



// Global Variable:
let globalSentence = 'This is a sentence.';
console.log(globalSentence);

const myFunction1 = () => {
    globalSentence = 'Put different text in there.';
    let localSentence = 'This is a local sentence.';
    console.log(localSentence);
}

myFunction1();
console.log(globalSentence);

//

// Local Variable:

const subtract = () => {
    // Retrieve two inputs:
    const sub1 = Number(document.getElementById('input1').value);
    const sub2 = Number(document.getElementById('input2').value);
    // Subtract them:
    const difference = sub1 - sub2;
    // Display the result:
    document.getElementById('output').innerHTML = difference
}   

document.getElementById('subtract').addEventListener('click', subtract);