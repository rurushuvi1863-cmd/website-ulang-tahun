// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    validateForm();
});

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // validate username and password (you can change these as you like)
    if (username === "杨梓毓" && password === "我是一个傻女孩") {
        Swal.fire({
            icon: "success",
            title: "Login successful!",
            text: "Welcome, 杨梓毓",
            showConfirmButton: false,
            timer: 1500,
        }).then(function () {
            window.location.href = "birthday.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Login failed!",
            text: "Please check your username and password and try again :)",
            confirmButtonText: "Try again",
            confirmButtonColor: "#ff7675",
        });
    }
}
