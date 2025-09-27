function showPopup(title, description, price, imageUrl) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-price').textContent = price;
    document.getElementById('popup-image').src = imageUrl;

    document.getElementById('popup').style.display = 'block';
    document.body.classList.add('popup-active');
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('popup-active');
}


/*Register page */
function validateFunction(){
    let name = document.getElementById("name-data").value 
    let email = document.getElementById("email-data").value
    let password = document.getElementById("pass-data").value 
    let confirm_password = document.getElementById("confirm-pass-data").value 
    let dob = document.getElementById("dob-data").value
    let check = document.getElementById("agreement").checked 

    let name_check = false
    let email_check = false
    let pass_check = false
    let confirm_check = false
    let dob_check = false
    let check_check = false 

    if (name.length < 6){
        document.getElementById("error-name").innerHTML = "Name must be more than 6 characters"
    } else {
        document.getElementById("error-name").innerHTML = ""
        name_check = true
    }

    if (!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "Email must end with @gmail.com"
    } else {
        document.getElementById("error-email").innerHTML = ""
        email_check = true
    }

    if (password.length < 8 || !alphanumeric(password)){
        document.getElementById("error-pass").innerHTML = "Password must be at least 8 characters and alphanumeric"
    } else {
        document.getElementById("error-pass").innerHTML = ""
        pass_check = true
    }

    if(confirm_password != password){
        document.getElementById("error-confirm-pass").innerHTML = "Confirm password must be the same as previous password"
    } else {
        document.getElementById("error-confirm-pass").innerHTML = ""
        confirm_check = true
    }

    if (new Date(dob) > new Date()){
        document.getElementById("error-dob").innerHTML = "DOB must not exceed the current date"
    } else {
        document.getElementById("error-dob").innerHTML = ""
        dob_check = true
    }

    if (!check){
        alert("you must agree the eula")
    } else {
        check_check = true
        if (name_check == true && email_check == true && pass_check == true && pass_check == true && confirm_check == true && dob_check == true && check_check == true){
            alert("You have successfully created an account")
        } else {
            alert("Make sure you have already filled out all the data.")
        }
    }
}

function alphanumeric(password){
    let isAlphabet = false
    let isNumeric = false
    for (let i = 0; i<password.length; i++){
        if (isNaN(password[i]) == true){
            isAlphabet = true
        } else{
            isNumeric = true 
        }
    }

    if (isAlphabet == true && isNumeric == true){
        return true
    } else {
        return false
    }
}