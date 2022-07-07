let numOfVisits = document.querySelector('.daysOfVisit');

let numOfVisits1 = Number(window.localStorage.getItem('visits'));
let lastVisits= Number(window.localStorage.getItem('lastVisits'));

const NUMS = 1000 * 60 * 60 * 24;

let daysAmong = Date.now() - lastVisits;

let numOfDays = Math.ceil(daysAmong / NUMS);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits1 != 0) {

    numOfVisits.textContent = 'Has estado aqui hace ' + numOfDays + ' dia(s)'
} else {
    numOfVisits.textContent = 'Esta es tu primer visita.'
}

numOfVisits1++;
localStorage.setItem("visits", numOfVisits1);

document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()