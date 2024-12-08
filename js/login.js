// step 1: set event handeler

document.getElementById('btn-login').addEventListener('click', function (event) {

    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('log in success');
        window.location.href = '/home.html';
    }
    else {
        alert('login failed');
    }


})