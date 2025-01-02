// ポップアップを開く
function openAlbum() {
    const popup = document.getElementById("photo-popup");
    popup.style.display = "block";
    popup.querySelector(".popup-content").classList.add("fade-in");
}

// ポップアップを閉じる
function closeAlbum() {
    const popup = document.getElementById("photo-popup");
    popup.style.display = "none";
}