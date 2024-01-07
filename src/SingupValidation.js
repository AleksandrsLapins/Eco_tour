function validation(values) {
    alert("");
    let errors = {};

    if (values.name === "") {
        errors.name = "Name should not be empty";
    } else {
        errors.name = "";
    }

    if (values.surname === "") {
        errors.surname = "Surname should not be empty";
    } else {
        errors.surname = "";
    }

    if (values.nickname === "") {
        errors.nickname = "Nickname should not be empty";
    } else {
        errors.nickname = "";
    }

    if (values.password === "") {
        errors.password = "Password should not be empty";
    } else {
        errors.password = "";
    }

    return errors;
}

export default validation;