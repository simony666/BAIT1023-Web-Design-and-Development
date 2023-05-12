function updatedt(){
    var today = new Date();
    var date = "";
    var time = "";

    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    if (month = 0){
        month = "JAN";
    }else if (month = 1){
        month = "FEB";
    }else if (month = 2){
        month = "MAR";
    }else if (month = 3){
        month = "APR";
    }else if (month = 4){
        month = "MAY";
    }else if (month = 5){
        month = "JUN";
    }else if (month = 6){
        month = "JUL";
    }else if (month = 7){
        month = "OGS";
    }else if (month = 8){
        month = "SEP";
    }else if (month = 9){
        month = "OCT";
    }else if (month = 10){
        month = "NOV";
    }else if (month = 11){
        month = "DEC";
    }

    date = ("0"+day).slice(-2) + " " + month + " " + year.toString();
    time = ("0"+hour).slice(-2) + ":" + ("0"+minute).slice(-2) + ":" + ("0"+second).slice(-2);
    //console.log(date + time)
    document.getElementsByClassName("date")[0].innerHTML = date;
    document.getElementsByClassName("time")[0].innerHTML = time;
}

//update footer datetime
updatedt();
setInterval(updatedt,1000);