function icchange(){
    var ic = document.getElementById('b-ic').value;
    if(ic.length >= 12){
        ic = ic.slice('-2')
        console.log(ic%2);
        if (ic%2 == 0){
            console.log('Female');
            document.getElementById('b-gender').innerHTML = "FEMALE"
        }else{
            console.log('Male');
            document.getElementById('b-gender').innerHTML = "MALE"
        }
    }
}

function namechange(){
    var name = document.getElementById('b-name');
    console.log(name.value)
    name.value = name.value.toUpperCase();
    console.log(name.value);
}