document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const addPinInput = document.getElementById('input-pin-number').value;
    console.log(addPinInput);

    if(addPinInput==='1234'){
        console.log('adding money to the account')

        const balance = document.getElementById('acount-balance').innerText;
        console.log(balance);

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        document.getElementById('acount-balance').innerText = newBalance;
    }
    else{
        alert('faild to login');
    }
})