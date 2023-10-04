const billInput = document.querySelector('.bill_input')
const peopleInput = document.querySelector('.people_input')

const tipNum = document.querySelector('.tip_num');
const totalNum = document.querySelector('.total_num');
const resetBtn = document.querySelector('#resetBtn');
const buttons = document.querySelectorAll('.buttons button');
const customInput = document.querySelector('.custom');

let selectedTip = 0;
let billInputNum = 0;
let peopleInputNum = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove 'active' class from all elements
        buttons.forEach(otherBtn => {
            otherBtn.classList.remove('active')
        })
        // Add the "active" class to the clicked button
        button.classList.add('active');
        selectedTip = parseFloat(e.target.value);
        customInput.value = '';
        calculateTip()
    });
});

customInput.addEventListener('input', (e) => {
    let customTip = parseFloat(e.target.value);
    if (isNaN(customTip)) {
        customTip = 0;
    }
    if (customTip < 0) {
        customTip = 0;
    } else if (customTip > 100) {
        customTip = 100;
    }

    customInput.value = customTip;

    selectedTip = customTip;

    selectedTip = parseFloat(e.target.value);
    buttons.forEach(otherBtn => {
        otherBtn.classList.remove('active');
    });
    calculateTip()
})


billInput.addEventListener('change', (e) => {
    billInputNum = parseFloat(e.target.value);
    calculateTip()
})

peopleInput.addEventListener('change', (e) => {
    peopleInputNum = parseFloat(e.target.value)
    calculateTip()
})

resetBtn.addEventListener('click', () => {
    selectedTip = 0;
    billInputNum = 0;
    peopleInputNum = 0;

    resetBtn.style.background = 'hsl(183, 96%, 22%)'

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    customInput.value = '';
    billInput.value = '';
    peopleInput.value = '';
    tipNum.textContent = '$0.00';
    totalNum.textContent = '$0.00';

});


function calculateTip() {
    if (selectedTip && billInputNum && peopleInputNum) {
        const tipAmount = (selectedTip / 100) * billInputNum;
        const totalAmount = billInputNum + tipAmount;
        const tipPerPerson = tipAmount / peopleInputNum;
        const totalPerPerson = totalAmount / peopleInputNum;

        tipNum.textContent = `$${tipPerPerson.toFixed(2)}`
        totalNum.textContent = `$${totalPerPerson.toFixed(2)}`
        console.log(selectedTip / billInputNum)

        resetBtn.style.background = 'hsl(172, 67%, 45%)'
    }
    else {
        tipNum.textContent = '$0.00';
        totalNum.textContent = '$0.00';
    }
}





