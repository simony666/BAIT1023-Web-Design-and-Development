

function back(){
    console.log('back');
    document.getElementsByClassName('payment')[0].classList.add('hidden');
    document.getElementsByClassName('form-container')[0].classList.remove('hidden');
}

function check(){
    console.log('submit');
    document.getElementsByClassName('payment')[0].classList.remove('hidden');
    document.getElementsByClassName('form-container')[0].classList.add('hidden');
    console.log(document.getElementsByClassName('payment')[0].classList)
    console.log(document.getElementsByClassName('form-container')[0].classList)
}

function cash(){
    console.log('submit');
    alert('Customer Pay by Cash');
}

function credit(){
    console.log('submit');
    alert('Customer Pay by Credit');
}