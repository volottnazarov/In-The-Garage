const selectEl = document.querySelector(".mySelect");
const inputElem = document.querySelector('.input');

selectEl.addEventListener("change", () => {
    const valueEl = selectEl.value;
    switch (valueEl) {
        case "gosNumber":
            let inputEl = document.querySelector('.inputPlace');
            let inputButtonEl = document.querySelector('.inputButton');
            let param;
            let gosNumber = "gosNumber";
            inputEl.placeholder = "6002 (пример)";
            inputEl.style.display = 'block';
            inputButtonEl.style.display = 'block';
            inputButtonEl.onclick = function() {
                param = inputEl.value;
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
            inputInvEl.placeholder = "000234 (пример)";
            inputInvEl.style.display = 'block';
            inputButtonInvEl.style.display = 'block';
            inputButtonInvEl.onclick = function() {
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
            inputGarageEl.placeholder = "От 1 до 5";
            inputGarageEl.style.display = 'block';
            inputButtonGarageEl.style.display = 'block';
            inputButtonGarageEl.onclick = function() {
                paramGarage = inputGarageEl.value;
                if(paramGarage <= 5 || paramGarage == "ангар"){
                    viewResult(paramGarage, garageNumber);
                }else{
                    alert("Всего 40 гаражей!")
                }
            }
            break;
        default:
            break;
    }
});

function viewResult(params, category) {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    garageData.forEach((auto) => {
        console.log(params, auto[category]);
        if (params === "" || auto[category] === +params || auto[category] == params) {
            const modelItem = document.createElement('li');
            modelItem.textContent = `Модель: ${auto.model}`;
            const gosItem = document.createElement('li');
            gosItem.textContent = `Гос. номер: ${auto.gosNumber}`;
            const invItem = document.createElement('li');
            invItem.textContent = `Инв. номер: ${auto.invNumber}`;
            const vinItem = document.createElement('li');
            vinItem.textContent = `VIN номер: ${auto.vinNumber}`;
            const releaseItem = document.createElement('li');
            releaseItem.textContent = `Год выпуска: ${auto.release}`;
            const garageItem = document.createElement('li');
            garageItem.textContent = `Номер гаража: ${auto.garageNumber}`;
            const serviceItem = document.createElement('li');
            serviceItem.textContent = `Служба: ${auto.service}`;
            const endItem = document.createElement('li');
            endItem.textContent = "***************************";
            resultList.append(modelItem, gosItem, invItem, vinItem, releaseItem, garageItem, serviceItem, endItem);
        }
    });
    if(resultList.innerHTML === ""){
        alert("Ошибка! Не найдено, проверьте вводимые данные!");
    }
}