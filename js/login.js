// step 1: set event handeler

document.getElementById('btn-login').addEventListener('click', function(event){

    event.preventDefault();
    console.log('click on the btn');

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);


})