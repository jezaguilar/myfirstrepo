document.querySelector(".button").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});
