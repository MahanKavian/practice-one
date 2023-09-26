let accordionItemElms = document.querySelectorAll('.accordion__item');

let state = {
    textIsOpen: ''
}

function setClassData(item, items, condition, customClass) {
    for (let helperItem of items) {
        if (helperItem.getAttribute(condition) !== state.textIsOpen) {
            helperItem.classList.remove(customClass);
        } else {
            item.classList.toggle(customClass);
        }
    }
}

function toggleAccordionHandler() {
    let textElms = this.parentNode.querySelectorAll('.accordion__body');
    let iconElms = this.parentNode.querySelectorAll('.fa-solid');

    let accordionHeader = this.querySelector('.accordion__header');
    let iconElm = this.querySelector('.fa-solid');

    for (let textElm of textElms) {
        if (accordionHeader.getAttribute('data-text-id') === textElm.getAttribute('id')) {
            iconElm.setAttribute('data-rotate', textElm.getAttribute('id'));
            state.textIsOpen = textElm.getAttribute('id');

            setClassData(textElm, textElms, 'id', 'accordion__body--toggle-height');
            setClassData(iconElm, iconElms, 'data-rotate', 'fa-solid--rotate');
        }
    }
}

function start() {
    for (let accordionItemElm of accordionItemElms) {
        accordionItemElm.addEventListener('click', toggleAccordionHandler);
    }
}

document.addEventListener('DOMContentLoaded', start);