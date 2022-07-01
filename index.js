document.getElementsById("list__container").addEventListener("scroll", scrollTransition);

function scrollTransition() {
    document.getElementById("list__container").style.backgroundColor = "#B60000";
}