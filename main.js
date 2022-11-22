let currencyFrom = 'RUB';
let currencyTo = 'USD';
let valut = document.querySelector('.rate-1');
let valuta = document.querySelector('.rate-2');
let linput = document.querySelector('input.input1');
let rinput = document.querySelector('input.input2');
//значения валюты
fetch(`https://api.exchangerate.host/latest?base=${currencyTo}&symbols=${currencyFrom}`)
  .then(res => res.json())
  .then(data => {
    valut.innerHTML = `1 ${currencyFrom} = ${(1 / data.rates.RUB).toFixed(4)} ${currencyTo}`;
    rinput.value = `${(linput.value / data.rates.RUB).toFixed(4)}`;
    valuta.innerHTML = `1 ${currencyTo} = ${data.rates.RUB.toFixed(4)} ${currencyFrom}`;
    linput.addEventListener('input', function () {
      let resultInput1 = this.value;
      rinput.value = `${(resultInput1 / data.rates.RUB).toFixed(4)}`;
    });
  });


let leftbox = document.querySelectorAll('.switcher-box-1 ');
leftbox.forEach(el => {
  el.addEventListener('click', event => {
    let targetClick = event.target;
    currencyFrom = targetClick.textContent || targetClick.innerText;
    fetch(`https://api.exchangerate.host/latest?base=${currencyTo}&symbols=${currencyFrom}`)
      .then(res => res.json())
      .then(data => {
        const {
          base
        } = data;
        let currencyName = data.rates;
        let currencyValue;
        for (let key in currencyName) {
          currencyValue = currencyName[key];
        }
        valut.innerHTML = `1 ${currencyFrom} = ${(1 / currencyValue).toFixed(4)} ${currencyTo}`;
        rinput.value = `${(linput.value / currencyValue).toFixed(4)}`;
        valuta.innerHTML = `1 ${currencyTo} = ${currencyValue.toFixed(4)} ${currencyFrom}`;
        linput.addEventListener('input', function () {
          let resultInput1 = this.value;
          rinput.value = `${(resultInput1 / currencyValue).toFixed(4)}`;
        });
      });
  });
});

let rightbox = document.querySelectorAll('.switcher-box-2 ');
rightbox.forEach(el => {
  el.addEventListener('click', event => {
    let target = event.target;
    currencyTo = target.textContent || target.innerText;
    fetch(`https://api.exchangerate.host/latest?base=${currencyTo}&symbols=${currencyFrom}`)
      .then(res => res.json())
      .then(data => {
        const {
          base
        } = data;
        let currencyName = data.rates;
        let currencyValue;
        for (let key in currencyName) {
          currencyValue = currencyName[key];
        }
        valut.innerHTML = `1 ${currencyFrom} = ${(1 / currencyValue).toFixed(4)} ${currencyTo}`;
        rinput.value = `${(linput.value / currencyValue).toFixed(4)}`;
        valuta.innerHTML = `1 ${currencyTo} = ${currencyValue.toFixed(4)} ${currencyFrom}`;
        linput.addEventListener('input', function () {
          let resultInput1 = this.value;
          rinput.value = `${(resultInput1 / currencyValue).toFixed(4)}`;
        });
      });
  });
});

// active
let clik = document.querySelectorAll('.menu-list__item--link');
let boxswt = document.querySelectorAll('.item__switcher--box');
let boxswt2 = document.querySelectorAll('.item__switcher--box2');
clik.forEach(elem => {
  elem.addEventListener('click', event => {
    clik.forEach(elem => {
      elem.classList.remove('active');
    });
    elem.classList.add('active');
  });
});
boxswt.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    boxswt.forEach(elem => {
      elem.classList.remove('box-active');
    });
    elem.classList.add('box-active');
  });
});
boxswt2.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    boxswt2.forEach(elem => {
      elem.classList.remove('box-active');
    });
    elem.classList.add('box-active');
  });
});
