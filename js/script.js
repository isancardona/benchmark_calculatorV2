
function getsecondform() { 
    const cmiyc_final = document.getElementById('desired_final');

    cmiyc_final.value = "";
    document.getElementById('cmiyc_form2').style.display = "block";
}


function calculate_cmiyc() {
const cmiyc_num = document.getElementById('cmiyc_distance').value;
const cmiyc_result = parseFloat(cmiyc_num) / 0.33333333;
const precise = cmiyc_result.toPrecision(3);

if (cmiyc_num >= 2.8) {
    document.getElementById('result').textContent = "You need to run at an average speed of " + precise + " mph for 20 minutes to achieve your goal and won't get caught. You can keep running for distance for two more minutes. Use the prompt below to calculate your pace needed in the final two minutes to achieve your final distance goal."; getsecondform();
} 
else if (cmiyc_num === '') {
    document.getElementById('result').textContent = "Type a numeric value in the field above!"
}
else {
    document.getElementById('result').textContent = "You will get caught with this average speed and end up with " + cmiyc_num + " miles.";
}

}

function clearParagraph() {
function clearParagraph() {
    const inputField = document.getElementById('mile_time_min', 'mile_time sec', '12min_dist');
    const paragraph = document.getElementById('mile_output', '12min_output');
  
    if (inputField.value === '') {
      paragraph.innerHTML = ''; // Clears the content of the p tag
    } else {
      
      paragraph.innerHTML = inputField.value;
    }
  }
}


function validateNumber(inputElement) {
const value = inputElement.value;
if (isNaN(value) || value.trim() === '') {
    alert("Please enter a valid number!");
    inputElement.value = '';
}
}

function validateForm() {
let CMIYC1Input = document.forms["cmiyc_form"]["cmiyc_distance"].value;
if (CMIYC1Input === "" || CMIYC1Input.trim() === "") {
    alert("Please enter a number!");
    return false;
}
return true;
}

function limitMileSecNumber() {
    let mileTimeSec = document.forms["mile_form"]["mile_time_sec"].value;
    if (mileTimeSec > 59) {
        alert("Please enter a number of seconds between 0 and 59!");
        return false;
    }
  }


function calc_cmiyc2() {
const cmiyc_num = document.getElementById('cmiyc_distance').value;
const cmiyc_num2 = document.getElementById('desired_final').value;
const cmiyc_result2 = parseFloat(cmiyc_num2 - cmiyc_num) / 0.033333333;
const precise = cmiyc_result2.toPrecision(3);
document.getElementById('result2').textContent = "You need to run at an average speed of " + precise + " mph in the final two minutes to achieve your final distance goal.";
}


function calc_mile() {
const mile_min = document.getElementById('mile_time_min').value;
const mile_sec = document.getElementById('mile_time_sec').value;
const totaltimeinhours = (mile_min / 60) + (mile_sec / 3600);
const mile_result = parseFloat(1 / (totaltimeinhours));
const precise = mile_result.toPrecision(3);
document.getElementById('mile_output').textContent = "You need to run at an average speed of " + precise + "mph to get your desired time goal."

}

function calc_12min() {
const dist_12 = document.getElementById('12min_dist').value;
const calc_12min = dist_12 / (12 / 60);
const precise = calc_12min.toPrecision(3);
document.getElementById('12min_output').textContent = "You need to run at an average speed of" + precise + "mph to achieve your desired distance."
}


function selection() {

let x = document.getElementById("workout").value;


if (x == "cmiyc") {
    document.getElementById('cmiyc_distance').value = '';
    document.getElementById('cmiyc_form').style.display = 'block';
    document.getElementById('cmiyc_form2').style.display = 'none';
    document.getElementById('mile_form').style.display = 'none';
    document.getElementById('twelve_min').style.display = 'none';
}
else if (x == "12_minute") {
    document.getElementById('twelve_min').style.display = 'block';
    document.getElementById('mile_form').style.display = 'none';
    document.getElementById('cmiyc_form').style.display = 'none';
    document.getElementById('cmiyc_form2').style.display = 'none';
}

else if (x == "mile") {
    document.getElementById('mile_form').style.display = 'block';
    document.getElementById('cmiyc_form').style.display = 'none';
    document.getElementById('twelve_min').style.display = 'none';
    document.getElementById('cmiyc_form2').style.display = 'none';
}
    
else if (x == "default_option") {
    document.getElementById('mile_form').style.display = 'none';
    document.getElementById('cmiyc_form').style.display = 'none';
    document.getElementById('twelve_min').style.display = 'none';
    document.getElementById('cmiyc_form2').style.display = 'none';
}

else {
    console.log("error");
}
}

