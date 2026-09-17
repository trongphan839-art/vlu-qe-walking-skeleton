function login(username, password) {
    if (username === 'admin' && password === '999') {
        return true;
    }
    return false;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = login;
}
