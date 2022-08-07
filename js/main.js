let form = document.querySelector(".js-form");
let input = document.querySelector(".js-input");
let piyoda = 3.6;
let velosiped = 20.1;
let mashina = 70;
let poyezd = 800;
let resultPiyoda = document.querySelector(".js-result");
let resultVelosiped = document.querySelector(".js-result2");
let resultMashina = document.querySelector(".js-result3");
let resultPoyezd = document.querySelector(".js-result4");


function checkSpeed(masofa, tezlik) {

    let soat = Math.floor(masofa / tezlik);
    let minut = Math.floor((masofa / tezlik - soat) * 60);
    if (soat == 0) {
        return `${minut} minut`;
    } else {
        return `${soat} soat, ${minut} minut`;
    } 
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let inputVal = input.value;
    resultPiyoda.textContent = checkSpeed(inputVal, piyoda)
    resultVelosiped.textContent = checkSpeed(inputVal, velosiped)
    resultMashina.textContent = checkSpeed(inputVal, mashina)
    resultPoyezd.textContent = checkSpeed(inputVal, poyezd)
});



//  2-Vazifa 

// let elForm = document.querySelector(".js-form");
// let elInput = document.querySelector(".js-input");
// let elResult = document.querySelector(".result");
// let elCheck = document.querySelector(".js-rain");
// let elCheck2 = document.querySelector(".js-gym");

// let minGR = 10;
// let maxGR = 20;

// elForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let inputVal = elInput.value;

//     elResult.textContent = may(inputVal);
// });

// function may(gradus) {
//     if (gradus == "" && elCheck.checked && elCheck2.checked) {
//         return `Iltimos gradusni kiriting`
//     } 
//     else if (gradus >= minGR && gradus <= maxGR && elCheck2.checked && elCheck.checked) {
//         return `Sport Zalda yugurishiz mumkun`
//     }
//     else if (gradus >= minGR && gradus <= maxGR && elCheck.checked) {
//         return `Mumkun emas, yomgir kochada`;
//     }
//     else if (gradus >= minGR && gradus <= maxGR) {
//         return `Mumkun borin yugurishga`;
//     }
//     else if (gradus >= minGR && gradus <= maxGR) {
//         return `Mumkun kochada ham yugurishiz mumkum`;
//     }
//     else {
//         return `Mumkun emas`
//     }
// }

