const tabs = document.querySelectorAll(".tabs span");
const cards = document.querySelectorAll(".card");
const noItems = document.getElementById("no-items");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.getAttribute("data-filter");
        let visibleCount = 0;

        cards.forEach(card => {
            const category = card.getAttribute("data-category");

            if (filter === "all" || filter === category) {
                card.classList.remove("hide");
                visibleCount++;
            } else {
                card.classList.add("hide");
            }
        });

        // show message if no items
        noItems.style.display = visibleCount === 0 ? "block" : "none";
        

    });
});

