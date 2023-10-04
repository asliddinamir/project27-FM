const tipNum = document.querySelector('.tip_num');
const totalNum = document.querySelector('.total_num');
const resetBtn = document.querySelector('.resetBtn');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all elements
        buttons.forEach(otherBtn => {
            otherBtn.classList.remove('active')
        })
        // Add the "active" class to the clicked button
        button.classList.add('active');
        console.log('hi');
    });
});


