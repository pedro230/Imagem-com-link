let likeCount = 0;
document.getElementById("likeButton").addEventListener("click", function() {
    likeCount++;
    document.getElementById("likeCount").textContent = likeCount;
});