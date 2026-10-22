const track = document.getElementById("artistTrack");
document.querySelector(".carousel-btn.next").addEventListener("click", function () {
    const card = track.querySelector(".artist-card"); const gap = 20;
    track.scrollBy({
        left: card.getBoundingClientRect().width + gap,
        behavior: "smooth"
    });
});
document.querySelector(".carousel-btn.prev").addEventListener("click", function () {
    const card = track.querySelector(".artist-card"); const gap = 20;
    track.scrollBy({
        left: -(card.getBoundingClientRect().width + gap),
        behavior: "smooth"
    });
});