module.exports= login()
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const mobile = document.getElementById('registerMobile').value;
    const age = document.getElementById('Age').value;
    const ages = document.getElementById('ages')
    const span2 = document.getElementById('validn'); // Error span for password validation
    const span3 = document.getElementById('valid'); // Separate span for username validation
    
    // Username validation
    if (username.trim() === "") {
        span3.innerHTML = `Username cannot be empty.`;
        return; // Stop execution if username is invalid
    }
    if(isNaN(age)){
        setInterval(function(){
            ages.innerHTML = `Age contain number!!`;
            return; // Stop execution if username is invalid
        },2000)
        
    }
    if (username.length < 3 || username.length > 7) {
        span3.innerHTML = `Username must be between 3 and 7 characters.`;
        return; // Stop execution if username is invalid
    }
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    if (!usernamePattern.test(username)) {
        
        span3.innerHTML = `Username can only contain letters, numbers, and underscores.`;
        return; // Stop execution if username contains invalid characters
    } 
    span3.innerHTML = ''; // Clear username error if valid
    
    // Password validation
    if (password.length !== 6) {
        span2.innerHTML = `Enter the minimum 6-digit password!`;
        return; // Stop execution if password is invalid
    } else {
        span2.innerHTML = ''; // Clear error message if password is valid
    }

    // Mobile number validation
    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return; // Stop execution if mobile is invalid
    } else if (isNaN(mobile)) {
        alert('Enter only numbers in the mobile section');
        return; // Stop execution if mobile contains non-numeric values
    }

    // Check if the username already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert('Username already exists!');
        return; // Stop execution if username exists
    }

    // Save new user
    users.push({ username, password, mobile, age });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
    showLogin();
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Save logged-in user
        console.log("Logged In User saved to localStorage:", user); // Debug log
        alert('Login successfully');
        window.location.href = 'http://127.0.0.1:3000/index.html'; // Redirect to another page
    } else {
        alert('Invalid credentials!');
    }
}
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'http://localhost:3002/';
}

// Check login status on index page load
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('loginLink');

    if (loggedInUser) {
        loginLink.textContent = 'PROFILE';
        loginLink.href = 'profile.html';
    } else {
        loginLink.textContent = 'LOGIN';
        loginLink.href = 'http://localhost:3002/';
    }
};