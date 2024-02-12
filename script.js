let navbar = document.querySelector(".navbar").querySelector("ul").querySelectorAll('a');
console.log(navbar)




navbar.forEach(element => {

    element.addEventListener("click", function () {
        navbar.forEach(active => active.classList.remove("active"))
        this.classList.add("active");

    })
});