const expandables = document.querySelectorAll(".tree li.expandable p");

expandables.forEach((expandable) => {
    expandable.addEventListener("click", () => {
        expandable.parentNode.classList.toggle("collapsed");
    });
})