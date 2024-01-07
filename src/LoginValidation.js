function validation(values) {
    let errors = {};

    if (!values.nickname.trim()) {
        errors.nickname = "Nickname should not be empty";
    } else {
        errors.nickname = "";
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty";
    } else {
        errors.password = "";
    }

    return errors;
}

export default validation;