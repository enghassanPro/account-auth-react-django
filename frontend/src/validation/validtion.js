import validator from 'validator';

export const email = (value) => {
    var reg = /[a-zA-Z0-9_\-.]+@[a-z]+\.[a-z]+$/
    if (typeof (value) !== String)
        value = String(value)
    return reg.exec(value)
}

export const password = (password, password1) => validator.equals(password, password1)

export const inputText = (value, alpha = true, alphaNum = false, alphaNumSpec = false) => {
    var regAlpha = /[a-zA-z]+$/
    var regAlphanum = /[a-zA-Z]+$/
    var regAlphanumSpec = /[a-zA-Z0-9_-]+$/

    if (typeof (value) !== String)
        value = String(value)

    if (alpha)
        return regAlpha.exec(value)

    else if (alphaNum)
        return regAlphanum.exec(value)

    else if (alphaNumSpec)
        return regAlphanumSpec.exec(value)

    return false
}


