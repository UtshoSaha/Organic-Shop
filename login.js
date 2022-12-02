
document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password)

    if (email === "utsa15-14237@diu.edu.bd" && password === 'utsa1234') {

        window.location.href = 'index.html';
    }
    else if (email === "nabid15-13826@diu.edu.bd" && password === 'nabid1234') {
        window.location.href = 'index.html';
    }
    else if (email === "fahim15-13734@diu.edu.bd" && password === 'fahim1234') {
        window.location.href = 'index.html';
    }
    else {

        alert('wrong email or password')
    }
})