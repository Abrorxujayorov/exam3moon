const openbtn = document.getElementById('openbtn')
const boxzak = document.querySelector('.openlest')
const dicop = document.getElementById('dic');
const control = document.querySelector('.control')
openbtn.addEventListener('click', function() {
    boxzak.classList.add('mover')
})
dicop.addEventListener('click', function() {
    boxzak.classList.remove('mover')
});
let quantity = 0;
let quantityinc = quantity++
let rubl = 0;
let rub = rubl++
const value = document.querySelector('.value')
const incBtn = document.querySelector('.btnadd')
const decBtn = document.querySelector('.btndec')
const summa = document.getElementById('summa');
incBtn.addEventListener('click', function () {
    quantity++
    value.textContent = quantity
    rubl++
    summa.textContent = (rubl + "00 руб.")
    if(value.value > 0){
        summa.innerHTML += 0;
    }
})
decBtn.addEventListener('click', function () {
    quantity--
    value.textContent = quantity
    rubl--
    summa.textContent = (rubl + "00 руб.")
});
let quan = 0;
let quant = quan++
const valu = document.querySelector('.zakas__value')
const inc = document.querySelector('.zakas__btn2')
const dec = document.querySelector('.zakas__btn')
const sum = document.querySelector('.num');
inc.addEventListener('click', function () {
    quant++
    valu.textContent = quant
    rubl++;
    sum.textContent = (rubl + "00")
})
dec.addEventListener('click', function () {
    quant--
    valu.textContent = quant
    rubl--;
    sum.textContent = (rubl + "00")
});








const about = document.querySelector('.chek');
const btn = document.querySelector('.checkout');
const content = document.querySelector('.restan');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
        btn.forEach((btns) => {
            btns.classList.remove('active')
        });
        e.target.classList.add('active')
        content.forEach((conten) => {
            conten.classList.remove('active');
        })
        const elemant = document.getElementById('id');
        elemant.classList.add('active');
        about.textContent = content
    }
})