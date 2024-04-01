function validate() {
    const login = document.querySelector("input[name=login]");
    const password = document.querySelector("input[name=password]");

    const loginRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!loginRegex.test(login.value)) {
        alert('Логин должен состоять минимум из 7 символов, включая как минимум латинскую одну букву и одну цифру.');
        return false;
    }
    if (!passwordRegex.test(password.value)) {
        alert('Пароль должен состоять минимум из 8 символов, включая как минимум латинскую одну букву и одну цифру.');
        return false;
    }

    return true;
}