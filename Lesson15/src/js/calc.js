export default function calc() {

    /**
     * testing addEventListenerMulti
     * @param {*} elem 
     * @param {*} events 
     * @param {*} func 
     */
    let addEventListenerMulti = (elem, events, func) => {
        events.split(' ').forEach(e => elem.addEventListener(e, func, false));
    }

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.querySelector('#select'),
        total = document.querySelector('#total'),
        personsVal = 0,
        restDaysVal = 0,
        placeVal = +place.options[place.selectedIndex].value;

    let totalVal = () => {
        if (persons.value != '' && restDays.value != '') {
            return 4000 * (personsVal + restDaysVal) * placeVal;
        } else {
            return 0;
        }
    };

    let verifyInputNumbers = (elem) => {
        elem.value = elem.value.replace(/[^\d]/g, '');
    };

    persons.addEventListener('input', () => {
        verifyInputNumbers(persons);
        personsVal = +persons.value;
        total.innerText = totalVal();
    });

    restDays.addEventListener('input', () => {
        verifyInputNumbers(restDays);
        restDaysVal = +restDays.value;
        total.innerText = totalVal();
    });

    addEventListenerMulti(place, 'change click', () => {
        placeVal = +place.options[place.selectedIndex].value;
        total.innerText = totalVal();
    });
}