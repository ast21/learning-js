export default function form() {

    let message = {
        loading: 'Загрузка ...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так ...',
    };

    let form = document.getElementsByTagName('form'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    for (let i = 0; i < form.length; i++) {

        let input = form[i].getElementsByTagName('input');

        form[i].addEventListener('submit', (event) => {
            event.preventDefault();
            form[i].appendChild(statusMessage);


            let postData = (json) => {

                let promise = new Promise((resolve, reject) => {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    request.onreadystatechange = function () {
                        console.log(`${request.readyState} | ${request.status}`);
                        if (request.readyState < 4) {
                            statusMessage.innerHTML = message.loading;
                        } else if (request.readyState == 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };

                    request.send(json);
                });

                return promise;
            };

            let formData = new FormData(form[i]);
            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            postData(json)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(() => setTimeout(() => statusMessage.innerHTML = '', 2000));

            for (let j = 0; j < input.length; j++) {
                input[j].value = '';
            }
        });
    }

    // phone valid
    let input = document.getElementsByName('phone');
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('input', () => {
            input[i].value = input[i].value.replace(/[^\+\d]/g, '');
        });
    }
}