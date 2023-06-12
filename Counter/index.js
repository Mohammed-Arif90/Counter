const increaseBtn = document.getElementById('Increase');
const decreaseBtn = document.getElementById('Decrease');
const resetBtn = document.getElementById('Reset');
const Value = document.getElementById('value');
let count = 0;

increaseBtn.addEventListener('click', function() {
  count ++;
  Value.textContent = count;
  if(count === 0){
    Value.style.color = 'black';  
  }else if(count > 0){
    Value.style.color = 'green'; 
  }else{
    Value.style.color = 'red'; 
  }
})

decreaseBtn.addEventListener('click', function() {
  count --;
  Value.textContent = count;
  if(count === 0){
    Value.style.color = 'black';  
  }else if(count > 0){
    Value.style.color = 'green'; 
  }else{
    Value.style.color = 'red'; 
  }
})

resetBtn.addEventListener('click', function() {
  count = 0;
  Value.textContent = count;
  if(count === 0){
    Value.style.color = 'black';  
  }else if(count > 0){
    Value.style.color = 'green'; 
  }else{
    Value.style.color = 'red'; 
  }
})