// 登录页面脚本
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    validateForm();
});

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 验证用户名和密码（你可以自行修改）
    if (username === "杨梓毓" && password === "我是一个傻女孩") {
        Swal.fire({
            icon: "success",
            title: "登录成功！",
            text: "欢迎你，杨梓毓",
            showConfirmButton: false,
            timer: 1500,
        }).then(function () {
            window.location.href = "birthday.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "登录失败！",
            text: "请检查用户名和密码后再试一次 :)",
            confirmButtonText: "再试一次",
            confirmButtonColor: "#ff7675",
        });
    }
}
