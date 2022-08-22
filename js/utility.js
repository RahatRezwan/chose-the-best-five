//get value of an element
function getElementsValueUsingId(elementId) {
    const element = document.getElementById(elementId);
    console.log(element.value);
    const elementValue = parseInt(element.value);
    element.value = "";
    return elementValue;
}

//get inner text of an element
function getInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    return element;
}

//get inner text of an element and convert it into integer
function getInnerTextConvertById(elementId) {
    const element = document.getElementById(elementId);
    const elementInnerTextToInt = parseInt(element.innerText);
    return elementInnerTextToInt;
}
