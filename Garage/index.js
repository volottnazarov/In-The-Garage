const selectEl = document.querySelector(".mySelect");
const inputElem = document.querySelector('.input');
let resultList = document.getElementById('resultList');
let resultEl = document.querySelector('.result');
resultList.innerHTML = "";

selectEl.addEventListener('mouseover', () => {
    if (!sessionStorage.getItem('reload')) {
        sessionStorage.setItem('reload', 1);
        window.location.reload(true);
    }
})

selectEl.addEventListener("change", () => {
    let valueEl = selectEl.value;
    switch (valueEl) {
        case "gosNumber":
            let inputEl = document.querySelector('.inputPlace');
            let inputButtonEl = document.querySelector('.inputButton');
            let param;
            let gosNumber = "gosNumber";
            inputEl.placeholder = "Например: 5810";
            inputEl.style.display = 'block';
            inputButtonEl.style.display = 'block';

            inputButtonEl.onclick = function() {
                resultList.innerHTML = "";
                param = inputEl.value;
                console.log(param, '  первое значение');
                if(param.length === 4 || param === ""){
                    viewResult(param, gosNumber);
                }else{
                    alert("Гос. номер должен состоять из 4 цифр!")
                }
            }
            break;
        case "invNumber":
            let inputInvEl = document.querySelector('.inputPlace');
            let inputButtonInvEl = document.querySelector('.inputButton');
            let paramInv;
            let invNumber = "invNumber";
            inputInvEl.placeholder = "Например: 00234";
            inputInvEl.style.display = 'block';
            inputButtonInvEl.style.display = 'block';
            inputButtonInvEl.onclick = function() {
                resultList.innerHTML = "";
                paramInv = inputInvEl.value;
                if(paramInv.length === 5 || paramInv.length === 4 || paramInv === ""){
                    viewResult(paramInv, invNumber);
                }else{
                    alert("Инв. номер должен состоять из 4-5 символов!")
                }
            }
            break;
        case "vinNumber":
            let inputVinEl = document.querySelector('.inputPlace');
            let inputButtonVinEl = document.querySelector('.inputButton');
            let paramVin;
            let vinNumber = "vinNumber";
            inputVinEl.placeholder = "17 знаков!";
            inputVinEl.style.display = 'block';
            inputButtonVinEl.style.display = 'block';
            inputButtonVinEl.onclick = function() {
                resultList.innerHTML = "";
                paramVin = inputVinEl.value;
                if(paramVin.length === 17 || paramVin === ""){
                    viewResult(paramVin, vinNumber);
                }else{
                    alert("VIN номер должен состоять из 17 символов!")
                }
            }
            break;
        case "garageNumber":
            let inputGarageEl = document.querySelector('.inputPlace');
            let inputButtonGarageEl = document.querySelector('.inputButton');
            let paramGarage;
            let garageNumber = "garageNumber";
            inputGarageEl.placeholder = 'От 1 до 41 или "ангар"';
            inputGarageEl.style.display = 'block';
            inputButtonGarageEl.style.display = 'block';
            inputButtonGarageEl.onclick = function() {
                resultList.innerHTML = "";
                paramGarage = inputGarageEl.value;
                if(paramGarage <= 41 || paramGarage == "ангар"){
                    viewResult(paramGarage, garageNumber);
                }else{
                    alert("Всего 41 гараж!")
                }
            }
            break;
        default:
            break;
    }
    valueEl.value = '';
});

function viewResult(params, category) {


    garageData.forEach((auto) => {
        console.log(params, auto[category]);
        if (params === "" || auto[category] === +params || auto[category] == params) {
            const modelItem = document.createElement('li');
            modelItem.textContent = `Модель: ${auto.model}`;
            const gosItem = document.createElement('li');
            gosItem.style.color = 'red';
            gosItem.textContent = `Гос. номер: ${auto.gosNumber}`;
            const invItem = document.createElement('li');
            invItem.textContent = `Инв. номер: ${auto.invNumber}`;
            const vinItem = document.createElement('li');
            vinItem.textContent = `VIN номер: ${auto.vinNumber}`;
            const releaseItem = document.createElement('li');
            releaseItem.textContent = `Год выпуска: ${auto.release}`;
            const garageItem = document.createElement('li');
            garageItem.style.color = 'red';
            garageItem.textContent = `Номер гаража: ${auto.garageNumber}`;
            const serviceItem = document.createElement('li');
            serviceItem.textContent = `Служба: ${auto.service}`;
            const endItem = document.createElement('li');
            endItem.textContent = "***************************";
            resultEl.classList.remove('result');
            resultEl.classList.add('resultAfter');
            resultList.append(modelItem, gosItem, invItem, vinItem, releaseItem, garageItem, serviceItem, endItem);
        }
    });
    if(resultList.innerHTML === ""){
        alert("Ошибка! Не найдено, проверьте вводимые данные!");
    }
}