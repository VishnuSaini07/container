//------------------------------------REFRENCES--------------------------

let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
let FullName = document.getElementById('fullName');
let email = document.getElementById('email');
var currentUser = null;

//------------------------------------FUNCTIONS--------------------------------

function getUsername() {
  let keepLoggedIn = localStorage.getItem("keepLoggedIn");

  if(keepLoggedIn == 'yes') {
    currentUser = JSON.parse(localStorage.getItem('user'));
  } else {
    currentUser = JSON.parse(sessionStorage.getItem('user'));
  }
}

function Signout() {
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keepLoggedIn');
  window.location = 'index.html';
}

//---------------------------------------WINDOWS LOADS--------------------

window.onload = function() {
  getUsername();
  if(currentUser == null) {
    userlink.innerText = "Create New Account";
    userlink.classList.replace('nav-link', 'btn');
    userlink.classList.add('btn-primary');
    userlink.href = "signup.html";

    signoutlink.innerText = "Login";
    signoutlink.classList.replace('nav-link', 'btn');
    signoutlink.classList.add('btn-success');
    signoutlink.href = 'login.html';
  }

  else {
    FullName.innerHTML = 'Name : ' + `<b>${currentUser.fullname}</b>`;
    userlink.innerHTML = 'Name : ' + `<b>${currentUser.username}</b>`;
    email.innerHTML = 'Email : ' + `<b>${currentUser.email}</b>`;
    userlink.classList.replace('btn', 'nav-link');
    userlink.classList.remove('btn-primary');
    userlink.href = 'userProfile.html';

    signoutlink.innerText = 'Log Out';
    signoutlink.classList.replace('btn', 'nav-link');
    signoutlink.classList.remove('btn-success');
    signoutlink.href = 'javascript:Signout()';
  }
}