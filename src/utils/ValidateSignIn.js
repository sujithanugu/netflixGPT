export const checkUserValidation = (email, password, u_name) => {
    const checkName = !u_name || /^[a-zA-Z\s.'-]+$/.test(u_name);
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!checkName) return "Name is not valid.";
    if(!checkEmail) return "Email Id is not valid.";
    if(!checkPassword) return "Password Id is not valid.";

    return null;
};

