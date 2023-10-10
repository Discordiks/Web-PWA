document.addEventListener('DOMContentLoaded', function () {
    // получение элементов по их Id
    const height_elem = document.getElementById('height')
    const weight_elem = document.getElementById('weight')
    const output_elem = document.getElementById('output')
    const btn_elem = document.getElementById('btn')

    btn_elem.addEventListener('click', function () {

        let h = +height_elem.value
        let w = +weight_elem.value
        //проверка на то, что пользователь ввёл действительно число и именно положительное
        if (h === null || w === null || h === "" || w === "" || !isFinite(h) || !isFinite(w) || h <= 0 || w < 0) {
            let imt = 0
            output_elem.value = imt.toFixed(2)
        }
        else {
            let h_new = h / 100
            // расчет ИМТ по формуле
            let imt = w / (h_new * h_new)
            // получение значений введеных пользователем
            // запись ответа в поле ответа, с округлением до 2 знаков
            output_elem.value = imt.toFixed(2)
        }
    })
    // регистрация serviceWorker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registred', registration)
            })
            .catch(error => {
                console.log('SW failed', error)
            })
    }

})
