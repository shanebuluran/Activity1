function validateForm() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}

// Live password confirmation feedback
document.getElementById("confirm_password").addEventListener("input", function () {
    let password = document.getElementById("password").value;
    let confirmPassword = this.value;

    if (password !== confirmPassword) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
});
