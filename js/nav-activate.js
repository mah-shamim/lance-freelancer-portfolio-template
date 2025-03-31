const navLinks = document.querySelectorAll("li a");
const sections = document.querySelectorAll("section");

function setActiveLink() {
    const scrollPosition = window.scrollY + 0;

    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach((link) => link.classList.remove("active-link"));
            navLinks[index].classList.add("active-link");
        }
    });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("resize", setActiveLink);

setActiveLink(); // Initialize active link on page load

