
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

var jobTitleElement = document.getElementById("jobTitle");
    
        setInterval(function() {
            var currentJobTitle = jobTitleElement.innerText;
            var newJobTitle;
    
            if (currentJobTitle === "Software Developer") {
                newJobTitle = "Engineer";
            } else {
                newJobTitle = "Developer";
            }
    
            var i = 0;
            var interval = setInterval(function() {
                var prefix = "Software ";
                jobTitleElement.innerText = prefix + newJobTitle.substring(0, i);
                i++;
    
                if (i > newJobTitle.length) {
                    clearInterval(interval);
                }
            }, 50); // Adjust the timing here
        }, 3000); // Adjust the interval here

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' class to the link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    
};
