username = document.getElementById("username");
email = document.getElementById("email");
password = document.getElementById("password");
con_password = document.getElementById("confirm-password");
submit = document.getElementById("submit");
submit.addEventListener("click",(e) => {
     e.preventDefault();
    username.value.trim().length == 0 ? alert("username is empty "): true;
    email.value.trim().length == 0  && !email.includes("@") ? alert("email is empty "): true;
    password.value.trim().length == 0 ?   alert("password is empty ") : true;
    con_password.value.trim().length == 0 || con_password.value != password.value ? alert("confirm password is empty or not match"): true;

    alert("All good!");
}) 