function addition() {

    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let sum = firstnumber + secondnumber;

    if (sum) {
        document.getElementById("answer").innerHTML = sum;
    } else {
        alert("Enter Both Numbers to Calculate")
    }





}

function subtraction() {

    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let sum = firstnumber - secondnumber;

    if (sum) {
        document.getElementById("answer").innerHTML = sum;
    } else {
        alert("Enter Both Numbers to Calculate")
    }





}

function multiplication() {

    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let sum = firstnumber * secondnumber;

    if (sum) {
        document.getElementById("answer").innerHTML = sum;
    } else {
        alert("Enter Both Numbers to Calculate")
    }





}

function division() {

    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let sum = firstnumber / secondnumber;

    if (sum) {
        document.getElementById("answer").innerHTML = sum;
    } else {
        alert("Enter Both Numbers to Calculate")
    }





}