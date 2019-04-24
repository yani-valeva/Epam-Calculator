let addBtn = document.getElementById('add-btn');
let newNum = document.getElementById('new-num');
let numsContainer = document.getElementById('added-nums-container');
let sumElem = document.getElementById('sum');
let isOdd = false;

addBtn.addEventListener('click', () => {
    if (newNum.value === '') {
        alert('Enter a number, please!');
        return;
    }

    isOdd = !isOdd;
    let currentElem = document.createElement('div');   
    isOdd ?  currentElem.setAttribute('class', 'current-added-elem odd') : currentElem.setAttribute('class', 'current-added-elem');  
    let addedNum = document.createElement('span');
    let deleteBtn = document.createElement('button');
    deleteBtn.style.all = 'unset';
    deleteBtn.innerText = '(delete)';
    deleteBtn.setAttribute('id', 'delete');
    deleteBtn.setAttribute('class', 'delete-btn'); 
    let textNode = document.createTextNode((+newNum.value).toFixed(2));
    addedNum.appendChild(textNode);
    currentElem.appendChild(addedNum)
    currentElem.appendChild(deleteBtn);
    numsContainer.appendChild(currentElem);
    sumElem.innerText = (+sumElem.innerText + +addedNum.innerText).toFixed(2);

    deleteBtn.addEventListener('click', (event) => {
        const currentDelBtn = event.target;
        sumElem.innerText = (+sumElem.innerText) - (+currentDelBtn.previousSibling.innerText);   
        currentDelBtn.parentNode.parentNode.removeChild(currentDelBtn.parentNode);
        let elements = numsContainer.getElementsByTagName('div');
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute('class');
            i % 2 === 0 ? elements[i].setAttribute('class', 'current-added-elem odd') : elements[i].setAttribute('class', 'current-added-elem');
        }

        isOdd = elements.length % 2 === 0 ?  false : true;
    });
});

newNum.addEventListener('click', () => {
    newNum.value = '';
});

