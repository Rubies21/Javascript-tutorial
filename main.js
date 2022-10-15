// let and const
// Always use const unless you know you are going to reassign the value
// You have to assign a value if you use const

// Datatypes
// Strings, Numbers, Boolean, Null and Undefined

//We use the JSON format to interact with an API
//To change to JSON, we use the JSON.stringify() method
 

const myForm =  document.querySelector('#my-form');
const nameInput =  document.querySelector('#name');
const emailInput =  document.querySelector('#email');
const msg =  document.querySelector('.msg');
const userList =  document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        //Clear fields
        nameInput.value='';
        emailInput.value ='';
    }
}

