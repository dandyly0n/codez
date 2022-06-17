// create event handler for all submit buttons (one).
// e.target is similar to saying document.getElementByID()
const submitHandler = (e) => {
    e.preventDefault()
    const form = e.target;
    const errorMessages = e.target.previousElementSibling;
    errorMessages.innerHTML = "<ul></ul>";
    const errorList = errorMessages.getElementsByTagName('ul')[0];
    for (const element of form.elements) {
        if (element.classList.contains('required')) {
            if (!isRequired(element.value.trim())) {
                errorList.appendChild(createErrorNode(`${element.name} is required.`));
            }
        }
    }
    if (!errorList.innerHTML) {
        //form.submit()
        console.log('valid form!');
    }
};

const createErrorNode = (message) => {
    const element = document.createElement('li');
    element.innerHTML = message;
    return element;
}

const initializeValidation = () => {
    const forms = document.getElementsByTagName('form');
    for (const form of forms) {
        form.addEventListener('submit', submitHandler);
    }
}

initializeValidation();