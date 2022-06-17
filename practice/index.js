
/**
 * HTML: 
 * 1.To make a button
 * 2. To make two inputs
 * 3. To make an output.
 * 
 * JS:
 * When button is clicked (adding eventlistener/handler)
 *  perform function (make add function)
 *         add input 1 and input 2
 *  return result in output (return)
 * 
 * 
 * */

//1. get all elements on the page you will be working with.

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output = document.getElementById('output');

const addBtn = document.getElementById('add')


//2. create your event handler (which is just a function)

//(e) => { output.innerHTML = input1 + input2 }

//3. attach event handler to the element you want to preform the action

addBtn.addEventListener('click', (e) => {
    output.innerHTML = input1 + input2;
})

