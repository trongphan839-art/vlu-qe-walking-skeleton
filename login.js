// login.js
function login(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

// Xuất hàm để kiểm thử bằng Jest/Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = login;
}
