
const typingText = [
    "IT Support Specialist",
    "Software Engineering Student",
    "Cybersecurity Enthusiast",
    "Cloud Infrastructure Developer"
];


let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero h2");


function typeEffect() {


    if (!typingElement) return;


    if (charIndex < typingText[textIndex].length) {


        typingElement.textContent += typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);


    } else {


        setTimeout(deleteEffect, 1500);


    }


}



function deleteEffect() {


    if (charIndex > 0) {


        typingElement.textContent =
            typingText[textIndex].substring(0, charIndex - 1);


        charIndex--;


        setTimeout(deleteEffect, 50);


    } else {


        textIndex++;


        if (textIndex >= typingText.length) {

            textIndex = 0;

        }


        setTimeout(typeEffect, 300);


    }


}



window.addEventListener("load", () => {


    typingElement.textContent = "";

    typeEffect();


});


const sections = document.querySelectorAll(".section");


const observer = new IntersectionObserver(

(entries) => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.classList.add("visible");


        }


    });


},

{
    threshold: .15
}

);



sections.forEach(section => {

    observer.observe(section);

});



const navLinks = document.querySelectorAll(".nav-link");


const pageSections = document.querySelectorAll("section");



window.addEventListener("scroll", () => {


    let current = "";


    pageSections.forEach(section => {


        const sectionTop = section.offsetTop - 120;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){


            link.classList.add("active");


        }


    });


});





const navItems = document.querySelectorAll(".nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");


navItems.forEach(item => {


    item.addEventListener("click", () => {


        if(navbarCollapse.classList.contains("show")){


            document
            .querySelector(".navbar-toggler")
            .click();


        }


    });


});
