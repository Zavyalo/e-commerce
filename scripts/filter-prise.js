const rangeInput = document.querySelectorAll('.filter-price__range');
const progress = document.querySelector('.filter-price__progress');
const minValue = document.querySelector('.filter-price__min span');
const maxValue = document.querySelector('.filter-price__max span');

rangeInput.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < 0) {
            if (e.target.className === 'filter-price__range min') {
                rangeInput[0].value = maxVal;
            } else {
                rangeInput[1].value = minVal;
            }
        } else {
            minValue.textContent = minVal;
            maxValue.textContent = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
    });
});
