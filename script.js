const startTest = () => {
  const blurOverlay = document.querySelector(".blur-overlay");
  blurOverlay.classList.add("hidden");
};

const resetTest = () => {
  const blurOverlay = document.querySelector(".blur-overlay");
  blurOverlay.classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  const passageText = document.getElementById("textdisplay");
  passageText.textContent =
    "The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan,";
});


