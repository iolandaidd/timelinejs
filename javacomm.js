
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a.button");

    const lastClicked = localStorage.getItem("lastClicked");
    if (lastClicked) {
        const matchingLink = document.querySelector(`a[href="${lastClicked}"]`);
        if (matchingLink) {
            matchingLink.style.backgroundColor = "#00704A";
            matchingLink.style.color = "white";
            matchingLink.style.border = "2px solid white";
        }
    }

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            links.forEach(btn => {
                btn.style.backgroundColor = "";
                btn.style.color = "";
                btn.style.border = "";
            });

            localStorage.setItem("lastClicked", link.getAttribute("href"));


            link.style.backgroundColor = "#00704A";
            link.style.color = "white";
            link.style.border = "2px solid white";


            const targetUrl = link.getAttribute("href");
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
});
