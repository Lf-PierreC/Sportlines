function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open'); 

    
}

document.getElementById('navbar').addEventListener("click", (event) => {

    if (event.target.tagName === "A") {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('open');
    }
});