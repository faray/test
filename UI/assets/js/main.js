
const modal = document.getElementById('myModal');
const fab = document.getElementById('fab');
const closeBtn = document.getElementsByClassName('close')[0]
const addRideModal = document.getElementById('add-ride-modal');
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('loginBtn');
const signUpModal = document.getElementById('signup-modal');
const signUpBtn = document.getElementById('signUpBtn');

fab.onclick = () => {
	addRideModal.style.display = "block"
	modal.appendChild(addRideModal)
	modal.style.display = "block";
}

loginBtn.onclick = () => {
	loginModal.style.display = "block"
	modal.appendChild(loginModal)
	modal.style.display = "block";
}

signUpBtn.onclick = () => {
	signUpModal.style.display = "block"
	modal.appendChild(signUpModal)
	modal.style.display = "block";
}

closeBtn.onclick = () => {
	modal.innerHTML = ""
	modal.style.display = "none";
	addRideModal.style.display = "none"
	loginModal.style.display = "none"
	signUpModal.style.display = "none"
}

window.onclick = (evt) => {
	if (evt.target === modal ) {
		 modal.innerHTML = ""
		 modal.style.display = "none";
		 addRideModal.style.display = "none"
		 loginModal.style.display = "none"
		 signUpModal.style.display = "none"
	}
}


const minimiseBtn = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

