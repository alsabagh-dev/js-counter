// Set initial count
let count = 0;

// Select buttons
const buttons = document.querySelectorAll('.btn');

// Select value
const value = document.getElementById('value');

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const classes = event.currentTarget.classList;
        if(classes.contains('decrease')){
            count -= 1;
        }else if(classes.contains('reset')){
            count = 0;
        }else if(classes.contains('increase')){
            count += 1;
        }
        
        value.textContent = count;
        if(count < 0){
            value.style.color = 'hsl(360, 67%, 44%)';
        }else if(count > 0){
            value.style.color = 'hsl(125, 71%, 66%)';
        }else {
            value.style.color = 'hsl(209, 61%, 16%)';
        }
    });
});
